# REVIEW — film FEG « De la facture à la réforme »

Fichier : `renders/FEG-Semaine-entrepreneuriat-2026.mp4` · 1920 × 1080 · 30 i/s · 1 min 49 s (109,4 s).

## Choix créatifs

- **Piste retenue** : A, « De la facture à la réforme ». Une seule prise continue à travers une maquette d'architecte isométrique (three.js, caméra orthographique). Un atelier isolé et sa facture impayée deviennent le fil conducteur jusqu'à la Déclaration de Libreville.
- **Non construites** : B, « Les points de la carte » (typographique, sur vert profond, musique seule) ; C, « Une journée de dirigeante » (récit à la première personne). Détail dans `STORYLINES.md`.
- **Look** : maquette blanche mate sur sol pierre froide #E8E9E4. Le vert signifie l'adhésion (#2E7D4F, #0A7537), le vert profond #063D21 l'institution, le bronze #AEAE7D le logo et la couronne de la tour. Police de la marque : Hyundai Sans Head/Text, issue du dépôt du site.
- **Idée de fin** : les 71 socles de la carte reprennent exactement les positions des 71 points du logo FEG, mesurées sur le fichier du logo. Vue du dessus, les socles deviennent les points du logo ; la vraie image du logo est calée au pixel et révèle les arcs et « FEG ».
- **L'atelier reste blanc** pendant tout le film, seul bâtiment non membre, et passe au vert sur « rejoignez ».
- **Données réelles uniquement** : 1959, 1 118 entreprises, 13 fédérations et leurs effectifs, ≈ 80 % du PIB, + 90 % de la main-d'œuvre formelle, missions, services, GEF 2026 (27 juin 2026, 8 ateliers), texte exact de l'Axe 1, comité paritaire de suivi. Les hauteurs des bâtiments suivent la répartition réelle des tailles (micro 57 %, petite 31 %, moyenne 9 %, grande 2 %).

## Voix off

- Google Gemini TTS, voix « Kore » (féminine). L01 à L09 avec `gemini-3.8-flash-tts`. L10 avec `gemini-3.8-flash-lite-tts`, car le niveau gratuit plafonne à 10 requêtes par jour sur le modèle principal.
- **Contrôle par Gemini (écoute automatique)** : transcription exacte sur les 9 phrases vérifiées, nombres bien lus (« mille neuf cent cinquante-neuf », « mille cent dix-huit », « quatre-vingt-dix pour cent », « deux mille vingt-six »), qualité jugée excellente. L09 et L10 sont jugées « même voix, passage inaudible ».
- **À écouter** : L06 a été décrite une fois comme une voix « masculine ». Sa hauteur mesurée (médiane 169 Hz) est pourtant identique à celle des autres phrases (156 à 180 Hz) : c'est la même voix, dans un registre féminin grave. La vérification croisée L05/L06 n'a pas pu aboutir (quota).
- Chaque phrase est normalisée à −16 LUFS, crête −1,5 dBTP. Calage mot à mot par détection des pauses réelles (ffmpeg) et répartition syllabique (`tools/voice.mjs`).

## Son

- Effets : souffle sur le grand recul, sur le vol vers le GEF et sur le retour à l'atelier, crescendo et impact sur l'arrivée du logo (banque HyperFrames, licence Pixabay).
- **Pas de musique** : Lyria 3 / 3.5 a un quota nul au niveau gratuit, Lyria RealTime passe par WebSocket (bloqué par le proxy de la session), HeyGen et HuggingFace sont bloqués. `tools/music.sh` (Lyria RealTime) et `tools/music_lyria3.py` (Lyria 3.5) sont prêts dès qu'une de ces voies s'ouvre. Il suffit ensuite de déposer `assets/bgm/track.wav` puis de lancer `node tools/build.mjs` : la piste est ajoutée à −16 dB sous la voix.
- Mixage final mesuré : **−15,1 LUFS intégrés, crête vraie −3,1 dBTP**, plage dynamique 4 LU. Le premier rendu sortait à −13,1 LUFS (voix mono à −16 LUFS dupliquée en stéréo) : la voix a été baissée de 2 dB, dans le projet (`data-volume="0.79"`) et sur la piste audio du MP4 livré (image non réencodée).
- Le son a été **mesuré, pas écouté** : niveaux, crêtes et positions vérifiés par outils.

## Ce qui a été vérifié

- `npx hyperframes check` : 0 erreur ; contraste 13/13 ; aucun avertissement de rythme (`line_unread`, `dead_stretch`) ; audio sans avertissement.
- Images de contrôle sur chaque mot-repère (facture, démarche, 1959, 1 118, 13, 80 %, 90 %, missions, fédération, Bureau, dialogue, Gabon, huit, Déclaration, plupart, réformes, services, rejoignez) : chaque élément arrive sur son mot.
- Alignement du logo vérifié au pixel (agrandissement × 3 : un seul disque net par point).

## Plan le plus faible, et ce que je ferais avec plus de temps

- **Plus faible** : le plan des missions (L05). La tour reste fixe 8 s ; seul le bandeau actif change. Ensuite, le plan large des réformes (L08), où les liaisons vertes restent fines à l'échelle de la carte entière.
- Avec plus de temps : une nappe musicale (Lyria 3 en niveau payant, ou une piste fournie par la FEG), un flou de mouvement sur les vols de caméra rapides, des fenêtres sur les bâtiments en plan rapproché, une version 9:16 pour les réseaux sociaux.

## Avertissements conservés

- `composition_file_too_large` (world.html) : la maquette est une seule scène WebGL continue ; la couper en fichiers casserait la prise unique.
- Messages de performance WebGL « GPU stall due to ReadPixels » : propres au rendu logiciel (SwiftShader), sans effet sur l'image.

## Points à valider par la FEG

- « La plupart des réformes engagées aujourd'hui au Gabon sont nées de ces travaux » : affirmation du brief, absente des documents fournis.
- « 24 recommandations » : décompte de la Déclaration (8 axes × 3 points), pas un chiffre écrit dans le texte.
- Téléphone affiché : +241 11 77 55 95, d'après le pied de page de la Déclaration. Le site mentionne aussi +241 011 77 55 57.
