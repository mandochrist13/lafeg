# Écoute automatique d'une piste par Gemini (la clé est ajoutée par le proxy de la session).
# usage : python3 -I ecoute.py <audio.mp3> [modele]
import base64
import json
import sys
import urllib.request

path = sys.argv[1]
model = sys.argv[2] if len(sys.argv) > 2 else "gemini-3.8-flash"
PROMPT = (
    "Listen to this instrumental music clip carefully and answer in French, as JSON only, with these keys: "
    "\"instruments\" (list), \"tempo_bpm\" (number), \"ambiance\" (short text), "
    "\"qualite_audio\" (score 1-10 and the precise defects you hear, with timestamps: distortion, clicks, "
    "muddy mix, robotic artifacts, out-of-tune notes, rhythm drifting), "
    "\"structure\" (list of sections with start-end timestamps in seconds), "
    "\"temps_forts\" (timestamps in seconds of the clearest strong downbeats or accents), "
    "\"fin_naturelle\" (the timestamp where a phrase ends and the piece could stop or loop cleanly), "
    "\"note_globale\" (1-10, as production music for a short promotional video)."
)
data = base64.b64encode(open(path, "rb").read()).decode()
mime = "audio/mpeg" if path.endswith(".mp3") else "audio/wav"
body = {
    "contents": [{"role": "user", "parts": [{"inline_data": {"mime_type": mime, "data": data}}, {"text": PROMPT}]}],
    "generationConfig": {"temperature": 0.2, "responseMimeType": "application/json", "thinkingConfig": {"thinkingLevel": "low"}},
}
req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent",
    data=json.dumps(body).encode(),
    headers={"Content-Type": "application/json", "x-goog-api-key": "AIzaSyDUMMYKEYxxxxxxxxxxxxxxxxxxxxxxxxx"},
)
try:
    with urllib.request.urlopen(req, timeout=420) as r:
        d = json.load(r)
except urllib.error.HTTPError as e:
    print("HTTP", e.code, e.read().decode()[:600])
    sys.exit(1)
for c in d.get("candidates", []):
    for p in c.get("content", {}).get("parts", []):
        if "text" in p:
            print(p["text"])
