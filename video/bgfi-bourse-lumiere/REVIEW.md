# Relecture — BGFIBourse, « Une étoile pour guider votre épargne » (version lumière)

## Contrôle automatique

`npx hyperframes check` : **contrôle passé**, 0 erreur.

| Contrôle | Résultat |
| --- | --- |
| Lint, exécution, mise en page, mouvement, son | 0 erreur |
| Contraste | Tous les textes conformes WCAG AA |
| Avertissement restant | `world.html` est long (1 400 lignes) : c'est une seule fonction de rendu, comme dans le film FEG lumière, gardée d'un seul tenant. |

## Voix

- Texte vérifié par Whisper et par Gemini, phrase par phrase.
- La phrase 9 a été refaite seule : « deux mille vingt-six » pouvait s'entendre « deux mille six ». La nouvelle prise est entendue « vingt-six » trois fois sur trois, et Gemini la juge homogène avec les phrases voisines (même voix, même ton, même niveau).

## Ce que la relecture a corrigé

Le film a été vu en images fixes à plus de 80 moments avant le rendu, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Ciel | Lueur d'horizon et voile de nébuleuse trop forts : de grosses taches bleues. Étoiles presque invisibles. | Lueur et voile très atténués ; étoiles plus grandes et plus nombreuses ; voie lactée en poussière fine, en travers des premiers plans. |
| L01 et tout le film | L'étoile guide n'était qu'un disque blanc : le halo noyait les quatre branches. | Halo réduit, bloom plus sélectif : l'étoile à quatre branches du logo se lit. |
| L02–L03 | Les 953 lumières se fondaient en une masse blanche (surtout sur « Réunies »). | Points plus petits, éclat de « Réunies » modéré. |
| L04 | Les noms des pays, posés sur la carte, étaient illisibles. | Noms placés autour de la carte, sur le fond sombre. |
| L03 | « Entreprises et États » apparaissait coupé au bord de l'image. | Panoramique plus rapide vers les projets. |
| L05–L09 | « Votre épargne » n'avait que son étiquette : la lumière était trop petite pour être suivie. | Un éclat la suit de Libreville jusqu'à la porte. |
| L05 | L'étiquette « Société de bourse » chevauchait l'anneau. | Étiquette décalée à gauche de la porte. |
| L09 | Les projets restaient coupés au bord droit pendant l'entrée en Bourse. | Ils s'effacent pendant cette scène. |
| L09 | « Arrangeur et chef de file » restait trop peu de temps à l'écran. | La ligne arrive sur « milliards ». |
| Aube | Un volet blanc à bord dur, avec une boule surexposée. | Le jour se lève depuis l'étoile, en lumière douce ; le halo s'éteint plus vite. |
| Carte de fin | Deux copies du même logo (risque de doublon au rendu). | Logo découpé en deux images : les pavés avec l'étoile, puis le nom. |

## Version 2 : logo officiel, slogan de BGFIBourse, musique propre

Demandes de la FEG, et ce qui a été fait :

| Demande | Correction |
| --- | --- |
| Le bon logo | Logo officiel fourni, découpé en deux PNG transparents : les pavés avec l'étoile, et le nom. Les creux des lettres sont transparents, les bords dé-mélangés. L'étoile de la scène a été redessinée d'après la sienne : huit branches mesurées sur l'image. Le plan final la pose exactement sur celle du logo : même centre, même taille, vérifiés en image fixe. L'aube finit sur le blanc exact du fond du logo. |
| Le slogan de BGFIBourse | « Votre partenaire pour l'avenir », sur la carte de fin et dans la dernière phrase de la voix. Celle-ci a été relue à la suite de la phrase 9, pour éviter un ton publicitaire. |
| Une musique propre, différente de celle de la FEG | « Horizon » d'Andrewkn (CC BY 4.0), choisie parmi une douzaine de pistes libres écoutées par Gemini. Sa dernière montée tombe sur le logo. |

Contrôle : `npx hyperframes check` passé, 0 erreur, 14 textes sur 14 conformes en contraste.
