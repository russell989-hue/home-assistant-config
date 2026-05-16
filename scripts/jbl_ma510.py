#!/usr/bin/env python3
"""
JBL MA510 IP Control — Home Assistant helper script
Usage:
    python3 jbl_ma510.py <command> [value]
    python3 jbl_ma510.py power_on
    python3 jbl_ma510.py input_hdmi1
    python3 jbl_ma510.py volume 45
    python3 jbl_ma510.py power_status
"""

import socket
import sys
import time

HOST = "192.168.68.66"
PORT = 50000
TIMEOUT = 3

INIT = bytes([0x23, 0x50, 0x01, 0xF0, 0x0D])

# All static commands (no variable data)
COMMANDS = {
    # Power
    "power_on":       [0x23, 0x00, 0x01, 0x01, 0x0D],
    "power_off":      [0x23, 0x00, 0x01, 0x00, 0x0D],
    "power_status":   [0x23, 0x00, 0x01, 0xF0, 0x0D],
    # Mute
    "mute_on":        [0x23, 0x07, 0x01, 0x01, 0x0D],
    "mute_off":       [0x23, 0x07, 0x01, 0x00, 0x0D],
    "mute_status":    [0x23, 0x07, 0x01, 0xF0, 0x0D],
    # Volume
    "volume_status":  [0x23, 0x06, 0x01, 0xF0, 0x0D],
    # Input sources
    "input_tv":       [0x23, 0x05, 0x01, 0x01, 0x0D],
    "input_hdmi1":    [0x23, 0x05, 0x01, 0x02, 0x0D],
    "input_hdmi2":    [0x23, 0x05, 0x01, 0x03, 0x0D],
    "input_hdmi3":    [0x23, 0x05, 0x01, 0x04, 0x0D],
    "input_hdmi4":    [0x23, 0x05, 0x01, 0x05, 0x0D],
    "input_coax":     [0x23, 0x05, 0x01, 0x08, 0x0D],
    "input_optical":  [0x23, 0x05, 0x01, 0x09, 0x0D],
    "input_analog1":  [0x23, 0x05, 0x01, 0x0A, 0x0D],
    "input_analog2":  [0x23, 0x05, 0x01, 0x0B, 0x0D],
    "input_bt":       [0x23, 0x05, 0x01, 0x0D, 0x0D],
    "input_network":  [0x23, 0x05, 0x01, 0x0E, 0x0D],
    "input_status":   [0x23, 0x05, 0x01, 0xF0, 0x0D],
    # Surround modes (MA510 supported modes only)
    "surr_stereo20":  [0x23, 0x08, 0x01, 0x03, 0x0D],
    "surr_stereo21":  [0x23, 0x08, 0x01, 0x04, 0x0D],
    "surr_allstereo": [0x23, 0x08, 0x01, 0x05, 0x0D],
    "surr_native":    [0x23, 0x08, 0x01, 0x06, 0x0D],
    "surr_plii":      [0x23, 0x08, 0x01, 0x07, 0x0D],  # Dolby ProLogic II
    "surr_status":    [0x23, 0x08, 0x01, 0xF0, 0x0D],
    # Tone
    "treble_status":  [0x23, 0x0B, 0x01, 0xF0, 0x0D],
    "bass_status":    [0x23, 0x0C, 0x01, 0xF0, 0x0D],
    # Dialog enhanced
    "dialog_on":      [0x23, 0x0E, 0x01, 0x01, 0x0D],
    "dialog_off":     [0x23, 0x0E, 0x01, 0x00, 0x0D],
    "dialog_status":  [0x23, 0x0E, 0x01, 0xF0, 0x0D],
    # Dolby Audio Mode
    "dolby_off":      [0x23, 0x0F, 0x01, 0x00, 0x0D],
    "dolby_music":    [0x23, 0x0F, 0x01, 0x01, 0x0D],
    "dolby_movie":    [0x23, 0x0F, 0x01, 0x02, 0x0D],
    "dolby_status":   [0x23, 0x0F, 0x01, 0xF0, 0x0D],
    "vol_up":         [0x23, 0x04, 0x03, 0x01, 0x0E, 0xE3, 0x0D],
    "vol_down":       [0x23, 0x04, 0x03, 0x01, 0x0E, 0x13, 0x0D],
    "nav_up":    [0x23, 0x04, 0x03, 0x01, 0x0E, 0x99, 0x0D],
    "nav_down":  [0x23, 0x04, 0x03, 0x01, 0x0E, 0x59, 0x0D],
    "nav_left":  [0x23, 0x04, 0x03, 0x01, 0x0E, 0x83, 0x0D],
    "nav_right": [0x23, 0x04, 0x03, 0x01, 0x0E, 0x43, 0x0D],
    "nav_ok":    [0x23, 0x04, 0x03, 0x01, 0x0E, 0x21, 0x0D],
    "nav_menu":  [0x23, 0x04, 0x03, 0x01, 0x0E, 0xCA, 0x0D],
    "nav_back":  [0x23, 0x04, 0x03, 0x01, 0x0E, 0xA1, 0x0D],

# Heartbeat (useful for testing connection)
    "heartbeat":      [0x23, 0x51, 0x02, 0xAA, 0xAA, 0x0D],
}

