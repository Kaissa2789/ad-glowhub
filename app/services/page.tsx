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

        <div className="grid md:grid-cols-2 gap-12 mb-24">
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

        {/* ===== TARIFS ===== */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Tarifs</h2>
          <p className="text-gray-400 text-lg mb-12">
            Des formules transparentes adaptées à chaque projet.
          </p>

          {/* Sites vitrines */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">Sites Vitrines</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Essentiel',
                  price: '800€ - 1 500€',
                  desc: '1 page, design simple, formulaire de contact, responsive mobile.',
                },
                {
                  name: 'Standard',
                  price: '1 500€ - 3 000€',
                  desc: '3 à 6 sections, copywriting inclus, identité visuelle harmonisée, SEO de base.',
                  featured: true,
                },
                {
                  name: 'Premium',
                  price: '3 000€ - 5 000€',
                  desc: 'Copywriting soigné, animations, SEO poussé, intégration réseaux sociaux.',
                },
              ].map((plan, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-lg border ${
                    plan.featured
                      ? 'bg-gray-900 border-primary shadow-premium'
                      : 'bg-gray-900 border-gray-700'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                  <p className="text-gray-400 text-sm">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Refonte */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">Refonte de Site Existant</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Refonte légère',
                  price: '800€ - 1 500€',
                  desc: 'Nouveau design, contenu existant réorganisé.',
                },
                {
                  name: 'Refonte complète',
                  price: '1 800€ - 3 500€',
                  desc: 'Nouveau design, copywriting, structure et SEO repensés.',
                },
              ].map((plan, idx) => (
                <div key={idx} className="p-8 bg-gray-900 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                  <p className="text-gray-400 text-sm">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services récurrents */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-primary">Services Récurrents</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Maintenance mensuelle',
                  price: '50€ - 150€ / mois',
                  desc: 'Mises à jour techniques, petites modifications de contenu, suivi hébergement.',
                },
                {
                  name: 'SEO local',
                  price: '+300€ - 500€',
                  desc: 'Optimisation Google Business Profile, gestion des avis clients.',
                },
                {
                  name: 'Community management',
                  price: '300€ - 800€ / mois',
                  desc: 'Gestion réseaux sociaux : posts, stories, réponses aux messages.',
                },
              ].map((plan, idx) => (
                <div key={idx} className="p-8 bg-gray-900 rounded-lg border border-gray-700">
                  <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                  <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                  <p className="text-gray-400 text-sm">{plan.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* E-commerce sur devis */}
          <div className="p-8 bg-gray-900/50 rounded-lg border border-dashed border-gray-700 text-center">
            <h3 className="text-xl font-bold mb-2">E-commerce & Marketplace</h3>
            <p className="text-gray-400 mb-4">
              Boutique en ligne ou plateforme multi-vendeurs : chaque projet est unique, parlons-en ensemble.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
