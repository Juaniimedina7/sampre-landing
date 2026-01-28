import { GraduationCap, Calendar, BookOpen, ShieldCheck } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Capacitaciones',
      description: 'Cursos y talleres de formación continua en medicina prehospitalaria, soporte vital avanzado, trauma y emergencias cardiovasculares.',
      features: [
        'Cursos certificados',
        'Instructores calificados',
        'Material didáctico actualizado',
        'Simulación de casos reales',
      ],
    },
    {
      icon: Calendar,
      title: 'Eventos y Congresos',
      description: 'Organizamos eventos científicos, congresos nacionales e internacionales con los referentes más destacados de la medicina de emergencias.',
      features: [
        'Congresos nacionales e internacionales',
        'Jornadas de capacitación',
        'Competencias académicas',
        'Networking profesional',
      ],
    },
    {
      icon: BookOpen,
      title: 'Publicaciones',
      description: 'Investigaciones, artículos científicos y material educativo sobre medicina prehospitalaria para la comunidad médica.',
      features: [
        'Revista científica',
        'Guías clínicas',
        'Protocolos actualizados',
        'Material de consulta',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Certificaciones',
      description: 'Programas de certificación de servicios y de profesionales en diferentes áreas de la medicina prehospitalaria con validez nacional.',
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios y Actividades
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos una amplia gama de servicios para el desarrollo profesional en medicina prehospitalaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-2 mt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
