'use client'

import { useState } from 'react'
import { Calendar, MapPin, ExternalLink, ChevronRight, X } from 'lucide-react'
import { pastEvents, getImageUrl } from '@/lib/images'

export default function EventsTimeline() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200" />

        {/* Events */}
        <div className="space-y-12">
          {pastEvents.map((event, index) => (
            <div
              key={event.id}
              className="relative pl-20 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Year indicator */}
              <div className="absolute left-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-4 border-white">
                <span className="text-white font-bold text-sm">{event.year}</span>
              </div>

              {/* Event card */}
              <div
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all cursor-pointer border-l-4 border-primary-600 overflow-hidden group-hover:scale-[1.02]"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3 h-48 md:h-auto">
                    <img
                      src={getImageUrl(event.image)}
                      alt={event.image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {event.title}
                      </h3>
                      <ChevronRight className="w-6 h-6 text-primary-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      Ver detalles
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal with event details */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={getImageUrl(selectedEvent.image)}
                alt={selectedEvent.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Year badge */}
              <div className="absolute bottom-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-bold">
                {selectedEvent.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedEvent.title}
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  {selectedEvent.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary-600" />
                  {selectedEvent.location}
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedEvent.description}
              </p>

              {/* Highlights */}
              {selectedEvent.highlights && selectedEvent.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Aspectos Destacados
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedEvent.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Website link */}
              {selectedEvent.website && (
                <a
                  href={selectedEvent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Visitar sitio web del evento
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
