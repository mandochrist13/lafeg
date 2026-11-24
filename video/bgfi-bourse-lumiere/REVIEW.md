# Relecture — BGFIBourse, « Votre partenaire pour l'avenir » (version lumière)

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

## Rendu (version 2)

`renders/BGFIBourse-lumiere.mp4` est le rendu en qualité « delivery ». Il a pris 37 min.

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Durée | 80,0 s |
| Poids | 59,2 Mo |
| Son | AAC stéréo 48 kHz ; −16,0 LUFS intégré, plage 4,0 LU, crête −2,3 dBFS |
| Images noires | aucune |
| Image fixe | seulement la carte de fin, à partir de 73,8 s (voulu) |

La planche du fichier rendu (une image toutes les 5 s) correspond aux images fixes de la relecture.

`renders/BGFIBourse-lumiere-whatsapp.mp4` est la même vidéo, réencodée pour rester sous la limite de 16 Mo de WhatsApp :

- H.264 en deux passes à 1,35 Mbit/s, son AAC 128 kbit/s ;
- 14,9 Mo, quasi identique au rendu (SSIM 0,994) ;
- les étoiles fines restent nettes (vérifié en gros plan).

## Version 3 : demandes de BGFIBourse

| Demande | Ce qui a été fait |
| --- | --- |
| Remplacer « guide » par « intermédiaire » | Voix : « il faut un intermédiaire agréé par le régulateur, la Cosumaf » ; « Cet intermédiaire, c'est BGFI Bourse ». À l'écran, la place vide de l'anneau s'appelle « Intermédiaire · agréé » (au lieu de « Société de bourse · agréée »). |
| Supprimer « une société de bourse » après la COSUMAF | Retiré de la voix. BGFIBourse reste présentée comme « la société de bourse du groupe BGFIBank », juste après. |
| BVMAC se prononce « bévémaque » | Nouvelle prise de L04 ; Gemini entend « bé-vé-mak ». |
| + de 1 600 milliards de levée de fonds, 20 opérations de référence en CEMAC | Fin de L08, à la voix ; à l'écran, compteur « + de 1 600 milliards FCFA levés » et « à travers 20 opérations de référence en CEMAC ». |
| Phase 1 : 45,32 milliards, souscripteurs de 24 pays | L09 : « Phase 1 · Entrée en Bourse », « Arrangeur et chef de file : BGFIBourse », compteur 45,32, « auprès de souscripteurs de 24 pays ». L'année n'est plus dite pour cette phase. |
| Phase 2 (2026) : 100,836 milliards, 125,17 %, 10 % au public | Nouvelle phrase L09b. À l'écran : « Phase 2 · 2026 », « Augmentation de capital », compteur 100,836, « Taux de souscription : 125,17 % », « Capital détenu par le public : 10 % ». Dans la scène, un afflux plus dense rejoint BGFI HC, et un arc de 36° (10 %) s'allume sur l'anneau de son capital. |

- **Voix.** L04–L06 relues à la suite de L03, L08–L09b à la suite de L07, avec la même voix et la même consigne.
  - Gemini entend le texte exact de chaque phrase.
  - Les raccords avec les prises gardées (L03 → L04, L07 → L08, L09b → L10) sont jugés homogènes, « sans aucune rupture audible ».
  - L09b a été reprise trois fois : « deux mille vingt-six » s'entendait parfois « deux mille six » ou « seize ». La prise retenue est entendue « 2026 » trois fois sur trois.
- **Corrigé pendant la relecture.**

| Moment | Problème | Correction |
| --- | --- | --- |
| L08 | Le compteur « + de 1 600 milliards » chevauchait les étiquettes des projets, en haut à droite. | Placé en haut à gauche, au-dessus de la carte. |
| L09–L09b | Montant de la phase 2 trop large : « mobilisés » passait à la ligne ; « BGFI Holding Corporation » tenait sur deux lignes. | Blocs élargis : chaque titre tient sur une ligne. |
| L09 | « Arrangeur et chef de file » ne restait qu'une seconde à l'écran. | Affiché dès « Elle a conduit », sous le surtitre. |
| Chiffres | « 1600 » sans espace. | « 1 600 ». |
| Calage | Les mots « Douala » et « 2026 » étaient mal placés par l'aligneur. | L04 et L09b calées sur les mots horodatés de Whisper. |

- **Contrôle.** `npx hyperframes check` passé, 0 erreur ; les 10 textes contrôlés sont conformes WCAG AA. Les avertissements restants sont ceux de la version 2 : longueur de `world.html` et messages du pilote WebGL.

### Rendu (version 3)

| Fichier | Image | Durée | Poids | Son |
| --- | --- | --- | --- | --- |
| `renders/BGFIBourse-lumiere-v3.mp4` | 1920 × 1080, 30 im/s, qualité « delivery » | 97,4 s | 68,9 Mo | −15,8 LUFS, plage 3,9 LU, crête −2,4 dBFS |
| `renders/BGFIBourse-lumiere-v3-whatsapp.mp4` | idem, H.264 deux passes à 1,12 Mbit/s, AAC 128 kbit/s | 97,4 s | 15,3 Mo (sous les 16 Mo de WhatsApp) | idem |

- Rendu en 36 min. La planche du fichier (une image toutes les 5 s) est conforme aux images de contrôle.
- Seules les trois premières images sont noires : c'est le fondu d'entrée du ciel, voulu.
- La copie WhatsApp reste quasi identique au rendu (SSIM 0,993). Les étoiles et les chiffres restent nets.
- La musique commence plus tôt dans le morceau (132,1 s au lieu de 149,5 s) : sa dernière montée tombe toujours sur le logo.
