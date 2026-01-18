import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import { eventImages, getImageUrl } from '@/lib/images'

export default function UpcomingEvents() {
  const events = [
    {
      title: 'XXVIII Congreso Argentino de Medicina Prehospitalaria',
      date: '15-17 Noviembre 2026',
      location: 'Buenos Aires, Argentina',
      time: '09:00 - 18:00 hs',
      attendees: '500+',
      description: 'El evento más importante de medicina prehospitalaria en Argentina. Conferencias magistrales, talleres prácticos y actualización científica.',
      category: 'Congreso',
      featured: true,
      image: getImageUrl(eventImages.congreso2026),
    },
    {
      title: 'Curso de Soporte Vital Avanzado en Trauma',
      date: '20-21 Septiembre 2026',
      location: 'Rosario, Santa Fe',
      time: '08:00 - 17:00 hs',
      attendees: '40',
      description: 'Capacitación intensiva en manejo avanzado de trauma prehospitalario con certificación internacional.',
      category: 'Curso',
      featured: false,
      image: getImageUrl(eventImages.cursoTrauma),
    },
    {
      title: 'Jornada de Emergencias Cardiovasculares',
      date: '5 Octubre 2026',
      location: 'Córdoba, Córdoba',
      time: '09:00 - 14:00 hs',
      attendees: '150',
      description: 'Actualización en protocolos de atención de emergencias cardiovasculares y manejo del síndrome coronario agudo.',
      category: 'Jornada',
      featured: false,
      image: getImageUrl(eventImages.jornadaCardiovascular),
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                  : 'border-secondary-500'
              }`}
            >
              {/* Image */}
              {event.featured && (
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className={`p-6 md:p-8 ${event.featured ? 'md:w-2/3' : ''}`}>
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

                <p className="text-gray-600 mb-4">{event.description}</p>

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
                  <button className="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                    Más información
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center px-6 py-2 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                    Inscribirse
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para ver más eventos */}
        <div className="mt-12 text-center">
          <a
            href="/eventos"
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
