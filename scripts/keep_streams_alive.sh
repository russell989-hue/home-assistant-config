#!/bin/sh
for stream in doorbell garage side_door; do
  nohup sh -c "while true; do ffmpeg -i rtsp://localhost:8554/$stream -vcodec copy -acodec copy -f null - -loglevel quiet; sleep 2; done" &
done
