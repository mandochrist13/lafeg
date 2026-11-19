# Relecture — FEG, « Le point bronze »

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : la scène tient dans un seul fichier (une seule prise continue) |
| Exécution | 0 erreur |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 13/13 textes conformes WCAG AA |
| Audio | 0 problème |

Aucun texte ne fait moins de 28 px.

## Voix

Narration commune aux quatre films : L01, L02 et L10 régénérées en une seule requête (Despina) et vérifiées par transcription ; L03 à L09 reprises du film « La lumière des entreprises ». Calage mot à mot local.

## Ce que la relecture a corrigé

Le film a été vu en images fixes toutes les 2 s, puis en gros plan aux moments clés.

| Moment | Problème | Correction |
| --- | --- | --- |
| Tout le film | Plantage du rendu : un temps de la voix manquait (« remontent »), la table du Bureau calculait une taille non définie. | Temps ajouté ; garde-fou qui signale toute valeur non finie. |
| L01 | Les personnages étaient petits, les accessoires illisibles. | Caméra plus proche (le héros fait 70 px de rayon). |
| L01-L02 | Deux sauts enchaînés écrasaient trop les points. | Écrasement borné. |
| L02 | La bulle qui se perd était minuscule. | Bulle plus grande, caméra un peu plus proche. |
| L05 | Les noms des fédérations se plaçaient du mauvais côté en haut et en bas de l'anneau. | Ancrage corrigé : chaque nom est posé vers l'extérieur. |
| L05 | Les bouches qui chantent se voyaient peu. | Bouches plus grandes. |
| L07 | Le titre « Déclaration de Libreville » passait sous la fédération Construction. | Le titre est posé sous la page. |
| L07 | La page touchait la fédération du haut. | Page descendue de 12 px. |
| L10 | L'atterrissage manquait de vie. | Les voisins sautent pour l'accueillir, il plisse les yeux de joie. |

## Rendu

`renders/FEG-point-bronze.mp4`, en qualité « delivery », rendu en 4 min.

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz |
| Durée | 86,7 s |
| Poids | 33,9 Mo |
| Volume | −15,4 LUFS intégré, plage 3,3 LU, crête vraie −2,1 dBFS |

Vingt-six images extraites du MP4, de 1,5 s à 85,5 s, montrent les mêmes plans que les images de contrôle : le réveil, les trois métiers, la solitude, la carte et le compteur, les jauges, l'anneau des fédérations et « une seule voix », le Bureau exécutif et la table du dialogue, le Forum, ses ateliers et la Déclaration, les réformes, les badges, le saut dans la place, la carte de fin.

## À valider par la FEG

1. **Faits.** Ceux du film v6 déjà validé : 1959 ; plus de 1 100 entreprises ; près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle ; 13 fédérations et leurs effectifs ; Bureau exécutif ; dialogue public-privé ; Gabon Economic Forum, ses 8 ateliers et la Déclaration de Libreville (page 1 réelle) ; les quatre réformes ; les quatre services.
2. **Points et effectifs.** Les 70 points se répartissent entre les fédérations en proportion des effectifs (un point vaut environ 16 entreprises) ; les étiquettes donnent les vrais effectifs. La place d'un point sur la carte est symbolique.
3. **Jauges.** 16 cases sur 20 pour « près de 80 % », 18 sur 20 pour « plus de 90 % ».
4. **Étiquettes « FEG » et « Pouvoirs publics »** à la table du dialogue, **« Bureau exécutif »** : formulations à confirmer. Les membres du Bureau sont des points anonymes (7 à l'image, nombre symbolique).
5. **Slogan.** « Des entreprises fortes, une prospérité partagée » abrège le thème du Gabon Economic Forum ; « Votre entreprise a sa place à nos côtés » reprend le film v6.
6. **Téléphone.** +241 11 77 55 95, comme le film v6 ; le site mentionne aussi +241 011 77 55 57, la vidéo d'adhésion +241 77 55 95/97.
7. **Musique.** SoundHill « Find Yourself », comme les autres films FEG ; mention de l'artiste selon la licence.
