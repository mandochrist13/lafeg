# Découpe le logo officiel (JPG, fond blanc) en deux PNG transparents : les pavés avec l'étoile, puis le nom.
# Le fond n'est rendu transparent que là où il touche le bord de l'image (l'étoile blanche, enclavée dans les pavés, reste opaque).
# usage : python3 -I tools/logo_split.py <logo.rgb> <W> <H> <dossier de sortie>   (logo.rgb : ffmpeg -f rawvideo -pix_fmt rgb24)
import sys, json, struct, zlib
from collections import deque
import numpy as np

W, H, out = int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
im = np.fromfile(sys.argv[1], np.uint8).reshape(H, W, 3).astype(int)
bg = im[2:12, 2:12].reshape(-1, 3).mean(0)
diff = np.abs(im - bg).max(2)
near = diff < 40
# fond = pixels proches du blanc reliés au bord
seen = np.zeros((H, W), bool)
q = deque()
for x in range(W):
    for y in (0, H - 1):
        if near[y, x] and not seen[y, x]:
            seen[y, x] = True; q.append((y, x))
for y in range(H):
    for x in (0, W - 1):
        if near[y, x] and not seen[y, x]:
            seen[y, x] = True; q.append((y, x))
while q:
    y, x = q.popleft()
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        yy, xx = y + dy, x + dx
        if 0 <= yy < H and 0 <= xx < W and near[yy, xx] and not seen[yy, xx]:
            seen[yy, xx] = True; q.append((yy, xx))
ramp = np.clip((diff - 10) / 30.0, 0, 1)
# pavés : seul le fond relié au bord devient transparent (l'étoile blanche reste opaque)
alpha_mark = np.ones((H, W)); alpha_mark[seen] = ramp[seen]
# nom : tout le blanc devient transparent (fond et creux des lettres)
alpha_word = ramp.copy()
alpha = alpha_mark
content = alpha > 0.02
# pavés : contenu à droite (x ≥ 1650) et en haut (y ≤ 300) ; nom : le reste
mark = content.copy(); mark[:, :1650] = False; mark[301:, :] = False
word = content & ~mark
def bbox(m):
    ys, xs = np.nonzero(m); return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1
def write_png(path, rgb, a):
    h, w = a.shape
    px = np.dstack([rgb.astype(np.uint8), (np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8)])
    raw = b"".join(b"\x00" + px[y].tobytes() for y in range(h))
    def chunk(t, d):
        c = struct.pack(">I", len(d)) + t + d
        return c + struct.pack(">I", zlib.crc32(t + d) & 0xFFFFFFFF)
    png = b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b"")
    open(path, "wb").write(png)
info = {"size": [W, H], "bg": [round(v, 1) for v in bg]}
for name, m in (("mark", mark), ("word", word)):
    x0, y0, x1, y1 = bbox(m)
    x0, y0, x1, y1 = max(0, x0 - 2), max(0, y0 - 2), min(W, x1 + 2), min(H, y1 + 2)
    a = (alpha_mark if name == "mark" else alpha_word)[y0:y1, x0:x1].copy()
    other = (word if name == "mark" else mark)[y0:y1, x0:x1]
    a[other] = 0
    # dé-mélange des pixels de bord : couleur = fond + (pixel − fond) / alpha (pas de liseré clair)
    c = im[y0:y1, x0:x1].astype(float)
    part = (a > 0.01) & (a < 0.999)
    f = c.copy()
    f[part] = np.clip(bg + (c[part] - bg) / a[part][:, None], 0, 255)
    write_png(f"{out}/bgfibourse-{name}.png", f, a)
    info[name] = [x0, y0, x1, y1]
# l'étoile : pixels très clairs à l'intérieur des pavés (non reliés au fond)
mx0, my0, mx1, my1 = info["mark"]
star = (~seen) & (diff < 60) & (np.arange(W)[None, :] >= mx0) & (np.arange(H)[:, None] < my1)
ys, xs = np.nonzero(star)
w = (255 - diff[ys, xs]).astype(float)
cx, cy = float((xs * w).sum() / w.sum()), float((ys * w).sum() / w.sum())
ix, iy = int(round(cx)), int(round(cy))
row = np.nonzero(star[iy - 1:iy + 2, :].any(0))[0]
col = np.nonzero(star[:, ix - 1:ix + 2].any(1))[0]
info["star"] = {"cx": round(cx, 1), "cy": round(cy, 1), "x_min": int(row.min()), "x_max": int(row.max()), "y_min": int(col.min()), "y_max": int(col.max()), "n": int(star.sum())}
d = []
for sx, sy in ((1, 1), (1, -1), (-1, 1), (-1, -1)):
    k = 0
    while True:
        k += 1
        y, x = iy + sy * k, ix + sx * k
        if not (0 <= y < H and 0 <= x < W) or not star[max(0, y - 1):y + 2, max(0, x - 1):x + 2].any():
            break
    d.append(k - 1)
info["star"]["diag"] = d
json.dump(info, open(f"{out}/bgfibourse-logo.json", "w"), indent=1)
print(json.dumps(info))
