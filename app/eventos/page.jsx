'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import EventsTimeline from '@/components/EventsTimeline'
import { logos, getImageUrl } from '@/lib/images'

export default function EventosPage() {
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

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eventos Pasados
            </h1>

            <p className="text-lg md:text-xl text-gray-600">
              Recorrido por los congresos, jornadas y actividades que han marcado la historia
              de la medicina prehospitalaria en Argentina.
            </p>
          </div>

          {/* Timeline */}
          <EventsTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Interesado en nuestros próximos eventos?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Consulta nuestra agenda de eventos próximos y capacitaciones disponibles
          </p>
          <Link
            href="/#proximos-eventos"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Ver próximos eventos
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
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
