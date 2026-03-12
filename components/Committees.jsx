'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import {
  Radio,
  Heart,
  Search,
  AlertTriangle,
  Users,
  Truck,
  FileCheck,
  Settings,
  Shield,
  Target,
  Activity,
  Smartphone,
  Brain,
  Home,
  Droplet,
  Scale,
  Mountain,
  UsersRound,
  Baby,
  Stethoscope,
  CheckCircle,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function Committees() {
  const [titleRef, titleInView] = useInView()
  const [showMobileCommittees, setShowMobileCommittees] = useState(false)

  const committees = [
    { id: 1, name: 'Recepción y Despacho', leader: 'Alejandra Massone', icon: Radio },
    { id: 2, name: 'Gestión de Riesgos', leader: 'Claudia Congett', icon: AlertTriangle },
    { id: 3, name: 'Búsqueda y Rescate', leader: 'Mariano Ledesma', icon: Search },
    { id: 4, name: 'Trauma', leader: 'Alejandra Schro', icon: Heart },
    { id: 5, name: 'Técnicos en Emergencias', leader: 'Luciano Gandini y Giuliana Morlino', icon: Users },
    { id: 6, name: 'Transporte Sanitario', leader: 'Sebastián Fernández y Rodrigo Anaquin', icon: Truck },
    { id: 7, name: 'Mejores Prácticas', leader: 'Ricardo Quintero', icon: FileCheck },
    { id: 8, name: 'Gestión', leader: 'Daniel Maffei', icon: Settings },
    { id: 9, name: 'Seguridad del Paciente', leader: 'Marcelo Pechieu', icon: Shield },
    { id: 10, name: 'Medicina Táctica', leader: 'Diego Álvarez', icon: Target },
    { id: 11, name: 'Reanimación', leader: 'Diego Pizzini', icon: Activity },
    { id: 12, name: 'Tecnología en Emergencias', leader: 'Gustavo Daquarti', icon: Smartphone },
    { id: 13, name: 'Salud Mental', leader: 'Ivana Nogueira', icon: Brain },
    { id: 14, name: 'Cuidados Domiciliarios', leader: 'Barbaro Donnet', icon: Home },
    { id: 15, name: 'Salvamento y Rescate Acuático', leader: 'Hernán Muñoz', icon: Droplet },
    { id: 16, name: 'Legales', leader: 'Lucas Orlando', icon: Scale },
    { id: 17, name: 'Medicina Agreste', leader: 'Kevin Bleuer y Mercedes Galindez', icon: Mountain },
    { id: 18, name: 'Género e Interculturalidad', leader: 'En desarrollo', icon: UsersRound },
    { id: 19, name: 'Pediatría', leader: 'Norma Raúl', icon: Baby },
    { id: 20, name: 'Enfermería', leader: 'Claudio Velazco', icon: Stethoscope },
    { id: 21, name: 'Revalidación', leader: 'Silvio Aguilera', icon: CheckCircle },
    { id: 22, name: 'Editorial', leader: 'Lucas Henkel y Leonardo Manino', icon: BookOpen },
  ]

  return (
    <section id="comites" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden lg:block max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full mb-4">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Período 2026-2028</span>
          </div>
          <h2 ref={titleRef} className={`section-title ${titleInView ? 'in-view' : ''} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Comités de SAMPRE
          </h2>
          <p className="text-lg text-gray-600">
            Equipos especializados que impulsan el desarrollo y la excelencia en diferentes áreas de la medicina prehospitalaria
          </p>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden max-w-6xl mx-auto mb-8">
          <button
            onClick={() => setShowMobileCommittees(!showMobileCommittees)}
            className="w-full bg-gradient-to-r from-secondary-100 to-secondary-200 hover:from-secondary-200 hover:to-secondary-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
          >
            <span className="text-lg font-bold text-secondary-900">
              Comités de SAMPRE (22)
            </span>
            {showMobileCommittees ? (
              <ChevronUp className="w-6 h-6 text-secondary-900 group-hover:text-secondary-700 transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-secondary-900 group-hover:text-secondary-700 transition-colors" />
            )}
          </button>
        </div>

        {/* Content - Always visible on desktop, toggleable on mobile */}
        <div className={`${!showMobileCommittees ? 'hidden lg:block' : 'block'} max-w-7xl mx-auto`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {committees.map((committee) => {
              const Icon = committee.icon
              return (
                <div
                  key={committee.id}
                  className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-lg border border-gray-200 hover:border-primary-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5 text-primary-600 group-hover:text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-600 transition-colors">
                        {committee.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-snug">
                        {committee.leader}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

            {/* Info adicional */}
            <div className="mt-12 text-center bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-4">
                Los comités de SAMPRE están conformados por profesionales expertos en cada área, trabajando de manera colaborativa para el avance de la medicina prehospitalaria en Argentina.
              </p>
              <p className="text-sm text-gray-600">
                Para más información sobre cada comité o para participar, contáctanos a través de nuestro formulario.
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}
