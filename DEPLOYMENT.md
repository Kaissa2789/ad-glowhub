# Guide de Déploiement - AD GlowHub

## ✅ Étape 1 : Préparation (Git & GitHub)

### 1.1 Initialiser Git (si pas déjà fait)
```bash
cd /home/claude/ad-glowhub
git init
git add .
git commit -m "Initial commit - AD GlowHub"
```

### 1.2 Créer un repo sur GitHub
1. Aller à https://github.com/new
2. Créer un repo `ad-glowhub`
3. Copier l'URL du repo
4. Ajouter le remote:
```bash
git remote add origin https://github.com/[VOTRE_USERNAME]/ad-glowhub.git
git branch -M main
git push -u origin main
```

---

## 🚀 Étape 2 : Déployer sur Vercel

### 2.1 Créer un compte Vercel
1. Aller à https://vercel.com/signup
2. Signer avec GitHub
3. Autoriser Vercel à accéder à vos repos

### 2.2 Importer le projet
1. Cliquer "New Project"
2. Sélectionner le repo `ad-glowhub`
3. Cliquer "Import"

### 2.3 Configuration du déploiement
1. **Framework Preset:** Next.js (auto-détecté)
2. **Build Command:** `npm run build`
3. **Output Directory:** `.next`
4. **Environment Variables:** (facultatif pour maintenant)
   - Vous pouvez ajouter depuis `.env.example` plus tard

### 2.4 Déployer
- Cliquer "Deploy"
- Attendre quelques minutes
- Vercel crée une URL temporaire (ex: `ad-glowhub-abc123.vercel.app`)

**Félicitations! Le site est live sur Vercel! 🎉**

---

## 🌐 Étape 3 : Connecter le domaine IONOS

### 3.1 Sur Vercel
1. Aller au **Project Settings** (⚙️)
2. Cliquer **Domains**
3. Ajouter un domaine: `ad-glowhub.fr`
4. Vercel affiche les instructions DNS

### 3.2 Sur IONOS
1. Accéder à votre compte IONOS
2. Aller à **Domaines** → **ad-glowhub.fr**
3. Cliquer **Gérer le domaine** ou **Paramètres DNS**
4. Supprimer les anciens nameservers (s'il y en a)
5. Ajouter les nameservers Vercel fournis:
   ```
   ns1.vercel.com
   ns2.vercel.com
   ```
   Ou les enregistrements CNAME si spécifié

### 3.3 Vérifier la propagation
1. Attendre 24-48h (parfois instantané)
2. Tester: https://ad-glowhub.fr
3. Utiliser: https://dnschecker.org pour vérifier

---

## 🔄 Mises à jour futures

Pour mettre à jour le site:

```bash
# Modifier les fichiers localement
# ...

# Commit et push
git add .
git commit -m "Mise à jour: [description]"
git push origin main

# Vercel redéploie automatiquement! 🚀
```

---

## ❓ Troubleshooting

### Le domaine ne marche pas après 48h
- Vérifier les DNS sur IONOS (Paramètres DNS)
- Attendre un peu plus (DNS peut être lent)
- Contacter support IONOS si problème persist

### Erreurs de build Vercel
- Cliquer sur le lien du build failed
- Voir les logs d'erreur
- Corriger localement et repush

### Voir les logs Vercel
- Dashboard Vercel → Deployments
- Cliquer sur le déploiement
- Onglet "Logs"

---

## 📊 Monitoring

Sur le dashboard Vercel:
- Voir les performances (Lighthouse)
- Analyser les erreurs
- Voir l'analytics

---

**Besoin d'aide? Contactez le support Vercel ou IONOS.**
