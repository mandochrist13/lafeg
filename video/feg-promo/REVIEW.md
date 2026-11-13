# REVIEW — film FEG « De la facture à la réforme » (v2)

Deux fichiers, même image, 1920 × 1080, 30 i/s, 1 min 41 s (101,1 s) :

- `renders/FEG-Semaine-entrepreneuriat-2026-voix.mp4` : voix off féminine + musique.
- `renders/FEG-Semaine-entrepreneuriat-2026-sans-voix.mp4` : musique seule, les titres portent le récit.

Pour regénérer : `node tools/build.mjs` (voix) ou `node tools/build.mjs --sans-voix`, puis `npx hyperframes render`. Une seule racine, `index.html`, reçoit la variante choisie. Le dépôt garde la version voix par défaut.

## Ce qui a changé depuis la v1 (demandes de la FEG)

- **Voix plus naturelle** : audition de cinq voix Gemini, classées par une écoute automatique Gemini. Despina arrive en tête (naturel 9/10, engagement 8,5/10, chaleur 9/10, contre 6/10 pour Kore, jugée « robotique »). La narration complète est générée **d'un seul tenant**, ce qui donne une prosodie continue d'une phrase à l'autre, puis découpée aux pauses réelles (`tools/voice_onepass.mjs`).
- **Réforme formulée en creux** : « La dette intérieure, la fiscalité, la commande publique, le financement des PME : ensemble, les entreprises pèsent désormais sur les réformes du pays ». La phrase fait écho à « une entreprise pèse peu » (L02). Le titre à l'écran devient « La voix des entreprises au cœur des réformes ».
- **Source retirée** : la mention « Fichier unique des adhérents, au 31 octobre 2026 » n'apparaît plus.
- **Musique** : SoundHill, « Find Yourself », fournie par la FEG.
- **Version sans voix** : couche de titres `compositions/ov-titres.html`. Elle contient la citation du Président (« L'histoire économique d'un pays s'écrit sur le terrain… », Alain-Claude Kouakoua, site lafeg.ga), « Seule, une entreprise pèse peu », « 13 fédérations métiers », « Porter la voix des entreprises », « Votre préoccupation remonte jusqu'à l'État », « Des services au quotidien » et le thème du GEF 2026 (texte exact de la Déclaration).
- Cadrages ajustés pour laisser une zone libre à chaque titre : atelier en bas à droite à l'ouverture, en haut à gauche de la fin.

## Voix (version voix)

- Google Gemini TTS `gemini-3.8-flash-tts`, voix « Despina ».
- **Contrôle Gemini** : dix phrases transcrites sans coupure ni mot manquant, voix féminine, naturel 8/10.
- **Erreur corrigée** : la première prise disait « dette **antérieure** », confirmé par trois modèles. La phrase L08 a été régénérée seule, avec articles, puis vérifiée (« intérieure », voyelle [ɛ̃]) avant d'être gardée (`tools/voice_retake.mjs`).
- Chaque phrase est normalisée à −16 LUFS, crête −1,5 dBTP, avec un gain de 0,79 dans le mixage.

## Musique

- Le morceau dure 138 s à 120 BPM. Sa section finale (accord final à 129,9 s) est calée sur l'arrivée du logo : le film commence au cœur du morceau et se termine sur sa fin naturelle.
- Correspondances : la partie calme (50–59 s du morceau) tombe sous la carte et les fédérations, la remontée sous la naissance de la tour, le sommet d'énergie (93,7 s) sous le Gabon Economic Forum, la descente (115–130 s) sous le message final.
- **Version voix** : enveloppe de volume. Musique présente avant la voix (0,5), en retrait sous la parole (0,19, soit environ 14 dB sous la voix), relevée entre les phrases (0,36) et pleine sur le logo (0,85).
- **Version sans voix** : musique à 0,85 du début à la fin.
- Le crescendo et l'impact de fin ont été retirés : l'accord final du morceau porte l'arrivée du logo. Il reste trois souffles discrets sur les grands mouvements de caméra.
- Licence : morceau présenté comme libre de droits (SoundHill). **Vérifier les conditions de SoundHill**, qui demande souvent une mention de l'artiste dans la description de la vidéo publiée.

## Ce qui a été vérifié

- `npx hyperframes check` sur les deux versions : 0 erreur ; contraste 43/43 ; aucun avertissement de temps de lecture (`line_unread` corrigé sur la date du GEF) ; audio sans avertissement.
- Images de contrôle sur chaque mot-repère et sur chaque titre de la version sans voix : aucun titre ne chevauche un objet 3D.
- Le son a été **mesuré, pas écouté** (niveaux en fin de rendu, voir plus bas).

## Avertissements conservés

- `composition_file_too_large` (world.html) : la maquette est une seule scène WebGL continue.
- `canvas_content_at_edge` vers 50 s : la tour est volontairement coupée par le bord du cadre pendant le plan de la table du dialogue.
- Messages WebGL « GPU stall due to ReadPixels » : propres au rendu logiciel, sans effet sur l'image.

## Plans les plus faibles, et pistes

- Les missions (tour fixe pendant ~8 s) et le plan large des réformes (liaisons fines à l'échelle de la carte).
- Avec plus de temps : flou de mouvement sur les vols de caméra, fenêtres sur les bâtiments en gros plan, version 9:16 pour les réseaux sociaux.

## Points à valider par la FEG

- « 24 recommandations » : décompte de la Déclaration (8 axes × 3 points).
- Téléphone affiché : +241 11 77 55 95 (pied de page de la Déclaration ; le site mentionne aussi +241 011 77 55 57).
- Mention de l'artiste de la musique selon la licence SoundHill.
