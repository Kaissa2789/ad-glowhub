import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AD GlowHub - Agence Digitale Premium',
  description: 'Agence digitale premium basée à Paris. Création de sites web, branding, et stratégie digitale.',
  keywords: 'agence web, design, développement, paris',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-dark text-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
