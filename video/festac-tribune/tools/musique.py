# Monte la musique du film à partir d'une prise MusicGen :
# des segments pris sur la grille des temps de la prise, raccordés par un fondu enchaîné court,
# puis un fondu de fin. Sortie WAV 48 kHz stéréo (le volume final est réglé ensuite avec ffmpeg).
# usage : musique.py <prise.wav> <sortie.wav> <periode_s> <premier_temps_s> <segments> <duree_totale_s> <debut_fondu_fin_s>
#   segments : "debut-12,4-40" en numéros de temps de la prise ; « debut » = le tout début du fichier.
import sys

import numpy as np
import soundfile as sf
from scipy.signal import resample_poly

src, out = sys.argv[1], sys.argv[2]
per, b0 = float(sys.argv[3]), float(sys.argv[4])
total, fade0 = float(sys.argv[6]), float(sys.argv[7])
x, sr = sf.read(src, always_2d=True)
x = x.mean(axis=1)


def at(beat):
    return 0 if beat == "debut" else int(round((b0 + float(beat) * per) * sr))


segs = [tuple(s.split("-")) for s in sys.argv[5].split(",")]
XF = int(0.03 * sr)  # raccord : 30 ms
ramp_in = np.sin(np.linspace(0, np.pi / 2, XF)) ** 2
ramp_out = ramp_in[::-1]
y = np.zeros(0)
for i, (a, b) in enumerate(segs):
    s0, s1 = at(a), at(b)
    lo = max(0, s0 - XF // 2) if i else 0
    seg = x[lo : min(len(x), s1 + XF // 2)].copy()
    if i == 0:
        y = seg
    else:
        n = min(XF, len(y), len(seg))
        mix = y[-n:] * ramp_out[-n:] + seg[:n] * ramp_in[:n]
        y = np.concatenate([y[:-n], mix, seg[n:]])
    print(f"segment {a}-{b} : {s0 / sr:.3f}-{s1 / sr:.3f} s de la prise -> fin à {len(y) / sr:.3f} s")
N = int(round(total * sr))
if len(y) < N:
    raise SystemExit(f"trop court : {len(y) / sr:.2f} s pour {total} s")
y = y[:N]
# fondu d'entrée de 15 ms (pas de clic), fondu de fin (courbe en cosinus, plus lente au début)
fi = int(0.015 * sr)
y[:fi] *= np.linspace(0, 1, fi)
f0 = int(round(fade0 * sr))
k = np.linspace(0, 1, N - f0)
y[f0:] *= (np.cos(k * np.pi) + 1) / 2
y = resample_poly(y, 3, 2) if sr == 32000 else y
sr2 = 48000 if sr == 32000 else sr
st = np.stack([y, y], axis=1)
st /= max(1e-9, np.abs(st).max()) / 0.9
sf.write(out, st.astype(np.float32), sr2, subtype="PCM_24")
print(f"{out} : {len(y) / sr2:.3f} s, {sr2} Hz stéréo")
