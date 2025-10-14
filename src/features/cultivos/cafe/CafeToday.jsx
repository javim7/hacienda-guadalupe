// src/features/cultivos/cafe/CafeToday.jsx
import { useState, useRef } from 'react'

export default function CafeToday() {
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
            Nuestro café hoy
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">
              Actualmente cultivamos café robusta, trabajando con semilla seleccionada con 
              más de 30 años de desarrollo genético proveniente de Finca Santa Augustina y con robusta 
              tropical.
            </p>
            
            <p className="mb-6">
              Nuestra finca se ubica a 280 metros sobre el nivel del mar, con una temperatura 
              promedio de 32 °C. Aquí el clima nos presenta dos realidades muy marcadas:
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Invierno lluvioso:
              </h3>
              <p className="mb-4">
                con precipitaciones que van de 2,000 a 2,500 mm anuales, concentrados en esta estación.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Verano muy seco:
              </h3>
              <p className="mb-4">
                prácticamente sin lluvias, lo que nos ha llevado a implementar un sistema de riego por goteo.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <video
                ref={videoRef}
                id="cafe-video"
                className="w-full h-full object-cover"
                controls={isPlaying}
                preload="none"                           // ⬅️ don't fetch bytes until user interacts
                poster="/images/Cafe/cafePoster.jpeg" // ⬅️ native poster shown instantly
                title="Plantación de café en Hacienda Guadalupe"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/cafe2.mp4" type="video/mp4" />
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

            <p className="text-sm text-gray-600 mt-4 italic">Video: Plantación de café robusta en Hacienda Guadalupe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
