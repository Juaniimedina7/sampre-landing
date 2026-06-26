'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Heart,
  Activity,
  Shield,
  Clock,
  GraduationCap,
  Send,
  ClipboardList,
  Building2,
  User,
  AlertCircle,
} from 'lucide-react'
import { logos, getImageUrl, upcomingEventImages } from '@/lib/images'

const FORMSUBMIT_URL = 'https://formsubmit.co/info@sampre.com.ar'

const objetivos = [
  'Evaluar competencias clínicas, técnicas y no técnicas en el ámbito prehospitalario.',
  'Fomentar el trabajo interdisciplinario en emergencias sanitarias.',
  'Promover el uso de la simulación clínica como herramienta formativa y evaluativa.',
  'Consagrar un equipo campeón del Rally Prehospitalario SAMPRE 2026.',
]

const competencias = [
  { icon: Activity, title: 'Abordaje clínico', desc: 'Aplicación de protocolos PHTLS, ATLS, ACLS y AMLS.' },
  { icon: Heart, title: 'Toma de decisiones', desc: 'Razonamiento clínico en escenarios críticos simulados.' },
  { icon: Users, title: 'Trabajo en equipo', desc: 'Coordinación, comunicación y liderazgo (CRM).' },
  { icon: Shield, title: 'Seguridad del paciente', desc: 'Estándares de simulación segura y confidencial.' },
  { icon: Clock, title: 'Gestión del tiempo', desc: 'Priorización y uso eficiente de recursos.' },
  { icon: GraduationCap, title: 'Habilidades no técnicas', desc: 'Liderazgo y comunicación bajo presión.' },
]

const equipoComposicion = [
  { label: 'Integrantes titulares', value: '5' },
  { label: 'Coach (no compite)', value: '1' },
  { label: 'Participan por escenario', value: '3' },
  { label: 'Cupo total', value: '8-16 equipos' },
]

const costos = [
  { label: 'Equipos nacionales', value: '$100.000 ARS' },
  { label: 'Equipos extranjeros', value: 'USD 100' },
]

