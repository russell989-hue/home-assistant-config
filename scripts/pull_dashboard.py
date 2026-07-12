#!/usr/bin/env python3
import json, os, sys
import websocket
url_path, out_file = sys.argv[1], sys.argv[2]
token = os.environ['SUPERVISOR_TOKEN']
ws = websocket.create_connection('ws://supervisor/core/websocket', timeout=20)
assert json.loads(ws.recv())['type'] == 'auth_required'
ws.send(json.dumps({'type':'auth','access_token':token}))
assert json.loads(ws.recv())['type'] == 'auth_ok'
ws.send(json.dumps({'id':1,'type':'lovelace/config','url_path':url_path}))
resp = json.loads(ws.recv())
ws.close()
json.dump(resp['result'], open(out_file,'w'), indent=2)
print('pulled', len(json.dumps(resp['result'])), 'bytes')
