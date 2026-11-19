# Affine la période et la phase de la grille des temps (recherche fine autour d'une estimation).
# usage : python3 -I grille.py <audio.wav> <periode_approx_s>
import sys
import numpy as np
import soundfile as sf

x, sr = sf.read(sys.argv[1], always_2d=True)
x = x.mean(axis=1)
hop, n = 128, 1024
frames = np.lib.stride_tricks.sliding_window_view(x, n)[::hop] * np.hanning(n)
S = np.abs(np.fft.rfft(frames, axis=1))
flux = np.maximum(0, np.diff(np.log1p(S), axis=0)).sum(axis=1)
flux = (flux - flux.mean()) / (flux.std() + 1e-9)
fps = sr / hop
dur = len(x) / sr
p_approx = float(sys.argv[2])
best = (-1e9, 0, 0)
for per in np.arange(p_approx * 0.985, p_approx * 1.015, 0.0001):
    for ph in np.arange(0, per, 0.004):
        idx = np.round(np.arange(ph, dur - 0.02, per) * fps).astype(int)
        idx = idx[idx < len(flux)]
        sc = flux[idx].mean()
        if sc > best[0]:
            best = (sc, per, ph)
sc, per, ph = best
print(f"période = {per:.4f} s ({60 / per:.2f} bpm), premier temps = {ph:.3f} s, score = {sc:.2f}")
