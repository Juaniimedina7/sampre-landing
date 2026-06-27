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
    alt: 'Ambulancia de emergencias médicas en servicio',
  },
  {
    local: '/images/hero/hero2.jpg',
    external: 'https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?w=1920&q=80',
    alt: 'Equipo médico de emergencias atendiendo paciente',
  },
  {
    local: '/images/hero/hero3.jpg',
    external: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&q=80',
    alt: 'Paramédicos brindando atención prehospitalaria',
  },
  {
    local: '/images/hero/hero4.jpg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Equipo de emergencias médicas SAMPRE en acción',
  },
  {
    local: '/images/hero/hero5.jpeg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Profesionales de medicina prehospitalaria trabajando',
  },
  {
    local: '/images/hero/hero6.jpeg',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Equipo de atención prehospitalaria de SAMPRE',
  },
    {
    local: '/images/hero/hero7.JPG',
    external: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1920&q=80',
    alt: 'Unidad de atención médica móvil de Ushuaia',
  },
]

/**
 * Imágenes de Eventos Próximos
 *
 * Dimensiones recomendadas según layout en UpcomingEvents.jsx:
 * - Featured (destacado, columna md:w-1/2):  800x600 px  (4:3, horizontal)
 * - No featured (columna md:w-1/4):          600x600 px  (1:1, cuadrada) — ideal para evitar recortes
 *
 * Nota: el render usa object-cover, así que cualquier aspect ratio distinto
 * al de la columna recorta los bordes. Mantener el contenido importante (título,
 * fechas) centrado en la imagen.
 */
export const upcomingEventImages = {
  rallyPrehospitalario2026: {
    local: '/images/events/upcoming/rally-prehospitalarioFetured.jpeg',
    external: '/images/events/upcoming/rally-prehospitalarioFetured.jpeg',
    alt: 'Rally Prehospitalario SAMPRE 2026',
  },
  rallyPrehospitalario2026Square: {
    local: '/images/events/upcoming/rally-prehospitalario500.png',
    external: '/images/events/upcoming/rally-prehospitalario500.png',
    alt: 'Rally Prehospitalario SAMPRE 2026',
  },
  emergencias360: {
    local: '/images/events/upcoming/congreso-internacional-multidicipplinario2026.jpeg',
    external: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
    alt: 'I Congreso Internacional Multidisciplinario EMERGENCIAS 360°',
  },
  congresoRedLatam2026: {
    local: '/images/events/upcoming/congresoRED-LATAM2026500.png',
    external: '/images/events/upcoming/congresoRED-LATAM2026500.png',
    alt: 'Congreso RED LATAM 2026',
  },
}

/**
 * Eventos Pasados
 * Con información completa del evento
 */
