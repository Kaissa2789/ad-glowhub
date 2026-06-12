# Quick Start - AD GlowHub

Démarre le projet en 3 étapes.

## 1️⃣ Installation

```bash
cd ad-glowhub
npm install
```

## 2️⃣ Développement local

```bash
npm run dev
```

Ouvre http://localhost:3000 dans ton navigateur. ✨

## 3️⃣ Voir les changements en temps réel

- Modifie un fichier dans `app/` ou `components/`
- Le navigateur se rafraîchit automatiquement

---

## 🎨 Personnaliser

### Changer les couleurs
- Fichier: `tailwind.config.ts`
- Changer `#0066FF` (bleu) et `#7C3AED` (violet)

### Changer le contenu
- **Page d'accueil:** `app/page.tsx`
- **Services:** `app/services/page.tsx`
- **Portfolio:** `app/portfolio/page.tsx`
- **Contact:** `app/contact/page.tsx`

### Ajouter des images
- Ajouter à `public/` (ex: `public/logo.png`)
- Utiliser: `<Image src="/logo.png" alt="Logo" />`

---

## 🚀 Build & Deploy

```bash
npm run build    # Crée la version production
npm start        # Lance localement la version prod
```

Alors tu es prêt pour Vercel! 🎉

→ Voir `DEPLOYMENT.md` pour les étapes de déploiement.

---

## 🐛 Erreurs communes

| Erreur | Solution |
|--------|----------|
| `Port 3000 déjà utilisé` | Utilise un autre port: `npm run dev -- -p 3001` |
| `Modules manquants` | Refais `npm install` |
| `TypeScript errors` | Vérifie les imports et types |

---

**Besoin d'aide? Consulte README.md ou DEPLOYMENT.md** 📖
