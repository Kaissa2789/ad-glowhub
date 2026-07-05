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
         <Link href="/" className="font-display text-2xl font-medium flex items-center gap-2">
  <svg width="48" height="48" viewBox="0 0 100 100" className="flex-shrink-0">
  <circle cx="35" cy="50" r="14" fill="url(#grad)" opacity="0.9"/>
  <circle cx="65" cy="50" r="14" fill="url(#grad2)" opacity="0.9"/>
  <circle cx="50" cy="70" r="14" fill="url(#grad3)" opacity="0.9"/>
  <line x1="35" y1="50" x2="65" y2="50" stroke="white" strokeWidth="1.5" opacity="0.4"/>
  <line x1="35" y1="50" x2="50" y2="70" stroke="white" strokeWidth="1.5" opacity="0.4"/>
  <line x1="65" y1="50" x2="50" y2="70" stroke="white" strokeWidth="1.5" opacity="0.4"/>
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0066FF"/>
      <stop offset="100%" stopColor="#7C3AED"/>
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#7C3AED"/>
      <stop offset="100%" stopColor="#EC4899"/>
    </linearGradient>
    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#0066FF"/>
      <stop offset="100%" stopColor="#00D9FF"/>
    </linearGradient>
  </defs>
</svg>
  <span className="text-primary">AD</span>{' '}
  <span className="text-secondary">GlowHub</span>
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
            <Link href="/contact" className="btn-primary text-sm">
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
