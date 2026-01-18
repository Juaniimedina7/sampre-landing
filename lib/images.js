/**
 * Configuración centralizada de imágenes para SAMPRE Landing
 *
 * Para usar imágenes locales:
 * 1. Coloca tus imágenes en /public/images/
 * 2. Cambia USE_LOCAL_IMAGES a true
 * 3. Las rutas locales se usarán automáticamente
 */

// Cambiar a true cuando tengas las imágenes locales
export const USE_LOCAL_IMAGES = false

/**
 * Imágenes del Hero Carousel
 * Dimensiones recomendadas: 1920x1080px
 */
export const heroImages = [
  {
    local: '/images/hero/hero-1.jpg',
    external: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1920&q=80',
    alt: 'Ambulancia de emergencias',
  },
  {
    local: '/images/hero/hero-2.jpg',
    external: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1920&q=80',
    alt: 'Equipo médico de emergencias',
  },
  {
    local: '/images/hero/hero-3.jpg',
    external: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80',
    alt: 'Paramédicos trabajando',
  },
  {
    local: '/images/hero/hero-4.jpg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Equipo de emergencias',
  },
]

/**
 * Imágenes de Eventos Próximos
 * Dimensiones recomendadas: 800x600px
 */
export const upcomingEventImages = {
  congreso2026: {
    local: '/images/events/upcoming/congreso-sampre-2026.jpg',
    external: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'XXVIII Congreso Argentino de Medicina Prehospitalaria',
  },
  cursoTrauma: {
    local: '/images/events/upcoming/curso-trauma.jpg',
    external: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    alt: 'Curso de Soporte Vital Avanzado en Trauma',
  },
  jornadaCardiovascular: {
    local: '/images/events/upcoming/jornada-cardiovascular.jpg',
    external: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
    alt: 'Jornada de Emergencias Cardiovasculares',
  },
}

/**
 * Eventos Pasados
 * Con información completa del evento
 */
export const pastEvents = [
  {
    id: 'cimph-2025',
    year: 2025,
    title: 'CIMP 2025 - Congreso Internacional de Medicina Prehospitalaria',
    date: 'Septiembre 2025',
    location: 'Rosario, Santa Fe',
    description: 'Congreso internacional con participación de expertos nacionales e internacionales en medicina prehospitalaria.',
    image: {
      local: '/images/events/past/congresoRosario-sep2025.jpg',
      external: '/images/events/past/congresoRosario-sep2025.jpg',
      alt: 'CIMP 2025 - Rosario',
    },
    website: 'https://cimph25.com.ar/',
    highlights: [
      'Conferencias magistrales internacionales',
      'Talleres prácticos',
      'Más de 500 participantes',
      'Certificación internacional',
    ],
  },
  {
    id: 'jornada-trauma-2024',
    year: 2024,
    title: 'XXVII Jornadas Nacionales de Trauma Prehospitalario',
    date: 'Mayo 2024',
    location: 'Mendoza, Mendoza',
    description: 'Jornadas intensivas dedicadas al manejo avanzado de trauma en escenarios prehospitalarios, con simulaciones de casos reales y actualización en protocolos internacionales.',
    image: {
      local: '/images/events/past/jornada-trauma-2024.jpg',
      external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
      alt: 'Jornadas de Trauma Prehospitalario 2024',
    },
    highlights: [
      'Simulaciones de alta fidelidad',
      'Protocolo ATLS actualizado',
      'Más de 300 profesionales capacitados',
      'Certificación nacional',
    ],
  },
  {
    id: 'congreso-bsas-2023',
    year: 2023,
    title: 'XXVI Congreso Argentino SAMPRE',
    date: 'Noviembre 2023',
    location: 'Buenos Aires, CABA',
    description: 'Congreso anual de la Sociedad Argentina de Medicina Prehospitalaria con exposiciones científicas, presentación de trabajos de investigación y mesas redondas sobre los desafíos actuales de la emergentología prehospitalaria.',
    image: {
      local: '/images/events/past/congreso-bsas-2023.jpg',
      external: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      alt: 'XXVI Congreso Argentino SAMPRE 2023',
    },
    highlights: [
      '45 trabajos científicos presentados',
      'Expositores de 8 países',
      'Más de 600 asistentes',
      'Talleres de RCP y soporte vital',
    ],
  },
]

// Mantener compatibilidad con código existente
export const eventImages = upcomingEventImages

/**
 * Fotos de Autoridades
 * Dimensiones recomendadas: 400x400px (cuadradas)
 */
export const authorityImages = {
  presidente: {
    local: '/images/authorities/william-medina-presidente.png',
    external: '/images/authorities/william-medina-presidente.png',
    alt: 'Dr. William Medina - Presidente',
  },
  vicepresidenta: {
    local: '/images/authorities/vicepresidenta.jpg',
    external: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    alt: 'Dra. María Fernanda López - Vicepresidenta',
  },
  secretario: {
    local: '/images/authorities/secretario.jpg',
    external: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    alt: 'Dr. Roberto Martínez - Secretario General',
  },
  tesorera: {
    local: '/images/authorities/tesorera.jpg',
    external: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
    alt: 'Dra. Ana Patricia Gómez - Tesorera',
  },
  vocal1: {
    local: '/images/authorities/vocal-1.jpg',
    external: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    alt: 'Dr. Carlos Alberto Fernández - Vocal Titular',
  },
  vocal2: {
    local: '/images/authorities/vocal-2.jpg',
    external: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&q=80',
    alt: 'Dra. Silvia Beatriz Ramírez - Vocal Titular',
  },
}

/**
 * Helper function para obtener la URL correcta de una imagen
 */
export function getImageUrl(imageConfig) {
  return USE_LOCAL_IMAGES ? imageConfig.local : imageConfig.external
}

/**
 * Logos de SAMPRE
 */
export const logos = {
  main: {
    local: '/images/logos/logo-sampre.PNG',
    external: '/images/logos/logo-sampre.PNG',
    alt: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
  },
  withBackground: {
    local: '/images/logos/logo-sampre2.jpg',
    external: '/images/logos/logo-sampre2.jpg',
    alt: 'SAMPRE Logo',
  },
}

/**
 * Helper function para obtener todas las URLs del hero
 */
export function getHeroImageUrls() {
  return heroImages.map(img => getImageUrl(img))
}
