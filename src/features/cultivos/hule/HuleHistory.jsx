// src/features/cultivos/hule/HuleProcess.jsx
import Image from 'next/image'

export default function HuleProcess() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Historia del hule en Guatemala
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              El hule natural fue introducido en Guatemala en la década de 1940 y, desde entonces, 
              se convirtió en un cultivo estratégico para el país. Hoy existen más de 60,000 
              hectáreas y más de 30 millones de árboles en producción.
            </p>
            
            <p className="mb-6">
              Guatemala se ha posicionado como uno de los principales productores de hule en 
              Latinoamérica, gracias a su clima y a sus suelos fértiles que permiten obtener 
              materia prima de excelente calidad.
            </p>
          </div>

          {/* Process Image */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hule.JPG"
                alt="Proceso de cultivo de hule en Hacienda Guadalupe"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Árboles de hule en diferentes etapas de crecimiento
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
