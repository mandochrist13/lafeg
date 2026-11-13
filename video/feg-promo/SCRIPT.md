# Script — voix off féminine (français)

Une ligne = un fichier audio (`assets/voice/<id>.wav`). Voix Gemini « Despina » : la narration est d'abord générée d'un seul tenant, puis certaines phrases sont reprises une à une et vérifiées (L08 pour la prononciation, puis L02, L03, L07 et L10 pour la version intemporelle). Le texte à l'écran ne répète pas la phrase dite. Seule exception : le thème du GEF, qui s'encre au rythme de la voix.

**v6** : la carte présente les 9 provinces ; une phrase (L06b) précise que le dialogue public-privé ne passe pas que par le Gabon Economic Forum.

**Version intemporelle (v5)** : aucune date d'événement, aucune mention de la Semaine mondiale de l'entrepreneuriat, effectif arrondi (« plus de 1 100 entreprises »).

| id | Voix off | À l'écran |
| --- | --- | --- |
| L01 | L'histoire économique d'un pays s'écrit sur le terrain, dans la sueur des ateliers et le risque des entrepreneurs. | L'atelier seul, puis un chantier, une boutique et un bureau, chacun isolé |
| L02 | Mais seule, une entreprise peine à se faire entendre, et pèse peu sur les décisions qui la concernent. | Une bulle de parole verte (onde sonore) monte de l'atelier, puis se dissout en ondes : personne ne la reçoit |
| L03 | Depuis 1959, la Fédération des Entreprises du Gabon rassemble ceux qui font l'économie du pays : plus de 1 100 entreprises, réparties en 13 fédérations métiers. | Les 9 provinces, teintées et nommées, « 9 provinces » · « Depuis 1959 » · « Fédération des Entreprises du Gabon » · « plus de 1 100 entreprises » · les 13 fédérations et leur effectif |
| L04 | Ensemble, elles représentent près de 80 % du PIB, et plus de 90 % de la main-d'œuvre formelle. | « ≈ 80 % du PIB » · « + 90 % de la main-d'œuvre formelle » (lafeg.ga) |
| L05 | Sa raison d'être : porter votre voix. Informer, promouvoir, participer aux négociations, défendre vos intérêts. | Tour FEG · Informer / Promouvoir / Participer / Défendre |
| L06 | Votre préoccupation remonte par votre fédération métier jusqu'au Bureau exécutif, puis à la table du dialogue public-privé. | La bulle repart de l'atelier : Votre entreprise → Fédération métier → Bureau exécutif → Dialogue public-privé |
| L06b | Il ne passe pas que par les grands forums : au sortir des travaux rapportés par les fédérations métiers, des réunions se tiennent avec le secteur public. | La caméra s'approche de la table : les membres face aux pouvoirs publics ; trois dossiers verts des fédérations se posent · « Réunions avec le secteur public · au sortir des travaux des fédérations métiers » |
| L07 | Ce dialogue a son grand rendez-vous : le Gabon Economic Forum. Lors de sa dernière édition, ses huit ateliers ont abouti à la Déclaration de Libreville. | « Sous le Très Haut Patronage du Chef de l'État » · « Gabon Economic Forum » · « Palais des Congrès, Libreville · 8 ateliers thématiques » · la bulle se pose sur « Atelier 1 · Dette intérieure et fiscalité » · « Déclaration de Libreville du secteur privé » |
| L08 | La dette intérieure, la fiscalité, la commande publique, le financement des PME : ensemble, les entreprises pèsent désormais sur les réformes du pays. | Axe 1 (texte exact) · « La voix des entreprises au cœur des réformes » · « 8 axes · 24 recommandations · 1 comité paritaire de suivi » |
| L09 | Adhérer, c'est aussi profiter d'une veille sur les réformes, de formations, d'un réseau d'affaires aux tarifs négociés, et d'un service de médiation et d'arbitrage. | Veille et publications · Formations · Réseau d'affaires · Médiation et arbitrage |
| L10 | Des entreprises fortes, une croissance durable, une prospérité partagée. Votre entreprise a sa place à nos côtés : rejoignez la Fédération des Entreprises du Gabon. | « Thème du Gabon Economic Forum » : chaque mot s'encre quand la voix le prononce · logo FEG · « Devenez membre · lafeg.ga » · info@lafeg.ga · +241 11 77 55 95 |

Pour la synthèse, `tools/lines.json` écrit les nombres de L03 en toutes lettres (« mille neuf cent cinquante-neuf », « mille cent », « treize »). Écrit en chiffres, « 1959 » était lu « dix-neuf cent cinquante-neuf ».

Environ 245 mots, soit 105 s de voix ; film de 113,4 s.

## Version sans voix : les titres

Citation du Président (« L'histoire économique d'un pays s'écrit sur le terrain… », Alain-Claude Kouakoua) · « Seule, une entreprise peine à se faire entendre. » · « 13 fédérations métiers » · « Porter la voix des entreprises » · « Votre préoccupation remonte jusqu'à l'État » · « Le dialogue public-privé · Pas seulement les grands forums » · « Des services au quotidien » · thème du Gabon Economic Forum. Les surtitres, chiffres et étiquettes de la version voix sont conservés.

## Sources de chaque chiffre

- 1959, UNIGABON → CPG → FEG : site lafeg.ga (composant Histoire).
- Effectif et 13 fédérations : « Les entreprises de la FEG », Pôle Adhérents & Services Numériques (1 118 membres au moment de la production, arrondis à « plus de 1 100 » pour rester justes dans le temps ; la maquette 3D en montre 1 118, sans les compter à l'écran).
- ≈ 80 % du PIB, + 90 % de la main-d'œuvre formelle : site lafeg.ga (À propos).
- Missions et services : site lafeg.ga (Mission, Services) et plaquette « Les services offerts aux membres de la FEG ».
- Les 9 provinces : carte administrative du Gabon transmise par la FEG.
- Gabon Economic Forum, Palais des Congrès, 8 ateliers, 8 axes, comité paritaire de suivi, thème : Déclaration de Libreville du secteur privé. L'édition et sa date ne sont plus citées : « lors de sa dernière édition ».
- L08 a été reformulée à la demande de la FEG pour suggérer l'impact sans l'affirmer : « ensemble, les entreprises pèsent désormais sur les réformes du pays » (écho à L02, « pèse peu sur les décisions qui la concernent »).
