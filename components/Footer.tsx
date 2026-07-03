'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-gray-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">AD</span>{' '}
              <span className="text-secondary">GlowHub</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Agence digitale premium créant des expériences digitales exceptionnelles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-primary">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Développement
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Stratégie
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">29, rue Tronchet 75008 Paris</p>
<p className="text-sm text-gray-400">contact@ad-glowhub.fr</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} AD GlowHub. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
