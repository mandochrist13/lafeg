# Découpe le médaillon « Tribune des Droits Sociaux » dans une image de la vidéo d'origine.
# usage : python3 -I medaillon.py <image_source.png> <sortie.png> [echelle]
import sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

src, out = sys.argv[1], sys.argv[2]
scale = float(sys.argv[3]) if len(sys.argv) > 3 else 2.2
im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(int)
R, G, B = a[..., 0], a[..., 1], a[..., 2]
gold = (R > 110) & (R > B + 45) & (G > 50)
gold[:100, :] = False
gold[460:, :] = False
ys, xs = np.nonzero(gold)
x0, x1 = np.percentile(xs, [0.5, 99.5])
y0, y1 = np.percentile(ys, [0.5, 99.5])
cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
r = max(x1 - x0, y1 - y0) / 2 + 1.5
print(f"centre=({cx:.1f},{cy:.1f}) rayon={r:.1f}")
box = (int(round(cx - r - 3)), int(round(cy - r - 3)), int(round(cx + r + 3)), int(round(cy + r + 3)))
crop = im.crop(box)
W = int(round(crop.width * scale))
big = crop.resize((W, W), Image.LANCZOS).filter(ImageFilter.UnsharpMask(radius=2.2, percent=70, threshold=2))
# masque circulaire anticrénelé (dessiné à 4x)
k = 4
m = Image.new("L", (W * k, W * k), 0)
rr = r * scale * k
c = W * k / 2
ImageDraw.Draw(m).ellipse((c - rr, c - rr, c + rr, c + rr), fill=255)
m = m.resize((W, W), Image.LANCZOS)
outim = big.convert("RGBA")
outim.putalpha(m)
outim.save(out)
print(out, outim.size)
