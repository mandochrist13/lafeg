# Relecture — FEG, « Ceux qui font l'économie du pays » (collage photo)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : la table tient dans un seul fichier (une seule prise continue) |
| Exécution | 0 erreur |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 5/5 textes conformes WCAG AA |
| Audio | 0 problème |

Les textes du collage sont dessinés dans l'image (papiers, post-it, rubans) : le contrôle ne les mesure pas. Ils ont été vérifiés à l'œil. À l'écran, aucun ne fait moins de 28 px.

## Voix

Narration commune aux quatre films : Despina, dix phrases, calées mot à mot. L01, L02 et L10 ont été générées en une seule requête et vérifiées par transcription. L03 à L09 viennent du film « La lumière des entreprises ».

## Ce que la relecture a corrigé

Le film a été vu en images fixes toutes les 1,5 s, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| L02 | Le trait de feutre de L01 restait au bord du cadre en gros plan. | Cadrage remonté. |
| L01 | Le crayon croisait le trait de feutre. | Crayon déplacé. |
| L04 | Une demi-seconde de table vide avant le premier disque. | Disque posé dès « ensemble ». |
| L05 | Les étiquettes des fédérations tombaient sur le disque des 90 %. | Zones C, D et E décalées sur la table. |
| L06 | Les fils de laine barraient la bulle « une seule voix ». | La bulle est retirée de la table quand les fils partent. |
| L07 | Des morceaux du dialogue dépassaient en bas du plan du Forum ; plan vide avant les ateliers. | Bulles et carte descendues, cadrage remonté ; carton du logo du Forum ajouté. |
| L08 | L'accolade « ensemble » croisait le logo du Forum. | « ensemble ! » écrit sous la Déclaration. |
| L09 | « Dialogue public-privé » restait visible en haut de la zone « Au quotidien ». | Zone descendue. |
| L10 | La feuille de fin cachait la table pendant tout « rejoignez la FEG ». | Feuille posée plus tard, juste avant le logo. |

## Rendu

Le rendu en qualité « delivery » pesait 157 Mo : le grain du papier, qui bouge avec la caméra, se compresse mal. Il est gardé tel quel dans `renders/FEG-collage-master.mp4`. Pour l'envoi, `renders/FEG-collage.mp4` est réencodé en H.264 (CRF 20, preset slow). Il pèse 61 Mo et reste très proche du rendu d'origine (SSIM 0,983).

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz, repris tel quel |
| Durée | 86,7 s |
| Poids | 61 Mo (rendu d'origine : 157 Mo) |
| Volume | −15,4 LUFS intégré, plage 3,3 LU, crête vraie −2,1 dBFS |

Vingt-quatre images extraites du MP4, de 1,5 s à 80,5 s, montrent les mêmes plans que les images de contrôle :

- la table et les trois métiers ;
- la boutique seule ;
- la carte et ses 71 confettis ;
- les deux disques ;
- les 13 étiquettes et leurs fils ;
- le dialogue ;
- le Forum et la Déclaration ;
- les rubans des réformes ;
- les post-it ;
- le slogan et le siège ;
- la carte de fin.

## À valider par la FEG

1. **Photos.** Siège (immeuble Odyssée) et page 1 de la Déclaration de Libreville sont des documents de la FEG. La salle, la formation et les mains réunies viennent du site lafeg.ga ; ce sont probablement des photos de banque d'images. À remplacer, si possible, par des photos de vos propres événements, avec l'accord des personnes.
2. **Logo du Gabon Economic Forum.** Fichier fourni avec les éléments de la FEG ; usage à confirmer.
3. **Faits.** Tous viennent des films déjà validés : 1959 ; plus de 1 100 entreprises ; près de 80 % du PIB, plus de 90 % de la main-d'œuvre formelle ; 13 fédérations et leurs effectifs ; Bureau exécutif ; dialogue public-privé ; Gabon Economic Forum, 8 ateliers, Déclaration de Libreville ; quatre réformes ; quatre services.
4. **Ateliers.** Les 8 cartes sont simplement numérotées : aucun intitulé d'atelier n'est donné.
5. **Les 71 confettis bronze** reprennent les points du logo ; ce n'est pas une carte de l'implantation des entreprises.
6. **Étiquettes « Bureau exécutif » et « Pouvoirs publics »** : formulation à confirmer.
7. **Slogan.** « Des entreprises fortes, une prospérité partagée » abrège le thème du Gabon Economic Forum.
8. **Téléphone.** +241 11 77 55 95, comme les films précédents ; le site donne aussi +241 011 77 55 57, la vidéo d'adhésion +241 77 55 95/97.
9. **Musique.** SoundHill « Find Yourself », la même que les autres films FEG.

## Version sous-titrée (pour les projections sans son)

`renders/FEG-collage-sous-titres.mp4` : la voix off écrite à l'écran, 29 groupes de `tools/captions.json`, calés mot à mot sur la voix.

- La couche de sous-titres est rendue seule par HyperFrames, en transparence, puis incrustée sur `renders/FEG-collage-master.mp4 (CRF 20, comme la version d'envoi)` (`../sous-titres/sous-titrer.sh`, voir `../sous-titres/README.md`).
- Le film n'est pas rendu une deuxième fois. Même durée, son repris tel quel. 53,6 Mo.
- Cartouche vert foncé de la FEG, texte blanc en Hyundai Sans Text 48 px, centré à 50 px du bas, un groupe à la fois.
- Nombres écrits en chiffres, comme à l'écran : 1959, 1 100, 80 %, 13 fédérations.
- Vérifié image par image au milieu de chaque groupe : la zone du cartouche est mesurée sur l'image d'origine, et les plans chargés sont regardés un par un.
- Le tampon « Depuis 1959 » et le « ensemble ! » manuscrit étaient cachés : les groupes de ces deux moments passent à droite, puis à gauche.
- Les photos du « quotidien » restent en partie sous le cartouche ; ce sont des éléments de décor.

