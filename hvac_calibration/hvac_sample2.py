import json, os, time, urllib.request
TOKEN = os.environ["SUPERVISOR_TOKEN"]
BASE = "http://supervisor/core/api/states/"
E = ["sensor.envoy_202504003929_current_power_production",
     "sensor.xcel_itron_5_instantaneous_demand_value",
     "climate.main_floor", "climate.upstairs_thermostat",
     "binary_sensor.shadowfax_charging_status"]
def get(e):
    r = urllib.request.Request(BASE + e, headers={"Authorization": "Bearer " + TOKEN})
    return json.load(urllib.request.urlopen(r, timeout=8))
out = open("/tmp/hvac_test2.csv", "w", buffering=1)
out.write("ts,solar_w,grid_w,home_w,mf,up,ev\n")
end = time.time() + 30 * 60
while time.time() < end:
    try:
        d = {e: get(e) for e in E}
        sol = float(d[E[0]]["state"]) * 1000.0
        grid = float(d[E[1]]["state"])
        out.write("%d,%.0f,%.0f,%.0f,%s,%s,%s\n" % (time.time(), sol, grid, sol + grid,
                  d[E[2]]["attributes"].get("hvac_action"),
                  d[E[3]]["attributes"].get("hvac_action"), d[E[4]]["state"]))
    except Exception:
        pass
    time.sleep(3)
out.close()
