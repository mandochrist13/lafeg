# SPEC — « Formation nationale : contrôle et vérification des cotisations sociales » (vertical)

GOAL : refaire la vidéo WhatsApp de la FESTAC qui annonce la formation nationale sur le contrôle et la vérification des cotisations sociales (VID-20261119-WA0042, 360 × 642, 90 s). Il faut mieux la présenter, avec une autre voix et une autre musique.

Le public visé (responsables syndicaux, délégués du personnel, responsables RH, officiers de police judiciaire) doit retenir :

- le thème, les dates, les heures et le lieu ;
- le partenaire (CNSS du Gabon) ;
- ce qu'on y apprend ;
- comment s'inscrire : avant le vendredi 20 novembre 2026, au 074 00 34 43.

OUTPUT : HyperFrames 0.9.41, 1080 × 1920 (vertical, comme l'original, pour WhatsApp et les statuts), 30 im/s, MP4 H.264 + AAC.

TIME : 87,2 s ; la voix finit à 82,2 s, puis le récapitulatif reste 5 s à l'écran.

## Faits repris de la vidéo d'origine

Ces faits viennent de son texte à l'écran et de sa voix (transcrite par Whisper et vérifiée par Gemini).

- « La protection sociale est un droit fondamental. Sa solidité repose sur la régularité et la transparence des cotisations. »
- La FESTAC organise une formation nationale sur le contrôle et la vérification des cotisations sociales. Elle est faite en collaboration avec la CNSS du Gabon, dont les experts sont les formateurs.
- Pendant deux jours, on apprend à :
  - comprendre les mécanismes de cotisation ;
  - vérifier les déclarations sociales ;
  - identifier les irrégularités ;
  - mieux protéger les droits des travailleurs.
- Rendez-vous : les 27 et 28 novembre 2026, de 7 h à 16 h, au Groupe IHEM International, à Nzeng-Ayong (Libreville), vers la fin du goudron.
- Public : responsables syndicaux, délégués du personnel, responsables RH et officiers de police judiciaire.
- Inscription : avant le vendredi 20 novembre 2026, auprès du Secrétariat permanent de la FESTAC, au 074 00 34 43.
- Slogan : « Faisons du contrôle des cotisations sociales un instrument de justice, de transparence et de solidarité. »
- Partenaire principal et technique : la CNSS du Gabon. Accompagnement : le Groupe IHEM International.
- Signature : « FESTAC : Solidarité, Expertise, Panafricanisme ! » ; médaillon de la Tribune des Droits Sociaux.

## Look

- **Couleurs FESTAC.** Fond bleu nuit en dégradé (#1F487C → #0B1E3B). L'or #E8B23A pour les mots forts, le rouge #C8423B pour l'appel à s'inscrire. Barre de quatre couleurs (bleu, rouge, or, vert).
- **Écriture.**
  - Montserrat 600 à 800 pour les textes ; Oswald 700 pour les dates, les heures, le numéro et les grands mots.
  - Les textes sont gros pour un téléphone : rien sous 28 px.
  - Le contenu reste dans la zone sûre, entre 260 et 1700 px de haut.
- **Bandeau du haut.** Logo FESTAC et « FORMATION NATIONALE · 27 & 28 novembre 2026 · Libreville », de l'annonce aux partenaires.
- **Photos.** Elles viennent du site festac.org : table ronde FESTAC – CNSS du 29 novembre 2025 et remise des attestations. Chacune porte une légende, pour qu'on ne les prenne pas pour des images de cette formation.
- **Logos.**
  - FESTAC et CNSS, et le médaillon de la Tribune.
  - Le Groupe IHEM International est écrit en toutes lettres : son logo n'existe pas en bonne qualité (il est flou dans la vidéo d'origine, et introuvable en ligne).
- **Icônes.** Simples, dessinées en SVG :
  - calendrier, œil, engrenages, document, loupe, bouclier ;
  - mégaphone, badge, mallette, étoile de police ;
  - horloge, épingle, téléphone.

## Récit

| Temps | Voix | Image |
| --- | --- | --- |
| 0–1,6 s | — | Couverture (vignette WhatsApp) : logo FESTAC, « FORMATION NATIONALE », « Contrôle et vérification des cotisations sociales », « 27 & 28 NOVEMBRE 2026 », « Libreville · avec la CNSS du Gabon ». |
| 1,6–8,8 s | L01 : droit fondamental ; cotisations régulières et transparentes | Sur la photo de la salle : « La protection sociale est un droit fondamental. », puis deux cartes, « régulières » et « transparentes ». |
| 8,8–19,6 s | L02 : la FESTAC organise… avec la CNSS | Photo de la table ronde ; « La FESTAC organise », bandeau « FORMATION NATIONALE », le thème mot à mot, la carte CNSS. |
| 19,6–33,3 s | L03 : deux jours, ce qu'on apprend | « 2 JOURS », « avec les experts formateurs de la CNSS », quatre cartes cochées sur leur verbe. |
| 33,3–43,2 s | L04 : rendez-vous | Les dates « 27 » et « 28 » sur deux pages de calendrier, « NOVEMBRE 2026 », « 7 h – 16 h ». Carte du lieu, où une épingle tombe là où la route goudronnée s'arrête. |
| 43,2–52,2 s | L05 : le public | « POUR QUI ? » et quatre tuiles. |
| 52,2–62,9 s | L06 : inscription | Fond rouge : « INSCRIVEZ-VOUS », « vendredi 20 novembre 2026 », Secrétariat permanent. Le numéro 074 00 34 43 s'allume groupe par groupe, au moment où il est dit. |
| 62,9–69,7 s | L07 : le slogan | Sur la photo des attestations : JUSTICE, TRANSPARENCE, SOLIDARITÉ. |
| 69,7–77,3 s | L08 : les partenaires | CNSS du Gabon (partenaire principal et technique), Groupe IHEM International (accompagnement). |
| 77,3–87,2 s | L09 : la signature | Logo complet ; SOLIDARITÉ, EXPERTISE, PANAFRICANISME ! ; récapitulatif (thème, dates, heures, lieu, inscription, numéro) ; médaillon de la Tribune. |

## Son

- **Voix.** Une voix féminine dynamique et claire, Google Gemini TTS (voix Kore, gemini-3.8-flash-tts). Elle remplace la voix masculine institutionnelle de l'original.
  - Elle est enregistrée en une seule prise (`tools/voice_onepass.mjs`), puis coupée en 9 phrases (`tools/resplit.py`, à l'aide de Whisper).
  - Le calage mot à mot vient de `tools/align.py`. La dernière phrase est calée avec `--min-pause 0.15` : sinon, la fermeture du « t » de FESTAC passait pour une pause.
  - Prononciation, vérifiée par Gemini :
    - FESTAC « fès-tak » ;
    - CNSS et IHEM épelés lettre par lettre, comme dans l'original ;
    - Nzeng-Ayong « n-zèng-a-yong ».
- **Musique.** Elle remplace la kora de l'original. C'est une nouvelle prise MusicGen (medium, en local), dans un autre style (voir `assets/bgm`), montée à la durée du film.
  - Elle baisse sous la voix et remonte sur le récapitulatif.
  - Lyria n'est pas disponible avec la clé du projet (quota nul).
- **Bruitages.** 35 bruitages discrets (Pixabay, voir `assets/sfx/CREDITS.md`) :
  - glissés aux changements de scène ;
  - clics doux sur les cartes ;
  - coches sur le programme ;
  - feuilles de calendrier ;
  - tampon sur « Rendez-vous » et « Inscrivez-vous ».

## Fichiers

- `compositions/s1-droit.html` … `s9-fin.html` : une scène par phrase.
- `compositions/ov-head.html` : le bandeau du haut.
- `assets/cues.js` et `index.html` : générés par `tools/build.mjs`.
- `tools/lines.json` : le texte de la voix.
- `tools/sfx.json` : le plan des bruitages.
- `assets/img/p-*.jpg` : les photos (festac.org).
- `renders/FESTAC-formation-cotisations.mp4` : le film.

## À valider

- **La date limite d'inscription, « avant le vendredi 20 novembre 2026 », est celle de l'original : c'est aujourd'hui.** Faut-il la repousser ?
- Le logo du Groupe IHEM International, à fournir en bonne qualité pour remplacer le nom écrit.
- Les photos sont des images d'archives de la FESTAC et de la CNSS, légendées comme telles.
- La licence de la musique (MusicGen, CC BY-NC 4.0).
