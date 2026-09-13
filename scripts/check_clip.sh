#!/bin/sh
# Generic clip extractor for LLM Vision video_analyzer: check_clip.sh <camera> [seconds] [max_stale]
# Writes a clip containing the recent activity for <camera> to /media/<camera>_check.mp4.
#
# Two sources, in order:
#   1. Continuous buffer (/media/recordings/continuous/<cam>) - doorbell, side_door,
#      garage. Takes the last N seconds (default 60). SDM motion events arrive 15-25s
#      late, so live-stream analysis misses the event; only the continuous buffer
#      reliably contains it. Handles the segment-rotation edge by prepending the tail
#      of the previous segment when the newest is too short.
#   2. Event clips (/media/recordings/<cam>) - backyard, which is a battery cam with
#      no continuous buffer. Uses the newest event clip written by the "Camera Event
#      Recording" automation.
#
# FRESHNESS IS ENFORCED ON BOTH PATHS. The continuous buffer is roughly 12% blind
# (measured 2026-07-25: 71 gaps / 2.84h in 24h on side_door) because Nest WebRTC
# stalls and the watchdog has to cycle the stream. Without a freshness check, "the
# last N seconds of the newest segment" silently returns footage from minutes ago
# during a gap, and the automation reports it as current activity - a confirmed
# 08:42 guest arrival landed inside a 376s gap exactly this way. If the newest data
# is staler than MAX_STALE we delete the output and exit non-zero, so the calling
# automation's video_analyzer step fails and the run aborts rather than analyzing
# the wrong moment. Refusals are logged to /config/check_clip.log.
#
# MAX_STALE default 150s. Chosen from measurement, not guesswork (2026-07-25):
#   * ffmpeg flushes the growing segment in bursts, so mtime age SAWTOOTHS during
#     perfectly healthy recording - observed peaks of 66s (side_door) and 76s (garage)
#     with no stall at all. A tighter threshold (45s was tried) false-rejects constantly.
#   * Real stall gaps measured over 24h ranged 20s-445s; the damaging ones (>150s) are
#     the ones that make the clip miss the event entirely.
#   150s therefore sits above healthy jitter and below the harmful gaps. It deliberately
#   lets short (<150s) gaps through rather than risk breaking working captures.
# Do NOT switch this check to `ffprobe duration` on the live segment: ffprobe reports a
# stale duration for a file still being written (it appeared to show 30-250s of "lag"
# that does not exist). Verified against the doorbell's burned-in timestamp, buffer
# content is real-time: content_time == filename_time + offset + ~18s stream startup.
#
# 4th arg (optional) = output path. Default /media/<cam>_check.mp4 is the scratch clip
# the LLM Vision automations analyse. "Camera Event Recording" passes an explicit path
# under /media/recordings/<cam>/ so the 15-day saved clips are cut from the same
# continuous buffer instead of camera.record, which is unreliable here (2026-07-26:
# side_door produced 1 saved clip from 10 motion events while the buffer-sourced AI
# handled 8 of the same 10) and whose lookback is a no-op on these go2rtc cameras.
cam="$1"
want="${2:-60}"
MAX_STALE="${3:-150}"
out="${4:-/media/${cam}_check.mp4}"
EVENT_MAX_AGE=300
[ -n "$cam" ] || exit 1
d=/media/recordings/continuous/$cam
ev=/media/recordings/$cam
log=/config/check_clip.log
# PID-scoped temps: the AI path and the event-recording path can now both be
# extracting the same camera at overlapping times.
t1=/tmp/rc_${cam}_$$_1.mp4
t2=/tmp/rc_${cam}_$$_2.mp4
tl=/tmp/rc_${cam}_$$_list.txt

note() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $cam $1" >> "$log" 2>/dev/null
  # keep the log bounded
  tail -n 500 "$log" > "$log.tmp" 2>/dev/null && mv "$log.tmp" "$log" 2>/dev/null
}

# age in seconds of a file's last write, echoed on stdout
age_of() {
  mt=$(date -r "$1" +%s 2>/dev/null) || return 1
  echo $(( $(date +%s) - mt ))
}

extract_continuous() {
  newest=$(ls -t "$d"/*.mp4 2>/dev/null | head -1)
  prev=$(ls -t "$d"/*.mp4 2>/dev/null | head -2 | tail -1)
  [ -n "$newest" ] || { note "no segments in $d"; return 1; }
  age=$(age_of "$newest") || { note "cannot stat $newest"; return 1; }
  if [ "$age" -gt "$MAX_STALE" ]; then
    note "REFUSED stale buffer: newest segment $(basename "$newest") last written ${age}s ago (max ${MAX_STALE}s) - stream gap, not analyzing old footage"
    return 1
  fi
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$newest" 2>/dev/null | cut -d. -f1)
  if [ "${dur:-0}" -ge "$want" ] || [ "$prev" = "$newest" ]; then
    ffmpeg -y -sseof -"$want" -i "$newest" -c copy "$out" -loglevel error
  else
    need=$((want - ${dur:-0} + 10))
    ffmpeg -y -sseof -"$need" -i "$prev" -c copy "$t1" -loglevel error
    ffmpeg -y -i "$newest" -c copy "$t2" -loglevel error
    printf "file '%s'\nfile '%s'\n" "$t1" "$t2" > "$tl"
    ffmpeg -y -f concat -safe 0 -i "$tl" -c copy "$out" -loglevel error
    rm -f "$t1" "$t2" "$tl"
  fi
}

extract_event() {
  # Refuse when the caller is writing INTO the event-clip folder (the "Camera Event
  # Recording" path). Otherwise, if the continuous buffer were ever empty we would
  # copy a previously saved clip forward as though it were fresh footage.
  case "$out" in
    "$ev"/*) note "event fallback disabled: output $out lives in the event-clip folder"; return 1 ;;
  esac
  newest=$(ls -t "$ev"/*.mp4 2>/dev/null | head -1)
  [ -n "$newest" ] || { note "no event clips in $ev"; return 1; }
  age=$(age_of "$newest") || { note "cannot stat $newest"; return 1; }
  if [ "$age" -gt "$EVENT_MAX_AGE" ]; then
    note "REFUSED stale event clip: $(basename "$newest") is ${age}s old (max ${EVENT_MAX_AGE}s) - recording likely failed"
    return 1
  fi
  cp "$newest" "$out"
}

extract() {
  # always clear the previous run's output FIRST, so a failure can never leave a
  # stale clip behind for video_analyzer to pick up
  rm -f "$out" "$t1" "$t2" "$tl"
  if ls "$d"/*.mp4 >/dev/null 2>&1; then
    extract_continuous
  else
    extract_event
  fi
}

valid() {
  [ -s "$out" ] || return 1
  ffprobe -v error -show_entries format=duration -of csv=p=0 "$out" 2>/dev/null | grep -q '^[0-9]'
}

extract
if ! valid; then
  sleep 3
  extract
fi
if valid; then
  exit 0
fi
rm -f "$out"
note "FAILED to produce a valid clip"
exit 1
