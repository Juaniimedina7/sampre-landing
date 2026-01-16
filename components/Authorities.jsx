import { Users } from 'lucide-react'
import { authorityImages, getImageUrl } from '@/lib/images'

export default function Authorities() {
  const authorities = [
    {
      name: 'Dr. William Medina',
      position: 'Presidente',
      specialty: 'Cirujano - Emergentologo',
      image: getImageUrl(authorityImages.presidente),
    },
    {
      name: 'Dra. María Fernanda López',
      position: 'Vicepresidenta',
      specialty: 'Atención Prehospitalaria',
      image: getImageUrl(authorityImages.vicepresidenta),
    },
    {
      name: 'Dr. Roberto Martínez',
      position: 'Secretario General',
      specialty: 'Trauma Prehospitalario',
      image: getImageUrl(authorityImages.secretario),
    },
    {
      name: 'Dra. Ana Patricia Gómez',
      position: 'Tesorera',
      specialty: 'Emergencias Cardiovasculares',
      image: getImageUrl(authorityImages.tesorera),
    },
    {
      name: 'Dr. Carlos Alberto Fernández',
      position: 'Vocal Titular',
      specialty: 'Capacitación y Docencia',
      image: getImageUrl(authorityImages.vocal1),
    },
    {
      name: 'Dra. Silvia Beatriz Ramírez',
      position: 'Vocal Titular',
      specialty: 'Investigación Científica',
      image: getImageUrl(authorityImages.vocal2),
    },
  ]

  return (
    <section id="autoridades" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Comisión Directiva</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Autoridades
          </h2>
          <p className="text-lg text-gray-600">
            Profesionales comprometidos con la excelencia en medicina prehospitalaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {authorities.map((authority, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
            >
              <div className="aspect-square bg-gray-200 overflow-hidden">
                <img
                  src={authority.image}
                  alt={authority.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {authority.name}
                </h3>
                <div className="text-primary-600 font-semibold mb-2">
                  {authority.position}
                </div>
                <p className="text-gray-600 text-sm">
                  {authority.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Board Info */}
        <div className="mt-16 max-w-4xl mx-auto bg-primary-50 rounded-2xl p-8 border-l-4 border-primary-600">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Período 2024-2026
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
