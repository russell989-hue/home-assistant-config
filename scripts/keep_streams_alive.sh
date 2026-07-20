#!/bin/sh
# Keep go2rtc camera streams warm + 24h local ring buffer for door cams.
#   doorbell/side_door/garage: ~10-min ring segments -> /media/recordings/ring/<cam>/*.mp4
#   backyard:                  null-sink keep-alive only
#
# 2026-07-19 rewrite - fixes the audio-only segments:
#   go2rtc only sends video to an RTSP consumer starting from the first keyframe
#   AFTER the consumer connects, and Nest keyframes are sparse. An ffmpeg that
#   connected "between" keyframes probed out audio-only and wrote a video-less
#   file for the whole 10-min segment (that was every recent ring file).
#   * PLI poke: ~2s after ffmpeg connects we hit go2rtc's frame.jpeg for the
#     same stream. That short-lived consumer makes go2rtc send the camera a
#     keyframe request (PLI) which lands inside ffmpeg's probe window.
#   * Verify-then-commit: ~1 min in, the file header must contain an avc1
#     (H.264) track. No video -> kill, delete, reconnect (which re-triggers a
#     PLI). A bad attempt now costs ~1 deleted minute, not a 10-min bad file.
#   * Growth watchdog: once a file is verified good, it must keep growing;
#     >60s without growth cycles the recorder (old design bounded stalls only
#     to 10 min). Hard wall-clock cap per segment stays ~10 min (615s).
#   * Output is fragmented MP4, H.264 copy + AAC audio (Opus->AAC transcode is
#     negligible CPU): crash-safe like MKV but plays in every browser incl.
#     iPad Safari (MKV/Opus did not). On clean rotation each file is remuxed
#     in place to a normal faststart MP4 (exact duration, instant seek); only
#     a file cut short by a hard crash stays fragmented - still playable.
# RTSP over TCP: go2rtc's WebRTC-sourced Nest streams reject UDP (461).
# -use_wallclock_as_timestamps 1 fixes WebRTC timestamp disease (inflated durations).
# flock (fd closed in children) + TERM-then-KILL keep exactly one set of loops.

RTSP_BASE="rtsp://localhost:8554"
API_BASE="http://localhost:1984"
RING_DIR="/media/recordings/ring"
SEG_SECS=615          # hard cap per segment attempt
VERIFY_DEADLINE=55    # no avc1 by this many seconds -> bad attempt
STALL_SECS=60         # verified file must grow at least once per this window

# ---------------- internal worker modes ----------------

