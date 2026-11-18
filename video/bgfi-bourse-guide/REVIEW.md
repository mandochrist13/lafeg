# Relecture — « Investir en Bourse, mode d'emploi » (BGFIBourse, vidéo explicative 2D)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur, 0 avertissement**.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 |
| Exécution | 0 |
| Mise en page | 0 problème |
| Mouvement | 0 |
| Contraste | 54 textes sur 54 conformes WCAG AA |
| Finition | 0 |
| Audio | 0 |

Aucun texte ne fait moins de 28 px. Le sauge de marque `#879A6D` ne sert jamais pour du texte sur blanc : le texte vert est en `#56683F`.

## Ce que la relecture a corrigé

Chaque scène a été vue en images fixes à ses moments clés, avant le rendu.

| Scène | Problème | Correction |
| --- | --- | --- |
| s1 | Le titre « Investir en Bourse » sortait du cadre à droite. | Sur deux lignes. |
| s1 | Nadia était petite, le haut gauche vide. | Nadia agrandie (échelle 0,94). |
| s2 | Le titre d'action volait en réduction : texte à 10 px pendant 0,7 s. | Une part sans texte fait le trajet, puis le titre se révèle sur place. |
| s2 | Les pièces du dividende tombaient sur les étiquettes. | Elles se posent aux pieds de Nadia. |
| s2 | « Le dividende » restait 1,3 s à l'écran. | Il apparaît dès « bénéfices » et reste 2,4 s. |
| s3 | La frise passait sur la tête de Nadia. | Frise remontée au-dessus d'elle. |
| s3 | Le titre laissait « État » seul en deuxième ligne. | Coupé avant « ou à un État ». |
| s4, s6 | Les pointes de flèches apparaissaient avant les flèches. | La pointe ne s'affiche qu'à la fin du tracé. |
| s4 | Le nom « BVMAC » (blanc sur marine) tombait à 2:1 de contraste pendant son fondu. | Il se révèle par un volet, une fois le temple opaque. |
| s5 | La feuille « Conditions tarifaires » couvrait la tête de Nadia. | Feuille posée en haut à droite, au-dessus des deux personnages. |
| s5 | Le texte « Actions · Obligations » débordait de sa carte. | Recadré. |
| s5 | « Renseignez-vous sur ses tarifs » restait 1,2 s. | Il apparaît dès « renseignez-vous ». |
| s6 | Le bon d'ordre volait en réduction : textes à 6 px. | Le bon sort par la droite ; une icône sans texte fait le trajet vers BGFIBourse, puis vers la BVMAC. |
| s6 | « Le courtage » se posait sur la tête de Nadia. | Pastille placée au-dessus du chemin de l'ordre. |
| s5, s6, s7, s8, s9, s11 | Les textes blancs sur marine perdaient leur contraste pendant les fondus. | Ils se révèlent par un volet, ou arrivent avec leur support, à opacité pleine. |
| s8 | La courbe de la gérante cachait son visage. | Tableau placé au-dessus d'elle. |
| s9 | Les bandeaux de la fiche dépassaient de 3 px. | Largeur intérieure. |
| s11 | La ligne « La société de bourse du groupe BGFIBank » touchait les deux personnages. | Corps réduit à 54 px. |

## Rendu

`renders/BGFIBourse-guide.mp4`, en qualité « delivery ». Durée, poids et volume sonore : voir le rapport de livraison.

## À valider par BGFIBourse

Le contenu vient de la vidéo de BGFIBourse transmise, de l'annuaire et des pages de la BVMAC, et de la presse financière régionale. Aucun site de BGFI n'a pu être consulté directement : l'environnement de travail bloque ces adresses. La recherche est passée par un moteur de recherche. Points à confirmer :

