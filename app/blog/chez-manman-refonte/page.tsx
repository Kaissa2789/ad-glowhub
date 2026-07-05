import Link from 'next/link'

export const metadata = {
  title: 'De la simple idée au site vitrine : le cas Chez Manman - AD GlowHub',
  description:
    "Comment nous avons accompagné un restaurant antillais dans la création de son site vitrine, de la structure du contenu au référencement local.",
}

export default function ChezManmanArticle() {
  return (
    <article className="min-h-screen pt-36 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="text-sm text-gold hover:underline mb-6 inline-block">
          ← Retour au blog
        </Link>

        <p className="eyebrow mb-3">Étude de cas</p>
        <h1 className="font-display text-4xl md:text-5xl font-medium mb-4 leading-tight">
          De la simple idée au site vitrine : le cas Chez Manman
        </h1>
        <p className="text-gray-500 text-sm mb-12">5 juillet 2026 · 4 min de lecture</p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Chez Manman est un restaurant de cuisine antillaise situé à Saint-Maur-des-Fossés.
            Avant notre intervention, l'établissement n'avait aucune présence en ligne : pas de
            site, pas de fiche Google, aucun moyen pour un client de découvrir le menu ou les
            horaires avant de pousser la porte.
          </p>

          <h2 className="font-display text-2xl font-medium text-white pt-4">Le point de départ</h2>
          <p>
            L'objectif était simple à énoncer, plus exigeant à réaliser : donner à ce restaurant
            une vitrine digitale qui reflète son identité — authentique, chaleureuse, ancrée dans
            la cuisine guadeloupéenne — sans tomber dans un site vitrine générique comme on en
            voit des centaines.
          </p>

          <h2 className="font-display text-2xl font-medium text-white pt-4">Ce qu'on a mis en place</h2>
          <p>
            Le site a été construit autour de quelques piliers simples : un menu clair et
            détaillé, une section racontant l'histoire du restaurant, des témoignages clients
            pour rassurer les nouveaux visiteurs, et une identité visuelle cohérente du logo
            jusqu'au moindre bouton.
          </p>
          <p>
            Techniquement, nous avons privilégié une stack rapide et fiable (React, TypeScript,
            déploiement sur Cloudflare Pages) pour garantir un temps de chargement inférieur à la
            seconde, un point souvent négligé mais qui influence directement le référencement et
            le taux de rebond.
          </p>

          <h2 className="font-display text-2xl font-medium text-white pt-4">Les résultats</h2>
          <ul className="space-y-2 list-none pl-0">
            <li className="flex items-start">
              <span className="text-gold mr-2">✓</span>
              Site 100% responsive, pensé mobile en priorité
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">✓</span>
              Référencement local optimisé pour les recherches "restaurant antillais Saint-Maur"
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-2">✓</span>
              Temps de chargement inférieur à 1 seconde
            </li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-white pt-4">Ce qu'on en retient</h2>
          <p>
            Un site vitrine réussi n'a pas besoin d'être compliqué. Il doit surtout être honnête :
            montrer ce que l'établissement est vraiment, avec des mots et des visuels qui
            correspondent à la réalité. C'est cette cohérence qui donne confiance à un visiteur
            avant même qu'il ait goûté un seul plat.
          </p>

          <div className="pt-8 border-t border-gray-800 mt-10">
            <p className="text-gray-400 mb-4">
              Vous portez un projet similaire ? Discutons-en.
            </p>
            <Link href="/contact" className="btn-primary">
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
