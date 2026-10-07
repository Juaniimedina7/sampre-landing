import Link from 'next/link'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'
import { logos, getImageUrl } from '@/lib/images'

export const metadata = {
  title: 'Solicitud recibida',
  description: 'Recibimos tu solicitud de asociación a SAMPRE.',
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/socios" className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a Socios
            </Link>
            <Link href="/" className="flex items-center space-x-3">
              <img src={getImageUrl(logos.main)} alt={logos.main.alt} className="h-12 w-auto object-contain" />
            </Link>
          </div>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">¡Solicitud recibida!</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Recibimos tu solicitud y tu CV. Te enviamos un email de confirmación.
          </p>
          <div className="text-left bg-gray-50 border border-gray-100 rounded-lg p-4 mb-8">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Próximos pasos</p>
            <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
              <li>La Comisión Directiva evalúa tu solicitud y tu CV.</li>
              <li>Te avisamos por email el resultado.</li>
              <li>Si sos aprobado/a, te enviamos los datos para abonar la cuota.</li>
            </ol>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Ir al inicio
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} SAMPRE - Sociedad Argentina de Medicina Prehospitalaria</p>
        </div>
      </footer>
    </main>
  )
}
