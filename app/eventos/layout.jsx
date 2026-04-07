export const metadata = {
  title: 'Eventos Pasados',
  description: 'Recorrido histórico por los congresos, jornadas y actividades científicas de SAMPRE. Conocé los eventos más destacados de la Sociedad Argentina de Medicina Prehospitalaria.',
  keywords: [
    'eventos SAMPRE',
    'congresos medicina prehospitalaria',
    'jornadas emergencias médicas Argentina',
    'historia SAMPRE',
    'congreso internacional medicina prehospitalaria',
  ],
  openGraph: {
    title: 'Eventos Pasados | SAMPRE',
    description: 'Recorrido histórico por los congresos, jornadas y actividades científicas de SAMPRE.',
    url: 'https://sampre.com.ar/eventos',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-sampre.PNG',
        width: 1200,
        height: 630,
        alt: 'SAMPRE - Eventos Pasados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eventos Pasados | SAMPRE',
    description: 'Recorrido histórico por los congresos, jornadas y actividades científicas de SAMPRE.',
    images: ['/images/logos/logo-sampre.PNG'],
  },
  alternates: {
    canonical: 'https://sampre.com.ar/eventos',
  },
}

export default function EventosLayout({ children }) {
  return children
}