export const pastEvents = [
  {
    id: 'congreso-latam-2026',
    year: 2026,
    title: 'V Congreso Latinoamericano de Emergencias Prehospitalarias',
    date: '27-30 Mayo 2026',
    location: 'Lima, Perú',
    description: 'Congreso internacional auspiciado por SAMPRE, organizado por CCES SALUD con acreditación de 3 créditos por la Facultad de Medicina Humana de la UNSM. Abordó ejes temáticos como gestión de riesgos y desastres, trauma, emergencias cardiovasculares, innovación y tecnología en APH, y escenarios especiales.',
    image: {
      local: '/images/events/past/congreso-latam-2026.jpg',
      external: '/images/events/past/congreso-latam-2026.jpg',
      alt: 'V Congreso Latinoamericano de Emergencias Prehospitalarias',
    },
    website: 'https://cces-salud.com/eventos/v-congreso-latinoamericano-emergencias-prehospitalarias/',
    highlights: [
      'Gestión de riesgos y desastres',
      'Trauma y emergencias cardiovasculares',
      'Innovación y tecnología en APH',
      'Escenarios especiales',
    ],
  },
  {
    id: 'jornadas-emergencia-adultos-2026',
    year: 2026,
    title: '4tas Jornadas de Emergencia de Adultos 2026',
    date: '21-23 Mayo 2026',
    location: 'CENUR Paysandú, Florida esq. Mdeo.',
    description: 'Jornadas organizadas por el Departamento de Emergencias del Hospital de Paysandú y CEDA Emergentología Paysandú. Temas centrales: Trauma y atención crítica, protocolos y actualizaciones, mesas especiales sobre figura legal del paramédico, gestión en servicios de salud y simulación educativa.',
    image: {
      local: '/images/events/past/jornada-de-emergencia1.jpg',
      external: '/images/events/past/jornada-de-emergencia1.jpg',
      alt: '4tas Jornadas de Emergencia de Adultos 2026',
    },
    website: null,
    highlights: [
      'Trauma y atención crítica',
      'Figura legal del paramédico',
      'Gestión en servicios de salud',
      'Simulación educativa',
    ],
  },
  {
    id: 'jornada-fem-2026',
    year: 2026,
    title: 'III Jornada Nacional FEM 2026',
    date: '7 Mayo 2026',
    location: 'Hotel Marriott, Carlos Pellegrini 551, Buenos Aires',
    description: 'Jornada organizada por la Federación de Cámaras de Emergencias Médicas y Medicina Domiciliaria (FEM), auspiciada por SAMPRE. Bajo el lema "El desafío del cambio para una gestión sustentable en el sector", reunió a referentes del sistema de salud, autoridades públicas y especialistas. Contó con la participación del Ministro de Salud de la Nación, Dr. Mario Iván Lugones, y disertantes de nivel nacional e internacional.',
    image: {
      local: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
      external: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
      alt: 'III Jornada Nacional FEM 2026',
    },
    website: null,
    highlights: [
      'Gestión sustentable del sector salud',
      'Participación del Ministro de Salud de la Nación',
      'Disertantes nacionales e internacionales',
      'Referentes del sistema de salud y autoridades públicas',
    ],
  },
  {
    id: 'emergencias-360-2026',
    year: 2026,
    title: 'I Congreso Internacional Multidisciplinario EMERGENCIAS 360°',
    date: '26 Marzo 2026',
    location: 'Arequipa, Perú',
    description: 'Congreso multidisciplinario auspiciado por SAMPRE enfocado en transformar la medicina de emergencia del siglo XXI. Abordó manejo de pacientes críticos, inteligencia artificial en salud, gestión operativa, escenarios simulados y protocolos de manejo clínico.',
    image: {
      local: '/images/events/upcoming/congreso-internacional-multidicipplinario2026.jpeg',
      external: '/images/events/upcoming/congreso-internacional-multidicipplinario2026.jpeg',
      alt: 'I Congreso Internacional Multidisciplinario EMERGENCIAS 360°',
    },
    website: null,
    highlights: [
      'Manejo de pacientes críticos',
      'Inteligencia artificial en salud',
      'Gestión operativa',
      'Escenarios simulados y protocolos de manejo clínico',
    ],
  },
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
      alt: 'Congreso Internacional de Medicina Prehospitalaria 2025 en Rosario, Santa Fe',
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
  vicepresidente: {
    local: '/images/authorities/gabriel-sosa.jpg',
    external: '/images/authorities/gabriel-sosa.jpg',
    alt: 'Gabriel Sosa - Vicepresidente',
  },
  secretarioAdministrativo: {
    local: '/images/authorities/lucas-henckel.jpg',
    external: '/images/authorities/lucas-henckel.jpg',
    alt: 'Lucas Henkel - Secretario Administrativo',
  },
  secretariaAcademica: {
    local: '/images/authorities/ivana-nogueira.jpg',
    external: '/images/authorities/ivana-nogueira.jpg',
    alt: 'Ivana Nogueira - Secretaria Académica',
  },
  prosecretariaAdministrativa: {
    local: '/images/authorities/debora-vizcaino.jpg',
    external: '/images/authorities/debora-vizcaino.jpg',
    alt: 'Débora Vizcaino - Prosecretaria Administrativa',
  },
  prosecretarioAcademico: {
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
  leonardoManino: {
    local: '/images/authorities/leonardo-manino.jpg',
    external: '/images/authorities/leonardo-manino.jpg',
    alt: 'Leonardo Manino - Vocal 2',
  },
  juanManuelPeresson: {
    local: '/images/authorities/juanManuel-peresson.png',
    external: '/images/authorities/juanManuel-peresson.png',
    alt: 'Juan Manuel Peresson - Vocal 3',
  },
  // Placeholder para vocales que aún no tienen foto
  placeholder: {
    local: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    external: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
    alt: 'Miembro vocal de la Comisión Directiva de SAMPRE',
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
    alt: 'SAMPRE - Sociedad Argentina de Medicina Prehospitalaria',
  },
}

/**
 * Helper function para obtener todas las URLs del hero
 */
export function getHeroImageUrls() {
  return heroImages.map(img => getImageUrl(img))
}
