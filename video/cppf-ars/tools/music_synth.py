"""Musique du film CPPF, composée par synthèse (aucune banque de sons) : pop d'entreprise joyeuse, 118 BPM, do majeur.
Ukulélé en cordes pincées (Karplus-Strong), marimba, basse ronde, claquements de mains, shaker, nappe douce.
Usage : python3 tools/music_synth.py <durée_s> <sortie.wav>"""
import sys, wave
import numpy as np

DUR = float(sys.argv[1]) if len(sys.argv) > 1 else 106.0
OUT = sys.argv[2] if len(sys.argv) > 2 else "assets/bgm/musique.wav"
SR = 48000
BPM = 118.0
BEAT = 60.0 / BPM
BAR = 4 * BEAT
N = int((DUR + 3) * SR)
L = np.zeros(N)
R = np.zeros(N)
rng = np.random.default_rng(7)  # graine fixe : la musique est identique à chaque génération


def midi(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def add(sig, t, gain=1.0, pan=0.0):
    i = int(t * SR)
    if i >= N:
        return
    sig = sig[: N - i]
    l = np.cos((pan + 1) * np.pi / 4)
    r = np.sin((pan + 1) * np.pi / 4)
    L[i : i + len(sig)] += sig * gain * l
    R[i : i + len(sig)] += sig * gain * r


# ---------------------------------------------------------------- instruments
_ks = {}


def pluck(m, dur=1.4, bright=0.5):
    key = (m, dur, bright)
    if key in _ks:
        return _ks[key]
    f = midi(m)
    n = int(dur * SR)
    p = int(SR / f)
    buf = rng.uniform(-1, 1, p)
    # adoucit l'attaque (corde de nylon)
    for _ in range(int(3 * (1 - bright)) + 1):
        buf = 0.5 * (buf + np.roll(buf, 1))
    out = np.empty(n)
    k = 0
    prev = buf.copy()
    while k < n:
        m_ = min(p, n - k)
        out[k : k + m_] = prev[:m_]
        nxt = 0.4985 * (prev + np.roll(prev, -1))
        prev = nxt
        k += m_
    env = np.minimum(1, np.arange(n) / (0.002 * SR)) * np.exp(-np.arange(n) / (SR * dur * 0.55))
    out = out * env
    _ks[key] = out
    return out


def marimba(m, dur=0.9):
    f = midi(m)
    t = np.arange(int(dur * SR)) / SR
    s = np.sin(2 * np.pi * f * t) * np.exp(-t * 5.5) + 0.35 * np.sin(2 * np.pi * f * 3.98 * t) * np.exp(-t * 16) + 0.12 * np.sin(2 * np.pi * f * 9.9 * t) * np.exp(-t * 30)
    s *= np.minimum(1, t / 0.003)
    return s


def bass(m, dur):
    f = midi(m)
    t = np.arange(int(dur * SR)) / SR
    s = np.sin(2 * np.pi * f * t) + 0.25 * np.sin(2 * np.pi * 2 * f * t) + 0.08 * np.sin(2 * np.pi * 3 * f * t)
    env = np.minimum(1, t / 0.008) * np.exp(-t * 2.2) * np.minimum(1, (dur - t) / 0.03)
    return s * env


def kick():
    t = np.arange(int(0.35 * SR)) / SR
    f = 50 + 70 * np.exp(-t * 28)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph) * np.exp(-t * 11) * np.minimum(1, t / 0.002)


def clap():
    t = np.arange(int(0.25 * SR)) / SR
    n = rng.uniform(-1, 1, len(t))
    # bande 1–3 kHz, trois petites attaques rapprochées
    n = np.convolve(n, np.ones(6) / 6, mode="same") - np.convolve(n, np.ones(40) / 40, mode="same")
    env = np.zeros(len(t))
    for d in (0.0, 0.011, 0.022):
        env += (t >= d) * np.exp(-np.maximum(0, t - d) * 60)
    env += (t >= 0.03) * np.exp(-np.maximum(0, t - 0.03) * 18) * 0.6
    return n * env


def shaker():
    t = np.arange(int(0.09 * SR)) / SR
    n = rng.uniform(-1, 1, len(t))
    n = n - np.convolve(n, np.ones(4) / 4, mode="same")
    return n * np.sin(np.pi * t / t[-1]) ** 2


def pad(ms, dur):
    t = np.arange(int(dur * SR)) / SR
    s = np.zeros(len(t))
    for m in ms:
        for det in (-0.12, 0.0, 0.12):
            s += np.sin(2 * np.pi * midi(m + det / 100 * 12) * t)
    env = np.minimum(1, t / 0.6) * np.minimum(1, (dur - t) / 0.8)
    return s * env / (3 * len(ms))


