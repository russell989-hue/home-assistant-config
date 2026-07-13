#!/bin/sh
# Going-forward: remux one just-recorded event clip to fix its 0-duration
# (WebRTC timestamps). Waits for camera.record to finalize the file first.
# Preserves mtime. Invoked by the Camera Event Recording automation with the path as $1.
f="$1"
[ -n "$f" ] || exit 0
# wait for the file to exist and stop growing (recording done), up to ~44s
i=0
while [ $i -lt 22 ]; do
  if [ -f "$f" ]; then
    s1=$(wc -c < "$f" 2>/dev/null)
    sleep 2
    s2=$(wc -c < "$f" 2>/dev/null)
    [ -n "$s1" ] && [ "$s1" = "$s2" ] && [ "$s1" -gt 1000 ] && break
  else
    sleep 2
  fi
  i=$((i+1))
done
[ -f "$f" ] || exit 0
tmp="$f.fixmux"
if ffmpeg -y -fflags +genpts -i "$f" -c copy -f mp4 "$tmp" -loglevel error; then
  touch -r "$f" "$tmp" && mv "$tmp" "$f"
else
  rm -f "$tmp"
fi
