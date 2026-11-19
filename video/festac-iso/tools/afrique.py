# Trame de dalles de l'Afrique de l'Ouest et du Centre (Natural Earth, domaine public) -> assets/africa.js
# usage : python3 -I tools/afrique.py <ne_50m_admin_0_countries.geojson>
import json, math, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = sys.argv[1]
STEP = 0.6
LON0, LON1, LAT0, LAT1 = -18.0, 17.4, -5.4, 25.2
MEMBERS = ["CMR", "GAB", "BEN", "BFA", "CIV", "GIN", "MLI", "NER", "SEN", "TGO"]
d = json.load(open(src, encoding="utf-8"))
polys = []  # (code, [rings])
for f in d["features"]:
    p = f["properties"]
    if p.get("CONTINENT") != "Africa":
        continue
    code = p["ADM0_A3"]
    g = f["geometry"]
    parts = g["coordinates"] if g["type"] == "MultiPolygon" else [g["coordinates"]]
    for part in parts:
        xs = [c[0] for c in part[0]]
        ys = [c[1] for c in part[0]]
        if max(xs) < LON0 - 1 or min(xs) > LON1 + 1 or max(ys) < LAT0 - 1 or min(ys) > LAT1 + 1:
            continue
        polys.append((code, part, (min(xs), max(xs), min(ys), max(ys))))


def inside(ring, x, y):
    c = False
    n = len(ring)
    j = n - 1
    for i in range(n):
        xi, yi = ring[i]
        xj, yj = ring[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi + 1e-12) + xi:
            c = not c
        j = i
    return c


def country(x, y):
    for code, part, (a, b, c_, d_) in polys:
        if a <= x <= b and c_ <= y <= d_ and inside(part[0], x, y) and not any(inside(h, x, y) for h in part[1:]):
            return code
    return None


tiles = []
nx = int(round((LON1 - LON0) / STEP)) + 1
ny = int(round((LAT1 - LAT0) / STEP)) + 1
for iy in range(ny):
    lat = LAT1 - iy * STEP
    for ix in range(nx):
        lon = LON0 + ix * STEP
        c = country(lon, lat)
        if c:
            tiles.append([ix, iy, c])
codes = sorted({t[2] for t in tiles})
LATM = (LAT0 + LAT1) / 2
CITIES = {"LBV": (9.45, 0.39), "LOME": (1.22, 6.13)}


def grid(lon, lat):
    return [(lon - LON0) / STEP, (LAT1 - lat) / STEP]


out = {
    "step": STEP,
    "nx": nx,
    "ny": ny,
    "cos": round(math.cos(math.radians(LATM)), 4),
    "codes": codes,
    "members": MEMBERS,
    "tiles": [[t[0], t[1], codes.index(t[2])] for t in tiles],
    "cities": {k: [round(v, 3) for v in grid(*ll)] for k, ll in CITIES.items()},
}
for m in MEMBERS:
    n = sum(1 for t in tiles if t[2] == m)
    print(m, n)
print("dalles :", len(tiles), "| pays :", len(codes))
open(os.path.join(ROOT, "assets/africa.js"), "w").write("// Généré par tools/afrique.py (Natural Earth 1:50m, domaine public).\nwindow.FS_AFRICA = " + json.dumps(out, separators=(",", ":")) + ";\n")
