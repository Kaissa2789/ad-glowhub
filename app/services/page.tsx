export const metadata = {
  title: 'Services - AD GlowHub',
  description: 'Découvrez nos services de design, développement et stratégie digitale.',
}

export default function Services() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Nos Services</h1>
        <p className="text-gray-400 text-lg mb-16">
          Solutions digitales complètes pour transformer votre vision en réalité.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Web Design',
              description:
                'Créations visuelles modernes qui captivent et convertissent vos visiteurs en clients.',
            },
            {
              title: 'Développement Web',
              description:
                'Solutions techniques performantes, scalables et sécurisées construites avec les dernières technologies.',
            },
            {
              title: 'Stratégie Digitale',
              description:
                'Stratégies complètes alignées avec vos objectifs business pour maximiser votre présence digitale.',
            },
            {
              title: 'SEO & Performance',
              description:
                'Optimisation pour les moteurs de recherche et performance web pour une visibilité maximale.',
            },
          ].map((service, idx) => (
            <div key={idx} className="p-8 bg-gray-900 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
