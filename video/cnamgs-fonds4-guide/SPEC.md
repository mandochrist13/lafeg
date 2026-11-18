# CNAMGS — « Le Fonds 4, mode d'emploi » (vidéo explicative 2D)

## Objet

Expliquer concrètement ce qu'est le Fonds 4 de la CNAMGS : à qui il s'adresse, ce qu'il couvre, où et comment s'immatriculer, comment cotiser. Le but est que les personnes concernées se fassent immatriculer.

Ce film est le pendant explicatif de la vidéo 3D isométrique (`video/cnamgs-fonds4-iso`). Il est de la même famille que « Comment adhérer à la FEG » (`video/feg-adhesion`) : illustration vectorielle à plat, personnages articulés, titres d'étapes nets, papiers et mains vus de dessus, carte de fin.

## Format

- 1920 × 1080, 30 im/s, 99,67 s.
- Rendu : `renders/CNAMGS-Fonds4-guide.mp4`.
- Commande : `npx --yes hyperframes@0.9.41 render --quality delivery -o renders/CNAMGS-Fonds4-guide.mp4`.

## Sources du contenu

Le contenu vient de trois sources :

- l'affiche officielle du Fonds 4 ;
- le communiqué de la CNAMGS ;
- l'article de presse transmis (déclarations du délégué provincial).

Le site cnamgs.ga n'a pas pu être consulté depuis l'environnement de travail. Son adresse figure seulement sur la carte de fin.

Les dispositions du projet de décret n'ont pas été reprises, car elles ne sont pas encore adoptées.

Aucun chiffre n'a été inventé : ni montant de cotisation, ni taux de prise en charge, ni numéro de téléphone.

## Charte

| Rôle | Valeur |
| --- | --- |
| Vert CNAMGS | `#5AA137` : coches, bandeaux, motifs. Texte vert en `#3F8526`, 4,6:1 sur blanc. |
| Jaune CNAMGS | `#F7D21E` : surlignage, pastille « 4 », soulignements. Jamais en texte sur blanc. |
| Bleu CNAMGS | `#0066A8` : surtitres, pastilles actives, icônes. |
| Bleu profond | `#084E86` : titres. |
| Gris du logo | `#BDBDBD` |
| Encre | `#1C2430` |
| Fond | blanc ; panneaux teintés clairs. |
| Police | Montserrat 500 à 800, fournie dans `assets/fonts`. |
| Taille minimale du texte | 28 px |
| Logo | `assets/img/cnamgs-logo.png`, version détourée du logo officiel. |

Motif de marque : une barrette vert-jaune-bleu au-dessus de chaque surtitre, reprise des trois couleurs du logo.

## Voix

- Voix Gemini TTS « Sulafat », au volume 0,79.
- Onze phrases ; leur texte est dans `tools/lines.json`.
- Le TTS prononce le sigle « knam-jé-èss », grâce à la graphie « Knam-GS » du script.
- À l'écran, on écrit toujours CNAMGS.

Ordre des phrases :

1. Vous travaillez à votre compte ? Commerçant, artisan, avocat, infirmière, chauffeur ou jardinier : le Fonds 4 de la CNAMGS est fait pour vous.
2. Conformément à l'article 15 de la loi du 17 juillet 2023, le Fonds 4 est dédié aux travailleurs indépendants et aux assurés volontaires.
3. Sont concernés :
   - les métiers de la santé, comme les médecins, les pharmaciens, les infirmiers ou les sages-femmes ;
   - les métiers techniques et juridiques, comme les experts-comptables, les avocats ou les notaires ;
