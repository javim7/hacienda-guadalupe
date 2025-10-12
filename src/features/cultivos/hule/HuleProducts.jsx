// src/features/cultivos/hule/HuleVideo.jsx
import { useState } from 'react'
import Image from 'next/image'

export default function HuleVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Látex y Chipa de primera
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">
              En nuestra hacienda recolectamos látex y chipa de primera:
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Látex:
              </h3>
              <p className="mb-4">
                es el líquido lechoso que fluye del árbol tras la incisión. Es la materia prima 
                más fina, utilizada en productos que requieren alta pureza y elasticidad, como 
                guantes médicos, globos, calzado y artículos delicados de caucho.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Chipa de primera:
              </h3>
              <p className="mb-4">
                es la transformación de látex liquido a sólido, obtenida mediante un proceso de coagulación con ácido fórmico.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-900">
              <video
                id="hule-video"
                src="/videos/huleFly3.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Proceso de extracción de hule - Hacienda Guadalupe"
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
                    const video = document.getElementById('hule-video')
                    video?.play()
                  }}
                >
                  <Image
                    src="/images/Hule/hulePoster.jpeg"
                    alt="Vista previa del video de hule"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1000px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    quality={85}
                    priority
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
              Video: Plantación en producción
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
