'use client'

import { motion } from 'framer-motion'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Chez Manman',
      subtitle: 'Site vitrine pour restaurant antillais',
      description:
        'Création d\'un site vitrine complet pour un restaurant de cuisine antillaise. Storytelling authentique, présentation du menu, témoignages clients, et déploiement optimisé pour la rapidité et le référencement local.',
      technologies: ['React', 'TypeScript', 'TanStack Router', 'Cloudflare Pages'],
      results: ['Site 100% responsive', 'Référencement local optimisé', 'Temps de chargement < 1s'],
      image: '/chez-manman-cover.jpg',
    },
  ]

  return (
    <section className="py-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow text-center mb-3">Réalisations</p>
        <h2 className="font-display text-4xl font-medium text-center mb-16">
          Nos Projets
        </h2>

        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 overflow-hidden rounded-xl border border-gray-800 bg-gray-900/60 hover:border-gold/30 transition-colors duration-500"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="flex items-center justify-center rounded-lg overflow-hidden border border-gray-800">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-3xl font-medium mb-2">{study.title}</h3>
                <p className="italic text-gold text-lg mb-4">
                  {study.subtitle}
                </p>
                <p className="text-gray-300 mb-6">{study.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-gray-700 text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    Résultats
                  </p>
                  <ul className="space-y-1.5">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="text-gold mr-2">✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
