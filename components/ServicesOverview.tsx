'use client'

import { motion } from 'framer-motion'

export default function ServicesOverview() {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'Designs modernes et intuitifs qui captivent vos visiteurs',
    },
    {
      icon: '⚡',
      title: 'Développement',
      description: 'Solutions web performantes et scalables',
    },
    {
      icon: '📊',
      title: 'Stratégie Digitale',
      description: 'Stratégies alignées avec vos objectifs business',
    },
    {
      icon: '🔍',
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition border border-gray-700 hover:border-gold/40"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
