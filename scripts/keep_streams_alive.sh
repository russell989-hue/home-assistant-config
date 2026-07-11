#!/bin/sh
# Keep go2rtc camera streams warm so snapshots/recordings start instantly.
# Self-cleaning: kills loops from any previous run before starting new ones.
pkill -f "KSA_LOOP" 2>/dev/null
pkill -f "rtsp://localhost:8554/.* -f null" 2>/dev/null
sleep 1
for stream in doorbell garage side_door backyard; do
  nohup sh -c "true KSA_LOOP $stream; while true; do ffmpeg -i rtsp://localhost:8554/$stream -vcodec copy -acodec copy -f null - -loglevel quiet; sleep 5; done" >/dev/null 2>&1 &
done
