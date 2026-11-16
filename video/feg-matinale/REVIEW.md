# REVIEW — FEG · « La Matinale », version réseaux sociaux (v2, musique SoundHill)

## Livrables

- `renders/FEG-La-Matinale-9x16-soundhill.mp4` : 1080 × 1920, 30 i/s, 44,4 s, musique SoundHill, pas de voix. C'est la version maître.
- `renders/FEG-La-Matinale-9x16-soundhill-partage.mp4` : la même, plus légère, pour WhatsApp et les réseaux.
- La v1, avec la musique d'origine : `renders/FEG-La-Matinale-9x16.mp4` et `renders/FEG-La-Matinale-9x16-partage.mp4`.

## v2 : musique SoundHill (demande de la FEG)

« Remplace la musique par celle de SoundHill. »

- **La piste** : « Find Yourself » de SoundHill, celle des autres vidéos de la FEG (libre de droits). Elle remplace le morceau épique de la vidéo d'origine, dont la provenance n'était pas connue.
- **Le calage** : la piste est prise à partir de 92,16 s du morceau.
  - Ses temps forts tombent sur les coupes (14, 22 et 24 s).
  - Une phrase musicale commence avec le premier message (6 s).
  - Le dernier accord du morceau frappe à 38,3 s, juste quand le logo apparaît sur la carte de fin, puis s'éteint seul : la musique a une vraie fin, sans fondu forcé.
  - La piste commence en cours de phrase, d'où une montée de 0,8 s au début.
- **L'image s'adapte à la musique** :
  - le sursaut et le flash prévus pour l'impact de 36 s de l'ancienne musique sont retirés ;
  - les flashs des coupes sont adoucis (60 % au lieu de 85 %), pour cette musique plus douce ;
  - le logo de la carte de fin arrive sur le dernier accord.
- **Écoute automatique** (Gemini, musique seule, sans indication de ce qu'on attend) :
  - entrée « fluide et naturelle » ;
  - « vraie fin musicale complète, avec un dernier accord qui résonne et s'éteint naturellement » ;
  - aucun défaut ;
  - ambiance « moderne, dynamique, professionnelle et entraînante » ; énergie 7/10, note 10/10.
- **Son mesuré** sur la piste préparée : −14,0 LUFS, crête −2,0 dBFS. Le dernier accord est mesuré à 38,30 s (maximum à 38,45 s) ; le son passe sous −38 dB à 42 s.
- **Inchangés** : montage, textes, étalonnage, pied de page et carte de fin (seul le moment où le logo apparaît a bougé).
- **Contrôles du rendu v2** :
  - `check` : 0 erreur, 0 avertissement ; contraste : 16 textes sur 16 conformes WCAG AA ;
  - fichiers : 1080 × 1920, 30 i/s, 44,4 s ; version maître 47 Mo, version partage 13,6 Mo ;
  - son mesuré, pas écouté : −14,0 LUFS, crête −1,9 dBFS, plage de loudness 2,7 LU. La musique du fichier rendu est calée à 0,0 ms près sur la piste préparée ;
  - 16 images extraites du MP4 : l'accroche, les messages, les flashs sur les coupes de 14 et 22 s, plus de flash à 36 s, le pied de page qui monte, le logo qui apparaît à 38,3 s, puis la carte de fin complète.

## v1 : la demande

« Améliore mais toujours sans voix, donne envie de regarder », à propos de la vidéo WhatsApp de la Matinale (`VID-20261116-WA0021.mp4`).

## v1 : ce qui change par rapport à la vidéo d'origine

- **Une accroche dès la première seconde** : « LA MATINALE » en très grand, avec un petit soleil qui se lève, sur le plan du Secrétaire général et de la vue sur la mer. Dans l'original, le titre s'écrivait lettre à lettre en bas de l'image.
- **Du rythme** :
  - les deux panoramiques sur des chaises vides et le flash de surexposition (vers 23 s) sont retirés ;
  - les coupes tombent sur les impacts de la musique, à 14, 22 et 24 s ;
  - chaque plan a une poussée lente, un « punch » sur chaque coupe et un sursaut sur l'impact de 36 s.
- **Une image plus belle** : agrandie proprement de 576 × 1024 à 1080 × 1920, puis étalonnée de façon sobre (un peu plus chaude, plus de relief et de couleur, peaux naturelles).
- **Des textes lisibles** : les mêmes mots, dans le même ordre. Ils sont sur des étiquettes vertes et bronze qui se déroulent ligne par ligne, et non plus en lettres espacées sur l'image. Chacun est placé là où il ne cache ni un visage, ni les mains de l'intervenante, ni le portrait officiel.
- **L'habillage FEG** :
  - un pied de page vert profond masque les anciens textes incrustés et porte la marque (logo, « LA MATINALE · Réunion hebdomadaire du Secrétariat général ») ;
  - une barre de progression borde le pied de page ;
  - les polices et les couleurs sont celles des autres vidéos de la FEG.
- **Une vraie fin** : le pied de page monte sur tout l'écran et devient la carte de fin. On y voit le logo, « LA VOIX DU SECTEUR PRIVÉ », lafeg.ga et « La Matinale · chaque semaine », pendant que la musique s'éteint.
- **Le son** : la même musique, calée exactement comme dans l'original, mais sans saturation. L'original montait à +0,4 dBFS ; elle est ramenée à −14 LUFS, avec une crête à −1,5 dBTP.

## À valider par la FEG

- **Musique** : réglé en v2, la piste SoundHill remplace la musique d'origine. Si la licence SoundHill demande une mention, l'ajouter dans le texte de la publication.
- **Rushes** : les textes d'origine sont incrustés dans l'image, d'où le pied de page qui les masque. Avec les vidéos brutes du téléphone, sans texte, l'image pourrait occuper tout l'écran et être plus nette.
- **« La Matinale · chaque semaine »** sur la carte de fin : déduit de « réunion hebdomadaire ». « Excellent lundi » réserve la vidéo à une publication un lundi.

## v1 : contrôles

- `check` : 0 erreur, 0 avertissement ; contraste : 16 textes sur 16 conformes WCAG AA.
- Étalonnage comparé avant et après sur trois instants (2,6 s, 12 s et 29 s) : saturation moyenne +8 à +11 %, contraste égal ou un peu plus fort, peaux naturelles.
- Rendu : 1080 × 1920, 30 i/s, 44,4 s, H.264 + AAC.
- Son mesuré, pas écouté : −14,2 LUFS, crête −1,4 dBFS, plage de loudness 8,3 LU. La musique reste calée exactement comme dans l'original.
- 22 images extraites du MP4, de 0,5 à 43,5 s :
  - l'accroche se construit et le nom du rendez-vous n'entre dans le pied de page qu'après elle ;
  - chaque message arrive ligne par ligne au bon endroit ;
  - aucun titre ne couvre le portrait officiel ni les visages ;
  - les flashs tombent sur les coupes, le pied de page devient la carte de fin ;
  - aucun des anciens textes incrustés n'est visible.
