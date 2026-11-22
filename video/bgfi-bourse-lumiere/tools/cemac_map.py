# Carte des six pays de la CEMAC (Natural Earth 1:50m via world-atlas) -> lumières de l'épargne.
# usage : python3 -I cemac_map.py <countries-50m.json> <sortie.json>
import json, math, sys

topo = json.load(open(sys.argv[1], encoding="utf-8"))
sx, sy = topo["transform"]["scale"]
tx, ty = topo["transform"]["translate"]
arcs = []
for a in topo["arcs"]:
    x = y = 0
    pts = []
    for dx, dy in a:
        x += dx; y += dy
        pts.append((x * sx + tx, y * sy + ty))
    arcs.append(pts)

CEMAC = {"120": "Cameroun", "140": "Centrafrique", "148": "Tchad", "178": "Congo", "226": "Guinée équatoriale", "266": "Gabon"}
geoms = {}
for g in topo["objects"]["countries"]["geometries"]:
    if str(g.get("id")) in CEMAC:
        geoms[str(g["id"])] = g
missing = set(CEMAC) - set(geoms)
assert not missing, missing
for k, g in geoms.items():
    print(k, g["properties"].get("name"), g["type"])

def arc_pts(i):
    return arcs[i] if i >= 0 else arcs[~i][::-1]

def rings_of(g):
    polys = g["arcs"] if g["type"] == "MultiPolygon" else [g["arcs"]]
    out = []
    for poly in polys:
        rs = []
        for ring in poly:
            pts = []
            for i in ring:
                p = arc_pts(i)
                pts.extend(p if not pts else p[1:])
            rs.append(pts)
        out.append(rs)
    return out

# utilisation des arcs : frontière intérieure (deux pays CEMAC) ou extérieure
use = {}
for k, g in geoms.items():
    polys = g["arcs"] if g["type"] == "MultiPolygon" else [g["arcs"]]
    for poly in polys:
        for ring in poly:
            for i in ring:
                j = i if i >= 0 else ~i
                use.setdefault(j, set()).add(k)

PH0 = math.radians(9.0)
K = 0.5  # unités monde par degré
allpts = [p for g in geoms.values() for poly in rings_of(g) for r in poly for p in r]
lon0, lon1 = min(p[0] for p in allpts), max(p[0] for p in allpts)
lat0, lat1 = min(p[1] for p in allpts), max(p[1] for p in allpts)
lonC, latC = (lon0 + lon1) / 2, (lat0 + lat1) / 2
print(f"bbox lon {lon0:.2f}..{lon1:.2f} lat {lat0:.2f}..{lat1:.2f}")
proj = lambda lon, lat: ((lon - lonC) * K * math.cos(PH0), (lat - latC) * K)

def simplify(pts, eps):
    if len(pts) < 3:
        return pts
    (x0, y0), (x1, y1) = pts[0], pts[-1]
    dx, dy = x1 - x0, y1 - y0
    L = math.hypot(dx, dy) or 1e-9
    dmax, imax = 0, 0
    for i in range(1, len(pts) - 1):
        d = abs(dy * pts[i][0] - dx * pts[i][1] + x1 * y0 - y1 * x0) / L
        if d > dmax:
            dmax, imax = d, i
    if dmax > eps:
        return simplify(pts[: imax + 1], eps)[:-1] + simplify(pts[imax:], eps)
    return [pts[0], pts[-1]]

ext, inner = [], []
for j, owners in use.items():
    pl = simplify([proj(*p) for p in arcs[j]], 0.02)
    pl = [[round(x, 3), round(y, 3)] for x, y in pl]
    (inner if len(owners) > 1 else ext).append(pl)

# polygones projetés par pays (pour le tirage des points)
cpolys = {k: [[[proj(*p) for p in r] for r in poly] for poly in rings_of(g)] for k, g in geoms.items()}

def inside(x, y, rings):
    c = False
    for r in rings:
        n = len(r)
        for i in range(n):
            (x1, y1), (x2, y2) = r[i], r[(i + 1) % n]
            if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
                c = not c
    return c

def country_of(x, y):
    for k, polys in cpolys.items():
        for rings in polys:
            if inside(x, y, rings):
                return k
    return None

# grille hexagonale décalée, tirage déterministe
seed = 1971
def rnd():
    global seed
    seed = (seed * 1103515245 + 12345) & 0x7FFFFFFF
    return seed / 0x7FFFFFFF

S = 0.272  # pas de la grille (unités monde)
pts = []
xs0, xs1 = proj(lon0, 0)[0], proj(lon1, 0)[0]
ys0, ys1 = proj(0, lat0)[1], proj(0, lat1)[1]
row = 0
y = ys0
while y <= ys1:
    x = xs0 + (S / 2 if row % 2 else 0)
    while x <= xs1:
        jx, jy = x + (rnd() - 0.5) * S * 0.7, y + (rnd() - 0.5) * S * 0.7
        k = country_of(jx, jy)
        if k:
            pts.append([round(jx, 3), round(jy, 3), list(CEMAC).index(k)])
        x += S
    y += S * math.sqrt(3) / 2
    row += 1

# centroïdes (moyenne des points tirés) et villes
cent = {}
for ci, k in enumerate(CEMAC):
    sel = [p for p in pts if p[2] == ci]
    cent[CEMAC[k]] = [round(sum(p[0] for p in sel) / len(sel), 3), round(sum(p[1] for p in sel) / len(sel), 3), len(sel)]
cities = {"Douala": proj(9.70, 4.05), "Libreville": proj(9.45, 0.39), "Yaoundé": proj(11.52, 3.87)}
out = {
    "source": "Natural Earth 1:50m (domaine public), via le paquet npm world-atlas 2.0.2",
    "k": K, "lonC": round(lonC, 4), "latC": round(latC, 4), "phi0": 9.0,
    "countries": [CEMAC[k] for k in CEMAC],
    "ext": ext, "int": inner, "pts": pts, "cent": cent,
    "cities": {k: [round(v[0], 3), round(v[1], 3)] for k, v in cities.items()},
}
json.dump(out, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print("points", len(pts), "ext arcs", len(ext), sum(len(a) for a in ext), "int arcs", len(inner), sum(len(a) for a in inner))
print(json.dumps(cent, ensure_ascii=False))
print({k: [round(v[0], 2), round(v[1], 2)] for k, v in cities.items()})
