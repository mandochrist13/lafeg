# Relecture — FESTAC, « Tribune des Droits Sociaux » (collage photo, vertical)

## Contrôle automatique

`npx --yes hyperframes@0.9.41 check` : **0 erreur**, contrôle passé.

| Contrôle | Résultat |
| --- | --- |
| Lint | 0 erreur ; 1 avertissement : la table de collage tient dans un seul fichier (une seule prise continue), comme les autres films collage |
| Exécution | 0 erreur, 0 avertissement |
| Mise en page | 0 problème |
| Mouvement | 0 problème |
| Contraste | 2/2 textes de la carte de fin conformes WCAG AA ; les textes de la table sont dessinés sur papier uni, bleu nuit sur blanc ou blanc sur bleu nuit |
| Artisanat | 0 avertissement ; les lignes de la carte de fin restent au moins 2,3 s à l'écran |
| Audio | 0 problème |

Aucun texte ne fait moins de 34 px, sauf ceux des photos et de l'affiche, qui font partie des images.

## Ce que la relecture a corrigé

Le film a été vu en images fixes, page par page, puis à chaque moment retouché.

| Moment | Problème | Correction |
| --- | --- | --- |
| Valeurs | Les quatre mots étaient petits dans le cadre vertical. | Mots plus grands (146 px), rubans écartés. |
| Tribune | Le bas de la page restait vide. | Médaillon agrandi, textes et note « créé par la FESTAC » descendus. |
| FESTAC | Le tampon « SIÈGE · LIBREVILLE » était illisible sur la photo. | Tampon posé sur le coin de la photo, surtout sur le kraft. |
| 10 pays | Drapeaux petits, grand vide entre les deux colonnes. | Drapeaux agrandis, colonnes resserrées. |
| Missions | « 02 » et « 03 » étaient cachés sous leur titre ; « PROMOUVOIR » sortait du cadre. | Numéros remontés, titres réduits et recentrés. |
| Mission 01 | « NOTRE MISSION » touchait le « 01 ». | Bandeau décalé vers le haut. |
| Carte de fin | Contenu trop haut, bas de la feuille vide ; les lignes restaient moins de 2 s. | Contenu centré ; film allongé pour laisser plus de 2 s à chaque ligne. |
| Rythme | Les papiers tombaient sans lien avec la musique. | Chaque page et chaque papier sont calés sur la grille des temps de la musique (104 bpm). |

## Rendu

`renders/FESTAC-tribune.mp4` est le rendu en qualité « delivery », fait en 3 min 07 s.

| Mesure | Valeur |
| --- | --- |
| Image | 1080 × 1920 (vertical), 30 im/s, H.264 |
| Son | AAC stéréo 48 kHz |
| Durée | 45,6 s |
| Poids | 96,2 Mo |
| Volume | −15,2 LUFS intégré, plage 1,5 LU, crête −1,8 dBFS |

`renders/FESTAC-tribune-whatsapp.mp4` est la même vidéo, réencodée pour WhatsApp et les réseaux sociaux :

- H.264 CRF 23, 3 Mbit/s au plus, son AAC 160 kbit/s ;
- 14,6 Mo, très proche du rendu d'origine (SSIM 0,974).

Vingt-quatre images extraites du MP4, de 1 s à 45,3 s, montrent les mêmes pages que les images de contrôle :

- les rubans et les quatre mots : Travail, Dignité, Justice, Solidarité ;
- le médaillon de la Tribune et « créé par la FESTAC » ;
- la page FESTAC avec le siège ;
- les 10 drapeaux ;
- les trois missions ;
- les cinq tickets des émissions ;
- Richard NDI BEKOUNG ;
- « Ensemble pour la justice sociale » ;
- la feuille blanche et la carte de fin.

Pendant les trajets de caméra, la table reste visible, la caméra se lève puis se repose.

**Musique.** Au raccord du montage, à 25,42 s, il n'y a ni saut de niveau ni discontinuité : le plus grand écart entre échantillons est du même ordre qu'aux temps voisins (0,15, contre 0,09 à 0,21).

## À valider par la FESTAC

1. **Médaillon de la Tribune.**
   - Il est découpé dans la vidéo WhatsApp d'origine, en basse définition, puis agrandi.
   - Un fichier en haute définition le rendrait plus net.
2. **Nom et fonction.**
   - Richard NDI BEKOUNG, Secrétaire permanent de la FESTAC : festac.org le présente ainsi dans son agenda, et une affiche de la Tribune le nomme sous la même photo.
   - « Responsable de la Tribune des Droits Sociaux » vient de la vidéo d'origine.
   - Orthographe et fonction à confirmer.
3. **« créé par la FESTAC ».** Repris du bandeau de la Tribune sur festac.org : « Un média panafricain créé par la FESTAC ».
4. **10 pays membres.**
   - C'est le chiffre et la liste de la page « Pays » de festac.org : Cameroun, Gabon, Bénin, Burkina Faso, Côte d'Ivoire, Guinée, Mali, Niger, Sénégal, Togo.
   - Le site parle aussi des « 18 pays de l'espace CIPRES ».
   - Les autres chiffres du site se contredisent : 50+ ou 14+ syndicats, 2M+ ou 100K+ travailleurs, création en 2024 ou mandat 2022–2026. Le film ne les cite pas.
5. **« La voix des travailleurs africains ».** Titre de la rubrique « Qui sommes-nous » du site.
6. **Photos.**
   - Elles viennent toutes de la photothèque de festac.org :
     - inauguration du siège à Libreville ;
     - table ronde FESTAC – CNSS ;
     - prises de parole au micro.
   - L'affiche « Interviews exclusives CIFOCSS & CNSS Gabon » est une publication de la Tribune.
   - Des participants sont reconnaissables, avec leur nom sur les chevalets : à valider avec eux si besoin.
7. **Drapeaux.** Redessinés en papier découpé, tous au même format. Les images du site sont des photos de banque d'images, dont une filigranée.
8. **Appel final.** « Suivez la Tribune des Droits Sociaux sur WhatsApp et YouTube · festac.org » reprend la page Tribune du site. Les adresses de contact du site varient (festac.org, festac.com, festac-cipres.org) : le film n'en affiche aucune.
9. **Musique : licence à vérifier.**
   - Elle a été générée pour le film avec MusicGen (Meta), en local, parce que Lyria n'est pas disponible avec la clé Google du projet : le quota gratuit est à zéro et le mode temps réel ne passe pas par le réseau de la session.
   - Les poids de MusicGen sont sous licence CC BY-NC 4.0 (usage non commercial).
   - Pour la communication d'une fédération syndicale, sans vente, c'est généralement acceptable, mais à valider.
   - Sinon, on peut la remplacer :
     - par un morceau sous licence du catalogue HeyGen, avec une connexion gratuite ;
     - ou par Lyria, avec une clé Google payante.
