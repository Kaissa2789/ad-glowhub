'use client'

import { motion } from 'framer-motion'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'The Beauty Spot',
      subtitle: 'Plateforme de réservation pour professionnels de beauté',
      description:
        'Création d\'une plateforme de booking SaaS pour connecter les clients avec les professionnels de beauté indépendants. Design moderne, paiements en temps réel, et expérience utilisateur optimisée.',
      technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL'],
      results: ['500K€ projections Q4 2026', '1000+ signups first week', 'Taux de conversion 12%'],
      image: '🌟',
    },
  ]

  return (
    <section className="py-20 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nos Projets
        </h2>

        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 overflow-hidden rounded-xl border border-gray-700 bg-gray-900"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-12 rounded-lg">
                <div className="text-9xl">{study.image}</div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                <p className="text-primary text-lg font-semibold mb-4">
                  {study.subtitle}
                </p>
                <p className="text-gray-300 mb-6">{study.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary bg-opacity-10 text-primary text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-2">
                    Résultats
                  </p>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="text-primary mr-2">✓</span>
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
