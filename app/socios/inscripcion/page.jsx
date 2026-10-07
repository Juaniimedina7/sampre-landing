'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send, ClipboardList, ShieldCheck } from 'lucide-react'
import { logos, getImageUrl } from '@/lib/images'

const FORMSUBMIT_URL = 'https://formsubmit.co/info@sampre.com.ar'

const requisitos = {
  activo: [
    'Médico, enfermero, técnico en emergencias, socorrista, defensa civil, bombero, fuerzas armadas o primer respondiente',
    'Al menos 1 año de experiencia en emergencias prehospitalarias o contextos de desastres',
    'Desempeño activo y continuo en el área (con certificación)',
  ],
  titular: [
    'Profesional del área de salud o emergencias',
    'Al menos 5 años de experiencia comprobable en emergencias prehospitalarias o medicina de desastres',
    'Acreditar formación o especialización afín (título o cursos con carga horaria reconocida)',
    'Desempeño continuo en servicios de emergencias prehospitalarias o instituciones relacionadas',
  ],
}

const profesiones = [
  'Médico/a', 'Enfermero/a', 'Técnico en Emergencias', 'Socorrista',
  'Defensa Civil', 'Bombero/a', 'Fuerzas Armadas', 'Primer respondiente', 'Otro',
]

export default function InscripcionPage() {
  const [categoria, setCategoria] = useState('activo')

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Solicitud de asociación</h1>
            <p className="text-gray-600">
              Completá tus datos y adjuntá tu CV. La Comisión Directiva evaluará tu solicitud y te responderemos por email.
            </p>
          </div>

          <form
            action={FORMSUBMIT_URL}
            method="POST"
            encType="multipart/form-data"
            className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 space-y-5"
          >
            {/* Controles FormSubmit */}
            <input type="hidden" name="_subject" value={`Nueva solicitud de socio — ${categoria === 'activo' ? 'Activo' : 'Titular'}`} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://sampre.com.ar/socios/gracias" />
            <input
              type="hidden"
              name="_autoresponse"
              value="¡Gracias por tu interés en asociarte a SAMPRE! Recibimos tu solicitud y tu CV. La Comisión Directiva la evaluará y te responderemos por este medio. Si es aprobada, te enviaremos los datos para abonar la cuota societaria. Consultas: info@sampre.com.ar"
            />
            {/* Honeypot anti-spam */}
            <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="categoria" value={categoria === 'activo' ? 'Socio Activo' : 'Socio Titular'} />

            {/* Toggle categoría */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
              <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
                {[['activo', 'Socio Activo'], ['titular', 'Socio Titular']].map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setCategoria(val)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      categoria === val ? 'bg-white text-primary-700 shadow' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Requisitos de la categoría elegida */}
            <div className="bg-primary-50 border border-primary-100 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="w-4 h-4 text-primary-600" />
                <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide">
                  Requisitos — {categoria === 'activo' ? 'Socio Activo' : 'Socio Titular'}
                </p>
              </div>
              <ul className="space-y-1.5">
                {requisitos[categoria].map((req, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-1.5" />
                    <span className="text-gray-700 text-xs leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Nombre y apellido" name="nombre" required />
              <Field label="DNI" name="dni" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" required />
              <Field label="Profesión / rol" name="profesion" as="select" options={profesiones} required />
              <Field label="Matrícula profesional" name="matricula" placeholder="Opcional" />
              <Field label="Años de experiencia en emergencias" name="experiencia" type="number" required />
              <Field label="Ámbito / institución actual" name="institucion" required />
            </div>

            <Field
              label={`Formación o especialización afín${categoria === 'titular' ? '' : ' (opcional)'}`}
              name="formacion"
              required={categoria === 'titular'}
              placeholder="Título, posgrado o cursos con carga horaria reconocida"
            />

            <Field label="Breve descripción de tu desempeño actual" name="desempeno" as="textarea" placeholder="Opcional" />

            {/* CV */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Curriculum Vitae (PDF) <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx"
                required
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700 file:cursor-pointer border border-gray-300 rounded-lg bg-white p-2"
              />
              <p className="mt-1.5 text-xs text-gray-500">Adjuntá tu CV en PDF (máx. unos pocos MB).</p>
            </div>

            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input type="checkbox" required className="mt-1" />
              <span>Entiendo que mi solicitud será evaluada por la Comisión Directiva de SAMPRE.</span>
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              Enviar solicitud
              <Send className="ml-2 w-4 h-4" />
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Vas a ver una verificación anti-spam antes de confirmar el envío.
            </p>
          </form>
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

function Field({ label, name, type = 'text', required = false, placeholder, as = 'input', options = [] }) {
  const base = 'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white'
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === 'select' ? (
        <select id={name} name={name} required={required} defaultValue="" className={base}>
          <option value="" disabled>Seleccionar...</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : as === 'textarea' ? (
        <textarea id={name} name={name} required={required} placeholder={placeholder} rows={3} className={base} />
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </div>
  )
}
