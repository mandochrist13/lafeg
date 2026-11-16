# SPEC — FEG · « La Matinale » (réunion hebdomadaire du Secrétariat général), version réseaux sociaux

GOAL: donner envie de regarder la vidéo de la Matinale jusqu'au bout, sans voix off. On garde les mêmes images et les mêmes messages, mais l'accroche est plus forte, le rythme tient sur la musique, l'image est plus belle et l'habillage aux couleurs de la FEG. La musique est la piste SoundHill des autres vidéos de la FEG (v2).

OUTPUT: HyperFrames, 1080 × 1920 (9:16), 30 i/s, MP4 H.264 + AAC. Musique seule, aucune voix.

TIME: 44,4 s. 37,3 s d'images, puis la carte de fin : le dernier accord de la musique frappe à 38,3 s, sur le logo, et s'éteint avant 44 s.

## Source

- `assets/source/matinale-origine.mp4` : la vidéo transmise par la FEG (WhatsApp, 576 × 1024, 30 i/s). C'est une seule prise continue au téléphone, tournée en salle de réunion de l'immeuble Odyssée, avec vue sur la mer.
- Ses textes animés sont incrustés dans l'image, entre 74 et 89 % de la hauteur : « Réunion hebdomadaire du Secrétariat général », « La Matinale », « Temps d'échange, de coordination et de suivi de dossiers », « Pour un accompagnement plus efficace de vos entreprises », « Excellent lundi et bonne semaine productive à tous », « La FEG, au service de ses entreprises membres ».
- Sa musique d'origine, un morceau épique de bande-annonce sans voix, a été remplacée à la demande de la FEG (v2) par SoundHill « Find Yourself », la piste des autres vidéos de la FEG (`assets/audio/soundhill-find-yourself.mp3`, 138 s, 120 BPM).

## Préparation (`tools/prep.sh`)

- `assets/video/matinale-hd.mp4` : l'image agrandie en 1080 × 1920 (Lanczos), avec un léger débruitage avant et une netteté douce après, sans retouche de couleur. Le fichier est régénérable et n'est pas versionné.
- `assets/audio/musique.wav` : SoundHill « Find Yourself », prise à partir de 92,16 s du morceau.
  - Les temps forts (une mesure toutes les 2 s) tombent sur les secondes paires de la vidéo, donc sur les coupes de 14, 22 et 24 s ; une phrase musicale commence à 6 s, avec le premier message.
  - Le dernier accord du morceau frappe à 38,3 s et s'éteint seul avant 44 s.
  - La piste entre en cours de phrase : elle monte en 0,8 s, puis est ramenée à −14 LUFS et −1,5 dBTP (loudnorm en deux passes).

## Montage (`index.html`)

La prise unique est coupée en quatre morceaux, dans l'ordre du tournage. Les coupes tombent sur les temps forts de la musique.

| Plan | Écran | Source | Vitesse | Contenu |
| --- | --- | --- | --- | --- |
| 1 | 0 → 14 s | 0,0 → 13,0 s | 0,93 | le Secrétaire général et la vue sur la mer, puis la première intervention |
| 2 | 14 → 22 s | 14,6 → 22,9 s | 1,04 | le portrait officiel, les participants, le kakémono « La voix du secteur privé », l'écran |
| 3 | 22 → 24 s | 23,8 → 26,2 s | 1,2 | la deuxième intervention |
| 4 | 24 → 38 s | 29,4 → 44,4 s | 1,07 | les participants, le kakémono, la troisième intervention, le Secrétaire général |

Passages retirés : deux panoramiques sur des chaises vides (13,0 → 14,6 s et 26,2 → 29,4 s) et le flash de surexposition (22,9 → 23,8 s).

- **Caméra** : poussée lente dans chaque plan et « punch » de 6 % qui se pose à chaque coupe. On anime le cadre, jamais la vidéo.
- **Étalonnage** (`media-treatment`, recette Natural Portrait), le même sur les quatre plans : `skin-soft` à 0,7 ; exposition +0,02, contraste +0,08, hautes lumières −0,08, ombres +0,04, blancs +0,02, noirs −0,05, température +0,05, teinte +0,01, vibrance +0,06, saturation +0,05 ; vignette 0,16. Le résultat est un peu plus chaud, avec plus de relief et des peaux naturelles.

## Habillage (`compositions/habillage.html`)

- **Couleurs FEG** : vert #0A7537, vert profond #063D21, bronze #AEAE7D (#D6D4A6 pour le texte clair sur le vert). **Typo** : Hyundai Sans Head Bold et Medium, Hyundai Sans Text Medium. Aucun texte sous 30 px.
- **Pied de page** : un bandeau vert profond qui couvre le bas de l'image à partir de 1400 px. Il masque les anciens textes incrustés, avec un dégradé vers l'image et un motif de points bronze discret.
  - Il porte la marque : logo FEG blanc, puis « LA MATINALE · Réunion hebdomadaire du Secrétariat général ». Le nom n'entre qu'à la sortie de l'accroche, pour ne pas faire doublon.
  - Une barre de progression verte et bronze le borde ; elle se remplit jusqu'à la carte de fin.
  - Le bas du bandeau reste libre pour les boutons des applications.
- **Accroche** (0 → 5,9 s) : un soleil qui se lève, « LA », puis « MATINALE » en très grand, et « Réunion hebdomadaire du Secrétariat général » sur deux étiquettes bronze.
- **Messages** : les textes d'origine, mot pour mot et dans le même ordre, sur des étiquettes vertes et bronze. Chaque bande se déroule depuis la gauche et le texte monte. Ils sont placés selon le plan, pour ne cacher ni un visage, ni les mains de l'intervenante, ni le portrait officiel :
  - 6,0 → 13,8 s, en haut : « Temps d'échange, / de coordination / et de suivi de dossiers » ;
  - 16,0 → 21,9 s, en bas : « Pour un accompagnement / plus efficace / de vos entreprises » ;
  - 24,4 → 31,2 s, en bas : « Excellent lundi / et bonne semaine / productive à tous ! » ;
  - 32,0 → 37,4 s, en haut : « La FEG, au service / de ses entreprises / membres ».
- **Flashs** blancs (60 %) sur les coupes de 14, 22 et 24 s.
- **Carte de fin** (37,3 → 44,4 s) : le pied de page monte sur tout l'écran. Le logo FEG arrive sur le dernier accord (38,3 s), puis « LA VOIX DU SECTEUR PRIVÉ », un filet bronze, « lafeg.ga » et « La Matinale · chaque semaine ».

## Reconstruire

```bash
./tools/prep.sh                       # image agrandie (si absente) et musique SoundHill calée
npx hyperframes check                 # 0 erreur, 0 avertissement attendu
npx hyperframes render --quality delivery -o renders/FEG-La-Matinale-9x16-soundhill.mp4
```