if [ "$1" = "__record" ]; then   # $2=stream  ($3=KSA_LOOP marker for pkill)
  stream=$2
  mkdir -p "$RING_DIR/$stream"
  # Doorbell-class cams: Nest WebRTC session extension fails consistently
  # (ksa_watchdog.log 2026-07-19: video freezes at ~300s every segment, garage
  # unaffected). Rotate BEFORE the 5-min session death -> clean cut, ~2s gap,
  # instead of frozen tail + 60s watchdog detection. Watchdog stays as backstop.
  seg_cap=$SEG_SECS
  case "$stream" in doorbell|side_door) seg_cap=280 ;; esac
  while true; do
    f="$RING_DIR/$stream/$(date +%Y.%m.%d-%H.%M).mp4"
    if [ "$stream" = "doorbell" ]; then
      # TRIAL 2026-07-19: burned-in timestamp (bottom right) = re-encode, costs CPU.
      # Roll out to other cams only after checking core CPU stays sane.
      ffmpeg -use_wallclock_as_timestamps 1 -rtsp_transport tcp -timeout 60000000 \
        -analyzeduration 20M -probesize 20M \
        -i "$RTSP_BASE/$stream" \
        -map '0:v:0?' -map '0:a:0?' \
        -vf "drawtext=fontfile=/config/scripts/timestamp.ttf:text='%{localtime\:%Y-%m-%d %H.%M.%S}':x=w-tw-12:y=h-th-12:fontsize=28:fontcolor=white:box=1:boxcolor=black@0.4:boxborderw=6" \
        -c:v libx264 -preset veryfast -crf 23 -c:a aac -b:a 96k \
        -movflags +empty_moov+default_base_moof -frag_duration 4000000 \
        -f mp4 "$f" -loglevel quiet &
    else
      ffmpeg -use_wallclock_as_timestamps 1 -rtsp_transport tcp -timeout 60000000 \
        -analyzeduration 20M -probesize 20M \
        -i "$RTSP_BASE/$stream" \
        -map '0:v:0?' -map '0:a:0?' -c:v copy -c:a aac -b:a 96k \
        -movflags +empty_moov+default_base_moof -frag_duration 4000000 \
        -f mp4 "$f" -loglevel quiet &
    fi
    pid=$!
    # PLI poke: spawn a throwaway go2rtc consumer so the camera emits a keyframe
    ( sleep 2
      if command -v curl >/dev/null 2>&1; then
        curl -s -m 10 -o /dev/null "$API_BASE/api/frame.jpeg?src=$stream"
      else
        wget -q -T 10 -O /dev/null "$API_BASE/api/frame.jpeg?src=$stream"
      fi ) >/dev/null 2>&1 &
    t=0; ok=""; bad=""; last=0; stall=0; vp_last=-1; vstall=0
    while kill -0 "$pid" 2>/dev/null && [ "$t" -lt "$seg_cap" ]; do
      sleep 5; t=$((t+5))
      sz=$(wc -c < "$f" 2>/dev/null); [ -n "$sz" ] || sz=0
      if [ -z "$ok" ]; then
        if [ "$sz" -gt 8192 ] && head -c 65536 "$f" | grep -q avc1; then
          ok=1; last=$sz; stall=0
        elif [ "$t" -ge "$VERIFY_DEADLINE" ]; then
          bad=1; break
        fi
      else
        if [ "$sz" -gt "$last" ]; then
          last=$sz; stall=0
        else
          stall=$((stall+5))
          [ "$stall" -ge "$STALL_SECS" ] && break
        fi
        # VIDEO stall watchdog (2026-07-19): a stalled Nest stream keeps sending
        # audio, so file growth alone never trips. Count video packets; if the
        # count freezes for >=60s, cycle the recorder (reconnect re-fires a PLI).
        if [ $((t % 30)) -eq 0 ]; then
          vp=$(ffprobe -v error -select_streams v:0 -count_packets \
               -show_entries stream=nb_read_packets -of csv=p=0 "$f" 2>/dev/null | head -1)
          # ignore probe failures entirely - only a REPEATED IDENTICAL numeric
          # count means frozen video; a parse hiccup must not count as a stall
          case "$vp" in ''|*[!0-9]*) vp="" ;; esac
          if [ -n "$vp" ]; then
            if [ "$vp" = "$vp_last" ]; then
              vstall=$((vstall+30))
              if [ "$vstall" -ge 60 ]; then
                echo "$(date '+%F %T') $stream video-stall cycle at t=${t}s (video packets frozen at $vp)" >> /config/ksa_watchdog.log
                break
              fi
            else
              vstall=0; vp_last=$vp
            fi
          fi
        fi
      fi
    done
    kill "$pid" 2>/dev/null; sleep 1; kill -9 "$pid" 2>/dev/null
    wait "$pid" 2>/dev/null
    if [ -n "$bad" ] || [ ! -s "$f" ]; then
      rm -f "$f"
      sleep 2          # fast retry: each reconnect re-triggers a PLI
      continue
    fi
    # clean rotation: remux fMP4 -> plain faststart MP4 (duration + fast seek)
    tmp="$f.rt"
    if ffmpeg -y -i "$f" -c copy -movflags +faststart -f mp4 "$tmp" -loglevel quiet \
       && [ -s "$tmp" ]; then
      mv "$tmp" "$f"
    else
      rm -f "$tmp"
    fi
    sleep 2
  done
fi

if [ "$1" = "__warm" ]; then     # $2=stream  ($3=KSA_LOOP marker)
  stream=$2
  while true; do
    timeout -k 10 615 ffmpeg -rtsp_transport tcp -timeout 60000000 \
      -i "$RTSP_BASE/$stream" -c copy -f null - -loglevel quiet
    sleep 5
  done
fi

if [ "$1" = "__cleanup" ]; then  # ($2=KSA_LOOP marker)
  while true; do
    find "$RING_DIR" -type f \( -name "*.mp4" -o -name "*.mkv" -o -name "*.rt" \) \
      -mmin +1440 -delete 2>/dev/null
    sleep 3600
  done
fi

# ---------------- setup (default mode) ----------------

if command -v flock >/dev/null 2>&1; then
  exec 9>/tmp/ksa_setup.lock
  flock -n 9 || exit 0
fi

pkill -f "KSA_LOOP" 2>/dev/null
for s in doorbell side_door backyard garage; do
  pkill -f "rtsp://localhost:8554/$s" 2>/dev/null
done
sleep 2
pkill -9 -f "KSA_LOOP" 2>/dev/null
for s in doorbell side_door backyard garage; do
  pkill -9 -f "rtsp://localhost:8554/$s" 2>/dev/null
done
sleep 1

for stream in doorbell side_door garage; do
  nohup sh "$0" __record "$stream" KSA_LOOP 9>&- >/dev/null 2>&1 &
done
for stream in backyard; do
  nohup sh "$0" __warm "$stream" KSA_LOOP 9>&- >/dev/null 2>&1 &
done
nohup sh "$0" __cleanup KSA_LOOP 9>&- >/dev/null 2>&1 &
