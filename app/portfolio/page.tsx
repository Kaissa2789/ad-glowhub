export const metadata = {
  title: 'Portfolio - AD GlowHub',
  description: 'Découvrez nos réalisations et projets digitaux exceptionnels.',
}

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <p className="eyebrow mb-3">Réalisations</p>
        <h1 className="font-display text-5xl font-medium mb-8">Portfolio</h1>
        <p className="text-gray-400 text-lg mb-16">
          Projets réalisés pour nos clients, showcasing expertise et créativité.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Chez Manman',
              category: 'Site Vitrine',
              description: 'Site vitrine pour restaurant de cuisine antillaise',
              image: '/chez-manman-cover.jpg',
              url: 'https://chezmanman.fr',
            },
          ].map((project, idx) => (
            <a
              key={idx}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-gold/40 transition cursor-pointer block"
            >
              <div className="h-40 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{project.title}</h3>
              <p className="italic text-gold text-sm mb-2">{project.category}</p>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <p className="text-sm text-gold font-medium">Voir le site →</p>
            </a>
          ))}

          {/* Placeholder "coming soon" card */}
          <div className="p-6 bg-gray-900/50 rounded-lg border border-dashed border-gray-700 flex flex-col items-center justify-center text-center min-h-[280px]">
            <p className="text-gray-500 text-sm">Prochains projets à venir</p>
          </div>
        </div>
      </div>
    </div>
  )
}
