# Relecture — FEG, « Les archives » (mannequins)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**, contrôle passé.

Relancé après le rendu, une fois retirés les fichiers inutilisés (photos, polices et bibliothèques des films précédents) : même résultat.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : les décors tiennent dans un seul fichier (une seule scène 3D continue), comme les autres films 3D |
| Exécution | 0 erreur ; messages de performance du pilote graphique, sans effet sur l'image |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 10/10 textes conformes WCAG AA |
| Audio | 0 problème |

Aucune étiquette ne fait moins de 28 px. Seuls les écrans du décor (diapositive de formation, ordinateurs) portent un texte plus petit.

## Ce que la relecture a corrigé

Le film a été vu en images fixes, plan par plan, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Tout le film | Les mannequins semblaient faits de segments posés bout à bout. | Membres tournés d'une seule pièce, épaules plus basses et mieux rentrées, capuche et rotules réduites. |
| L04 | Le classeur ouvert tournait ses pages vers l'extérieur, pas vers le lecteur. | Classeur retourné ; plan de trois quarts, puis vue subjective sur les pages. |
| L04 | « plus de 90 % » restait trop peu de temps à l'écran. | Coupe suivante décalée (31,7 s). |
| L03 | « Depuis 1959 » manquait de contraste ; « Fédération des Entreprises du Gabon » sortait du cadre. | Étiquettes déplacées ; le nom de la Fédération passe sur deux lignes. |
| L05 | Les 13 étiquettes des fédérations se chevauchaient. | Deux colonnes régulières de part et d'autre de l'allée ; « 13 fédérations, une seule voix » arrive après elles et reste plus longtemps. |
| L07 | Le présentateur cachait le mot « Forum » sur l'écran ; « 8 ateliers » passait sur une tête blanche. | Il se tient à côté de l'écran, puis s'avance au centre pour montrer la Déclaration ; « 8 ateliers » passe sur le mur. |
| L08 | À contre-jour de la fenêtre, les étiquettes des réformes étaient illisibles, puis « Financement des PME » sortait du cadre. | Caméra du côté de la fenêtre, tournée vers la salle ; étiquettes en escalier. Sur « ensemble », elles laissent place à « Ensemble, elles pèsent sur les réformes ». |
| L10 | Le slogan débordait du cadre. | Étiquette réaccrochée sur le rayonnage, dans le cadre. |

## Rendu

`renders/FEG-mannequins-master.mp4` est le rendu en qualité « delivery ». Il a pris 1 h 54, soit environ 2,6 s par image, car la 3D est calculée sans carte graphique. Il pèse 621 Mo : le grain, différent à chaque image, se compresse mal. Il est gardé tel quel.

Pour l'envoi, `renders/FEG-mannequins.mp4` est réencodé en H.264 (CRF 20, preset slow) et pèse 83 Mo. Comparé au rendu d'origine, en gros plan :

- le texte, les traits et les formes sont identiques ;
- seul le grain est un peu adouci (SSIM 0,963).

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz, repris tel quel |
| Durée | 86,7 s |
| Poids | 83 Mo (rendu d'origine : 621 Mo) |
| Volume | −15,4 LUFS intégré, crête vraie −2,1 dBFS |

Vingt-huit images extraites du MP4, de 1,5 s à 85,5 s, montrent les mêmes plans que les images de contrôle :

- la salle d'archives : le mannequin au sweat entre, son collègue tient une tasse ;
- le classeur tiré de l'étagère presque vide ;
- l'allée pleine et les titres de la Fédération ;
- le classeur ouvert et ses deux anneaux, 80 % et 90 % ;
- les 13 étiquettes des fédérations, en deux colonnes ;
- la salle de réunion : Bureau exécutif, dialogue public-privé, pouvoirs publics ;
- l'écran du Gabon Economic Forum, les 8 ateliers, puis la Déclaration de Libreville ;
- les quatre classeurs des réformes, puis « Ensemble, elles pèsent sur les réformes » ;
- les services au quotidien ;
- le classeur remis à sa place, le slogan, le passage au blanc et la carte de fin.

**Point connu, non corrigé dans ce rendu.** Sur l'écran des 8 ateliers (de 48 à 49,5 s), le texte blanc des tuiles bronze (ateliers 1, 3, 5 et 7) est pâle. Le titre de l'écran et l'étiquette « 8 ateliers » restent lisibles.

## À valider par la FEG

1. **Style.** Le film approche la référence avec une 3D construite en code : mêmes mannequins, même salle d'archives, mêmes étiquettes à trait fin, caméra à l'épaule. Il n'atteint pas le photoréalisme de la référence, qui demanderait un outil de génération vidéo par IA (non disponible ici).
2. **Faits.** Ce sont ceux des films précédents déjà validés :
   - 1959 et plus de 1 100 entreprises ;
   - près de 80 % du PIB et plus de 90 % de la main-d'œuvre formelle (lafeg.ga) ;
   - les 13 fédérations et leurs effectifs ;
   - le Bureau exécutif et le dialogue public-privé ;
   - le Gabon Economic Forum, ses 8 ateliers et la Déclaration de Libreville (vraie page 1) ;
   - les quatre réformes et les quatre services.
3. **Personnages.** Les mannequins sont des figures génériques, pas des personnes réelles. Qui est assis de quel côté de la table (« Bureau exécutif », « Pouvoirs publics »), et combien, est symbolique.
4. **Écran de la salle de réunion.**
   - La diapositive du Forum utilise la photo de salle du site lafeg.ga (probablement une photo d'illustration : droits à vérifier) et le logo du Gabon Economic Forum.
   - Sa phrase « Le grand rendez-vous du dialogue » a été écrite pour le film, d'après la voix off.
   - La diapositive de formation cite trois thèmes d'exemple (fiscalité des entreprises, commande publique, droit du travail) : à confirmer ou à remplacer par de vraies formations.
5. **Rayonnages.** Les 13 rayonnages et leurs classeurs sont symboliques, pas les vraies archives de la FEG.
6. **Slogan.** « Des entreprises fortes, une prospérité partagée » abrège le thème du Gabon Economic Forum. « Votre entreprise a sa place à nos côtés » vient du film v6.
7. **Téléphone.** +241 11 77 55 95, comme le film v6. Le site mentionne aussi +241 011 77 55 57, et la vidéo d'adhésion affiche +241 77 55 95/97.
8. **Musique.** SoundHill « Find Yourself », la même que les autres films FEG ; mention de l'artiste selon la licence.
