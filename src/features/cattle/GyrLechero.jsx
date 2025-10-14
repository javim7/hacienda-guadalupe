// src/features/cattle/GyrLechero.jsx
import { useState, useRef } from 'react'

export default function GyrLechero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayClick = () => {
    const el = videoRef.current
    if (!el) return
    el.play()
  }

  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Gyr Lechero
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              El ganado Gyr lechero representa la excelencia en la producción láctea tropical. 
              Esta raza originaria de la India se ha adaptado perfectamente a las condiciones 
              climáticas de Guatemala, demostrando una resistencia excepcional al calor y 
              una capacidad de producción láctea superior.
            </p>
            <p className="mb-6">
              Nuestro programa de mejoramiento genético se enfoca en seleccionar animales 
              con características óptimas para la producción de leche, incluyendo conformación 
              corporal ideal, capacidad de adaptación al clima tropical y resistencia a 
              enfermedades comunes en la región.
            </p>
            <p className="mb-8">
              A través de años de experiencia y participación en ferias ganaderas, hemos 
              desarrollado una genética reconocida por su calidad y productividad, 
              contribuyendo al desarrollo de la ganadería lechera en Guatemala.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <video
                ref={videoRef}
                id="gyr-video"
                className="w-full h-full object-cover"
                controls={isPlaying}
                preload="none"                           // ⬅️ don't fetch bytes until user interacts
                poster="/images/Ganado/ganadoPoster.jpeg" // ⬅️ native poster shown instantly
                title="Ganado Gyr Lechero - Hacienda Guadalupe"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/ganado.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>

              {/* Overlay play button (no extra image request needed) */}
              {!isPlaying && (
                <button
                  type="button"
                  aria-label="Reproducir video"
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                >
                  <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-xl transition-transform hover:scale-110">
                    <svg className="w-8 h-8 md:w-10 md:h-10 ml-1 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>

            <p className="text-sm text-gray-600 mt-4 italic">Video: Ganado en pastoreo</p>
          </div>
        </div>
      </div>
    </section>
  )
}