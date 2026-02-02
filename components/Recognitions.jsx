'use client'

import { useState, useEffect } from 'react'
import { Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

export default function Recognitions() {
  const [titleRef, titleInView] = useInView()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(Date.now())

  const recognitions = [
    {
      id: 1,
      name: 'Dr. Marcelo Muro',
      title: 'Director General SAME GCBA',
      description: 'Especialista en Cirugía General y Emergentología. Director del Sistema de Atención Médica de Emergencias de la Ciudad de Buenos Aires.',
      image: '/images/mentions/marcelo-muro.jpg',
      specialty: 'Emergentología',
    },
    {
      id: 2,
      name: 'Dra. Andrea Potes',
      title: 'Jefe Servicio de Guardia',
      description: 'Especialista en Cirugía General. Jefe del Servicio de Guardia del Hospital Interzonal HIGA Dr. Oscar Alende Mar del Plata.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
      specialty: 'Cirugía General',
    },
    {
      id: 3,
      name: 'SIES',
      title: 'Sistema Integrado de Emergencias Sanitarias',
      description: 'Organismo público dedicado al manejo profesional de emergencias médicas y rescate.',
      image: '/images/mentions/sies.jpeg',
      specialty: 'Organismo Público',
      isOrganization: true,
    },
    {
      id: 4,
      name: 'Dr. Jorge Neira',
      title: 'Miembro Academia Nacional de Medicina',
      description: 'Médico intensivista. Presidente del Consejo de Certificación de Profesionales Médicos de la Academia Nacional de Medicina.',
      image: '/images/mentions/jorge-niera.jpg',
      specialty: 'Terapia Intensiva',
    },
    {
      id: 5,
      name: 'Dr. Silvio Luis Aguilera',
      title: 'Socio Fundador y Ex Presidente SAMPRE',
      description: 'Especialista en Emergentología. Ex presidente de SAMPRE, SAE y ALACED. Presidente de la Fundación Emergencias.',
      image: '/images/mentions/silvio-aguilera.jpeg',
      specialty: 'Emergentología',
    },
    {
      id: 6,
      name: 'Mg. Leonardo Manino',
      title: 'Chairman Comité de Reanimación SAMPRE',
      description: 'Jefe de Guardavidas Costanera Rosario. Chairman comité médico ILS. Caballero en la orden del salvamento de la ILS.',
      image: '/images/mentions/leonardo-manino.jpg',
      specialty: 'Rescate y Reanimación',
    },
    {
      id: 7,
      name: 'TSEM. Luciano Gandini',
      title: 'Socio Fundador y Primer Presidente SAMPRE',
      description: 'Técnico Superior en Emergencias Médicas. Coordinador Académico PAR Paramédico Argentino. Facultado NAEMT PHTLS AMLS ',
      image: '/images/mentions/luciano-gandini.jpg',
      specialty: 'Emergencias Médicas',
    },
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % recognitions.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, recognitions.length, lastInteraction])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setLastInteraction(Date.now()) // Reset timer
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + recognitions.length) % recognitions.length)
    setLastInteraction(Date.now()) // Reset timer
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recognitions.length)
    setLastInteraction(Date.now()) // Reset timer
  }

  // Calculate visible cards (show 3 on desktop, 1 on mobile)
  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % recognitions.length
      cards.push(recognitions[index])
    }
    return cards
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Reconocimientos 2025</span>
          </div>
          <h2 ref={titleRef} className={`section-title ${titleInView ? 'in-view' : ''} text-3xl md:text-4xl font-bold text-gray-900 mb-4`}>
            Destacados de la Medicina Prehospitalaria
          </h2>
          <p className="text-lg text-gray-600">
            En cada congreso oficial que se realiza cada dos años, la Sociedad Argentina de Medicina Prehospitalaria honra a los profesionales y organizaciones que han contribuido significativamente al desarrollo de la medicina prehospitalaria.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-50 p-3 rounded-full shadow-lg transition-all hover:scale-110 -ml-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-primary-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-50 p-3 rounded-full shadow-lg transition-all hover:scale-110 -mr-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-primary-600" />
          </button>

          {/* Carousel Container */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Desktop: Show 3 cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {getVisibleCards().map((person) => (
                <div
                  key={person.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all border-t-4 border-primary-600 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={person.image}
                      alt={`Fotografía de ${person.name}, ${person.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        {person.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3 text-sm">
                      {person.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Show 1 card */}
            <div className="md:hidden">
              <div className="bg-white rounded-xl shadow-md border-t-4 border-primary-600 overflow-hidden">
                {/* Image */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={recognitions[currentIndex].image}
                    alt={`Fotografía de ${recognitions[currentIndex].name}, ${recognitions[currentIndex].title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {recognitions[currentIndex].specialty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {recognitions[currentIndex].name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-3 text-sm">
                    {recognitions[currentIndex].title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {recognitions[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {recognitions.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir a reconocimiento ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
