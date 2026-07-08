'use client'

import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import { eventImages, getImageUrl } from '@/lib/images'
import { useInView } from '@/hooks/useInView'

export default function UpcomingEvents() {
  const [titleRef, titleInView] = useInView()
  const isExternal = (url) => !!url && !url.startsWith('/') && !url.startsWith('#')

  const events = [
    {
      title: 'Rally Prehospitalario SAMPRE 2026',
      date: '5-6 Septiembre 2026',
      location: 'Universidad Nacional Arturo Jauretche (UNAJ)',
      time: '09:00 - 18:00 hs',
      attendees: '8-16 equipos',
      description: 'Competencia académica organizada por SAMPRE con escenarios simulados realistas de emergencias prehospitalarias. Equipos de 5 integrantes + coach compiten en RCP, trauma, vía aérea y manejo de crisis bajo protocolos PHTLS, ATLS, ACLS y AMLS. Avalado por SASIM y UNAJ.',
      category: 'Competencia Académica',
      featured: true,
      image: getImageUrl(eventImages.rallyPrehospitalario2026),
      website: '/rally-prehospitalario',
      registrationLink: '/rally-prehospitalario#inscripcion',
    },
    {
      title: 'Congreso RED LATAM 2026',
      date: '26 al 30 de agosto',
      location: 'ESAN Center, Santiago de Surco, Lima - Perú',
      time: '29 y 30 - Congreso',
      attendees: '+350',
      description: 'Cinco días de formación junto a los profesionales más destacados de emergencias, rescate y salud prehospitalaria. Espacio académico estructurado, con aval académico de SAMPRE y el apoyo de NAEMT. Ponencias basadas en evidencia, cursos certificados y conexión directa con la comunidad prehospitalaria regional. Cursos precongreso · Simposio METAS by NAEMT · EXPO científica · EXPO comercial.',
      category: 'Auspicio Internacional',
      featured: false,
      image: getImageUrl(eventImages.congresoRedLatam2026),
      website: null,
      programLink: 'https://redamericas.com/programa/',
      registrationLink: 'https://redamericas.com/entradas/',
    },
    {
      title: 'Congreso Uruguayo Internacional de Emergencias 360°',
      date: '3 y 4 de Diciembre 2026',
      location: 'Montevideo, Uruguay',
      time: '2 días de congreso',
      attendees: '+300',
      description: 'Congreso auspiciado por SAMPRE, organizado por la Sociedad Uruguaya de Emergencistas (SUE). Enfoque 360°: conferencias magistrales, talleres y simulaciones, redes y colaboración. ¡Inscripciones abiertas!\n\nPreinscripción hasta el 31 de octubre: Médicos $3.000, No médicos $2.000, Postgrados/Residentes $2.000. Inscripción general: Médicos $4.000, No médicos $3.000, Postgrados/Residentes $3.000. Socios SUE: 50% de descuento en todas las categorías.',
      category: 'Auspicio Internacional',
      featured: false,
      image: getImageUrl(eventImages.congresoUruguayo2026),
      website: null,
      registrationLink: 'mailto:uruguayasociedad@gmail.com?subject=Inscripci%C3%B3n%20Congreso%20Uruguayo%20de%20Emergencias%20360%C2%B0',
    },
  ]

  return (
    <section id="proximos-eventos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Agenda 2026</span>
          </div>
          <h2 ref={titleRef} className={`section-title ${titleInView ? 'in-view' : ''} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-600">
            Capacitaciones, congresos y jornadas científicas para el desarrollo profesional continuo
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all border-l-4 ${
                event.featured
                  ? 'border-primary-600 md:flex'
                  : 'border-secondary-500 md:flex'
              }`}
            >
              {/* Image */}
              <div className={`${event.featured ? 'md:w-1/2' : 'md:w-1/4'} h-64 md:h-auto`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`p-6 md:p-8 ${event.featured ? 'md:w-1/2' : 'md:w-3/4'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.featured
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-secondary-100 text-secondary-700'
                    }`}
                  >
                    {event.category}
                  </span>
                  {event.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      Destacado
                    </span>
                  )}
                </div>

                <h3
                  className={`font-bold text-gray-900 mb-3 ${
                    event.featured ? 'text-2xl' : 'text-xl'
                  }`}
                >
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4 whitespace-pre-line">{event.description}</p>

                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{event.attendees} participantes</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  {(() => {
                    const infoHref = event.programLink || event.website || '#contacto'
                    const infoExternal = isExternal(infoHref)
                    return (
                      <a
                        href={infoHref}
                        target={infoExternal ? '_blank' : undefined}
                        rel={infoExternal ? 'noopener noreferrer' : undefined}
                        aria-label={`${event.programLink ? 'Ver programa de' : 'Más información sobre'} ${event.title}`}
                        className="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        {event.programLink ? 'Programa' : 'Más información'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    )
                  })()}
                  {(() => {
                    const regHref = event.registrationLink || '#contacto'
                    const regExternal = isExternal(regHref)
                    return (
                      <a
                        href={regHref}
                        target={regExternal ? '_blank' : undefined}
                        rel={regExternal ? 'noopener noreferrer' : undefined}
                        aria-label={`Inscribirse a ${event.title}`}
                        className="inline-flex items-center px-6 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        Inscribirse
                      </a>
                    )
                  })()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver más eventos */}
        <div className="mt-12 text-center">
          <a
            href="/eventos"
            aria-label="Ver archivo completo de eventos pasados de SAMPRE"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Ver eventos pasados
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
