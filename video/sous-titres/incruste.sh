#!/bin/bash
# Incruste la couche de sous-titres (WebM avec transparence, rendue depuis captions.html) sur le rendu d'un film.
# Le son du film est repris tel quel ; l'image est réencodée en H.264 (CRF 18 par défaut).
# usage : sous-titres/incruste.sh <film.mp4> <sous-titres.webm> <sortie.mp4> [crf]
set -euo pipefail
in="$1"
cap="$2"
out="$3"
crf="${4:-18}"
# le décodeur libvpx-vp9 est nécessaire pour lire la couche alpha du WebM
ffmpeg -v error -y -i "$in" -c:v libvpx-vp9 -i "$cap" \
  -filter_complex "[0:v][1:v]overlay=0:0:format=auto:eof_action=pass[v]" \
  -map "[v]" -map 0:a -c:v libx264 -preset slow -crf "$crf" -pix_fmt yuv420p -c:a copy -movflags +faststart "$out"
