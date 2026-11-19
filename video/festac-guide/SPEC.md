# SPEC — « La FESTAC, la fédération de votre syndicat » (vidéo explicative 2D)

GOAL : un film pratique pour les représentants des travailleurs des institutions de sécurité sociale : délégués du personnel, délégués syndicaux, responsables syndicaux. À la fin, ils savent :

- ce qu'est la FESTAC : la fédération des syndicats des travailleurs de la prévoyance sociale des pays affiliés à la CIPRES, avec son siège à Libreville et 10 pays membres ;
- ce que l'adhésion apporte : une voix plus forte (Assemblée générale, Conférence internationale du Travail), la formation au CNRF-DPDS, les échanges entre pays, la défense des droits, l'information (publications, rapports, Tribune des Droits Sociaux) ;
- comment adhérer et contacter la FESTAC : contact@festac.org, +241 74 00 34 43, siège à Libreville, du lundi au vendredi de 8 h à 17 h.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC, dans le style des films 2D d'adhésion FEG et CNAMGS.

TIME : 100,4 s ; la dernière phrase finit à 94,4 s, puis la carte de fin tient 6 s.

## Look

- **Fond.** Blanc, en aplats.
- **Couleurs FESTAC.** Bleu #1F487C, bleu nuit #14325A, rouge #C8423B, or #D9A21B, vert #2E8B4F ; barre de quatre couleurs en signature.
- **Écriture.** Montserrat 600 à 800 ; titres 64 à 80 px, texte courant 40 à 58 px, rien sous 28 px (sauf l'écran du téléphone, décoratif).
- **Personnages.** La bibliothèque 2D des films FEG et CNAMGS (`assets/people.js`), avec une distribution propre au film (`assets/cast.js`). Chacun garde la même tenue d'une scène à l'autre :
  - Aminata, déléguée du personnel (Gabon) ;
  - Koffi, délégué syndical ;
  - M. Mba, responsable syndical ;
  - la formatrice du CNRF-DPDS ;
  - Ousmane (Sénégal) et Adjoua (Côte d'Ivoire), en wax ;
  - l'accueil du siège.
- **Images.** Le logo FESTAC (festac.org) et le médaillon de la Tribune ; la carte des pays membres en dalles (Natural Earth, comme le film 3D).
- **Canaux.** WhatsApp et YouTube sont nommés en toutes lettres avec des icônes génériques, pas les logos des marques.

## Récit

| Temps | Voix | Image |
| --- | --- | --- |
| 0–13,6 s | L01 : « Vous êtes délégué du personnel… Cette vidéo est pour vous. » | Vignette : logo FESTAC et « La fédération de votre syndicat ». Trois panneaux en buste arrivent sur leur mot : déléguée du personnel, délégué syndical, responsable syndical. « dans une institution de sécurité sociale ? », puis « Cette vidéo est pour vous. » |
| 13,6–22,3 s | L02 : la FESTAC fédère les syndicats… siège à Libreville | Le logo, six syndicats reliés à lui ; « Travailleurs de la prévoyance sociale » ; la carte, les 10 pays membres qui s'allument, l'épingle sur Libreville. |
| 22,3–31,5 s | L03 : une voix plus forte, de l'AG à la CIT | Koffi parle (bulle et ondes) ; un arc pointillé porte la voix à l'Assemblée générale, puis à la Conférence internationale du Travail (Genève). |
| 31,5–42,1 s | L04 : le centre de formation | La formatrice au tableau du CNRF-DPDS ; les quatre modules s'écrivent sur leur mot. |
| 42,1–47,4 s | L05 : les échanges entre pays membres | Ousmane (Sénégal), Aminata (Gabon) et Adjoua (Côte d'Ivoire) ; bulles, puis documents, idées et résultats qui passent de l'un à l'autre. |
| 47,4–57,9 s | L06 : défendre les droits | Cinq syndicalistes se donnent la main sur « Ensemble » ; quatre cartes : sécurité sociale, droit syndical, formation, conditions de travail justes. |
| 57,9–66,8 s | L07 : rester informé | Publications, rapports des sessions internationales, la Tribune ; le fil d'actualité sur un téléphone ; WhatsApp et YouTube. |
| 66,8–73,5 s | L08 : pour adhérer | M. Mba arrive au comptoir FESTAC ; l'accueil présente « Conditions d'adhésion » et « Avantages de la fédération ». |
| 73,5–88,9 s | L09 : le contact | Une fiche : courriel, téléphone (chaque groupe de chiffres s'allume quand il est dit), siège et boîte postale, horaires. |
| 88,9–100,4 s | L10 : « La FESTAC : ensemble, pour une protection sociale universelle et équitable. » | Le logo complet ; les sept personnages se donnent la main ; le slogan mot à mot ; festac.org et le contact. |

## Son

- **Voix.** Voix féminine chaleureuse, Google Gemini TTS (voix Sulafat, gemini-3.8-flash-tts).
  - Elle est enregistrée en une seule prise et coupée en 10 phrases (`tools/resplit.py`).
  - Le numéro de téléphone est écrit en toutes lettres dans le texte pour être bien prononcé.
- **Calage mot à mot.** `tools/align.py` apparie les pauses réelles de chaque phrase à sa ponctuation, puis répartit les syllabes entre ces repères. Sur la phrase du contact, chaque groupe de chiffres tombe sur sa pause.
- **Musique.**
  - La prise « kora » du film Tribune (MusicGen medium, 104 bpm), prolongée à 100,4 s.
  - Niveau −15,2 LUFS. Elle baisse sous la voix et remonte après la dernière phrase.
  - Licence MusicGen CC BY-NC 4.0 : à valider.
- **Bruitages.** 39 bruitages discrets (Pixabay, licence Pixabay, voir `assets/sfx/CREDITS.md`) :
  - glissés à l'entrée des panneaux ;
  - clics doux sur les cartes ;
  - plume sur le tableau ;
  - papier pour les fiches d'adhésion ;
  - tampon quand l'épingle se pose sur Libreville.

## Fichiers

- `compositions/s1-vous.html` … `s10-fin.html` : une scène par phrase.
- `assets/people.js`, `assets/cast.js` : les personnages.
- `assets/africa.js` : les dalles de la carte.
- `assets/cues.js` et `index.html` : générés par `tools/build.mjs` (temps des phrases et des mots, musique, bruitages).
- `tools/lines.json` : le texte de la voix.
- `tools/sfx.json` : le plan des bruitages.
- `tools/align.py` : le calage mot à mot.
- `renders/FESTAC-guide-2D.mp4` : le film.

## À valider

- La licence de la musique (MusicGen, CC BY-NC 4.0).
- Les conditions d'adhésion et les avantages ne sont pas détaillés sur festac.org : le film invite à contacter la FESTAC sans les énumérer.
- Le site affiche aussi contact@festac.com et contact@festac-cipres.org ; le film retient contact@festac.org, celui de la fiche « Contact ».
- Les personnages, leurs noms et leurs pays (Gabon, Sénégal, Côte d'Ivoire, tous membres) sont des illustrations.
- La boîte postale (BP 1308) et les horaires viennent de la page « Contact » du site.
