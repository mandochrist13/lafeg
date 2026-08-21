# 🚀 Démarrage Rapide - Hero Carousel

## Problème Rencontré

Erreur 500 sur les fichiers fallback Next.js (_app.js, _error.js). Cela indique un problème de compilation ou de processus Node bloqués.

## Solution: Redémarrage Propre

### Étape 1: Arrêter TOUS les processus Node

**Option A - Windows (PowerShell ou CMD):**
```bash
taskkill /F /IM node.exe
```

**Option B - Via Gestionnaire de tâches:**
1. Ouvrir Gestionnaire de tâches (Ctrl+Shift+Esc)
2. Onglet "Processus"
3. Chercher "Node.js"
4. Cliquer droit → "Fin de tâche" pour chaque instance

### Étape 2: Supprimer le cache Next.js

```bash
cd c:\Users\Christo\Documents\La_feg_worckspace\feg-vitrine
rmdir /s /q .next
```

Si l'erreur "Permission denied" apparaît:
1. Fermer VS Code complètement
2. Fermer tous les navigateurs
3. Réessayer la commande

### Étape 3: Réinstaller les dépendances (optionnel si erreur persiste)

```bash
rmdir /s /q node_modules
pnpm install
```

### Étape 4: Redémarrer le serveur

```bash
npm run dev
```

ou

```bash
pnpm dev
```

### Étape 5: Attendre le message "Ready"

Vous devriez voir:
```
▲ Next.js 15.3.3
- Local:   http://localhost:3000

✓ Ready in 5.2s
```

### Étape 6: Ouvrir dans le navigateur

```
http://localhost:3000
```

(ou le port indiqué par le serveur)

---

## Vérification Rapide

### Le carousel doit afficher:

1. **Image plein écran** en arrière-plan
2. **Texte overlay** sur la gauche:
   - Badge catégorie (bronze)
   - Titre principal (blanc)
   - Sous-titre (bronze clair)
   - Description (gris clair)
   - Bouton CTA (blanc)
3. **3 cartes miniatures** sur la droite (200×300px chacune)
4. **Navigation** en bas:
   - 9 indicateurs de progression (dots)
   - Boutons Précédent / Suivant

### Test Auto-rotation

1. Attendre 6 secondes sans bouger la souris
2. Le carousel devrait avancer automatiquement
3. Passer la souris sur le carousel → pause
4. Retirer la souris → reprise

---

## Si le problème persiste

### Erreur: "Cannot find module"

```bash
pnpm install
```

### Erreur: "Port already in use"

Next.js choisira automatiquement un autre port (3001, 3002, etc.)
Utilisez le port indiqué dans la console.

### Erreur: Images manquantes (404)

Vérifier que les images existent:
```bash
dir public\images
```

Devrait afficher:
- hero-business-gabon.jpg
- hero-dialogue-institutions.jpg
- hero-formation.jpg
- hero-networking.jpg
- hero-member.jpg
- hero-publications.jpg
- slider-bg-2.jpg
- slider-bg-3.jpg
- activity1.jpg

Si images manquantes, télécharger:
```bash
node scripts/download-images.js
```

### Erreur: Page blanche

1. Ouvrir la console du navigateur (F12)
2. Chercher les erreurs JavaScript
3. Vérifier l'onglet "Network" pour les requêtes en échec
4. Copier l'erreur exacte

### Erreur TypeScript

```bash
npx tsc --noEmit
```

Cette commande affiche les erreurs TypeScript sans compiler.

---

## Diagnostic Avancé

### Vérifier que hero-enhanced.tsx existe

```bash
dir components\hero-enhanced.tsx
```

### Vérifier que page.tsx importe HeroEnhanced

```bash
findstr /C:"HeroEnhanced" app\(user)\page.tsx
```

Devrait afficher:
```
import HeroEnhanced from "@/components/hero-enhanced"
<HeroEnhanced />
```

### Tester avec build de production

```bash
npm run build
npm start
```

Si le build réussit mais dev échoue, problème avec le mode développement.

---

## Alternative: Revenir à l'ancien Hero

Si le nouveau carousel pose trop de problèmes, vous pouvez temporairement revenir à l'ancien:

### Étape 1: Modifier page.tsx

Remplacer:
```tsx
import HeroEnhanced from "@/components/hero-enhanced"
```

Par:
```tsx
import HeroEditorial from "@/components/hero-editorial"
```

Et:
```tsx
<HeroEnhanced />
```

Par:
```tsx
<HeroEditorial />
```

### Étape 2: Redémarrer

```bash
npm run dev
```

---

## Informations de Debug Utiles

Quand vous demandez de l'aide, inclure:

1. **Version Node.js:**
   ```bash
   node --version
   ```

2. **Version npm/pnpm:**
   ```bash
   npm --version
   pnpm --version
   ```

3. **Message d'erreur complet** de la console

4. **Capture d'écran** de l'erreur dans le navigateur (F12 → Console)

5. **Sortie complète** du terminal quand vous lancez `npm run dev`

---

## Contact Support

Si aucune solution ne fonctionne:

1. Vérifier [issues GitHub Next.js](https://github.com/vercel/next.js/issues)
2. Chercher l'erreur exacte sur Google/StackOverflow
3. Créer une issue sur le repo du projet avec les informations de debug

---

**Dernière mise à jour:** 21 août 2026
**Component concerné:** hero-enhanced.tsx
