// src/features/cattle/GyrLechero.jsx
import { useState } from 'react'
import Image from 'next/image'

export default function GyrLechero() {
  const [isPlaying, setIsPlaying] = useState(false)
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
                id="gyr-video"
                src="/videos/ganado.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Ganado Gyr Lechero - Hacienda Guadalupe"
                playsInline
                onPlay={() => setIsPlaying(true)}
              >
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Optimized Poster Image Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => {
                    const video = document.getElementById('gyr-video')
                    video?.play()
                  }}
                >
                  <Image
                    src="/images/Ganado/ganadoPoster.jpeg"
                    alt="Vista previa del video de ganado Gyr"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1000px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    quality={85}
                    loading="lazy"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all group-hover:scale-110">
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 ml-1 text-gray-900" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Ganado en pastoreo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
