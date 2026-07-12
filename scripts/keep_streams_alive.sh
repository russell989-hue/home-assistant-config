#!/bin/sh
# Keep go2rtc camera streams warm so snapshots/recordings start instantly.
# 2026-07-11 night: all 4 nest cams kept warm - go2rtc 1.9.14 handles session refresh; warm producers prevent live-view flapping.
# Self-cleaning: kills loops from any previous run before starting new ones.
pkill -f "KSA_LOOP" 2>/dev/null
pkill -f "rtsp://localhost:8554/.* -f null" 2>/dev/null
sleep 1
for stream in doorbell side_door backyard garage; do
  nohup sh -c "true KSA_LOOP $stream; while true; do ffmpeg -i rtsp://localhost:8554/$stream -vcodec copy -acodec copy -f null - -loglevel quiet; sleep 5; done" >/dev/null 2>&1 &
done
