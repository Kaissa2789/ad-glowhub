import Link from 'next/link'

export const metadata = {
  title: 'Blog - AD GlowHub',
  description: 'Articles et insights sur design, développement et stratégie digitale.',
}

export default function Blog() {
  const articles = [
    {
      title: 'De la simple idée au site vitrine : le cas Chez Manman',
      date: '2026-07-05',
      category: 'Étude de cas',
      excerpt:
        "Comment nous avons accompagné un restaurant antillais dans la création de son site vitrine, de la structure du contenu au référencement local.",
      href: '/blog/chez-manman-refonte',
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
            <Link
              key={idx}
              href={article.href}
              className="block p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-gold/40 transition cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
              </div>
              <h3 className="font-display text-2xl font-medium mb-3">{article.title}</h3>
              <p className="text-gray-400">{article.excerpt}</p>
              <span className="text-gold hover:underline mt-4 inline-block">
                Lire plus →
              </span>
            </Link>
          ))}

          {/* Placeholder "coming soon" */}
          <div className="p-6 bg-gray-900/50 rounded-lg border border-dashed border-gray-700 text-center">
            <p className="text-gray-500 text-sm">Prochains articles à venir</p>
          </div>
        </div>
      </div>
    </div>
  )
}
