# Relecture — « Formation nationale : contrôle et vérification des cotisations sociales » (vertical)

## Contrôle automatique

`npx hyperframes check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint, exécution, mise en page, mouvement | 0 erreur |
| Contraste | 22/22 textes conformes WCAG AA |
| Zones sûres | Avertissements pour TikTok, Reels et Shorts : leurs boutons couvriraient les bords. La vidéo est faite pour WhatsApp, comme l'original ; le bandeau du haut est descendu sous le nom et l'heure qu'affiche un statut WhatsApp. |

## Ce que la relecture a corrigé

Le film a été vu en images fixes toutes les 3 secondes, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Couverture | « FORMATION NATIONALE » passait sur deux lignes et chevauchait le titre. | Bandeau élargi, texte sur une ligne. |
| Signature | La fermeture du « t » de FESTAC passait pour une pause, et les trois valeurs arrivaient en retard. | Calage de la dernière phrase avec une pause minimale de 0,15 s. |
| Inscription | « INSCRIVEZ-VOUS » passait sur deux lignes ; le numéro débordait de sa carte. | Tailles revues ; le numéro tient dans sa carte et chaque groupe s'allume quand il est dit. |
| Slogan | « TRANSPARENCE » touchait le bord droit. | Taille ajustée. |
| Bandeau du haut | Sur un statut WhatsApp, le nom et l'heure de l'expéditeur couvrent le haut de l'image. | Bandeau descendu à 150 px du haut. |
| Lieu (v2) | « vers la fin du goudron » (repris de l'original) : le quartier s'appelle Fin Goudron. | Phrase 4 régénérée (« vers Fin Goudron »), même voix et même consigne ; sigle IHEM vérifié par deux modèles (I-H-E-M). Carte du lieu : « vers Fin Goudron », route goudronnée avec l'épingle et l'étiquette du quartier. |
| Partenaires (v2) | Le Groupe IHEM International n'était qu'un nom écrit, faute de logo. | Logo fourni par la FESTAC, intégré sur la carte du lieu, dans la scène des partenaires et dans un bandeau de fin CNSS · IHEM · Tribune, comme dans l'original. |

## Rendu

`renders/FESTAC-formation-cotisations.mp4` est le rendu en qualité « delivery ». Il a pris 4 min.

| Mesure | Valeur |
| --- | --- |
| Image | 1080 × 1920 (vertical), 30 im/s, H.264 |
| Durée | 87,2 s |
| Poids | 22,1 Mo |
| Son | AAC stéréo 48 kHz ; −15,2 LUFS intégré, plage 3,0 LU, crête −2,3 dBFS |
| Images noires ou figées | aucune |

Planche contact du fichier rendu, une image toutes les 5 s : toutes les scènes sont conformes à la relecture.

`renders/FESTAC-formation-cotisations-whatsapp.mp4` est la même vidéo, réencodée pour rester sous la limite de 16 Mo de WhatsApp :

- H.264 en deux passes à 1,2 Mbit/s, son AAC 128 kbit/s ;
- 14,4 Mo, quasi identique au rendu (SSIM 0,998).