export default function RallyPrehospitalarioPage() {
  const [formType, setFormType] = useState('individual')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())
    const tipo = formType === 'individual' ? 'INDIVIDUAL' : 'INSTITUCIONAL'

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: `Inscripción Rally SAMPRE 2026 - ${tipo}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        e.target.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (err) {
      console.error('Error al enviar:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#proximos-eventos"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver a eventos
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={getImageUrl(upcomingEventImages.rallyPrehospitalario2026)}
            alt="Rally Prehospitalario SAMPRE 2026"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-900/75 to-secondary-900/85" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Trophy className="w-4 h-4" />
              <span className="text-sm font-medium">Competencia Académica SAMPRE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Rally Prehospitalario<br />SAMPRE 2026
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed drop-shadow">
              Somos equipo. Somos respuesta. Somos vocación.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 border border-white/20">
                <Calendar className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Fecha</div>
                  <div className="text-white font-semibold">5 y 6 de Septiembre 2026</div>
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3 border border-white/20">
                <MapPin className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <div className="text-xs text-white/70 uppercase tracking-wide">Sede</div>
                  <div className="text-white font-semibold">UNAJ - Florencio Varela</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inscripcion"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
              >
                Inscribir equipo
              </a>
              <a
                href="#reglamento"
                className="inline-flex items-center px-6 py-3 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Ver reglamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              ¿En qué consiste?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
              El Rally Prehospitalario SAMPRE 2026 es una <strong>competencia académica y profesional</strong> destinada a equipos
              de emergencias prehospitalarias del ámbito público y privado. Promueve la excelencia, el trabajo en equipo y
              la toma de decisiones clínicas mediante la resolución de <strong>escenarios simulados realistas</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
                <Activity className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Escenarios realistas</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Situaciones críticas recreadas con actores y simuladores de alta fidelidad. Reanimación, trauma, vía aérea
                  y emergencias médicas bajo protocolos internacionales.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-6 border border-secondary-100">
                <Users className="w-10 h-10 text-secondary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enfoque en equipo</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Se valora coordinación, comunicación y liderazgo. Cada escenario evalúa el desempeño integral del equipo
                  bajo presión, no solo técnico.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-100">
                <Shield className="w-10 h-10 text-primary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Aval académico</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Avalado por SASIM, con aval universitario de la UNAJ. Certificación académica para todos los participantes
                  y créditos según normativa vigente.
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-6 border border-secondary-100">
                <Trophy className="w-10 h-10 text-secondary-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Premios</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Reconocimiento al equipo campeón, certificados de participación y premios especiales definidos por la
                  organización.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Objetivos
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {objetivos.map((obj, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competencias evaluadas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Competencias evaluadas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {competencias.map((c, i) => {
                const Icon = c.icon
                return (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Equipos y costos */}
      <section id="reglamento" className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Conformación del equipo */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary-600" />
                Conformación del equipo
              </h3>
              <div className="space-y-3 mb-6">
                {equipoComposicion.map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-bold text-primary-700">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                <p className="font-semibold mb-2 text-primary-900">Mínimo obligatorio por equipo:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>1 médico</li>
                  <li>1 técnico en emergencias y/o enfermero</li>
                  <li>1 conductor profesional (puede ser técnico o enfermero)</li>
                </ul>
              </div>
            </div>

            {/* Costos e inscripción */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-primary-600" />
                Costos de inscripción
              </h3>
              <div className="space-y-4 mb-6">
                {costos.map((item, i) => (
                  <div key={i} className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 flex justify-between items-center">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="text-xl font-bold text-primary-700">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 text-sm text-gray-700">
                <p className="font-semibold mb-1 text-yellow-900">Cupo limitado a 16 equipos.</p>
                <p>La inscripción se considerará válida una vez acreditado el pago y enviada la documentación requerida.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inscripción */}
      <section id="inscripcion" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
              <Send className="w-4 h-4" />
              <span className="text-sm font-medium">Formulario de inscripción</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Inscribite al Rally
            </h2>
            <p className="text-lg text-gray-600">
              Completá el formulario según corresponda. Te contactaremos a la brevedad con los próximos pasos.
            </p>
          </div>

          {/* Toggle */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-2 bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setFormType('individual')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  formType === 'individual'
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <User className="w-4 h-4" />
                Participante individual
              </button>
              <button
                onClick={() => setFormType('institucional')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all ${
                  formType === 'institucional'
                    ? 'bg-white text-primary-700 shadow'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Building2 className="w-4 h-4" />
                Equipo / Institución
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              {formType === 'individual' ? (
                <IndividualFields />
              ) : (
                <InstitucionalFields />
              )}

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <p>
                  Al enviar este formulario declarás conocer y aceptar el Reglamento Oficial del Rally Prehospitalario
                  SAMPRE 2026, comprometiéndote a cumplir las normas de seguridad, confidencialidad y conducta
                  establecidas por la organización.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando inscripción...' : 'Enviar inscripción'}
                <Send className="ml-2 w-5 h-5" />
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
                  <p className="font-semibold">¡Inscripción enviada con éxito!</p>
                  <p className="text-sm">Te contactaremos a la brevedad con los próximos pasos y la documentación a adjuntar.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg">
                  <p className="font-semibold">Error al enviar la inscripción</p>
                  <p className="text-sm">Por favor intentá nuevamente o escribinos directamente a info@sampre.com.ar.</p>
                </div>
              )}
            </form>
          </div>
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

/* ------------------------ Form Fields ------------------------ */

function Field({ label, name, type = 'text', required = false, placeholder = '', as = 'input', children, options }) {
  const baseCls =
    'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition bg-white'

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === 'select' ? (
        <select id={name} name={name} required={required} className={baseCls} defaultValue="">
          <option value="" disabled>
            Seleccionar...
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : as === 'textarea' ? (
        <textarea id={name} name={name} required={required} rows={3} placeholder={placeholder} className={baseCls + ' resize-none'} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseCls}
        />
      )}
      {children}
    </div>
  )
}

function IndividualFields() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Nombre y apellido" name="nombre" required placeholder="Nombre completo" />
        <Field label="Documento de identidad" name="dni" required placeholder="DNI / Pasaporte" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Número de Socio SAMPRE" name="socio_sampre" placeholder="(si corresponde)" />
        <Field label="Fecha de nacimiento" name="nacimiento" type="date" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field
          label="Profesión"
          name="profesion"
          required
          as="select"
          options={['Médico', 'Enfermero', 'Técnico en Emergencias', 'Conductor Profesional', 'Otro']}
        />
        <Field label="Matrícula profesional" name="matricula" placeholder="(si corresponde)" />
      </div>
      <Field label="Institución a la que representa" name="institucion" required placeholder="Servicio, hospital, empresa…" />
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Correo electrónico" name="email" type="email" required placeholder="tu@email.com" />
        <Field label="Teléfono" name="telefono" type="tel" required placeholder="+54 9 ..." />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Field label="Talle de remera" name="talle" required as="select" options={['XS', 'S', 'M', 'L', 'XL', 'XXL']} />
        <Field label="Cobertura de salud" name="cobertura" required placeholder="Obra social / prepaga" />
        <Field label="Número de póliza" name="poliza" placeholder="(si corresponde)" />
      </div>
      <Field label="Contacto de emergencia" name="contacto_emergencia" required placeholder="Nombre y teléfono" />
      <Field label="Restricciones alimentarias" name="alimentacion" placeholder="Vegetariano, celíaco, alergias…" />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Permanecerá en el predio durante la actividad nocturna? <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="estadia_nocturna" value="Acampar" required className="text-primary-600 focus:ring-primary-500" />
            <span className="text-gray-700 text-sm">Sí, acamparé en el predio.</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="estadia_nocturna" value="Retirarse" className="text-primary-600 focus:ring-primary-500" />
            <span className="text-gray-700 text-sm">No, me retiraré y regresaré a las 07:00 hs.</span>
          </label>
        </div>
      </div>
    </>
  )
}

function InstitucionalFields() {
  return (
    <>
      <Field label="Institución / Empresa / Sistema de Emergencias" name="institucion" required placeholder="Nombre completo de la institución" />
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Tipo de institución" name="tipo_institucion" required as="select" options={['Pública', 'Privada', 'Mixta']} />
        <Field label="Nombre del equipo" name="nombre_equipo" required placeholder="Nombre con el que competirán" />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <Field label="Ciudad" name="ciudad" required />
        <Field label="Provincia / Estado" name="provincia" required />
        <Field label="País" name="pais" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Director / Jefe responsable" name="responsable" required />
        <Field label="Cargo" name="cargo_responsable" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Correo electrónico" name="email" type="email" required placeholder="contacto@institucion.com" />
        <Field label="Teléfono de contacto" name="telefono" type="tel" required placeholder="+54 ..." />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="¿Participará con ambulancia?" name="ambulancia" required as="select" options={['Sí', 'No']} />
        <Field label="Tipo de ambulancia" name="tipo_ambulancia" placeholder="(si corresponde)" />
      </div>
      <div className="pt-2 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-700 mb-3">Datos del coach</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Nombre del coach" name="coach_nombre" required />
          <Field label="Correo del coach" name="coach_email" type="email" required />
          <Field label="Teléfono del coach" name="coach_telefono" type="tel" required />
        </div>
      </div>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
        <p className="font-semibold mb-2 text-yellow-900">Documentación a adjuntar por email después de enviar este formulario:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Nota institucional de aceptación del reglamento</li>
          <li>Seguro vigente del personal y copia de la póliza</li>
          <li>Comprobante de pago</li>
          <li>Nómina de participantes (con formulario individual de cada uno)</li>
          <li>Logo institucional</li>
        </ul>
      </div>
    </>
  )
}
