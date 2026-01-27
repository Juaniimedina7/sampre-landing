'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { heroImages, getImageUrl } from '@/lib/images'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  // Imágenes de fondo relacionadas con emergencias
  const backgroundImages = heroImages.map(img => getImageUrl(img))

  // Cambiar imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              role="img"
              aria-label={heroImages[index].alt}
            />
            {/* Dark overlay para mejor legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary-900/70" />
          </div>
        ))}
      </div>

      {/* Indicadores del carousel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            SAMPRE
          </h1>

          <h2 className="text-2xl md:text-4xl text-white mb-6 drop-shadow-md">
            Sociedad Argentina de Medicina Prehospitalaria
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/95 mb-20 max-w-2xl mx-auto drop-shadow-md">
            Asociación Civil sin fines de lucro dedicada al desarrollo, perfeccionamiento y difusión de la
            Medicina de Urgencias y Emergencias prehospitalarias en todo el país.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#sobre-nosotros"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20"
            >
              Conocer más
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/95 backdrop-blur-sm text-primary-600 font-semibold rounded-lg hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
