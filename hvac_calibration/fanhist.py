import sqlite3, json, datetime as dt
con = sqlite3.connect("file:/config/home-assistant_v2.db?mode=ro", uri=True)
cur = con.cursor()
cur.execute("""
  SELECT s.last_updated_ts, sa.shared_attrs
  FROM states s JOIN states_meta m ON m.metadata_id=s.metadata_id
  LEFT JOIN state_attributes sa ON sa.attributes_id=s.attributes_id
  WHERE m.entity_id='climate.main_floor'
    AND s.last_updated_ts >= strftime('%s','now','-3 hours')
  ORDER BY s.last_updated_ts
""")
prev = None
for ts, attrs in cur.fetchall():
    if not attrs: continue
    try: a = json.loads(attrs)
    except Exception: continue
    cur_v = (a.get("fan_mode"), a.get("hvac_action"))
    if cur_v != prev:
        print("  %s   fan_mode=%-6s hvac_action=%-8s temp=%s" % (
            dt.datetime.fromtimestamp(ts).strftime("%H:%M:%S"), cur_v[0], cur_v[1], a.get("current_temperature")))
        prev = cur_v
