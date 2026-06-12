'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Prêt à transformer votre présence digitale ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white text-opacity-90 mb-8"
        >
          Discutons de comment AD GlowHub peut créer une solution digitale
          exceptionnelle pour votre entreprise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg font-semibold bg-white text-primary hover:bg-gray-100 transition"
          >
            Planifier une consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
