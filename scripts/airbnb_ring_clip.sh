#!/bin/sh
# Extract the last ~45s of side_door RING BUFFER footage into a single clip for
# AI analysis. Created 2026-07-20 after the guest-departure miss: motion events
# arrive 15-25s late (Nest cloud), so live-stream grabs and short-lookback event
# clips miss fast walkouts - only the continuous ring buffer reliably has them.
# Handles the segment-rotation edge: if the newest segment is <45s long, prepends
# the tail of the previous segment.
d=/media/recordings/continuous/side_door
out=/media/airbnb_check.mp4
newest=$(ls -t "$d"/*.mp4 2>/dev/null | head -1)
prev=$(ls -t "$d"/*.mp4 2>/dev/null | head -2 | tail -1)
[ -n "$newest" ] || exit 1
rm -f /tmp/ab1.mp4 /tmp/ab2.mp4 /tmp/ablist.txt "$out"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$newest" 2>/dev/null | cut -d. -f1)
if [ "${dur:-0}" -ge 45 ] || [ "$prev" = "$newest" ]; then
  ffmpeg -y -sseof -45 -i "$newest" -c copy "$out" -loglevel error
else
  ffmpeg -y -sseof -30 -i "$prev" -c copy /tmp/ab1.mp4 -loglevel error
  ffmpeg -y -i "$newest" -c copy /tmp/ab2.mp4 -loglevel error
  printf "file '/tmp/ab1.mp4'\nfile '/tmp/ab2.mp4'\n" > /tmp/ablist.txt
  ffmpeg -y -f concat -safe 0 -i /tmp/ablist.txt -c copy "$out" -loglevel error
  rm -f /tmp/ab1.mp4 /tmp/ab2.mp4 /tmp/ablist.txt
fi
[ -s "$out" ]
