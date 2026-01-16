import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
  description: 'Sociedad Argentina de Medicina Prehospitalaria - Capacitación, eventos y certificaciones en medicina de emergencias prehospitalarias.',
  keywords: 'medicina prehospitalaria, emergencias médicas, SAMPRE, capacitación médica, Argentina',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  )
}