4. … les commerçants, les artisans et les artistes ; et les employés de maison : femmes de ménage, jardiniers, chauffeurs et gardiens.
5. Une fois assuré, vous avez accès aux consultations, aux examens, aux hospitalisations, aux médicaments et aux évacuations sanitaires.
6. Pour vous faire immatriculer, rendez-vous dans un bureau de la CNAMGS : délégation provinciale, unité départementale ou communale.
7. Apportez votre acte de naissance légalisé, une pièce d'identité, votre avis de patente ou d'impôt synthétique libératoire, et la fiche circuit.
8. Si vous êtes marié, ajoutez une copie de l'acte de mariage pour votre conjoint ; si vous êtes étranger, votre carte de séjour.
9. Votre cotisation est forfaitaire. Elle se paie chaque trimestre, par voie électronique.
10. À jour de vos cotisations, vos soins sont pris en charge.
11. Ne restez pas sans couverture : faites-vous immatriculer au Fonds 4. La solidarité a un sens.

## Musique et son

### Musique

La musique est « Find Yourself » de SoundHill, le même morceau que les films FEG.

- Le film part de 37,39 s dans le morceau, avec un fondu d'entrée de 1,2 s.
- L'accord final du morceau, à 130,16 s, tombe sur le logo, à 92,77 s dans le film. Le logo arrive juste après « La solidarité a un sens ».
- La musique s'éteint vers 99 s ; le film s'arrête à 99,67 s.

Volume de la musique (courbe dans `index.html`) :

| Moment | Volume |
| --- | --- |
| Seule | 0,5 |
| Sous la voix | 0,18 |
| Dans les silences de plus d'une seconde | 0,34 |
| Sur la carte de fin | 0,85 |

### Bruitages

Il y a 60 bruitages Pixabay, crédités dans `assets/sfx/CREDITS.md` et listés dans `tools/sfx.json`. Chacun est calé sur un mot de la voix :

- un clic doux à l'entrée de chaque métier et de chaque carte ;
- des coches sur les métiers cités et sur les prestations ;
- un frottement de papier pour chaque pièce ;
- un cachet sur « légalisé » ;
- le surligneur sur l'article de loi ;
- le paiement confirmé ;
- les mains qui se joignent.

## Personnages

Les personnages sont définis dans `assets/cast.js`, à partir de `assets/people.js`. Cette bibliothèque reprend celle de la FEG, avec les accessoires des métiers en plus. Chaque personnage garde la même tenue d'une scène à l'autre.

| Personnage | Tenue |
| --- | --- |
| Awa, commerçante (personnage principal) | Foulard bleu à pois jaunes, haut en wax vert, pagne bleu nuit |
| Moussa, artisan | Tee-shirt clair, tablier de cuir, barbe |
| Maître Ndong, avocat | Robe noire, rabat blanc, épitoge, lunettes |
| L'infirmière | Blouse blanche, tenue bleu ciel, stéthoscope, chignon |
| Le chauffeur | Casquette bleu nuit, veste grise |
| Le jardinier | Chapeau de paille, tablier vert |
| Le médecin | Blouse blanche, cravate bleue, stéthoscope, cheveux gris |

## Scènes

La musique joue seule pendant 3,2 s avant la première phrase.

