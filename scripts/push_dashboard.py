#!/usr/bin/env python3
"""Push a lovelace dashboard config into HA live via websocket (no restart).
Usage: python3 push_dashboard.py <url_path> <config_json_file>
Reads SUPERVISOR_TOKEN from env. The config is the inner 'config' dict."""
import json, os, sys
import websocket

url_path, cfg_file = sys.argv[1], sys.argv[2]
cfg = json.load(open(cfg_file))
token = os.environ["SUPERVISOR_TOKEN"]

ws = websocket.create_connection("ws://supervisor/core/websocket", timeout=20)
assert json.loads(ws.recv())["type"] == "auth_required"
ws.send(json.dumps({"type": "auth", "access_token": token}))
assert json.loads(ws.recv())["type"] == "auth_ok", "auth failed"
ws.send(json.dumps({"id": 1, "type": "lovelace/config/save",
                    "url_path": url_path, "config": cfg}))
resp = json.loads(ws.recv())
ws.close()
print("saved OK" if resp.get("success") else "FAILED: %s" % resp)
