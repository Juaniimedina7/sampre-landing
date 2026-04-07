export const metadata = {
  title: 'Asociate a SAMPRE',
  description: 'Conocé las categorías de membresía de SAMPRE: Socio Activo y Socio Titular. Formá parte de la Sociedad Argentina de Medicina Prehospitalaria y accedé a actividades científicas, jornadas, comités y más.',
  keywords: [
    'asociarse SAMPRE',
    'membresía medicina prehospitalaria',
    'socio activo SAMPRE',
    'socio titular SAMPRE',
    'sociedad argentina medicina emergencias',
    'inscripción SAMPRE',
    'medicina prehospitalaria Argentina',
  ],
  openGraph: {
    title: 'Asociate a SAMPRE | Sociedad Argentina de Medicina Prehospitalaria',
    description: 'Dos categorías de membresía: Socio Activo para quienes se inician, Socio Titular para quienes lideran. Formá parte de la comunidad referente en medicina prehospitalaria de Argentina.',
    url: 'https://sampre.com.ar/socios',
    type: 'website',
    images: [
      {
        url: '/images/logos/logo-sampre.PNG',
        width: 1200,
        height: 630,
        alt: 'SAMPRE - Asociate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asociate a SAMPRE',
    description: 'Dos categorías de membresía: Socio Activo y Socio Titular. Formá parte de la comunidad referente en medicina prehospitalaria de Argentina.',
    images: ['/images/logos/logo-sampre.PNG'],
  },
  alternates: {
    canonical: 'https://sampre.com.ar/socios',
  },
}

export default function SociosLayout({ children }) {
  return children
}
