# 📸 Images à Ajouter - Événements Actualités

## Images Requises

Vous avez fourni 4 images d'événements qui doivent être sauvegardées dans `public/images/` avec les noms suivants:

### 1. Forum International de Libreville 2026
- **Nom du fichier**: `forum-libreville-2026.jpg`
- **Chemin complet**: `public/images/forum-libreville-2026.jpg`
- **Description**: Image du Forum International de Libreville avec le texte "STABILITÉ POLITIQUE, CLIMAT DES AFFAIRES ET INTELLIGENCE ARTIFICIELLE : CATALYSEURS DE CROISSANCE" - 03 mai 2026

### 2. Cuisine Bain Expo
- **Nom du fichier**: `cuisine-bain-expo.jpg`
- **Chemin complet**: `public/images/cuisine-bain-expo.jpg`
- **Description**: Image du salon Cuisine Bain Expo - 3ème édition - 20-23 Septembre 2026, Alger

### 3. SIFFP 2026
- **Nom du fichier**: `siffp-2026.jpg`
- **Chemin complet**: `public/images/siffp-2026.jpg`
- **Description**: Image du SIFFP - 8ème édition - Salon International des Façades, Fenêtres & Portes - 20-23 Septembre 2026, Alger

### 4. GEF 2026 (Optionnel - déjà utilisé?)
- **Nom du fichier**: `gef-2026.jpg`
- **Chemin complet**: `public/images/gef-2026.jpg`
- **Description**: Gabon Economic Forum 2026 - "DES ENTREPRISES FORTES POUR UNE CROISSANCE DURABLE ET PROSPÉRITÉ PARTAGÉES" - 27 JUIN 2026, Libreville

## Comment Ajouter les Images

### Méthode 1: Manuellement (Recommandé)
1. Ouvrez le dossier `public/images/` dans l'explorateur de fichiers
2. Copiez/collez vos 4 images d'événements dans ce dossier
3. Renommez-les avec les noms exacts ci-dessus:
   - `forum-libreville-2026.jpg`
   - `cuisine-bain-expo.jpg`
   - `siffp-2026.jpg`
   - `gef-2026.jpg` (si applicable)

### Méthode 2: Via Ligne de Commande
```bash
# Si vos images sont dans le dossier Downloads
cd public/images/
# Copiez et renommez vos images
copy "C:\Users\Christo\Downloads\forum-libreville.jpg" forum-libreville-2026.jpg
copy "C:\Users\Christo\Downloads\cuisine-bain.jpg" cuisine-bain-expo.jpg
copy "C:\Users\Christo\Downloads\siffp.jpg" siffp-2026.jpg
```

## Vérification

Après avoir ajouté les images, vérifiez qu'elles sont bien présentes:

```bash
ls public/images/ | grep -E "(forum-libreville|cuisine-bain|siffp|gef)"
```

Vous devriez voir:
```
cuisine-bain-expo.jpg
forum-libreville-2026.jpg
siffp-2026.jpg
```

## Images Actuellement Référencées dans le Code

Le fichier `components/hero-enhanced.tsx` utilise déjà ces chemins:

```tsx
const recentNews: NewsItem[] = [
  {
    id: 1,
    title: "Forum International de Libreville pour l'innovation et le développement",
    date: "29 Avril 2026",
    category: "Agenda",
    link: "/actualites/forum-libreville-2026",
    imageUrl: "/images/forum-libreville-2026.jpg",  // ← Attend cette image
  },
  {
    id: 2,
    title: "Cuisine Bain Expo - 3ème édition",
    date: "28 Avril 2026",
    category: "Agenda",
    link: "/actualites/cuisine-bain-expo",
    imageUrl: "/images/cuisine-bain-expo.jpg",  // ← Attend cette image
  },
  {
    id: 3,
    title: "8ème édition du SIFFP",
    date: "28 Avril 2026",
    category: "Agenda",
    link: "/actualites/siffp-2026",
    imageUrl: "/images/siffp-2026.jpg",  // ← Attend cette image
  },
];
```

## Fallback Temporaire

En attendant d'ajouter les vraies images, le code utilisera les images existantes comme fallback pour éviter les erreurs 404.

Une fois les images ajoutées, le carousel affichera automatiquement les vraies images d'événements!

---

**Statut**: ⏳ En attente des images
**Date**: 21 août 2026