| Scène | Fenêtre (s) | Voix | Ce qu'on voit |
| --- | --- | --- | --- |
| s1 · métiers | 0 → 13,73 | L01 | La question « Vous travaillez à votre compte ? » est seule au centre, dès la première image. Elle monte ensuite en tête d'une grille de six panneaux qui entrent chacun sur son mot : commerçante à son étal, artisan à son établi, avocat à son cabinet, infirmière au cabinet de soins, chauffeur dans sa voiture, jardinier au jardin. Puis vient le titre « Le Fonds 4 de la CNAMGS », sous-titré « Travailleurs indépendants et assurés volontaires ». |
| s2 · loi | 13,73 → 22,66 | L02 | « Article 15 » et « de la loi n°036/2023 du 17 juillet 2023 », à gauche. À droite, une page « LOI N°036/2023 · Article 15 » : la main d'Awa y surligne en jaune « Fonds 4 : travailleurs indépendants et assurés volontaires », au rythme de la voix. |
| s3 · qui est concerné | 22,66 → 43,39 | L03–L04 | « Qui est concerné ? » et quatre cartes, chacune avec un visage, qui entrent sur leurs mots (détail ci-dessous). Les métiers cités par la voix s'allument en bleu. |
| s4 · soins | 43,39 → 52,38 | L05 | « Une fois assuré · Vous avez accès aux soins ». Le médecin ausculte Awa au stéthoscope. Cinq prestations entrent sur leurs mots, chacune cochée en vert : consultations, examens, hospitalisations, médicaments, évacuations sanitaires. |
| s5 · bureau | 52,38 → 60,49 | L06 | « Étape 1 · L'immatriculation · Rendez-vous dans un bureau CNAMGS ». Awa marche, son dossier à la main, vers un immeuble à l'enseigne CNAMGS, puis entre. Les étiquettes « Délégations provinciales » et « Unités départementales et communales » apparaissent sur leurs mots. |
| s6 · pièces | 60,49 → 77,21 | L07–L08 | « Étape 2 · Les pièces à fournir ». La chemise « Fonds 4 · Immatriculation » s'ouvre sur « Apportez ». La main d'Awa pose chaque pièce quand la voix la nomme (détail ci-dessous), et la liste se coche à gauche. |
| s7 · cotisation | 77,21 → 82,97 | L09 | « Étape 3 · La cotisation · Une cotisation forfaitaire », avec « forfaitaire » souligné en jaune. « Chaque trimestre » : les tuiles T1, T2, T3 et T4 s'allument. « Par voie électronique » : sur un téléphone, « Payer » devient « Paiement effectué ». Aucun montant n'est affiché. |
| s8 · pris en charge | 82,97 → 86,92 | L10 | « À jour de vos cotisations, vos soins sont pris en charge ». Les quatre trimestres sont cochés. Une grande coche verte apparaît au-dessus d'Awa et du médecin. |
| s9 · fin | 86,92 → 99,67 | L11 | Les six travailleurs du début, côte à côte. Les textes « Ne restez pas sans couverture » puis « Faites-vous immatriculer au Fonds 4 » apparaissent. Sur « La solidarité a un sens », les six se donnent la main. Le logo CNAMGS arrive sur l'accord final, suivi de www.cnamgs.ga. La carte est tenue 6,9 s. |

Les quatre cartes de s3 :

- Métiers de la santé : médecin, pharmacien, infirmier, sage-femme, kinésithérapeute, vétérinaire.
- Métiers techniques et juridiques : expert-comptable, commissaire aux comptes, conseiller financier, avocat, notaire, huissier de justice.
- Commerçants, artisans, artistes : trois pictogrammes (étal, outils, palette).
- Employés de maison : femme de ménage, jardinier, chauffeur, gardien.

Les pièces posées dans s6 :

- acte de naissance, avec le cachet « LÉGALISÉ » qui tombe sur « légalisé » ;
- pièce d'identité ;
- avis de patente ;
- fiche circuit ;
- puis, sous « Selon votre situation » : acte de mariage, et carte de séjour.

Chaque scène entre en moins de 0,6 s et sort par un flou de 0,3 s. Les fenêtres des scènes sont bout à bout.

## Fichiers

| Fichier | Contenu |
| --- | --- |
| `tools/build.mjs` | Calage : écrit `assets/cues.js` (temps des phrases et des mots, fenêtres des scènes) et `index.html` (scènes, voix, musique et sa courbe de volume, bruitages). |
| `tools/lines.json` | Le texte de la voix et les silences. |
| `audio_meta.json` | Durées des voix et mots alignés. |
| `tools/sfx.json` | Le plan des bruitages. |
| `compositions/s1-metiers.html` … `s9-fin.html` | Une scène par fichier. |
| `assets/people.js` | La bibliothèque des personnages. |
| `assets/cast.js` | Les tenues des personnages. |
