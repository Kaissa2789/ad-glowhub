'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Créons votre <span className="text-primary">présence digitale</span>{' '}
          exceptionnelle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          AD GlowHub est une agence digitale premium créant des expériences web
          modernes, performantes et alignées avec vos objectifs business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-lg font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Voir nos projets
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
