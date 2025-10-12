// src/features/cattle/PastoreoVoisin.jsx
import { useState } from 'react'
import Image from 'next/image'

export default function PastoreoVoisin() {
  const [isPlaying, setIsPlaying] = useState(false)
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
                id="voisin-video"
                src="/videos/voison2.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
                title="Pastoreo Racional Voisin - Hacienda Guadalupe"
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
                    const video = document.getElementById('voisin-video')
                    video?.play()
                  }}
                >
                  <Image
                    src="/images/Ganado/ganadoPoster2.jpeg"
                    alt="Vista previa del video de Pastoreo Voisin"
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
              Video: Potreros de Hacienda Guadalupe
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
