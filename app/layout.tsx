import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

// Import Google Fonts
import { Poppins, Unbounded } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
   weight: ['400', '600', '700']
})

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Céfora Formation',
  description: 'Plateforme de formation professionnelle',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${unbounded.variable}`}>
      <body className="font-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
