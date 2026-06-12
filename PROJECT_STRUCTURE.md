# Structure du Projet - AD GlowHub

Comprendre où trouver les fichiers.

## 📂 Layout global

```
ad-glowhub/
├── app/                    # Pages et layout Next.js
├── components/             # Composants réutilisables
├── public/                 # Assets statiques (images, etc)
├── package.json            # Dépendances npm
├── tsconfig.json           # Config TypeScript
├── tailwind.config.ts      # Config Tailwind CSS
├── next.config.js          # Config Next.js
├── postcss.config.mjs      # Config PostCSS
├── vercel.json             # Config Vercel
└── README.md               # Documentation
```

---

## 🎯 Fichiers clés expliqués

### `app/`
Contient les **pages du site** et le **layout principal**.

```
app/
├── layout.tsx           ← Structure HTML + nav + footer (toutes les pages)
├── globals.css          ← Styles globaux (fonts, animations, etc)
├── page.tsx             ← Accueil (/)
├── services/page.tsx    ← Services (/services)
├── portfolio/page.tsx   ← Portfolio (/portfolio)
├── about/page.tsx       ← À propos (/about)
├── blog/page.tsx        ← Blog (/blog)
└── contact/page.tsx     ← Contact (/contact)
```

**À savoir:**
- Chaque dossier = une URL (ex: `services/` = `/services`)
- `page.tsx` = le contenu de la page
- `layout.tsx` = structure partagée par toutes les pages

### `components/`
Contient les **composants réutilisables**.

```
components/
├── Navigation.tsx       ← Header/Menu
├── Footer.tsx           ← Pied de page
├── HeroSection.tsx      ← Section héro (accueil)
├── ServicesOverview.tsx ← Grille services
├── CaseStudies.tsx      ← Projets/cas d'études
└── CTAFinal.tsx         ← Appel à l'action
```

**À savoir:**
- Composants réutilisés sur plusieurs pages
- Contiennent du JSX + Tailwind CSS
- Framer Motion pour les animations

### `public/`
Contient les **assets statiques**.

```
public/
├── images/
│   └── logo.png
├── favicon.ico
└── ...
```

**À savoir:**
- Accessible directement: `/images/logo.png`
- Utiliser pour logos, images, assets

### Configuration (`package.json`, `tsconfig.json`, etc)
Fichiers de **configuration du projet**.

- `package.json` → Dépendances npm + scripts
- `tsconfig.json` → Configuration TypeScript
- `tailwind.config.ts` → Thème Tailwind (couleurs, etc)
- `next.config.js` → Configuration Next.js
- `vercel.json` → Configuration Vercel

---

## 🎨 Où faire quoi?

| Besoin | Fichier | Exemple |
|--------|---------|---------|
| Ajouter une page | `app/[nom]/page.tsx` | Créer `/app/team/page.tsx` pour `/team` |
| Changer les couleurs | `tailwind.config.ts` | Modifier `colors: { primary: '#...' }` |
| Ajouter un composant | `components/[Nom].tsx` | Créer `components/Testimonials.tsx` |
| Ajouter des styles globaux | `app/globals.css` | Ajouter `@tailwind ...` |
| Modifier le header | `components/Navigation.tsx` | Éditer les liens |
| Ajouter des images | `public/images/` | Ajouter `public/images/logo.png` |

---

## 🔄 Exemple: Ajouter une nouvelle page

### 1. Créer le dossier et fichier
```bash
mkdir -p app/services-details
touch app/services-details/page.tsx
```

### 2. Ajouter le contenu
```tsx
// app/services-details/page.tsx
export const metadata = {
  title: 'Services Détaillés - AD GlowHub',
}

export default function ServicesDetails() {
  return (
    <div className="min-h-screen pt-20">
      <h1>Services Détaillés</h1>
      {/* Contenu */}
    </div>
  )
}
```

### 3. URL automatique
- Fichier: `app/services-details/page.tsx`
- URL: `https://ad-glowhub.fr/services-details`

---

## 📝 Nommage et conventions

- **Pages:** `app/nom-page/page.tsx`
- **Composants:** `components/NomComposant.tsx` (PascalCase)
- **Fichiers:** `nom-fichier.ts` (kebab-case)
- **CSS classes:** Tailwind CSS (ex: `text-xl font-bold`)

---

## ✅ Checklist avant déploiement

- [ ] Toutes les pages chargent sans erreur
- [ ] Les liens fonctionnent
- [ ] Les images chargent
- [ ] Les couleurs sont correctes
- [ ] Le responsive fonctionne (mobile/desktop)
- [ ] Pas d'erreurs TypeScript (`npm run build`)

---

**Prêt à commencer? Consulte QUICK_START.md** 🚀
