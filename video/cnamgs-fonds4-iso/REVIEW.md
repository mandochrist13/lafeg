# Relecture — « Le Fonds 4 » (CNAMGS, vidéo 3D isométrique)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**. Le contrôle passe.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : le fichier de la maquette 3D est long (comme celui de la vidéo FEG) |
| Exécution | 0 erreur ; messages de performance du pilote graphique (lecture des pixels du canevas), sans effet sur l'image |
| Mise en page | 0 problème. Le canevas 3D est marqué plein cadre (`data-layout-allow-overflow`) |
| Mouvement | 0 |
| Contraste | 12 textes sur 12 conformes WCAG AA |
| Finition | 0 |
| Audio | 0 |

Aucun texte ne fait moins de 28 px.

## Ce que la relecture a corrigé

Le film a été vu en images fixes à plus de 60 moments avant le rendu : chaque plan, chaque mot qui déclenche quelque chose, chaque transition.

| Plan | Problème | Correction |
| --- | --- | --- |
| Rue (L01) | Le trottoir et la chaussée se levaient en un énorme bloc blanc qui cachait la rue et ses habitants : la levée écrasait leur épaisseur. | Ils se lèvent désormais dans un groupe à part. |
| Ville (L02–L03) | Les quatre quartiers alignés en une rangée laissaient l'image vide en haut et en bas, et tout était petit. | Plan en étoile : le siège au centre, quatre avenues, un quartier par coin de l'image. Le plan large est 1,4 fois plus serré. |
| Fonds (L03) | « Salariés du privé » et « Agents de l'État » se posaient sur les bâtiments avant que la coupole n'existe. | Étiquettes calées sur le sommet final de la coupole. |
| Fonds (L03) | Les liaisons du siège traversaient les étiquettes. | Elles touchent la coupole sur son flanc, côté siège. L'étiquette du Fonds 3 passe sous sa coupole. |
| Siège | L'enseigne CNAMGS était illisible en plan large. | Enseigne agrandie (3,5 unités de large), face à la caméra. |
| Rue (L05) | « Professions libérales » sortait du cadre par le haut. | Étiquette à gauche du cabinet, cadrage abaissé. |
| Soins (L06) | « Examens » se posait sur l'hôpital, puis sur le centre de consultations ; « Évacuations sanitaires » touchait « Hospitalisations ». | Étiquettes déplacées ; l'hélicoptère est agrandi. |
| L05 à L08 | Les liaisons bleues barraient les plans rapprochés. | Elles s'effacent une fois les quatre fonds présentés. |
| Siège (L08) | L'étiquette « Immatriculation » couvrait un arbre et la façade, et la coche se voyait de biais. | Étiquette sous la coche ; coches et cartes de séjour face à la caméra. |
| Carte (L08) | Repères des bureaux trop petits pour être vus. | Deux fois plus grands. |
| Carte (L09) | Le dégradé vert, jaune, bleu passait par des teintes ternes (kaki, ardoise). | Trois bandes nettes, comme le drapeau. |
| Ville | Les bosquets formaient des colonnes de trois arbres. | Bosquets étalés en largeur. |

## Rendu

`renders/CNAMGS-Fonds4-3D.mp4`, en qualité « delivery » (19 min de rendu).

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz |
| Durée | 89,77 s |
| Poids | 47,5 Mo |
| Volume | −15,5 LUFS intégré, plage 3,5 LU, crête vraie −1,8 dBFS |

Seize images extraites du MP4, de 1 s à 86 s, montrent les mêmes plans que les images de contrôle :

- la rue et ses étiquettes ;
- la ville en étoile et ses trois coupoles ;
- le titre « Fonds 4 » ;
- les six catégories ;
- les soins et le téléphone ;
- le siège, puis la carte et ses repères ;
- le drapeau, puis la carte de fin.

## À valider par la CNAMGS

Les textes viennent de l'affiche « Opérationnalisation du Fonds 4 », du communiqué du 15 janvier 2026 et de l'article de presse transmis. Le projet de décret n'a pas été utilisé, car il n'est pas encore adopté. Le site cnamgs.ga n'a pas pu être consulté depuis l'environnement de travail. Points à confirmer :

1. **Cotisation.** La voix dit « une cotisation forfaitaire, payée chaque trimestre, par voie électronique ». L'article de presse dit, lui, que les cotisations seront « trimestrielles et calculées en fonction de l'activité exercée ». La formulation est à confirmer. Le film ne donne aucun montant et ne nomme aucun moyen de paiement. L'écran du téléphone est une maquette neutre : « Fonds 4 · Cotisation trimestrielle · T1 T2 T3 T4 · Payer », puis une coche.
2. **Fonds 1, 2 et 3.** Ils sont présentés ainsi :
   - Fonds 1 : salariés du privé ;
   - Fonds 2 : agents de l'État ;
   - Fonds 3 : Gabonais économiquement faibles.

   Ces définitions viennent de l'article de presse.
3. **Personnes concernées.** La liste est la suivante :
   - professions libérales de la santé, du droit et du conseil ;
   - commerçants, artisans, artistes ;
   - employés de maison ;
   - étrangers résidant régulièrement au Gabon.

   Les assurés volontaires sont figurés par deux passants qui entrent sous la coupole.
4. **Bureaux sur la carte.** Les repères sont une illustration, pas la carte réelle des bureaux :
   - un grand repère bleu par province pour les délégations provinciales ; celui de l'Estuaire est posé sur le siège, à Libreville ;
   - deux petits repères verts par province pour les unités départementales et communales.

   Le film n'avance aucun nombre de bureaux.
5. **Carte du Gabon.** 71 dalles réparties sur la silhouette du pays, chacune teintée selon sa province. C'est la trame de la carte de la vidéo FEG, dessinée en dalles carrées pour ne pas rappeler les points du logo de la FEG.
6. **Siège.** L'immeuble est une illustration générique à l'enseigne CNAMGS, pas le bâtiment réel.
7. **Évacuations sanitaires.** Elles sont figurées par un hélicoptère qui décolle de l'hôpital.
8. **Signature.** Le slogan « La solidarité a un sens » et l'adresse cnamgs.ga figurent sur la carte de fin.
9. **Musique.** « Find Yourself » de SoundHill, déjà utilisée par les films de la FEG. Elle peut être remplacée si la CNAMGS veut une musique propre.
10. **Prononciation.** La voix dit « knam-jé-èss » ; l'écran écrit toujours CNAMGS.
11. **Logo.** Version fournie (image). Le fichier vectoriel officiel serait préférable s'il existe.
