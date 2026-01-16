import { Target, Eye, Award, Users } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Promover la excelencia en la atención médica prehospitalaria mediante la capacitación continua, investigación científica y actualización de protocolos de emergencias.',
    },
    {
      icon: Eye,
      title: 'Visión',
      description: 'Ser la organización líder en medicina prehospitalaria en Argentina, reconocida por su compromiso con la calidad, innovación y formación profesional de excelencia.',
    },
    {
      icon: Award,
      title: 'Valores',
      description: 'Excelencia profesional, compromiso con la vida, trabajo en equipo, actualización continua y respeto por la dignidad humana en situaciones de emergencia.',
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Conformamos una red de profesionales dedicados a mejorar la atención prehospitalaria, compartiendo conocimientos y experiencias para salvar vidas.',
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre SAMPRE
          </h2>
          <p className="text-lg text-gray-600">
            Liderando la medicina prehospitalaria en Argentina desde hace más de dos décadas,
            comprometidos con la formación de profesionales de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all hover:scale-105 border-l-4 border-primary-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nuestra Historia
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            SAMPRE nace con el objetivo de profesionalizar y estandarizar la atención médica de emergencias
            prehospitalarias en Argentina. A lo largo de los años, hemos formado a miles de profesionales
            de la salud en técnicas avanzadas de soporte vital, manejo de emergencias y protocolos de
            atención prehospitalaria.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trabajamos en colaboración con instituciones sanitarias, universidades y organismos gubernamentales
            para mejorar continuamente los estándares de atención en emergencias médicas en todo el país.
          </p>
        </div>
      </div>
    </section>
  )
}
