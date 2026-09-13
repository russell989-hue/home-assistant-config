#!/bin/sh
# archive_recordings.sh   (POSIX sh — HA Core /bin/sh; invoke via: sh /config/scripts/archive_recordings.sh)
#
# Nightly COPY of aging camera EVENT recordings to the Office-PC archive,
# BEFORE Home Assistant's local retention cleanup (03:00, -mtime +15) deletes them.
#
#   Source : /media/recordings/<camera>/*.mp4            (event clips only; continuous/ buffer excluded)
#   Dest   : /media/ha_recordings_archive/<camera>/...   (CIFS mount ->
#            \\OFFICE\HA-Recordings -> D:\Home Assistant Recordings, NTFS)
#
# Safety properties:
#   * COPY, never move. HA's cleanup_recordings owns local deletion. This job runs 02:00.
#   * Window: files 13+ days old (-mtime +12); local delete at ~16 days (-mtime +15).
#     => ~3 nightly attempts per file before deletion (transient-outage buffer).
#   * SENTINEL GUARD: only writes when the archive's .ha_archive_target marker is present.
#     If the mount is offline or a bare local dir has taken its place, the marker is
#     absent and we refuse to write -- so a failed mount can never silently fill LOCAL disk.
#   * Idempotent: files already archived at matching size are skipped (cheap, no re-read).
#   * Partial-safe: copy to *.part, verify size (+ cmp when available), then atomic rename.
#   * Sweeps stale *.part left by any prior interrupted run.
#   * Archive unavailable => log locally, exit 0 (no nightly spam; Office PC may sleep).
#   * Real copy failures => exit 1 (the paired automation raises a persistent notification).

set -u

SRC="/media/recordings"
DST="/media/ha_recordings_archive"
SENTINEL="$DST/.ha_archive_target"
LOCAL_LOG="/config/archive_recordings.log"
ARCHIVE_LOG="$DST/_archive.log"
AGE_DAYS="+12"                 # find -mtime: 13+ days old
EXCLUDE_DIR="continuous"            # continuous-buffer folder, not event clips

ts() { date '+%Y-%m-%d %H:%M:%S'; }
log_local() { echo "$(ts) $1"; echo "$(ts) $1" >> "$LOCAL_LOG" 2>/dev/null; }  # summary/guards/failures
log_arch()  { echo "$(ts) $1" >> "$ARCHIVE_LOG" 2>/dev/null; }                 # per-file detail (lives with data)

# --- Guard 1: destination dir must exist (mount present) ---
if [ ! -d "$DST" ]; then
  log_local "archive dir absent (mount offline?) - skipping"
  exit 0
fi

# --- Guard 2: sentinel must be present. Absence => mount is NOT the real Office-PC
#     share (unmounted / replaced by a local dir / wrong target). Never copy then. ---
if [ ! -f "$SENTINEL" ]; then
  log_local "archive sentinel missing ($SENTINEL) - mount not ready, refusing to write - skipping"
  exit 0
fi

# --- Sweep stale partial files from any prior interrupted run ---
find "$DST" -type f -name '*.part' -delete 2>/dev/null

copied=0; skipped=0; failed=0
list=$(mktemp 2>/dev/null || echo "/tmp/arch_list.$$")

# --- Collect candidate event clips: top-level camera dirs, excluding the ring buffer ---
for cam_dir in "$SRC"/*/; do
  [ -d "$cam_dir" ] || continue
  cam=$(basename "$cam_dir")
  [ "$cam" = "$EXCLUDE_DIR" ] && continue
  find "$cam_dir" -maxdepth 1 -type f -name '*.mp4' -mtime "$AGE_DAYS" -print
done > "$list" 2>/dev/null

while IFS= read -r f; do
  [ -n "$f" ] || continue
  rel=${f#"$SRC"/}                         # e.g. doorbell/2026-06-29_10-11-12.mp4
  dest="$DST/$rel"

  src_size=$(wc -c < "$f" 2>/dev/null | tr -d ' ')
  if [ -z "$src_size" ]; then failed=$((failed+1)); log_local "FAIL stat $rel"; continue; fi

  # Idempotency: already archived at same size -> skip
  if [ -f "$dest" ]; then
    dst_size=$(wc -c < "$dest" 2>/dev/null | tr -d ' ')
    if [ "$dst_size" = "$src_size" ]; then skipped=$((skipped+1)); continue; fi
  fi

  mkdir -p "$(dirname "$dest")" 2>/dev/null
  tmp="$dest.part"
  if cp "$f" "$tmp" 2>/dev/null; then
    cp_size=$(wc -c < "$tmp" 2>/dev/null | tr -d ' ')
    ok=0
    if [ "$cp_size" = "$src_size" ]; then
      if command -v cmp >/dev/null 2>&1; then
        cmp -s "$f" "$tmp" && ok=1        # byte-exact when cmp is available
      else
        ok=1                               # else fall back to size match
      fi
    fi
    if [ "$ok" = "1" ] && mv -f "$tmp" "$dest" 2>/dev/null; then
      copied=$((copied+1)); log_arch "COPIED $rel ($src_size bytes)"
    else
      failed=$((failed+1)); rm -f "$tmp" 2>/dev/null; log_local "FAIL verify/mv $rel"
    fi
  else
    failed=$((failed+1)); rm -f "$tmp" 2>/dev/null; log_local "FAIL cp $rel"
  fi
done < "$list"

rm -f "$list" 2>/dev/null

summary="archive run: copied=$copied skipped=$skipped failed=$failed (age $AGE_DAYS)"
log_local "$summary"
log_arch "$summary"

[ "$failed" -gt 0 ] && exit 1
exit 0
