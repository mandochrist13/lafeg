# Tempo et grille des temps d'une piste (enveloppe d'attaques + autocorrélation).
# usage : python3 -I tempo.py <audio.wav>
import sys
import numpy as np
import soundfile as sf

x, sr = sf.read(sys.argv[1], always_2d=True)
x = x.mean(axis=1)
hop, n = 256, 1024
frames = np.lib.stride_tricks.sliding_window_view(x, n)[::hop] * np.hanning(n)
S = np.abs(np.fft.rfft(frames, axis=1))
flux = np.maximum(0, np.diff(np.log1p(S), axis=0)).sum(axis=1)
flux = (flux - flux.mean()) / (flux.std() + 1e-9)
fps = sr / hop
ac = np.correlate(flux, flux, "full")[len(flux) - 1 :]
lags = np.arange(len(ac)) / fps
ok = (lags > 60 / 160) & (lags < 60 / 70)
best = np.argmax(ac * ok)
bpm = 60 / lags[best]
period = lags[best]
# phase : décalage qui maximise l'énergie d'attaque sur la grille
ph = np.linspace(0, period, 200, endpoint=False)
score = [flux[np.clip(np.round((np.arange(p, len(flux) / fps, period)) * fps).astype(int), 0, len(flux) - 1)].sum() for p in ph]
p0 = ph[int(np.argmax(score))]
print(f"tempo ~ {bpm:.1f} bpm, temps = {period:.3f} s, premier temps = {p0:.3f} s, durée = {len(x)/sr:.2f} s")
# énergie par mesure de 4 temps (RMS) pour voir la forme du morceau
bar = 4 * period
t = p0
while t + bar <= len(x) / sr + 1e-6:
    seg = x[int(t * sr) : int((t + bar) * sr)]
    print(f"  mesure {t:6.2f}-{t+bar:6.2f} s : {20*np.log10(np.sqrt((seg**2).mean())+1e-9):6.1f} dB")
    t += bar
# temps forts : énergie grave (< 160 Hz) à chaque temps ; la phase modulo 4 la plus forte = premier temps de la mesure
freqs = np.fft.rfftfreq(n, 1 / sr)
low = S[:, freqs < 160].sum(axis=1)
lowon = np.maximum(0, np.diff(np.log1p(low)))
beats = np.arange(p0, len(x) / sr - 0.05, period)
idx = np.clip(np.round(beats * fps).astype(int), 0, len(lowon) - 1)
vals = np.array([lowon[max(0, i - 2) : i + 3].max() for i in idx])
m = [vals[k::4].mean() for k in range(4)]
k1 = int(np.argmax(m))
print("énergie grave par position dans la mesure :", " ".join(f"{v:.2f}" for v in m), f"→ premier temps = {beats[k1]:.3f} s")
