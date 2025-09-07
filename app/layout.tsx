import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devasthanam - Your Ultimate Pooja Room Destination',
  description: 'Premium marble temples and pooja rooms crafted with devotion and excellence. Transform your space with our exquisite sacred designs.',
  keywords: 'marble temple, pooja room, devasthanam, spiritual, home decor, marble mandir, dream temples',
  authors: [{ name: 'Devasthanam' }],
  openGraph: {
    title: 'Devasthanam - Your Ultimate Pooja Room Destination',
    description: 'Premium marble temples and pooja rooms crafted with devotion and excellence.',
    url: 'https://devasthanam.com',
    siteName: 'Devasthanam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devasthanam - Your Ultimate Pooja Room Destination',
    description: 'Premium marble temples and pooja rooms crafted with devotion and excellence.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