# ---------------------------------------------------------------- harmonie : C G Am F (do majeur)
CH = [
    ([60, 64, 67, 72], 36),  # C
    ([59, 62, 67, 71], 43),  # G
    ([60, 64, 69, 72], 45),  # Am
    ([60, 65, 69, 72], 41),  # F
]
MOTIF = [76, 79, 81, 79, 76, 74, 72, 74]  # pentatonique, deux mesures

INTRO = 3.6
END = DUR - 4.2
nbars = int((END - INTRO) / BAR) + 1
T0 = END - nbars * BAR  # dernière mesure pile sur la fin (la musique se résout sur un temps fort)

# ouverture : arpège de marimba et shaker (logo)
for k, m in enumerate([72, 76, 79, 84, 88]):
    add(marimba(m, 1.2), 0.25 + k * 0.16, 0.55, 0.25)
add(pad([60, 64, 67, 72], 3.4), 0.2, 0.25)

for b in range(nbars):
    t = T0 + b * BAR
    if t < INTRO - 0.05:
        continue
    chord, root = CH[b % 4]
    sec = (t - INTRO) / max(1, END - INTRO)  # 0 → 1 au fil du film
    lift = 1.0 if sec > 0.78 else 0.0
    # ukulélé : grattage D . D U . U D U
    pat = [(0, 1, 1.0), (1, 1, 0.75), (1.5, -1, 0.55), (2.5, -1, 0.6), (3, 1, 0.8), (3.5, -1, 0.55)]
    for (pos, d, v) in pat:
        notes = chord if d > 0 else chord[::-1]
        for j, m in enumerate(notes):
            add(pluck(m + 12, 1.1, 0.55), t + pos * BEAT + j * 0.011, 0.16 * v, -0.35)
    # basse : fondamentale, rebond à l'octave
    for pos, m, d in ((0, root, 0.9), (1.5, root, 0.4), (2, root + 7, 0.45), (3, root + 12, 0.3), (3.5, root, 0.4)):
        add(bass(m, d * BEAT * 2), t + pos * BEAT, 0.34)
    # percussions douces
    for beat in range(4):
        if beat in (0, 2):
            add(kick(), t + beat * BEAT, 0.42)
        if beat in (1, 3):
            add(clap(), t + beat * BEAT, 0.22, 0.1)
    for s16 in range(16):
        add(shaker(), t + s16 * BEAT / 4, 0.05 + 0.03 * (s16 % 2 == 0), 0.45)
    # marimba : motif dans la deuxième moitié, et sous la montée finale
    if sec > 0.42 and b % 4 in (0, 1):
        for k, m in enumerate(MOTIF[(b % 2) * 4 : (b % 2) * 4 + 4]):
            add(marimba(m, 0.8), t + k * BEAT, 0.2 + 0.08 * lift, 0.35)
    # nappe
    add(pad(chord, BAR + 0.4), t, 0.1 + 0.08 * lift)

# fin : accord tenu sur le temps fort
tf = T0 + nbars * BAR
for j, m in enumerate([60, 64, 67, 72, 76]):
    add(pluck(m + 12, 3.0, 0.6), tf + j * 0.018, 0.2, -0.3)
add(marimba(84, 2.0), tf, 0.35, 0.3)
add(bass(36, 2.6), tf, 0.4)
add(kick(), tf, 0.45)
add(pad([60, 64, 67, 72], 3.4), tf, 0.22)

# ---------------------------------------------------------------- réverbération légère et mastering
def reverb(x, secs=1.6, mix=0.18):
    n = int(secs * SR)
    ir = rng.uniform(-1, 1, n) * np.exp(-np.arange(n) / (SR * secs / 6))
    ir[0] = 0
    nfft = 1 << int(np.ceil(np.log2(len(x) + n)))
    y = np.fft.irfft(np.fft.rfft(x, nfft) * np.fft.rfft(ir, nfft), nfft)[: len(x)]
    y /= np.max(np.abs(y)) + 1e-9
    return x + mix * y * np.max(np.abs(x))


L = reverb(L)
R = reverb(R)
x = np.stack([L, R], 1)[: int(DUR * SR)]
fade = int(1.5 * SR)
x[-fade:] *= np.linspace(1, 0, fade)[:, None]
x /= np.max(np.abs(x)) + 1e-9
x = np.tanh(1.4 * x) / np.tanh(1.4)  # saturation douce
x *= 0.89
with wave.open(OUT, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes((x * 32767).astype("<i2").tobytes())
print("écrit", OUT, round(len(x) / SR, 2), "s")
