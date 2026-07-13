#!/bin/sh
# One-time: remux every event clip in place to fix the 0-duration WebRTC-timestamp
# corruption. -c copy leaves the video untouched; only the container timestamps are
# rewritten. mtime is preserved so 15-day retention + archive timing don't shift.
LOG=/media/recordings/_batchfix.log
echo "start $(date)" > "$LOG"
fixed=0; fail=0
for cam in doorbell side_door garage backyard alley; do
  for f in /media/recordings/$cam/*.mp4; do
    [ -f "$f" ] || continue
    case "$f" in *_recovered*|*.fixmux) continue;; esac
    tmp="$f.fixmux"
    if ffmpeg -y -fflags +genpts -i "$f" -c copy -f mp4 "$tmp" -loglevel error 2>>"$LOG"; then
      touch -r "$f" "$tmp" && mv "$tmp" "$f" && fixed=$((fixed+1))
    else
      rm -f "$tmp"; fail=$((fail+1)); echo "FAIL $f" >> "$LOG"
    fi
  done
done
echo "DONE $(date): fixed=$fixed fail=$fail" >> "$LOG"
