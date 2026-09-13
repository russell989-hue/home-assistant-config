import csv, datetime as dt
from collections import defaultdict
rows=[]
for r in csv.DictReader(open("/tmp/hvac_test2.csv")):
    try: rows.append((int(r["ts"]), float(r["home_w"]), float(r["solar_w"]), float(r["grid_w"]), r["mf"], r["up"]))
    except: pass
print("samples: %d   span %s -> %s" % (len(rows),
      dt.datetime.fromtimestamp(rows[0][0]).strftime("%H:%M:%S"),
      dt.datetime.fromtimestamp(rows[-1][0]).strftime("%H:%M:%S")))
g=defaultdict(list)
for ts,h,s,gr,mf,up in rows: g[(mf,up)].append(h)
print("\n%-22s %5s %8s %8s %8s %8s" % ("(main_floor, upstairs)","n","mean_W","min_W","max_W","p10_W"))
for k in sorted(g, key=lambda k:-len(g[k])):
    v=sorted(g[k]); n=len(v)
    print("%-22s %5d %8.0f %8.0f %8.0f %8.0f" % (str(k), n, sum(v)/n, v[0], v[-1], v[max(0,int(n*0.10))]))
print("\n--- transitions ---")
for i in range(1,len(rows)):
    if (rows[i-1][4],rows[i-1][5])!=(rows[i][4],rows[i][5]):
        pre=[r[1] for r in rows[max(0,i-20):i]]; post=[r[1] for r in rows[i:i+20]]
        print("  %s  (%s,%s)->(%s,%s)  %.0f -> %.0f  step %+.0f W" % (
            dt.datetime.fromtimestamp(rows[i][0]).strftime("%H:%M:%S"),
            rows[i-1][4],rows[i-1][5],rows[i][4],rows[i][5],
            sum(pre)/len(pre) if pre else 0, sum(post)/len(post) if post else 0,
            (sum(post)/len(post) if post else 0)-(sum(pre)/len(pre) if pre else 0)))
print("\n--- last 25 samples ---")
for ts,h,s,gr,mf,up in rows[-25:]:
    print("  %s  solar %6.0f  grid %7.0f  home %6.0f   %s/%s" % (dt.datetime.fromtimestamp(ts).strftime("%H:%M:%S"),s,gr,h,mf,up))
