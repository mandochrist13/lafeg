# Relecture — FEG, « La lumière des entreprises » (data-art)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : la scène tient dans un seul fichier (une seule prise continue), comme dans les autres films 3D |
| Exécution | 0 erreur ; messages de performance du pilote graphique (« GPU stall due to ReadPixels »), sans effet sur l'image |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 12/12 textes conformes WCAG AA |
| Audio | 0 problème |

Aucun texte ne fait moins de 28 px.

## Voix

- Despina, la voix du film v6, en une seule requête pour les 10 phrases, avec la consigne « ton inspiré et lumineux, comme un récit de nuit qui s'éclaire peu à peu ».
- Le découpage automatique aux silences tombait mal pour 7 phrases sur 10 : la prise a été recoupée à la main, d'après une transcription de chaque segment.
- Mots vérifiés par une écoute automatique ciblée : « mille cent » (1 100), « et sa voix se perd », la phrase finale.
- Le texte écrit les nombres en toutes lettres (« mille neuf cent cinquante-neuf »), comme en v6.

## Ce que la relecture a corrigé

Le film a été vu en images fixes à plus de 80 moments avant le rendu (toutes les 2 s, plus chaque moment retouché).

| Moment | Problème | Correction |
| --- | --- | --- |
| Tout le film | Les lumières étaient de simples points, ternes. | Halo lumineux sur toute l'image et étoiles à aigrettes pour les lumières principales. |
| L03 | Le compteur restait à 0 : il visait le « cent » de « mille neuf cent ». | Calé sur le second « cent », celui de « mille cent ». |
| L03 | Une seconde de vide avant la carte. | Les lumières partent dès « mille neuf cent cinquante-neuf ». |
| L04 | L'anneau extérieur touchait le haut du cadre. | Anneaux resserrés, caméra un peu plus loin. |
| L05 | L'onde de « une seule voix » traversait le texte. | Elle part au-delà du texte. |
| L05 | Les noms des fédérations débordaient de l'écran. | Anneau aplati, fédérations rangées de la plus grande à la plus petite, noms longs sur deux lignes, chaque nom posé vers l'extérieur. |
| L06 | La sphère du Bureau exécutif était un disque blanc brûlé. | Lumières atténuées tant qu'elles sont dans la sphère, sphère plus large. |
| L07 | La page de la Déclaration saturait en rectangle blanc. | La page est rendue par-dessus le halo ; son titre passe en haut de l'écran. |
| L08 | « Dette intérieure » sortait du cadre pendant le mouvement de caméra. | Caméra plus tôt, étiquette un peu plus tard. |
| L09–L10 | Les services restaient affichés sous le slogan. | Ils s'éteignent avant L10. |
| L10 | La nouvelle lumière passait sur le slogan. | Elle naît au bout de « Ajoutez votre lumière » et vole jusqu'à Libreville. |
| Fin | Le halo rendait l'aube blanche une seconde trop tôt : les points du logo disparaissaient. | Le halo s'éteint avec le lever du jour ; aube crème, puis blanc. |

## Rendu

`renders/FEG-lumiere.mp4`, en qualité « delivery », rendu en 22 min.

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz |
| Durée | 85,5 s |
| Poids | 52,8 Mo |
| Volume | −15,3 LUFS intégré, plage 3,4 LU, crête vraie −2,1 dBFS |

Vingt-six images extraites du MP4, de 1,5 s à 84 s, montrent les mêmes plans que les images de contrôle :

- la première lumière, l'atelier, le commerce et le chantier ;
- la lumière seule et ses ondes ;
- la carte, « Depuis 1959 » et « plus de 1 100 entreprises » ;
- les jauges 80 % et 90 % ;
- les 13 galaxies et « une seule voix » ;
- le Bureau exécutif, les pouvoirs publics et le pont du dialogue ;
- le Gabon Economic Forum, ses 8 ateliers et la Déclaration de Libreville ;
- les réformes, puis les services ;
- le slogan et la nouvelle lumière ;
- l'aube et la carte de fin, logo calé sur les points.

## À valider par la FEG

1. **Faits.** Tous viennent du film v6 déjà validé : 1959 ; plus de 1 100 entreprises ; près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle (lafeg.ga) ; 13 fédérations et leurs effectifs ; Bureau exécutif ; dialogue public-privé ; Gabon Economic Forum, ses 8 ateliers et la Déclaration de Libreville (page 1 réelle) ; les quatre réformes ; les quatre services.
2. **Place des lumières.** Chaque lumière est une entreprise, mais sa place sur la carte est symbolique : les 1 100 lumières sont réparties sur les 71 points du logo, pas à l'adresse des entreprises.
3. **Slogan.** « Des entreprises fortes, une prospérité partagée » abrège le thème du Gabon Economic Forum (« Des entreprises fortes pour une croissance durable et une prospérité partagée »).
4. **« Ajoutez votre lumière »** est une formule nouvelle, propre à ce film.
5. **Étiquettes « Bureau exécutif » et « Pouvoirs publics »** : formulation à confirmer.
6. **Téléphone.** +241 11 77 55 95, comme le film v6 (pied de page de la Déclaration). Le site mentionne aussi +241 011 77 55 57, et la vidéo d'adhésion affiche +241 77 55 95/97.
7. **Musique.** SoundHill « Find Yourself », la même que les autres films FEG ; mention de l'artiste selon la licence.