# Human-readable decoders for status responses
# Maps (CmdID byte, Data1 byte) → string label
INPUT_NAMES = {
    0x01: "TV (ARC)", 0x02: "HDMI 1", 0x03: "HDMI 2", 0x04: "HDMI 3",
    0x05: "HDMI 4",  0x08: "Coax",    0x09: "Optical", 0x0A: "Analog 1",
    0x0B: "Analog 2", 0x0D: "Bluetooth", 0x0E: "Network",
}
SURR_NAMES = {
    0x03: "Stereo 2.0", 0x04: "Stereo 2.1", 0x05: "All Stereo",
    0x06: "Native", 0x07: "Dolby ProLogic II",
}
DOLBY_NAMES = {0x00: "Off", 0x01: "Music", 0x02: "Movie"}


def decode_response(raw: bytes) -> str:
    """Parse a raw response packet and return a human-readable string."""
    if len(raw) < 5:
        return f"short response: {raw.hex()}"
    # Response: [0x02][0x23] CmdID RspCode DataLen [Data...] [0x0D]
    # But spec says Start is 0x23 not 0x02,0x23 — actual wire has 0x02 prepended
    # Handle both 1-byte and 2-byte start
    offset = 0
    if raw[0] == 0x02 and raw[1] == 0x23:
        offset = 2
    elif raw[0] == 0x23:
        offset = 1
    cmd_id   = raw[offset]
    rsp_code = raw[offset + 1]
    data_len = raw[offset + 2]
    data     = raw[offset + 3: offset + 3 + data_len]

    if rsp_code != 0x00:
        errors = {0xC1: "Command not recognized", 0xC2: "Parameter not recognized",
                  0xC3: "Command invalid at this time", 0xC4: "Invalid data length"}
        return f"ERROR: {errors.get(rsp_code, f'0x{rsp_code:02X}')}"

    if not data:
        return "OK"

    d = data[0]
    if cmd_id == 0x00:  # Power
        return "on" if d == 0x01 else "standby"
    elif cmd_id == 0x05:  # Input
        return INPUT_NAMES.get(d, f"unknown (0x{d:02X})")
    elif cmd_id == 0x06:  # Volume
        return str(d)
    elif cmd_id == 0x07:  # Mute
        return "muted" if d == 0x01 else "unmuted"
    elif cmd_id == 0x08:  # Surround
        return SURR_NAMES.get(d, f"unknown (0x{d:02X})")
    elif cmd_id == 0x0B or cmd_id == 0x0C:  # Treble / Bass
        return f"{d}dB" if d <= 0x0C else f"-{256 - d}dB"
    elif cmd_id == 0x0E:  # Dialog
        return "on" if d == 0x01 else "off"
    elif cmd_id == 0x0F:  # Dolby mode
        return DOLBY_NAMES.get(d, f"unknown (0x{d:02X})")
    elif cmd_id == 0x50:  # Init
        models = {0x01: "MA510", 0x02: "MA710", 0x03: "MA7100HP", 0x04: "MA9100HP"}
        return models.get(d, f"unknown model 0x{d:02X}")
    else:
        return f"raw: {raw.hex()}"


def build_volume_cmd(level: int) -> bytes:
    """Build a set-volume command. level must be 0–99."""
    if not (0 <= level <= 99):
        raise ValueError(f"Volume must be 0–99, got {level}")
    return bytes([0x23, 0x06, 0x01, level, 0x0D])


def build_treble_cmd(db: int) -> bytes:
    """Build a set-treble command. db must be -12 to +12."""
    if not (-12 <= db <= 12):
        raise ValueError(f"Treble must be -12 to +12 dB, got {db}")
    val = db if db >= 0 else (256 + db)
    return bytes([0x23, 0x0B, 0x01, val, 0x0D])


def build_bass_cmd(db: int) -> bytes:
    """Build a set-bass command. db must be -12 to +12."""
    if not (-12 <= db <= 12):
        raise ValueError(f"Bass must be -12 to +12 dB, got {db}")
    val = db if db >= 0 else (256 + db)
    return bytes([0x23, 0x0C, 0x01, val, 0x0D])


def send(cmd_bytes: bytes) -> str:
    """Open a socket, init, send command, return decoded response."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(TIMEOUT)
        s.connect((HOST, PORT))
        s.send(INIT)
        time.sleep(0.15)
        s.recv(64)          # consume init response
        s.send(cmd_bytes)
        time.sleep(0.2)
        raw = s.recv(64)
        return decode_response(raw)


def main():
    if len(sys.argv) < 2:
        print("Usage: jbl_ma510.py <command> [value]")
        print("Commands:", ", ".join(sorted(COMMANDS.keys())))
        print("         volume <0-99>")
        print("         treble <-12 to 12>")
        print("         bass   <-12 to 12>")
        sys.exit(1)

    cmd = sys.argv[1].lower()

    if cmd == "volume":
        if len(sys.argv) < 3:
            print("ERROR: volume requires a level (0–99)", file=sys.stderr)
            sys.exit(1)
        result = send(build_volume_cmd(int(sys.argv[2])))
    elif cmd == "treble":
        if len(sys.argv) < 3:
            print("ERROR: treble requires a dB value (-12 to 12)", file=sys.stderr)
            sys.exit(1)
        result = send(build_treble_cmd(int(sys.argv[2])))
    elif cmd == "bass":
        if len(sys.argv) < 3:
            print("ERROR: bass requires a dB value (-12 to 12)", file=sys.stderr)
            sys.exit(1)
        result = send(build_bass_cmd(int(sys.argv[2])))
    elif cmd in COMMANDS:
        result = send(bytes(COMMANDS[cmd]))
    else:
        print(f"ERROR: unknown command '{cmd}'", file=sys.stderr)
        sys.exit(1)

    print(result)


if __name__ == "__main__":
    main()
