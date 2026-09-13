import sqlite3, json, datetime as dt, bisect

con = sqlite3.connect("file:/config/home-assistant_v2.db?mode=ro", uri=True)
cur = con.cursor()

def series(ent, numeric=True):
    cur.execute("""SELECT s.last_updated_ts, s.state FROM states s
                   JOIN states_meta m ON m.metadata_id=s.metadata_id
                   WHERE m.entity_id=? ORDER BY s.last_updated_ts""", (ent,))
    out=[]
    for ts,v in cur.fetchall():
        if v in ("unknown","unavailable",None): continue
        try: out.append((ts, float(v) if numeric else v))
        except: pass
    return out

grid = series("sensor.xcel_itron_5_instantaneous_demand_value")
solar= series("sensor.envoy_202504003929_current_power_production")
print("grid samples %d, solar samples %d" % (len(grid), len(solar)))
if not grid: raise SystemExit("no grid data")
st=[t for t,_ in solar]
def home_at(ts):
    g=None
    i=bisect.bisect_right([t for t,_ in grid], ts)-1
    if i<0: return None
    if ts-grid[i][0] > 300: return None
    g=grid[i][1]
    j=bisect.bisect_right(st, ts)-1
    s=solar[j][1]*1000.0 if j>=0 and ts-st[j] < 900 else 0.0
    return s+g

def actions(ent):
    cur.execute("""SELECT s.last_updated_ts, sa.shared_attrs FROM states s
                   JOIN states_meta m ON m.metadata_id=s.metadata_id
                   LEFT JOIN state_attributes sa ON sa.attributes_id=s.attributes_id
                   WHERE m.entity_id=? ORDER BY s.last_updated_ts""",(ent,))
    out=[]; prev=None
    for ts,a in cur.fetchall():
        if not a: continue
        try: act=json.loads(a).get("hvac_action")
        except: continue
        if act!=prev: out.append((ts,act)); prev=act
    return out

def band(ts, lo, hi):
    vals=[home_at(t) for t in range(int(ts+lo), int(ts+hi), 15)]
    vals=[v for v in vals if v is not None]
    return sorted(vals)[len(vals)//2] if len(vals)>=4 else None

for ent in ["climate.upstairs_thermostat","climate.main_floor"]:
    acts=actions(ent)
    print("\n=== %s : %d action changes ===" % (ent, len(acts)))
    steps=[]
    for i in range(1,len(acts)):
        t,a = acts[i]; pa = acts[i-1][1]
        if pa!="cooling" and a=="cooling":  kind="START"
        elif pa=="cooling" and a!="cooling": kind="STOP"
        else: continue
        pre=band(t,-200,-30); post=band(t,40,210)
        if pre is None or post is None: continue
        step = (post-pre) if kind=="START" else (pre-post)
        steps.append((t,kind,step))
    print("  usable transitions: %d" % len(steps))
    for t,kind,s in steps[-14:]:
        print("    %s  %-5s  step %+7.0f W" % (dt.datetime.fromtimestamp(t).strftime("%m-%d %H:%M"), kind, s))
    good=[s for _,_,s in steps if 200 < s < 8000]
    if good:
        good.sort()
        print("  n=%d  median %.0f W  p25 %.0f  p75 %.0f  min %.0f  max %.0f" % (
            len(good), good[len(good)//2], good[len(good)//4], good[3*len(good)//4], good[0], good[-1]))
