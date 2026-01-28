/**
 * Configuración centralizada de imágenes para SAMPRE Landing
 *
 * Para usar imágenes locales:
 * 1. Coloca tus imágenes en /public/images/
 * 2. Cambia USE_LOCAL_IMAGES a true
 * 3. Las rutas locales se usarán automáticamente
 */

// Cambiar a true cuando tengas las imágenes locales
export const USE_LOCAL_IMAGES = true

/**
 * Imágenes del Hero Carousel
 * Dimensiones recomendadas: 1920x1080px
 */
export const heroImages = [
  {
    local: '/images/hero/hero1.jpeg',
    external: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1920&q=80',
    alt: 'Ambulancia de emergencias',
  },
  {
    local: '/images/hero/hero2.jpg',
    external: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1920&q=80',
    alt: 'Equipo médico de emergencias',
  },
  {
    local: '/images/hero/hero3.jpg',
    external: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80',
    alt: 'Paramédicos trabajando',
  },
  {
    local: '/images/hero/hero4.jpg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Equipo de emergencias SAMPRE',
  },
  {
    local: '/images/hero/hero5.jpeg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Medicina prehospitalaria',
  },
  {
    local: '/images/hero/hero6.jpeg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Equipo de atención prehospitalaria',
  },
]

/**
 * Imágenes de Eventos Próximos
 * Dimensiones recomendadas: 800x600px
 */
export const upcomingEventImages = {
  rallyPrehospitalario2026: {
    local: '/images/events/upcoming/rally-prehospitalario-2026.png',
    external: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    alt: 'Rally Prehospitalario SAMPRE 2026',
  },
  congresoLatam2026: {
    local: '/images/events/upcoming/congreso-latam-2026.jpg',
    external: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'V Congreso Latinoamericano de Emergencias Prehospitalarias',
  },
  emergencias360: {
    local: '/images/events/upcoming/congreso-internacional-multidicipplinario2026.jpeg',
    external: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    alt: 'I Congreso Internacional Multidisciplinario EMERGENCIAS 360°',
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
      'Más de 1000 participantes',
      'Certificación internacional',
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
    local: '/images/authorities/william-medina-presidente.jpg',
    external: '/images/authorities/william-medina-presidente.jpg',
    alt: 'Dr. William Medina - Presidente',
  },
  vicepresidenta: {
    local: '/images/authorities/gabriel-sosa.jpg',
    external: '/images/authorities/gabriel-sosa.jpg',
    alt: 'Gabriel Sosa - Vicepresidente',
  },
  secretario: {
    local: '/images/authorities/lucas-henckel.jpg',
    external: '/images/authorities/lucas-henckel.jpg',
    alt: 'Lucas Henkel - Secretario Administrativo',
  },
  tesorera: {
    local: '/images/authorities/ivana-nogueira.jpg',
    external: '/images/authorities/ivana-nogueira.jpg',
    alt: 'Ivana Nogueira - Secretaria Académica',
  },
  vocal1: {
    local: '/images/authorities/vocal-1.jpg',
    external: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    alt: 'Débora Vizcaino - Prosecretaria Administrativa',
  },
  vocal2: {
    local: '/images/authorities/cristian-bottari.png',
    external: '/images/authorities/cristian-bottari.png',
    alt: 'Cristian Bottari - Prosecretario Académico',
  },
}

/**
 * Fotos de Vocales
 * Dimensiones recomendadas: 400x400px (cuadradas)
 */
export const vocalImages = {
  alejandraSchro: {
    local: '/images/authorities/alejandra-srcho.jpg',
    external: '/images/authorities/alejandra-srcho.jpg',
    alt: 'Alejandra Schro - Vocal 1',
  },
  nelsonMir: {
    local: '/images/authorities/nelson-mir.jpeg',
    external: '/images/authorities/nelson-mir.jpeg',
    alt: 'Nelson Mir - Vocal 4',
  },
  lucianaEspindola: {
    local: '/images/authorities/luciana-espindola.jpg',
    external: '/images/authorities/luciana-espindola.jpg',
    alt: 'Luciana Espindola - Vocal Suplente',
  },
  rodrigoGarciaMarte: {
    local: '/images/authorities/rodrigo-garciamarte.jpg',
    external: '/images/authorities/rodrigo-garciamarte.jpg',
    alt: 'Rodrigo Garcia Marte - Vocal Suplente',
  },
  // Placeholder para vocales que aún no tienen foto
  placeholder: {
    local: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    external: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    alt: 'Vocal SAMPRE',
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
