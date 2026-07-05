export const metadata = {
  title: 'À propos - AD GlowHub',
  description: 'Découvrez l\'histoire et la mission d\'AD GlowHub.',
}

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <p className="eyebrow mb-3">À propos</p>
        <h1 className="font-display text-5xl font-medium mb-8">Notre histoire</h1>

        <div className="space-y-8">
          <section>
            <h2 className="font-display text-2xl font-medium mb-4">Notre Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              AD GlowHub existe pour créer des expériences digitales exceptionnelles
              qui transforment les entreprises. Nous croyons que la technologie et le
              design doivent travailler ensemble pour créer de la valeur réelle.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium mb-4">Notre Approche</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Design, développement et stratégie : trois expertises réunies pour
              créer des solutions digitales de qualité premium, pensées pour chaque client.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {['Design', 'Développement', 'Stratégie'].map((skill) => (
                <div key={skill} className="p-4 bg-gray-900 rounded-lg border border-gray-700 text-center">
                  <p className="font-semibold text-gold">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-medium mb-4">Nos Valeurs</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-gold mr-3">✓</span>
                <span>Excellence dans chaque détail</span>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3">✓</span>
                <span>Transparence et communication</span>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3">✓</span>
                <span>Innovation et créativité</span>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3">✓</span>
                <span>Partenariat long terme</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
