#!/bin/sh
# Keep go2rtc camera streams warm + 24h local ring buffer for door cams.
#   doorbell/side_door: ~10-min ring segments -> /media/recordings/ring/<cam>/*.mkv
#   backyard/garage:    null-sink keep-alive only
#
# RTSP over TCP: go2rtc's WebRTC-sourced Nest streams reject UDP (461).
# WALL-CLOCK WATCHDOG: `timeout 615 ffmpeg ...` hard-cycles each recorder every
#   ~10 min no matter what. This is deliberate, because Nest streams (a) stall
#   mid-read in ways ffmpeg's -timeout doesn't catch, and (b) have sparse keyframes
#   so the segment muxer won't rotate. Force-restarting guarantees a fresh file and
#   a fresh Nest session every cycle, and bounds any stall gap to ~10 min instead of
#   hanging forever. MKV output stays playable even if the process is killed mid-write.
# -timeout 15s catches connect-time stalls. flock (fd closed in children) prevents
#   concurrent setup; TERM-then-KILL clears any prior wrappers + ffmpeg (no duplicates).

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

for stream in doorbell side_door; do
  mkdir -p /media/recordings/ring/$stream
  nohup sh -c "true KSA_LOOP $stream; while true; do f=/media/recordings/ring/$stream/\$(date +%Y.%m.%d-%I.%M%p).mkv; timeout -k 10 615 ffmpeg -use_wallclock_as_timestamps 1 -rtsp_transport tcp -timeout 60000000 -i rtsp://localhost:8554/$stream -c copy \"\$f\" -loglevel quiet; [ -s \"\$f\" ] || rm -f \"\$f\"; sleep 3; done" 9>&- >/dev/null 2>&1 &
done

for stream in backyard garage; do
  nohup sh -c "true KSA_LOOP $stream; while true; do timeout -k 10 615 ffmpeg -rtsp_transport tcp -timeout 60000000 -i rtsp://localhost:8554/$stream -c copy -f null - -loglevel quiet; sleep 3; done" 9>&- >/dev/null 2>&1 &
done

nohup sh -c 'true KSA_LOOP ring_cleanup; while true; do find /media/recordings/ring -type f \( -name "*.mp4" -o -name "*.mkv" \) -mmin +1440 -delete 2>/dev/null; sleep 3600; done' 9>&- >/dev/null 2>&1 &
