"""Musique de la vidéo CPPF via Google Lyria 3.x (generateContent). La clé est injectée par le proxy.
Usage : python3 tools/music_lyria3.py <durée_s> [modèle]"""
import base64, json, sys, os, urllib.request, time
dur = float(sys.argv[1]) if len(sys.argv) > 1 else 110
model = sys.argv[2] if len(sys.argv) > 2 else "lyria-3.5"
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
prompt = (
    f"Instrumental background music for a friendly public-service tutorial video with a cute bee mascot, about {round(dur)} seconds long. "
    "Joyful, light and warm corporate pop: plucked ukulele and nylon guitar, marimba, soft claps and finger snaps, bouncy round bass, airy synth pads, "
    "a few playful pizzicato touches. Tempo 118 BPM, major key, optimistic and reassuring. "
    "A short bright 3-second intro sting, then a steady, uncluttered groove that leaves plenty of room for a spoken voice-over, "
    "a gentle lift in the last quarter, and a clean, happy ending on the downbeat in the final 4 seconds. "
    "No vocals, no choir, no heavy drums, no EDM drops, no dark or dramatic moods."
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
