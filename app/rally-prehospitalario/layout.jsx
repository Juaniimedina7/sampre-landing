export const metadata = {
  title: 'Rally Prehospitalario SAMPRE 2026',
  description: 'Competencia académica de simulación clínica en emergencias prehospitalarias. 5 y 6 de septiembre de 2026 en la Universidad Nacional Arturo Jauretche (UNAJ). Inscripciones abiertas.',
  keywords: [
    'Rally Prehospitalario',
    'SAMPRE 2026',
    'simulación clínica emergencias',
    'competencia medicina prehospitalaria',
    'UNAJ emergencias',
    'inscripción rally SAMPRE',
  ],
  openGraph: {
    title: 'Rally Prehospitalario SAMPRE 2026',
    description: 'Competencia académica de simulación clínica en emergencias prehospitalarias. 5 y 6 de septiembre de 2026 en UNAJ.',
    url: 'https://sampre.com.ar/rally-prehospitalario',
    type: 'website',
    images: [
      {
        url: '/images/events/upcoming/rally-prehospitalarioFetured.jpeg',
        width: 1200,
        height: 630,
        alt: 'Rally Prehospitalario SAMPRE 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rally Prehospitalario SAMPRE 2026',
    description: 'Competencia académica de simulación clínica en emergencias prehospitalarias.',
    images: ['/images/events/upcoming/rally-prehospitalarioFetured.jpeg'],
  },
  alternates: {
    canonical: 'https://sampre.com.ar/rally-prehospitalario',
  },
}

export default function RallyLayout({ children }) {
  return children
}
