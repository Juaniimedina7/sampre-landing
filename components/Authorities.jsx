'use client'

import { useState } from 'react'
import { Users, ChevronDown, ChevronUp } from 'lucide-react'
import { authorityImages, vocalImages, getImageUrl } from '@/lib/images'
import { useInView } from '@/hooks/useInView'

export default function Authorities() {
  const [showPrevious, setShowPrevious] = useState(false)
  const [show2123, setShow2123] = useState(false)
  const [show1921, setShow1921] = useState(false)
  const [showMobileCurrent, setShowMobileCurrent] = useState(false)
  const [showVocales, setShowVocales] = useState(false)
  const [expandedAuthority, setExpandedAuthority] = useState(null)
  const [expandedVocal, setExpandedVocal] = useState(null)
  const [titleRef, titleInView] = useInView()

  const handleAuthorityClick = (index) => {
    setExpandedAuthority(expandedAuthority === index ? null : index)
  }

  const handleVocalClick = (index) => {
    setExpandedVocal(expandedVocal === index ? null : index)
  }

  const currentAuthorities = [
    {
      name: 'William Medina',
      position: 'Presidente',
      specialty: 'Médico Cirujano especialista en cirugía de tórax - Profesor UNAJ - Facultado NAEMT PHTLS AMLS - Instructor ACLS-ECSI - Docente de la dirección de manejo de emergencias y catástrofes Pcia de Bs.As - Director general de emergencias del municipio de Lanús.',
      image: getImageUrl(authorityImages.presidente),
    },
    {
      name: 'Gabriel Sosa',
      position: 'Vicepresidente',
      specialty: 'Lic. En Protección Civil y Emergencias - Mg. Internacional en Gestión de Riesgos y Desastres - Coord. Tecnicatura en Emergencias Sanitarias y Desastres - UNAJ Coor. Docencia de la Dirección de Manejo de Emergencias y Catástrofes.',
      image: getImageUrl(authorityImages.vicepresidenta),
    },
    {
      name: 'Lucas Henkel',
      position: 'Secretario Administrativo',
      specialty: 'Tec. Sup. en Emergencias Médicas - Especialidad med Montaña ICAR - Facultado NAEMT PHTLS AMLS - Instructor ACLS - Miembro Comité Latinoaméricano de Educación NAEMT - Director SAR Bariloche',
      image: getImageUrl(authorityImages.secretario),
    },
    {
      name: 'Ivana Nogueira',
      position: 'Secretaria Académica',
      specialty: 'Lic. en Psicología - Especialista Jerarquizada en Salud Comunitaria, Emergencias y Desastres - Coordinadora PROSAMIC - Jefa de Programa de formación y vinculación en Emergencias Sanitarias de Moreno.',
      image: getImageUrl(authorityImages.tesorera),
    },
    {
      name: 'Débora Vizcaino',
      position: 'Prosecretaria Administrativa',
      specialty: 'Médica emergentóloga - Directora médica Accudir.',
      image: getImageUrl(authorityImages.vocal1),
    },
    {
      name: 'Cristian Bottari',
      position: 'Prosecretario Académico',
      specialty: 'Médico especialista en Infectología, emergencias y desastres – Médico Aero-evacuador – Miembro fundador SAMPRE – Director General del SIES Rosario – Director Médico UTV Aero-emergencias – Jefe de Cátedra de Emergencias UAI – Instructor Internacional PHTLS (NAEMT)',
      image: getImageUrl(authorityImages.vocal2),
    },
  ]

  const currentVocales = [
    { name: 'Alejandra Schro', position: 'Vocal 1', specialty: 'Medicina Prehospitalaria', image: getImageUrl(vocalImages.alejandraSchro) },
    { name: 'Leonardo Manino', position: 'Vocal 2', specialty: 'Medicina Prehospitalaria', image: getImageUrl(vocalImages.placeholder) },
    { name: 'Juan Manuel Peresson', position: 'Vocal 3', specialty: 'Atención Prehospitalaria', image: getImageUrl(vocalImages.placeholder) },
    { name: 'Nelson Mir', position: 'Vocal 4', specialty: 'Tec. Sup. en Emergencias Médicas - Director de Emergencias de la provincia de Santiago del Estero', image: getImageUrl(vocalImages.nelsonMir) },
    { name: 'Luciana Espindola', position: 'Vocal Suplente', specialty: 'Medicina de Emergencias', image: getImageUrl(vocalImages.lucianaEspindola) },
    { name: 'Rodrigo Garcia Marte', position: 'Vocal Suplente', specialty: 'Técnico en Emergencias Extrahospitalarias - Jefe del Depto. Técnico Operativo de Emergencias - Tierra del Fuego', image: getImageUrl(vocalImages.rodrigoGarciaMarte) },
  ]

  const fiscalizacion2026 = [
    { name: 'Silvio Aguilera' },
    { name: 'Claudia Congett' },
    { name: 'Luciano Gandini' },
  ]

  const authorities2123 = [
    {
      name: 'Silvio Luis Aguilera',
      position: 'Presidente',
    },
    {
      name: 'Claudio Knaup',
      position: 'Vicepresidente',
    },
    {
      name: 'Gabriel Sosa',
      position: 'Secretario Científico',
    },
    {
      name: 'Claudio Velazco',
      position: 'Secretario Administrativo',
    },
    {
      name: 'Adrián Schneider',
      position: 'Pro Secretario Científico',
    },
    {
      name: 'Aníbal Feder',
      position: 'Pro Secretario Administrativo',
    },
  ]

  const vocales2123 = [
    { name: 'Leandro Herbón', position: 'Vocal Titular' },
    { name: 'Mariano Alfonsi', position: 'Vocal Titular' },
    { name: 'Juan Barbero', position: 'Vocal Titular' },
    { name: 'José Nicolás Gómez', position: 'Vocal Titular' },
    { name: 'Alejandro Yamandu', position: 'Vocal Suplente' },
    { name: 'Paola Caro', position: 'Vocal Suplente' },
  ]

  const authorities1921 = [
    {
      name: 'Luciano Gandini',
      position: 'Presidente',
    },
    {
      name: 'Silvio Aguilera',
      position: 'Vicepresidente',
    },
    {
      name: 'Flavio Rodriguez',
      position: 'Secretario Científico',
    },
    {
      name: 'Manuel Molina Pico',
      position: 'Secretario Administrativo',
    },
    {
      name: 'Gabriel Sosa',
      position: 'Pro Secretario Científico',
    },
    {
      name: 'Claudio Velazco',
      position: 'Pro Secretario Administrativo',
    },
  ]

  const vocales1921 = [
    { name: 'Miguel Pedraza', position: 'Vocal Titular' },
    { name: 'Diego Pizzini', position: 'Vocal Titular' },
    { name: 'Leandro Herbón', position: 'Vocal Titular' },
    { name: 'Mariano Alfonsi', position: 'Vocal Titular' },
    { name: 'Arnaldo Saavedra', position: 'Vocal Suplente' },
    { name: 'Eduardo Isern', position: 'Vocal Suplente' },
  ]

  const fiscalizacion2123 = [
    { name: 'Silvio Aguilera' },
    { name: 'Claudio Knaup' },
    { name: 'Gabriel Sosa' },
  ]

  const fiscalizacion1921 = [
    { name: 'Aníbal Feder' },
    { name: 'Federico Etchenique' },
    { name: 'Valeria El Haj' },
  ]

  const previousAuthorities = [
    {
      name: 'Claudio Knaup',
      position: 'Presidente',
    },
    {
      name: 'William Medina',
      position: 'Vicepresidente',
    },
    {
      name: 'Aníbal Feder',
      position: 'Secretario Administrativo',
    },
    {
      name: 'Adrián Schneider',
      position: 'Secretario Académico',
    },
    {
      name: 'Lucas Henkel',
      position: 'Prosecretario Administrativo',
    },
    {
      name: 'Ivana Nogueira',
      position: 'Prosecretaria Académica',
    },
  ]

  const previousVocales = [
    { name: 'Paola Caro', position: 'Vocal 1' },
    { name: 'Leo Manino', position: 'Vocal 2' },
    { name: 'Juan Barbero', position: 'Vocal 3' },
    { name: 'José Nicolás Gómez', position: 'Vocal 4' },
    { name: 'Norma Raúl', position: 'Vocal Suplente' },
    { name: 'Andrea Bianchi', position: 'Vocal Suplente' },
  ]

  const fiscalizacion2024 = [
    { name: 'Silvio Aguilera' },
    { name: 'Gabriel Sosa' },
    { name: 'Claudio Velazco' },
  ]

  return (
    <section id="autoridades" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Comisión Directiva</span>
          </div>
          <h2 ref={titleRef} className={`section-title ${titleInView ? 'in-view' : ''} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Autoridades
          </h2>
          <p className="text-lg text-gray-600">
            Profesionales comprometidos con la excelencia en medicina prehospitalaria
          </p>
        </div>

        {/* Current Board - Período 2026-2028 */}
        <div className="mb-12">
          {/* Mobile Toggle Button */}
          <div className="lg:hidden max-w-6xl mx-auto mb-8">
            <button
              onClick={() => setShowMobileCurrent(!showMobileCurrent)}
              className="w-full bg-gradient-to-r from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
            >
              <span className="text-lg font-bold text-primary-900">
                Comisión Directiva Período 2026-2028
              </span>
              {showMobileCurrent ? (
                <ChevronUp className="w-6 h-6 text-primary-900 group-hover:text-primary-700 transition-colors" />
              ) : (
                <ChevronDown className="w-6 h-6 text-primary-900 group-hover:text-primary-700 transition-colors" />
              )}
            </button>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block max-w-6xl mx-auto mb-8">
            <div className="bg-primary-600 text-white px-6 py-4 rounded-t-xl">
              <h3 className="text-2xl font-bold">Período 2026-2028</h3>
            </div>
          </div>

          {/* Content - Always visible on desktop, toggleable on mobile */}
          <div className={`${!showMobileCurrent ? 'hidden lg:block' : 'block'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {currentAuthorities.map((authority, index) => (
              <div
                key={index}
                onClick={() => handleAuthorityClick(index)}
                className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 cursor-pointer ${expandedAuthority === index ? 'authority-expanded' : ''}`}
              >
                {/* Imagen de fondo */}
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                  <img
                    src={authority.image}
                    alt={authority.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Overlay con info - se expande al hacer hover o click */}
                <div className={`absolute inset-x-0 bottom-0 bg-primary-900/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${expandedAuthority === index ? 'h-48' : 'h-24'} md:h-24 md:group-hover:h-48`}>
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    {/* Nombre y cargo - siempre visible */}
                    <h3 className="text-lg font-bold mb-0.5 drop-shadow-lg">
                      {authority.name}
                    </h3>
                    <div className="text-primary-200 font-medium text-sm mb-2">
                      {authority.position}
                    </div>

                    {/* Descripción - visible solo en hover o expanded */}
                    <p className={`text-xs text-gray-100 leading-relaxed overflow-hidden transition-all duration-300 delay-75 ${expandedAuthority === index ? 'max-h-32' : 'max-h-0'} md:max-h-0 md:group-hover:max-h-32`}>
                      {authority.specialty}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vocales actuales - Toggle Button */}
          <div className="max-w-6xl mx-auto mb-8">
            <button
              onClick={() => setShowVocales(!showVocales)}
              className="w-full bg-gradient-to-r from-primary-100 to-primary-200 hover:from-primary-200 hover:to-primary-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
            >
              <span className="text-lg font-bold text-primary-900">
                Vocales (6 miembros)
              </span>
              {showVocales ? (
                <ChevronUp className="w-6 h-6 text-primary-900 group-hover:text-primary-700 transition-colors" />
              ) : (
                <ChevronDown className="w-6 h-6 text-primary-900 group-hover:text-primary-700 transition-colors" />
              )}
            </button>
          </div>

          {/* Vocales Content */}
          {showVocales && (
            <div className="max-w-6xl mx-auto mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentVocales.map((vocal, index) => (
                  <div
                    key={index}
                    onClick={() => handleVocalClick(index)}
                    className={`group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 cursor-pointer ${expandedVocal === index ? 'vocal-expanded' : ''}`}
                  >
                    {/* Imagen de fondo */}
                    <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
                      <img
                        src={vocal.image}
                        alt={vocal.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Overlay con info - se expande al hacer hover o click */}
                    <div className={`absolute inset-x-0 bottom-0 bg-primary-900/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${expandedVocal === index ? 'h-40' : 'h-24'} md:h-24 md:group-hover:h-40`}>
                      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                        {/* Nombre y cargo - siempre visible */}
                        <h4 className="text-base font-bold mb-0.5 drop-shadow-lg">
                          {vocal.name}
                        </h4>
                        <div className="text-primary-200 font-medium text-sm mb-2">
                          {vocal.position}
                        </div>

                        {/* Descripción - visible solo en hover o expanded */}
                        <p className={`text-xs text-gray-100 leading-relaxed overflow-hidden transition-all duration-300 delay-75 ${expandedVocal === index ? 'max-h-24' : 'max-h-0'} md:max-h-0 md:group-hover:max-h-24`}>
                          {vocal.specialty}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

            {/* Órgano de fiscalización 2026-2028 */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-md p-6 border border-primary-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Órgano de Fiscalización 2026-2028</h4>
                <div className="flex flex-wrap gap-4">
                  {fiscalizacion2026.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle button for previous board */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={() => setShowPrevious(!showPrevious)}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
          >
            <span className="text-lg font-bold text-gray-700">
              Comisión Directiva Período 2024-2026
            </span>
            {showPrevious ? (
              <ChevronUp className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            )}
          </button>
        </div>

        {/* Previous Board - Período 2024-2026 */}
        {showPrevious && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {previousAuthorities.map((authority, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200"
                  >
                    <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {authority.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{authority.name}</h4>
                      <p className="text-secondary-600 font-semibold text-sm">{authority.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vocales anteriores */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Vocales</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {previousVocales.map((vocal, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {vocal.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{vocal.name}</p>
                        <p className="text-xs text-gray-600">{vocal.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Órgano de fiscalización */}
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Órgano de Fiscalización 2024-2026</h4>
                <div className="flex flex-wrap gap-4">
                  {fiscalizacion2024.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toggle button for 2021-2023 board */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={() => setShow2123(!show2123)}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
          >
            <span className="text-lg font-bold text-gray-700">
              Comisión Directiva Período 2021-2023
            </span>
            {show2123 ? (
              <ChevronUp className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            )}
          </button>
        </div>

        {/* Board 2021-2023 */}
        {show2123 && (
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {authorities2123.map((authority, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200"
                  >
                    <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {authority.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{authority.name}</h4>
                      <p className="text-secondary-600 font-semibold text-sm">{authority.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vocales 2021-2023 */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Vocales</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {vocales2123.map((vocal, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {vocal.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{vocal.name}</p>
                        <p className="text-xs text-gray-600">{vocal.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Órgano de fiscalización 2021-2023 */}
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Órgano de Fiscalización 2021-2023</h4>
                <div className="flex flex-wrap gap-4">
                  {fiscalizacion2123.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Toggle button for 2019-2021 board */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={() => setShow1921(!show1921)}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 px-6 py-4 rounded-xl transition-all flex items-center justify-between group shadow-md"
          >
            <span className="text-lg font-bold text-gray-700">
              Comisión Directiva Período 2019-2021
            </span>
            {show1921 ? (
              <ChevronUp className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            ) : (
              <ChevronDown className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors" />
            )}
          </button>
        </div>

        {/* Board 2019-2021 */}
        {show1921 && (
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {authorities1921.map((authority, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200"
                  >
                    <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {authority.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{authority.name}</h4>
                      <p className="text-secondary-600 font-semibold text-sm">{authority.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vocales 2019-2021 */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Vocales</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {vocales1921.map((vocal, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {vocal.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{vocal.name}</p>
                        <p className="text-xs text-gray-600">{vocal.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Órgano de fiscalización 2019-2021 */}
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Órgano de Fiscalización 2019-2021</h4>
                <div className="flex flex-wrap gap-4">
                  {fiscalizacion1921.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{member.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-primary-50 rounded-2xl p-8 border-l-4 border-primary-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Compromiso Institucional
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La Comisión Directiva de SAMPRE trabaja de manera continua para promover los más altos
            estándares en medicina prehospitalaria, coordinando actividades educativas, eventos científicos
            y colaboraciones institucionales en todo el territorio argentino.
          </p>
        </div>
      </div>
    </section>
  )
}
