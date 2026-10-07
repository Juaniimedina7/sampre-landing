export const metadata = {
  title: 'Solicitud de asociación',
  description: 'Completá tu solicitud para asociarte a SAMPRE: datos, categoría (Socio Activo o Titular) y CV. La Comisión Directiva evalúa cada solicitud.',
  alternates: { canonical: 'https://sampre.com.ar/socios/inscripcion' },
  openGraph: {
    title: 'Solicitud de asociación | SAMPRE',
    description: 'Asociate a SAMPRE: completá tus datos y adjuntá tu CV en un solo paso.',
    url: 'https://sampre.com.ar/socios/inscripcion',
    type: 'website',
    images: [{ url: '/images/logos/logo-sampre.PNG', width: 1200, height: 630, alt: 'SAMPRE' }],
  },
}

export default function InscripcionLayout({ children }) {
  return children
}
