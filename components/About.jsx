'use client'

import {
  Target,
  BookOpen,
  Award,
  Users,
  Shield,
  FileCheck,
  Globe,
  GraduationCap,
  Scale,
  Heart
} from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function About() {
  const [titleRef, titleInView] = useInView()
  const objectives = [
    {
      icon: GraduationCap,
      title: 'Formación y Especialización',
      description: 'Fomentar el desarrollo, perfeccionamiento y difusión de la Medicina de Urgencias y Emergencias mediante Congresos, Jornadas y Cursos especializados.',
    },
    {
      icon: BookOpen,
      title: 'Investigación Científica',
      description: 'Organizar y auspiciar programas dedicados a investigaciones científicas sobre enfermedades tratables en medicina de emergencias prehospitalarias y desastres.',
    },
    {
      icon: FileCheck,
      title: 'Certificación Profesional',
      description: 'Certificar las condiciones morales, éticas y técnicas necesarias para ejercer la medicina de emergencias en cualquiera de sus ramas.',
    },
    {
      icon: Shield,
      title: 'Ética Profesional',
      description: 'Velar por el fiel cumplimiento de las normas de ética profesional y por la defensa de los intereses profesionales de los asociados.',
    },
    {
      icon: Award,
      title: 'Premios y Becas',
      description: 'Crear y aceptar premios y becas destinadas a fomentar obras, trabajos e investigaciones de interés para la formación de personal de salud en emergencias.',
    },
    {
      icon: Globe,
      title: 'Participación Internacional',
      description: 'Promover la participación del personal de salud en foros científicos nacionales, regionales (Mercosur) e internacionales de Medicina de Emergencias.',
    },
    {
      icon: Scale,
      title: 'Marco Legal',
      description: 'Promover una legislación nacional que respalde los principios de la medicina prehospitalaria y contestar oficios judiciales de organismos oficiales.',
    },
    {
      icon: Heart,
      title: 'Medicina de Desastres',
      description: 'Especialización en medicina en situación de desastres, con énfasis en el desarrollo de protocolos de atención en medio extrahospitalario.',
    },
    {
      icon: Users,
      title: 'Red Nacional',
      description: 'Promover y propiciar la creación de filiales en distintos puntos del país, construyendo una red nacional de profesionales de la emergencia prehospitalaria.',
    },
    {
      icon: Target,
      title: 'Publicaciones Científicas',
      description: 'Editar una revista periódica de la especialidad y publicar trabajos y actuaciones de las actividades científicas que realiza la sociedad.',
    },
  ]

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 ref={titleRef} className={`section-title ${titleInView ? 'in-view' : ''} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Sobre SAMPRE
          </h2>
          <p className="text-lg text-gray-600">
            Sociedad Argentina de Medicina Prehospitalaria - Asociación Civil fundada el 4 de Noviembre de 2019.
          </p>
        </div>

        {/* Historia y Misión */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Nuestra Misión
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            SAMPRE es una asociación civil con domicilio legal en la Ciudad de Buenos Aires y con ejercicio
            de sus actividades en todo el país. Nuestra misión es fomentar el desarrollo, perfeccionamiento
            y difusión de la Medicina de Urgencias y Emergencias, especialmente cuando se desarrolla en medio
            extrahospitalario, así como todo lo que atañe a la medicina en situación de desastres.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trabajamos sobre la base de una organización conformada por Comités Especializados que encarán
            programas de carácter permanente o transitorio, funcionando como comisiones asesoras y ejecutoras
            de programas científicos y técnicos según el área de su especialización.
          </p>
        </div>

        {/* Objetivos Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nuestros Objetivos Institucionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {objective.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Equipo de Salud */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 md:p-12 border border-secondary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comunidad Multidisciplinaria
          </h3>
          <p className="text-gray-700 leading-relaxed">
            SAMPRE está constituida por todos los integrantes del equipo de salud que practiquen la emergencia
            o especialidad afín, incluyendo médicos, enfermeros, técnicos en emergencias, socorristas, personal
            de defensa civil, bomberos, fuerzas armadas y todo aquel que actúe como primer respondiente en
            emergencias. Todos nuestros miembros comparten el compromiso con los postulados de orden ético y
            profesional establecidos en nuestro estatuto.
          </p>
        </div>
      </div>
    </section>
  )
}
