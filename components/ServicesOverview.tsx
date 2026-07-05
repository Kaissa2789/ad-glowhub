'use client'

import { motion } from 'framer-motion'

function IconLayout() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
    </svg>
  )
}

function IconTrending() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8M21 7h-6v6" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

export default function ServicesOverview() {
  const services = [
    {
      icon: IconLayout,
      title: 'Web Design',
      description: 'Designs modernes et intuitifs qui captivent vos visiteurs',
    },
    {
      icon: IconCode,
      title: 'Développement',
      description: 'Solutions web performantes et scalables',
    },
    {
      icon: IconTrending,
      title: 'Stratégie Digitale',
      description: 'Stratégies alignées avec vos objectifs business',
    },
    {
      icon: IconSearch,
      title: 'SEO & Performance',
      description: 'Optimisation pour les moteurs de recherche et performance',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-dark to-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="eyebrow text-center mb-3">Ce qu'on fait</p>
        <h2 className="font-display text-4xl font-medium text-center mb-12">
          Nos Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700 hover:border-gold/40"
              >
                <div className="w-11 h-11 mb-4 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  <div className="w-5 h-5">
                    <Icon />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
