#!/usr/bin/env python3
import json, os, sys
import websocket
entity_ids = sys.argv[1:]
token = os.environ['SUPERVISOR_TOKEN']
ws = websocket.create_connection('ws://supervisor/core/websocket', timeout=20)
assert json.loads(ws.recv())['type'] == 'auth_required'
ws.send(json.dumps({'type':'auth','access_token':token}))
assert json.loads(ws.recv())['type'] == 'auth_ok'
for i, eid in enumerate(entity_ids, start=1):
    ws.send(json.dumps({'id':i,'type':'config/entity_registry/remove','entity_id':eid}))
    resp = json.loads(ws.recv())
    print(eid, '->', resp.get('success'), resp.get('error'))
ws.close()
