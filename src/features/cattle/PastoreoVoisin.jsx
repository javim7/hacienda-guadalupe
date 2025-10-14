// src/features/cattle/PastoreoVoisin.jsx
import { useState, useRef } from 'react'

export default function PastoreoVoisin() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayClick = () => {
    const el = videoRef.current
    if (!el) return
    el.play()
  }
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Pastoreo de Ultra Alta Densidad (PUAD)
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              El Pastoreo de Ultra Alta Densidad (PUAD) es un sistema avanzado de manejo de pasturas que lleva los principios del pastoreo intensivo a un nivel superior. Este método se basa en concentrar un gran número de animales en pequeñas áreas por periodos muy cortos, simulando el impacto de las grandes manadas en los ecosistemas naturales.
            </p>
            
            <p className="mb-6">
              En Hacienda Guadalupe, implementamos este sistema utilizando potreros muy pequeños que son pastoreados de forma masiva durante horas. Este intenso impacto estimula un rápido rebrote de las pasturas y promueve la deposición natural de nutrientes en el suelo, creando un ciclo de fertilidad acelerado.
            </p>
            
            <p className="mb-6">
              Los beneficios del PUAD incluyen: máxima eficiencia en el uso del terreno, mejora dramática de la salud y estructura del suelo, aumento significativo de la materia orgánica, ciclos de regeneración de pastos más rápidos, y mejor condición corporal del ganado al acceder constantemente a forraje joven y nutritivo.
            </p>
            
            <p className="mb-8">
              Este sistema nos permite lograr una productividad excepcional mientras regeneramos activamente nuestros suelos, representando el futuro de la ganadería sostenible y de alto rendimiento.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <video
                ref={videoRef}
                id="voisin-video"
                className="w-full h-full object-cover"
                controls={isPlaying}
                preload="none"                           // ⬅️ don't fetch bytes until user interacts
                poster="/images/Ganado/ganadoPoster2.jpeg" // ⬅️ native poster shown instantly
                title="Pastoreo Racional Voisin - Hacienda Guadalupe"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/voison2.mp4" type="video/mp4" />
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

            <p className="text-sm text-gray-600 mt-4 italic">Video: Potreros de Hacienda Guadalupe</p>
          </div>
        </div>
      </div>
    </section>
  )
}
