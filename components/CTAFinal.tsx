'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTAFinal() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-dark">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(212,161,92,0.15), transparent 55%), radial-gradient(circle at 20% 80%, rgba(0,102,255,0.15), transparent 45%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">Discutons de votre projet</p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-medium mb-6"
        >
          Prêt à donner vie à <span className="italic text-gold">votre projet</span> ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-xl text-gray-400 mb-10"
        >
          Un site qui vous ressemble, pensé pour convertir vos visiteurs en clients.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/contact" className="btn-gold">
            Planifier une consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
