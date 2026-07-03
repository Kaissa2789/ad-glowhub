export const metadata = {
  title: 'Portfolio - AD GlowHub',
  description: 'Découvrez nos réalisations et projets digitaux exceptionnels.',
}

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Portfolio</h1>
        <p className="text-gray-400 text-lg mb-16">
          Projets réalisés pour nos clients, showcasing expertise et créativité.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Chez Manman',
              category: 'Site Vitrine',
              description: 'Site vitrine pour restaurant de cuisine antillaise',
            },
          ].map((project, idx) => (
            <div key={idx} className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-primary transition cursor-pointer">
              <div className="h-40 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{project.category}</p>
              <p className="text-gray-400">{project.description}</p>
            </div>
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
