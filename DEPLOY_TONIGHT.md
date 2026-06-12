# 🚀 DÉPLOIEMENT CE SOIR - Guide Ultra Simple

**Fais ça ce soir (20h-21h) sur ton ordi.**

---

## 📋 Étapes rapides (20 min max)

### **ÉTAPE 1️⃣ : GitHub (5 min)**

1. Ouvre https://github.com/new
2. **Repository name:** `ad-glowhub`
3. Clic sur **Create repository**
4. **Ne fais rien d'autre** (juste regarde l'écran)

Vercel va faire les étapes suivantes toute seule! 👇

---

### **ÉTAPE 2️⃣ : Vercel (3 min)**

1. Ouvre https://vercel.com/new
2. Clique sur **Import Project**
3. Colle l'URL GitHub de `ad-glowhub`
4. Clique **Import**
5. **Framework Preset:** Next.js (auto-détecté ✓)
6. Clique **Deploy**

**Attends 2-3 minutes...**

Quand c'est fini, tu vois une URL type: `ad-glowhub-xyz.vercel.app` ✅

**Teste-la dans le navigateur!** 🎉

---

### **ÉTAPE 3️⃣ : Domaine IONOS (10 min)**

1. Ouvre ton **Dashboard IONOS**
2. Va dans **Domaines** → **ad-glowhub.fr**
3. Clique **Gérer le domaine** (ou **Paramètres DNS**)
4. **Supprime** les anciens nameservers (s'il y en a)
5. **Ajoute** les nouveaux nameservers Vercel:
   ```
   ns1.vercel.com
   ns2.vercel.com
   ```
6. **Sauvegarde** et ferme

---

### ✅ C'est bon! Tu as fini

Attends **24-48h** (parfois instantané) pour que le domaine se propage.

Puis teste: https://ad-glowhub.fr

---

## ⚠️ Si tu as des questions

| Question | Réponse |
|----------|---------|
| "J'ai pas GitHub?" | Va sur https://github.com/signup et crée un compte (5 min) |
| "Vercel c'est quoi?" | C'est l'hébergement gratuit pour Next.js - ultra simple |
| "Et si ça marche pas?" | Appelle le support Vercel ou IONOS, c'est gratuit |
| "Ça coûte combien?" | Vercel: GRATUIT pour les petits projets |

---

## 🎁 Bonus: Modifier le site après déploiement

```bash
# Sur ton ordi ce soir:
cd ad-glowhub

# Modifie un fichier (ex: app/page.tsx)
# Puis:

git add .
git commit -m "Modification: [ce que j'ai changé]"
git push

# Vercel redéploie automatiquement! ✨
```

---

## 📞 Support

- **Vercel Help:** https://vercel.com/help
- **IONOS Support:** https://www.ionos.fr/support

---

**Bonne chance ce soir! 🚀**

Questions? Tu me contactes!
