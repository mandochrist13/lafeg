# Relecture — « La FESTAC, la fédération de votre syndicat » (2D)

## Contrôle automatique

`npx hyperframes check` : **0 erreur, 0 avertissement**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur, 0 avertissement |
| Exécution | 0 erreur, 0 avertissement |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 33/33 textes conformes WCAG AA |
| Artisanat | 0 avertissement : vignette dès la première image, aucun texte de lecture sous 28 px |
| Audio | 0 problème (10 phrases, musique, 39 bruitages) |

## Ce que la relecture a corrigé

Le film a été vu en images fixes toutes les 3 secondes, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Calage de la voix | L'ancien calage plaçait mal les mots après « : » et « ? » (typographie française), et dérivait d'une seconde sur le numéro de téléphone. Whisper dérivait aussi. | Nouveau calage `tools/align.py` : les pauses réelles sont appariées à la ponctuation sur toute la phrase. Chaque groupe de chiffres du numéro tombe sur sa pause. |
| Vignette | La première image était blanche : le logo et le titre entraient en fondu. | Logo et titre visibles dès la première image. |
| Ouverture | Koffi levait le bras sur « pour vous » : on lisait un poing levé. | Signe de tête et sourire des trois personnages, liseré or sur les panneaux. |
| Une voix plus forte | Étapes trop petites ; le pointillé traversait l'Assemblée générale. | Personnages et hémicycle agrandis ; la voix voyage en deux arcs pointillés au-dessus des étapes. |
| Une voix plus forte | Les drapeaux s'ouvraient depuis le coin de l'image. | Chaque drapeau s'ouvre depuis sa hampe. |
| Centre de formation | Le titre touchait le tableau. | Tableau descendu ; le bras de la formatrice désigne chaque module. |
| Centre de formation | Même icône (balance) pour « Droit du travail » et « Conditions de travail justes ». | « Droit du travail » devient un livre de loi (§). |
| Échanges | Les icônes partagées passaient sur le titre. | Trajectoires plus basses, au-dessus des têtes. |
| Pays membres | Liste des pays en 26 px. | 28 px. |
| Information | Le téléphone oscillait, les petits textes de l'écran étaient comptés comme textes à lire. | Plus d'oscillation ; textes de l'écran marqués décoratifs. Le médaillon de la ligne n'est plus une seconde image. |

## Rendu

`renders/FESTAC-guide-2D.mp4` est le rendu en qualité « delivery ». Il a pris 4 min 35 s.

| Mesure | Valeur |
| --- | --- |
| Image | 1920 × 1080, 30 im/s, H.264 |
| Durée | 100,4 s |
| Poids | 14,9 Mo, sous la limite de WhatsApp : pas de version allégée nécessaire |
| Son | AAC stéréo 48 kHz ; −15,3 LUFS intégré, plage 3,1 LU, crête −1,9 dBFS |
| Images noires | aucune |
| Images presque fixes | la fiche contact (74 à 89 s), où seuls les chiffres et la respiration bougent, et la carte de fin |

Planche contact du fichier rendu, une image toutes les 5 s : toutes les scènes sont conformes à la relecture.
