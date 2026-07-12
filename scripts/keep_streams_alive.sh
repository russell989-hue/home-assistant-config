#!/bin/sh
# Keep go2rtc camera streams warm so snapshots/recordings start instantly.
# Slimmed 2026-07-11: only the two automation-critical streams (doorbell, side_door).
# backyard/garage now start on demand - go2rtc 1.9.14 handles cold starts properly.
# Self-cleaning: kills loops from any previous run before starting new ones.
pkill -f "KSA_LOOP" 2>/dev/null
pkill -f "rtsp://localhost:8554/.* -f null" 2>/dev/null
sleep 1
for stream in doorbell side_door; do
  nohup sh -c "true KSA_LOOP $stream; while true; do ffmpeg -i rtsp://localhost:8554/$stream -vcodec copy -acodec copy -f null - -loglevel quiet; sleep 5; done" >/dev/null 2>&1 &
done
