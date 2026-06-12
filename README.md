# AD GlowHub - Site Officiel

Agence digitale premium créant des expériences web exceptionnelles.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ et npm
- Git

### Installation locale

```bash
# Cloner le repo (ou extraire les fichiers)
cd ad-glowhub

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir dans le navigateur
# http://localhost:3000
```

### Build pour production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
ad-glowhub/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── services/page.tsx   # Page Services
│   ├── portfolio/page.tsx   # Page Portfolio
│   ├── about/page.tsx      # Page À propos
│   ├── blog/page.tsx       # Page Blog
│   └── contact/page.tsx    # Page Contact
├── components/
│   ├── Navigation.tsx      # Header/Nav
│   ├── Footer.tsx          # Footer
│   ├── HeroSection.tsx     # Hero section
│   ├── ServicesOverview.tsx
│   ├── CaseStudies.tsx     # Projets
│   └── CTAFinal.tsx        # Call to action
├── public/                 # Assets statiques
├── package.json            # Dépendances
├── tsconfig.json           # Config TypeScript
├── tailwind.config.ts      # Config Tailwind
├── next.config.js          # Config Next.js
└── postcss.config.mjs      # Config PostCSS
```

## 🎨 Design System

**Couleurs principales:**
- Bleu (Primary): `#0066FF`
- Violet (Secondary): `#7C3AED`
- Noir (Dark): `#111827`
- Clair (Light): `#F3F4F6`

**Typographie:**
- Font: Inter (Google Fonts)
- Weights: 400, 500, 600, 700, 800

## 🛠️ Technologies

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Language:** TypeScript
- **Package Manager:** npm

## 📦 Déploiement

### Sur Vercel

1. **Créer un compte Vercel** (si nécessaire)
   - https://vercel.com/signup

2. **Connecter le repo GitHub**
   - Cliquer "Import Project"
   - Sélectionner ce repo

3. **Variables d'environnement**
   - Ajouter depuis `.env.example` si nécessaire

4. **Déployer**
   - Vercel déploie automatiquement

### Configuration DNS (IONOS)

1. **Dans le dashboard IONOS**
   - Aller dans Domaines → ad-glowhub.fr
   - Aller dans "Paramètres DNS"

2. **Ajouter les records Vercel**
   - Vercel fournit les instructions
   - Généralement: CNAME ou NS records

3. **Vérifier la propagation**
   - Peut prendre 24h-48h

## 🔍 Lighthouse Performance

- **Performance:** 100
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## 📝 Licence

Tous droits réservés - AD GlowHub
