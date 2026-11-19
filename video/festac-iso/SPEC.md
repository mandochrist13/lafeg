# SPEC — « FESTAC, la voix des travailleurs africains » (présentation 3D isométrique)

GOAL : présenter la FESTAC à partir de ce que dit festac.org. Un travailleur de la sécurité sociale, un syndicaliste ou un partenaire comprend :

- qui la FESTAC représente : les travailleurs des caisses de sécurité sociale ;
- son lien avec la CIPRES, son siège à Libreville et ses 10 pays membres ;
- sa mission, sa gouvernance et son centre de formation (CNRF-DPDS) ;
- où elle porte la voix des travailleurs : la Conférence internationale du Travail (Genève) et le Conseil des ministres de la CIPRES ;
- ses partenaires, la Tribune des Droits Sociaux et ses quatre valeurs.

Il retient l'adresse : festac.org.

OUTPUT : HyperFrames 0.9.41, 1920 × 1080, 30 im/s, MP4 H.264 + AAC, comme les films 3D CNAMGS et BGFI.

TIME : 114,9 s ; le logo de fin arrive à 108,7 s.

## Idée

Un monde miniature en 3D isométrique (Three.js, caméra orthographique) :

- **Le campus de la FESTAC.** Une caisse de sécurité sociale, le siège, l'Assemblée générale, le Bureau exécutif, les commissions, le centre de formation, le média, la salle des rencontres avec les partenaires.
- **La carte.** L'Afrique de l'Ouest et du Centre en dalles (Natural Earth, domaine public). Les 10 pays membres montent en bleu ; épingles sur Lomé (CIPRES), Libreville (siège) et Genève (CIT).

La caméra passe d'un lieu à l'autre au fil de la voix. Les étiquettes sont en HTML, reliées à leur objet par un trait fin.

## Look

- **Couleurs FESTAC.** Bleu #1F487C, bleu nuit #14325A, rouge #C8423B, or #D9A21B, vert #2E8B4F ; sol gris très clair, fond blanc.
- **Écriture.** Montserrat ; titres 64 px, étiquettes 32 à 42 px ; noms de pays en blanc ombré sur les dalles.
- **Personnages.** Pions simples aux couleurs FESTAC, sans visage.
- **Images.**
  - Le logo FESTAC (festac.org) et le médaillon de la Tribune (découpé dans la vidéo WhatsApp de la Tribune).
  - Les logos des partenaires : CNSS, CNAMGS, CPPF, CNPS.
- **Bâtiments.** Symboliques : on ne connaît pas l'apparence réelle des lieux.

## Récit

| Temps | Voix | Image |
| --- | --- | --- |
| 0–13 s | L01 : les caisses de sécurité sociale d'Afrique ; pensions, soins, familles | Une caisse en 3D, ses guichets ; trois panneaux : Pensions, Soins, Familles. |
| 14–22 s | L02 : la FESTAC, leur fédération | La caméra s'élève sur le campus ; le siège FESTAC, son nom complet. |
| 23–32 s | L03 : la CIPRES, 18 États | La carte en dalles ; épingle sur Lomé, « Secrétariat de la CIPRES », « 18 États membres ». |
| 33–41 s | L04 : siège à Libreville, 10 pays membres | Épingle sur Libreville ; les 10 pays membres montent en bleu, avec leur nom. |
| 42–51 s | L05 : la mission | Retour au siège : panneaux « Défendre » et « Protection sociale universelle et équitable ». |
| 52–60 s | L06 : la gouvernance | Assemblée générale, Bureau exécutif, commissions techniques (formation, communication, protection sociale). |
| 61–71 s | L07 : le centre de formation | La salle de classe du CNRF-DPDS ; Droit du travail, Négociation collective, Santé et sécurité. |
| 72–79 s | L08 : la CIT à Genève, le Conseil des ministres de la CIPRES | De Libreville, un arc monte jusqu'à Genève. |
| 80–91 s | L09 : les partenaires et les rencontres | La salle des rencontres : CNSS, CNAMGS, CPPF, CNPS (Côte d'Ivoire) autour d'une table ronde. |
| 92–97 s | L10 : la Tribune des Droits Sociaux | Le média, son antenne et le médaillon ; ondes radio. |
| 98–108 s | L11 : les quatre valeurs, festac.org | Quatre colonnes se lèvent (Coopération, Défense, Gouvernance, Échange) ; « La voix des travailleurs africains ». |
| 108–115 s | Carte de fin | Logo FESTAC, « La voix des travailleurs africains », les quatre valeurs, festac.org, contact. |

## Son

- **Voix.** Voix féminine chaleureuse, Google Gemini TTS (voix Sulafat, gemini-3.8-flash-tts).
  - Elle est enregistrée en une seule prise, pour garder le même ton d'un bout à l'autre.
  - `tools/resplit.py` coupe la prise en 11 phrases aux silences, repérés par Whisper.
  - Prononciation : FESTAC « fès-tak », CIPRES « si-prèss », CNAMGS « knam-jé-èss » ; CNSS, CPPF et CNPS lettre par lettre.
- **Calage mot à mot.** `tools/align.py` apparie les pauses réelles de chaque phrase à sa ponctuation, puis répartit les syllabes entre ces repères. Les apparitions tombent sur les mots dits.
- **Musique.**
  - C'est la prise « kora » du film Tribune (MusicGen medium, 104 bpm).
  - Elle est prolongée sur la grille des temps (`../festac-tribune/tools/musique.py`, boucles du temps 12 au temps 44) jusqu'à 114,9 s.
  - Niveau −15,1 LUFS ; elle baisse sous la voix et remonte sur la carte de fin.
  - Licence MusicGen CC BY-NC 4.0 : à valider pour la diffusion.

## Fichiers

- `compositions/world.html` : le monde 3D, la carte, la caméra et les étiquettes.
- `compositions/ov-end.html` : la carte de fin.
- `assets/africa.js` : les dalles de la carte (`tools/afrique.py`, depuis Natural Earth).
- `assets/cues.js` et `index.html` : générés par `tools/build.mjs` (temps des phrases, des mots et automation de la musique).
- `tools/lines.json` : le texte de la voix.
- `tools/voice_onepass.mjs`, `tools/resplit.py`, `tools/align.py` : la voix et son calage.
- `renders/FESTAC-presentation-3D.mp4` : le film.

## À valider

- La licence de la musique (MusicGen, CC BY-NC 4.0).
- L'usage des logos des partenaires (CNSS, CNAMGS, CPPF, CNPS) dans une vidéo de la FESTAC.
- Les bâtiments, la salle de classe et la salle des rencontres sont symboliques.
- « 18 États » pour la CIPRES et « 10 pays membres » pour la FESTAC viennent de festac.org.
- Les quatre commissions citées par le site (Protection sociale, Formation, Communication, Relations internationales) : le film en montre trois.
- Le médaillon de la Tribune est découpé dans une vidéo WhatsApp, en basse définition.
