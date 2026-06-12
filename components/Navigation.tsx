'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-dark bg-opacity-90 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold tracking-widest">
  <span className="text-primary">AD</span><span className="text-white">.</span><span className="text-secondary">GLOWHUB</span>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition">
              Accueil
            </Link>
            <Link href="/services" className="hover:text-primary transition">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-primary transition">
              Portfolio
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              À propos
            </Link>
            <Link href="/blog" className="hover:text-primary transition">
              Blog
            </Link>
            <Link
              href="/contact"
              className="btn-gradient px-6 py-2 rounded-lg text-white"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-primary">
              Accueil
            </Link>
            <Link href="/services" className="block hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" className="block hover:text-primary">
              Portfolio
            </Link>
            <Link href="/about" className="block hover:text-primary">
              À propos
            </Link>
            <Link href="/blog" className="block hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="block hover:text-primary">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
