#!/usr/bin/env bash
# Nappe musicale générée par Google Lyria RealTime (même clé que la voix off).
# La clé n'est pas ici : le proxy de la session l'injecte dans l'en-tête x-goog-api-key.
# Usage : bash tools/music.sh   (durée = durée totale du film + 1 s, lue dans assets/cues.js)
set -euo pipefail
cd "$(dirname "$0")/.."
TOTAL=$(node -e 'const s=require("fs").readFileSync("assets/cues.js","utf8");const m=/"total":([0-9.]+)/.exec(s);console.log(Math.ceil(parseFloat(m[1])+1))')
mkdir -p assets/bgm
GEMINI_API_KEY="${GEMINI_API_KEY:-${GOOGLE_API_KEY:-injecte-par-le-proxy}}" python3 ../../.agents/skills/media-use/audio/scripts/lyria-recipe.py \
  --output assets/bgm/track.wav \
  --duration "$TOTAL" \
  --prompt "Minimal corporate orchestral underscore for an institutional film: soft felt piano ostinato, warm low strings, discreet pulsing synth bass, light mallets. Calm, confident, precise, slowly building to a gentle uplifting lift near the end. Instrumental." \
  --negative-prompt "vocals, singing, choir, heavy drums, EDM drop, trap, tribal percussion, folk instruments, distorted guitar" \
  --bpm 96 --brightness 0.6 --density 0.45 --scale D_MAJOR_B_MINOR
ffprobe -v error -show_entries format=duration -of csv=p=0 assets/bgm/track.wav
