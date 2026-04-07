'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Users, Star, Shield, Vote, Briefcase, BookOpen, Trophy, ClipboardList } from 'lucide-react'
import { logos, getImageUrl } from '@/lib/images'

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfOn1pPj-y19f9TEFjrfVsry7yWmNZXvGgZZxpDdMn7aMwXOQ/viewform?usp=publish-editor'

const activoBeneficios = [
  { icon: CheckCircle, text: 'Participación en actividades científicas, jornadas y espacios académicos' },
  { icon: CheckCircle, text: 'Posibilidad de presentar trabajos y formar parte de comités o equipos de trabajo' },
  { icon: CheckCircle, text: 'Integrarse a la comunidad profesional y académica de la especialidad' },
  { icon: CheckCircle, text: 'Voz en actividades científicas' },
]

const activoRequisitos = [
  'Médico, enfermero, técnico en emergencias, socorrista, personal de defensa civil, bomberos, fuerzas armadas o primer respondiente',
  'Al menos 1 año de experiencia en emergencias prehospitalarias o contextos de desastres',
  'Desempeño activo y continuo en el área (con certificación)',
  'Ser aceptado por la Comisión Directiva',
]

const titularRequisitos = [
  'Profesional del área de salud o emergencias',
  'Al menos 5 años de experiencia comprobable en emergencias prehospitalarias o medicina de desastres',
  'Acreditar formación o especialización afín (título reconocido y/o cursos con carga horaria reconocida)',
  'Desempeño continuo en servicios de emergencias prehospitalarias o instituciones relacionadas',
  'Ser aceptado por la Comisión Directiva',
]

const titularExclusivos = [
  { icon: CheckCircle, text: 'Voz y voto en las asambleas institucionales' },
  { icon: CheckCircle, text: 'Posibilidad de acceder a cargos en la Comisión Directiva' },
  { icon: CheckCircle, text: 'Acceder a roles de liderazgo dentro de la Sociedad (Comités, equipos, etc)' },
  { icon: CheckCircle, text: 'Participación en la toma de decisiones institucionales' },
]

const precios = {
  mensual: { activo: '$8.000', titular: '$10.000', sufijo: 'ARS / mes' },
  anual:   { activo: '$60.000', titular: '$80.000', sufijo: 'ARS / año' },
}

export default function SociosPage() {
  const [plan, setPlan] = useState('mensual')

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </Link>
            <Link href="/" className="flex items-center space-x-3">
              <img
                src={getImageUrl(logos.main)}
                alt={logos.main.alt}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-800 to-secondary-800 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Membresía SAMPRE</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Formá parte de SAMPRE
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Disfrutá los beneficios de pertenecer a la comunidad referente en medicina prehospitalaria de Argentina.
              Elegí la categoría que mejor se adapte a tu trayectoria y objetivos profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Toggle mensual / anual */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setPlan('mensual')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  plan === 'mensual'
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setPlan('anual')}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                  plan === 'anual'
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Anual
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">

            {/* Socio Activo */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow">
              <div className="bg-gradient-to-br from-secondary-700 to-secondary-800 p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Socio Activo</h2>
                <p className="text-3xl font-extrabold text-white mt-3">{precios[plan].activo} <span className="text-base font-medium text-white/80">{precios[plan].sufijo}</span></p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <ul className="space-y-4 mb-8">
                  {activoBeneficios.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-5 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ClipboardList className="w-4 h-4 text-gray-400" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Requisitos</p>
                  </div>
                  <ul className="space-y-2">
                    {activoRequisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 flex-shrink-0 mt-2" />
                        <span className="text-gray-500 text-xs leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1" />

                <div className="border-t border-gray-100 pt-6">
                  <a
                    href={GOOGLE_FORM_URL}
                    target={GOOGLE_FORM_URL !== '#' ? '_blank' : undefined}
                    rel={GOOGLE_FORM_URL !== '#' ? 'noopener noreferrer' : undefined}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Asociarme como Activo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Socio Titular */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-primary-600 overflow-hidden flex flex-col hover:shadow-2xl transition-shadow relative">
              {/* Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  <Star className="w-3 h-3" />
                  La más completa
                </span>
              </div>

              <div className="bg-gradient-to-br from-primary-700 to-primary-900 p-8">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Socio Titular</h2>
                <p className="text-3xl font-extrabold text-white mt-3">{precios[plan].titular} <span className="text-base font-medium text-white/80">{precios[plan].sufijo}</span></p>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm font-semibold text-primary-700 border-l-2 border-primary-600 pl-3 mb-4">
                  Todo lo del Socio Activo, más:
                </p>
                <ul className="space-y-4 mb-8">
                  {titularExclusivos.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-5 mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ClipboardList className="w-4 h-4 text-gray-400" />
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Requisitos</p>
                  </div>
                  <ul className="space-y-2">
                    {titularRequisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2" />
                        <span className="text-gray-500 text-xs leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1" />

                <div className="border-t border-gray-100 pt-6">
                  <a
                    href={GOOGLE_FORM_URL}
                    target={GOOGLE_FORM_URL !== '#' ? '_blank' : undefined}
                    rel={GOOGLE_FORM_URL !== '#' ? 'noopener noreferrer' : undefined}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Asociarme como Titular
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-800 to-secondary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿A qué categoría puedo acceder?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Estamos a disposición para acompañarte en el proceso de incorporación y responder cualquier consulta.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Contactanos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} SAMPRE - Sociedad Argentina de Medicina Prehospitalaria
          </p>
        </div>
      </footer>

    </main>
  )
}
