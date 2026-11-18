# Relecture — « Le Fonds 4, mode d'emploi » (CNAMGS, vidéo explicative 2D)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur, 0 avertissement**.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 |
| Exécution | 0 |
| Mise en page | 0 problème |
| Mouvement | 0 |
| Contraste | 48 textes sur 48 conformes WCAG AA |
| Finition | 0 |
| Audio | 0 |

Aucun texte ne fait moins de 28 px. Le vert de marque `#5AA137` ne sert jamais pour du texte sur fond blanc : le texte vert est en `#3F8526`.

## Ce que la relecture a corrigé

Chaque scène a été vue en images fixes à ses moments clés avant le rendu.

| Scène | Problème | Correction |
| --- | --- | --- |
| s1 | La première image, qui sert de vignette, était vide. | La question « Vous travaillez à votre compte ? » est à l'écran dès 0 s. |
| s1 | 3,7 s d'image figée au début. | Lente poussée sur la question et barrette tricolore, jusqu'à ce que la voix la pose. |
| s1 | Le sous-titre « Travailleurs indépendants et assurés volontaires » restait 1,5 s, trop peu pour le lire. | Il apparaît avec le titre et reste plus de 2 s. |
| s3 | Les médaillons dépassaient de 3 px de leur carte. | Hauteur ajustée. |
| s3 | Le pictogramme « artisans » était illisible. | Redessiné en marteau et clé. |
| s5 | Un clignement était demandé sur Awa de profil, qui n'a pas d'yeux animés. | Retiré. Ce clignement causait les deux avertissements d'exécution. |
| s6 | La pièce d'identité et la carte de séjour passaient sous la chemise en arrivant. | Elles passent désormais au-dessus. |
| s6 | Le texte « LÉGALISÉ » débordait du cachet rond. | Cachet rectangulaire à double filet. |
| s6 | La ligne « Carte de séjour… » restait 1,9 s. | Elle apparaît dès « étranger ». |
| s6 | La pile de feuilles est signalée comme un chevauchement de textes. | Le recouvrement est voulu : marqué `data-layout-allow-overlap`. |
| s9 | « Ne restez pas sans couverture » restait 1,4 s. | La ligne reste au-dessus de l'appel jusqu'à l'arrivée du logo. |
| Personnages | La casquette du chauffeur avait l'air d'un casque. | Redessinée. |
| Personnages | Le motif wax d'Awa était trop chargé. | Anneaux plus fins. |
| Personnages | La robe d'avocat se lisait comme une soutane. | Épitoge à hermine ajoutée. |

## Rendu

`renders/CNAMGS-Fonds4-guide.mp4`, en qualité « delivery ».

| Mesure | Valeur |
| --- | --- |
| Vidéo | H.264, 1920 × 1080, 30 im/s |
| Son | AAC, 48 kHz, stéréo |
| Durée | 99,70 s |
| Poids | 15,9 Mo, soit 1,27 Mb/s |
| Volume intégré (EBU R128) | −15,3 LUFS |
| Plage dynamique (LRA) | 3,5 LU |
| Crête vraie | −2,1 dBFS |

Mesures du son au fil du film :

- La musique joue seule les 3,2 premières secondes, autour de −19 LUFS en volume momentané.
- La voix entre à 3,2 s.
- Après la dernière phrase, la musique remonte sur l'accord final (−13,7 LUFS à 93 s), puis s'éteint d'elle-même : −47 LUFS à 98 s, −56 LUFS à 99,5 s.

Une planche de 16 images, prises à intervalles réguliers de 3,1 s à 96,6 s, confirme que le rendu correspond aux images fixes de la relecture :

- les apparitions tombent sur leurs mots ;
- les mains se joignent sur « solidarité » ;
- le logo arrive à 92,8 s.

## À valider par la CNAMGS

Les textes viennent de l'affiche officielle du Fonds 4, du communiqué de la CNAMGS et de l'article de presse transmis. Le site cnamgs.ga n'a pas pu être consulté. Le projet de décret n'a pas été utilisé, car il n'est pas encore adopté. Points à confirmer :

1. **Référence de la loi.** « Loi n°036/2023 du 17 juillet 2023, article 15 » est affiché en grand et sur la page de loi. Le numéro n'est pas dit par la voix.
2. **Listes de métiers.**
   - Santé : médecin, pharmacien, infirmier, sage-femme, kinésithérapeute, vétérinaire.
   - Techniques et juridiques : expert-comptable, commissaire aux comptes, conseiller financier, avocat, notaire, huissier de justice.
   - Commerçants, artisans, artistes.
   - Employés de maison : femme de ménage, jardinier, chauffeur, gardien.

   Les métiers que la voix ne cite pas sont affichés, mais ne s'allument pas.
3. **Pièces à fournir.**
   - Acte de naissance légalisé.
   - Pièce d'identité : CNI, passeport, permis de conduire ou carte de séjour.
   - Avis de patente, d'ISL ou de situation déclarative à la patente. L'écran développe le sigle : « ISL : impôt synthétique libératoire ».
   - Fiche circuit.
   - Selon la situation : copie de l'acte de mariage pour le conjoint, carte de séjour pour les ressortissants étrangers.
4. **Cotisation.** « Forfaitaire, chaque trimestre, par voie électronique ». L'article de presse dit, lui, que les cotisations seront « trimestrielles et calculées en fonction de l'activité exercée » : la formulation est à confirmer. Le film ne donne aucun montant et ne nomme aucun moyen de paiement. L'écran du téléphone est une maquette neutre : « Fonds 4 · Cotisation trimestrielle · Payer → Paiement effectué ».
5. **Prestations.** Consultations, examens, hospitalisations, médicaments, évacuations sanitaires, sans taux de prise en charge. Le pictogramme des évacuations sanitaires est une ambulance. Si l'usage courant vise surtout les évacuations à l'étranger, un avion conviendrait mieux.
6. **Lieux d'immatriculation.** « Délégations provinciales · Unités départementales et communales ». L'immeuble est une illustration générique à l'enseigne CNAMGS, pas un bâtiment réel.
7. **« À jour de vos cotisations, vos soins sont pris en charge ».** Le film ne parle d'aucun délai de carence ni d'aucune condition supplémentaire. Si l'ouverture des droits en comporte, la phrase est à nuancer.
8. **Ordre des étapes.** L'enchaînement « bureau, puis pièces, puis cotisation » est une mise en forme du film.
9. **Signature.** Le slogan « La solidarité a un sens » et l'adresse www.cnamgs.ga figurent sur la carte de fin.
10. **Logo.** Version détourée de l'image fournie. Le fichier vectoriel officiel serait préférable s'il existe.
11. **Prononciation.** La voix dit « knam-jé-èss » ; l'écran écrit toujours CNAMGS.
