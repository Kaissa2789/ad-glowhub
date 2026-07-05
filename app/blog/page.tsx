export const metadata = {
  title: 'Blog - AD GlowHub',
  description: 'Articles et insights sur design, développement et stratégie digitale.',
}

export default function Blog() {
  const articles = [
    {
      title: 'Tendances Web Design 2026',
      date: '2026-06-10',
      category: 'Design',
      excerpt: 'Les tendances qui dominent le web design cette année.',
    },
    {
      title: 'Performance Web: Guide Complet',
      date: '2026-06-05',
      category: 'Technique',
      excerpt: 'Comment optimiser votre site pour une meilleure performance.',
    },
    {
      title: 'Stratégie SEO pour 2026',
      date: '2026-06-01',
      category: 'Stratégie',
      excerpt: 'Guide complet pour dominer les résultats de recherche.',
    },
  ]

  return (
    <div className="min-h-screen pt-36 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <p className="eyebrow mb-3">Journal</p>
        <h1 className="font-display text-5xl font-medium mb-8">Blog</h1>
        <p className="text-gray-400 text-lg mb-16">
          Insights, tutoriels et actualités du monde digital.
        </p>

        <div className="space-y-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-gold/40 transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-3">{article.title}</h3>
              <p className="text-gray-400">{article.excerpt}</p>
              <a href="#" className="text-gold hover:underline mt-4 inline-block">
                Lire plus →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
