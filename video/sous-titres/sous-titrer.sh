#!/bin/bash
# Sous-titre un film FEG : piste calée sur la voix, couche transparente rendue par HyperFrames, incrustation.
# usage : sous-titres/sous-titrer.sh <projet> <film.mp4> <sortie.mp4> [crf]
#   ex. : sous-titres/sous-titrer.sh feg-point feg-point/renders/FEG-point-bronze.mp4 feg-point/renders/FEG-point-bronze-sous-titres.mp4
# La racine temporaire captions.html est supprimée après le rendu : un projet ne doit garder qu'une racine (index.html).
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
proj="$(cd "$1" && pwd)"
film="$(cd "$(dirname "$2")" && pwd)/$(basename "$2")"
out="$(cd "$(dirname "$3")" && pwd)/$(basename "$3")"
crf="${4:-18}"
tmp="$(mktemp -d)"
trap 'rm -f "$proj/captions.html"; rm -rf "$tmp"' EXIT
node "$here/captions.mjs" "$proj"
(cd "$proj" && npx --yes hyperframes@0.9.41 render -c captions.html --format webm -o "$tmp/sous-titres.webm" > "$tmp/rendu.log" 2>&1) || { tail -20 "$tmp/rendu.log"; exit 1; }
"$here/incruste.sh" "$film" "$tmp/sous-titres.webm" "$out" "$crf"
echo "écrit : $out"
