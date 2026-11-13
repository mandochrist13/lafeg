"""Nappe musicale via Google Lyria 3.x (generateContent). La clé est injectée par le proxy.
Usage : python3 tools/music_lyria3.py <durée_s> [modèle]"""
import base64, json, sys, os, urllib.request, time
dur = float(sys.argv[1]) if len(sys.argv) > 1 else 110
model = sys.argv[2] if len(sys.argv) > 2 else "lyria-3.5"
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
prompt = (
    f"Instrumental underscore for an institutional corporate film, about {round(dur)} seconds long. "
    "Minimal and elegant: soft felt piano ostinato, warm low strings, discreet pulsing synth bass, light mallets, "
    "subtle airy pads. Calm, confident and precise; tempo around 96 BPM. Starts sparse and quiet for the first 15 seconds, "
    "builds gradually with gentle momentum, reaches a warm uplifting lift around 75% of the duration, "
    "then resolves cleanly on a sustained final chord in the last 6 seconds. "
    "No vocals, no choir, no heavy drums, no EDM, no folk or tribal percussion. Leave space for a spoken voice-over."
)
body = {"contents": [{"role": "user", "parts": [{"text": prompt}]}],
        "generationConfig": {"responseModalities": ["AUDIO"]}}
req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
    data=json.dumps(body).encode(), headers={"Content-Type": "application/json"}, method="POST")
for attempt in range(4):
    try:
        with urllib.request.urlopen(req, timeout=600) as r:
            d = json.load(r)
        break
    except urllib.error.HTTPError as e:
        msg = e.read().decode()[:600]
        print("HTTP", e.code, msg, file=sys.stderr)
        if e.code in (429, 500, 502, 503) and attempt < 3:
            time.sleep(30); continue
        sys.exit(1)
parts = d["candidates"][0]["content"]["parts"]
n = 0
for p in parts:
    if "inlineData" in p:
        mime = p["inlineData"].get("mimeType", "")
        ext = "wav" if "wav" in mime else "mp3" if "mpeg" in mime or "mp3" in mime else "bin"
        path = os.path.join(root, f"assets/bgm/lyria-{model}.{ext}")
        open(path, "wb").write(base64.b64decode(p["inlineData"]["data"]))
        print("audio", mime, path)
        n += 1
    elif "text" in p:
        print("texte :", p["text"][:300])
if not n:
    print(json.dumps(d)[:800]); sys.exit(1)
