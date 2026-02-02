import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://sampre.com.ar'),
  title: {
    default: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
    template: '%s | SAMPRE'
  },
  description: 'Sociedad Argentina de Medicina Prehospitalaria. Asociación civil sin fines de lucro dedicada al desarrollo de la medicina de emergencias prehospitalarias. Capacitaciones, eventos, certificaciones y más.',
  keywords: [
    'medicina prehospitalaria',
    'emergencias médicas',
    'SAMPRE',
    'capacitación médica Argentina',
    'medicina de emergencias',
    'soporte vital avanzado',
    'trauma prehospitalario',
    'paramédicos Argentina',
    'congreso medicina emergencias',
    'certificación emergencias',
    'medicina de desastres'
  ],
  authors: [{ name: 'SAMPRE' }],
  creator: 'SAMPRE',
  publisher: 'Sociedad Argentina de Medicina Prehospitalaria',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://sampre.com.ar',
    title: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
    description: 'Asociación civil sin fines de lucro dedicada al desarrollo de la medicina de emergencias prehospitalarias en Argentina.',
    siteName: 'SAMPRE',
    images: [
      {
        url: '/images/logos/logo-sampre.PNG',
        width: 1200,
        height: 630,
        alt: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
    description: 'Asociación civil dedicada al desarrollo de la medicina de emergencias prehospitalarias en Argentina.',
    images: ['/images/logos/logo-sampre.PNG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Agregar después de registrar en Google Search Console
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