1. **Logo.** Redessiné en vectoriel (`assets/img/bgfibourse-logo.svg`) d'après la petite image fournie (352 × 158 px) : lettres en Tenor Sans recalées une à une sur l'original, carré bicolore et étoile reproduits. Le fichier officiel est à substituer s'il existe.
2. **Agrément.** « BGFIBourse · agréée depuis 2006 » : agrément COSUMAF MFAC-SB-002/2006 du 20 décembre 2006, d'après l'annuaire des sociétés de bourse de la BVMAC.
3. **Démarche.** « Ouvrir un compte titres et espèces » et « se renseigner sur les tarifs » : page « Accès des investisseurs au marché » de la BVMAC. Le film ne liste aucune pièce à fournir et ne donne aucun tarif. La feuille « Conditions tarifaires » est une illustration sans chiffres. L'ordre des étapes (compte, ordre, conservation) est une mise en forme du film.
4. **Bon d'ordre.** « Titre · Quantité · Prix » est une présentation générale d'un ordre de bourse, pas le formulaire de BGFIBourse.
5. **Entrée en Bourse de BGFI Holding Corporation.** Le film donne :
   - 2026 ;
   - « 45,32 milliards de FCFA levés » (la voix dit « plus de quarante-cinq milliards ») ;
   - première cotation à la BVMAC le 7 mai 2026, code BGFI HC ;
   - BGFIBourse arrangeur et chef de file.

   Sources : avis n° 020/2026 de la BVMAC ; African Markets et Daba Finance, qui citent le communiqué de BGFIBourse.
6. **Métiers.** « Courtage, OPC, conservation, conseil » et l'aide aux entreprises et aux États pour lever des fonds : repris de la vidéo de BGFIBourse. Les OPC sont définis de façon générale : aucun fonds n'est nommé.
7. **Mise en garde.** « La valeur des titres peut monter, mais aussi baisser · Investissez selon vos moyens et votre horizon ». C'est un message général, à faire relire par la conformité. La courbe n'a ni chiffres ni échelle.
8. **Illustrations.** Elles sont génériques et ne représentent pas de lieux réels :
   - l'immeuble de BGFIBourse ;
   - le temple de la BVMAC (six colonnes, une par pays de la CEMAC) ;
   - le coffre ;
   - les personnages.
9. **Carte de fin.** Pas d'adresse, de site web ni de numéro : aucun n'a pu être confirmé pour BGFIBourse. Deux adresses différentes à Libreville circulent : Boulevard de l'Indépendance (annuaire BVMAC) et immeuble Odyssée.
10. **Musique.** « Find Yourself » de SoundHill, déjà utilisée par les films de la FEG et du Fonds 4 de la CNAMGS. Elle peut être remplacée par une musique propre à BGFIBourse. Leur série vidéo utilise un piano « lofi ».
11. **Voix.** Charon, voix masculine calme, comme la vidéo de BGFIBourse. La phrase L02 a été reprise seule avec la même voix : à écouter pour la continuité. La voix dit « bé-jé-èf-i Bourse », « Cosumaf », « Cémac ».

## Sources

- [BVMAC — Sociétés de bourse par pays](https://www.bvm-ac.org/societes-de-bourse-par-pays/)
- [BVMAC — Accès des investisseurs au marché](https://www.bvm-ac.org/?p=7438)
- [BVMAC — Avis n° 020/2026 relatif à la première cotation de l'action « BGFI Holding Corporation »](https://www.bvm-ac.org/?p=15743)
- [BVMAC — siège à Douala, COSUMAF à Libreville](https://www.bvm-ac.org/?p=6226)
- [African Markets — l'IPO de BGFI Holding clôturée avec 45,3 milliards de FCFA levés](https://www.african-markets.com/fr/actualite/afrique-centrale/gabon/bvmac-lipo-de-bgfi-holding-cloturee-avec-45-3-milliards-de-fcfa-leves)
- [African Markets — BGFI Holding Corporation fait son entrée à la BVMAC](https://african-markets.com/fr/actualite/afrique-centrale/gabon/bgfi-holding-corporation-fait-son-entree-a-la-bvmac-lepilogue-dune-ipo-mouvementee)
- [Daba Finance — cotation de BGFI Holding à la BVMAC](https://dabafinance.com/fr/nouvelles/bgfi-holding-bvmac-listing-central-africa)
- La vidéo de BGFIBourse transmise : « Qu'est-ce qu'une société de bourse ? ».
