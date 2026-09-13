#!/bin/sh
# trim_clip.sh <file> [pad] [min_len] [--dry]
#
# Trims the dead lead-in/tail off a saved event clip. Clips are captured wide
# (T-50s..T+20s) because Nest event latency swings 15-43s, so a fixed window must
# cover the worst case; that leaves 25-35s of empty walkway at the front of a typical
# clip. This finds where something actually moved and cuts to it.
#
# Detection: frame-differencing (fps=2 -> tblend difference -> signalstats YAVG).
# NOT ffmpeg's scene detector, which finds literally nothing on this wide overhead
# shot - a person is a few percent of frame and never trips the scene threshold.
# Measured 2026-07-26 across 8 real clips: quiet frames sit at YAVG ~0.3 (one noisy
# clip 1.1), a person crossing peaks at 5-12. Threshold = max(2.0, median*2.5).
#
# Tightened 2026-07-26 after review: pad 5s->2s and min length 15s->8s. Verified the
# detector fires exactly as the person becomes visible (person appeared at 5.0s in a
# pad=5 clip), so the lead-in was pure padding. The old 15s minimum was the worse
# offender - a 3s event still produced a 15s clip, padding ~10s of dead TAIL.
#
# SAFE BY DESIGN: if no activity is detected, or anything goes wrong, the clip is
# LEFT COMPLETELY UNTOUCHED. Never trade a missed event for a tidier file.
f="$1"; pad="${2:-2}"; minlen="${3:-8}"; dry="$4"
[ -f "$f" ] || exit 0

dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$f" 2>/dev/null | cut -d. -f1)
[ -n "$dur" ] || exit 0
[ "$dur" -gt $((minlen + 4)) ] || exit 0     # already short - nothing to gain

prof=$(ffmpeg -i "$f" -vf \
  "fps=2,scale=320:-1,format=gray,tblend=all_mode=difference,signalstats,metadata=print:key=lavfi.signalstats.YAVG" \
  -f null - 2>&1 | awk '
    /pts_time:/ { for(i=1;i<=NF;i++) if($i ~ /^pts_time:/){ split($i,a,":"); t=a[2] } }
    /lavfi\.signalstats\.YAVG=/ { split($0,b,"="); print t, b[2] }')
[ -n "$prof" ] || exit 0

# NOTE: use command substitution, NOT an unquoted heredoc. A `<< EOF` heredoc
# expands $0/$1/$2 inside the awk program before awk ever sees it, silently
# mangling the script (this cost a debugging round on 2026-07-26).
act=$(echo "$prof" | awk '
  { t[NR]=$1; v[NR]=$2; s[NR]=$2 }
  END{
    n=NR; if(n<4) exit
    for(i=1;i<=n;i++) for(j=i+1;j<=n;j++) if(s[j]<s[i]){x=s[i];s[i]=s[j];s[j]=x}
    med=s[int(n/2)+1]
    thr=med*2.5; if(thr<2.0) thr=2.0
    f=-1; l=-1
    for(i=1;i<=n;i++) if(v[i]>=thr){ if(f<0) f=t[i]; l=t[i] }
    print f, l
  }')
first=${act%% *}
last=${act##* }

case "$first" in ''|-1) exit 0 ;; esac   # no activity -> keep whole clip

start=$(awk -v a="$first" -v p="$pad" 'BEGIN{s=a-p; if(s<0)s=0; printf "%.2f", s}')
end=$(awk -v b="$last" -v p="$pad" -v d="$dur" 'BEGIN{e=b+p; if(e>d)e=d; printf "%.2f", e}')
len=$(awk -v s="$start" -v e="$end" 'BEGIN{printf "%.2f", e-s}')
# enforce a sensible minimum
len=$(awk -v l="$len" -v m="$minlen" 'BEGIN{printf "%.2f", (l<m?m:l)}')

if [ "$dry" = "--dry" ]; then
  echo "$(basename "$f")  dur=${dur}s  activity ${first}-${last}s  -> would keep ${start}s +${len}s"
  exit 0
fi

# temp MUST keep a .mp4 extension - ffmpeg infers the muxer from it and
# fails outright on a bare ".trim" suffix (silently, when stderr is dropped).
tmp="${f%.mp4}.trimtmp.mp4"
if ffmpeg -y -ss "$start" -i "$f" -t "$len" -c copy -movflags +faststart -f mp4 "$tmp" -loglevel error; then
  nd=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$tmp" 2>/dev/null)
  case "$nd" in [0-9]*) touch -r "$f" "$tmp" && mv "$tmp" "$f" ;; *) rm -f "$tmp" ;; esac
else
  rm -f "$tmp"
fi
