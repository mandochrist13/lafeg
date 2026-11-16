#!/bin/bash
# Prépare les médias de la Matinale à partir de la vidéo transmise par la FEG
# (assets/source/matinale-origine.mp4, 576 × 1024, 30 i/s, textes incrustés, musique sans voix).
#  - assets/video/matinale-hd.mp4 : image seule, agrandie en 1080 × 1920 (Lanczos), léger débruitage
#    avant l'agrandissement et netteté douce après ; aucune retouche de couleur (l'étalonnage est
#    fait dans la composition par media-treatment). Fichier régénérable, non versionné.
#  - assets/audio/musique.wav : la musique d'origine, ramenée à −14 LUFS et −1,5 dBTP (elle saturait
#    à +0,4 dBFS), en deux passes loudnorm.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=assets/source/matinale-origine.mp4

ffmpeg -v error -y -i "$SRC" -an \
  -vf "hqdn3d=1.2:1.2:5:5,scale=1080:1920:flags=lanczos,unsharp=5:5:0.5:5:5:0.0,format=yuv420p" \
  -c:v libx264 -preset slow -crf 15 -g 15 -r 30 -movflags +faststart assets/video/matinale-hd.mp4

M=$(ffmpeg -hide_banner -nostats -i "$SRC" -vn -af loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json -f null - 2>&1 | sed -n '/^{/,/^}/p')
get() { echo "$M" | python3 -c "import sys,json; print(json.load(sys.stdin)['$1'])"; }
ffmpeg -v error -y -i "$SRC" -vn -ar 48000 -ac 2 \
  -af "loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=$(get input_i):measured_TP=$(get input_tp):measured_LRA=$(get input_lra):measured_thresh=$(get input_thresh):offset=$(get target_offset):linear=true" \
  -c:a pcm_s16le assets/audio/musique.wav

ffprobe -v error -show_entries format=duration:stream=width,height -of compact assets/video/matinale-hd.mp4
ffmpeg -hide_banner -nostats -i assets/audio/musique.wav -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I|LRA|Peak):"
