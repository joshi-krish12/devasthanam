import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Devasthanam',
  description: 'Get in touch with Devasthanam for personalized consultations on premium marble temples and customized pooja rooms for your home.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
