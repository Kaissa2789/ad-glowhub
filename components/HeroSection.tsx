'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          Agence digitale — Paris
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-medium mb-6 leading-[1.1]"
        >
          Une présence digitale{' '}
          <span className="italic text-gold">qui vous ressemble</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          AD GlowHub accompagne les indépendants et petites entreprises avec des
          sites web soignés, pensés pour convertir vos visiteurs en clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="btn-primary">
            Démarrer un projet
          </Link>
          <Link href="/portfolio" className="btn-secondary">
            Voir nos projets
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
