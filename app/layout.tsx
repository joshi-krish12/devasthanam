import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Devasthanam — Premium Corian Mandirs & Stone Interiors | Kolkata',
  description: 'Devasthanam crafts premium Corian mandirs, wall panels, stone panels and table tops from Kolkata. Custom-made sacred spaces and interior surfaces delivered Pan India.',
  keywords: 'corian mandir, stone panels, wall panels, table tops, corian interiors, kolkata interiors, custom mandir, stone wall panels, interior design kolkata, devasthanam',
  authors: [{ name: 'Devasthanam' }],
  openGraph: {
    title: 'Devasthanam — Premium Corian Mandirs & Stone Interiors',
    description: 'Custom-crafted Corian mandirs, wall panels, stone panels and table tops from Kolkata. Delivered Pan India.',
    url: 'https://devasthanam.com',
    siteName: 'Devasthanam',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devasthanam — Premium Corian Mandirs & Stone Interiors',
    description: 'Custom-crafted Corian mandirs, wall panels, stone panels and table tops. Kolkata-based, Pan India delivery.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
