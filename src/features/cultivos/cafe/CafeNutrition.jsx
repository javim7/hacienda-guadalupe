// src/features/cultivos/cafe/CafeNutrition.jsx
import Image from 'next/image'

export default function CafeNutrition() {
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Image */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/cafe3.jpg"
              alt="Sistema de nutrición intensiva del café en Hacienda Guadalupe"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="order-1 md:order-2 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Nutrición intensiva todo el año
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                El sistema de riego no solo asegura agua en verano, también nos permite 
                fertilizar de manera estratégica:
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  En verano:
                </h3>
                <p className="mb-4">
                  aplicamos fertilización semanal en microdosis, lo que mantiene el crecimiento activo.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Además:
                </h3>
                <p className="mb-4">
                  una vez al mes aplicamos fertilización boleada, asegurando que la planta 
                  tenga suficiente alimento durante todo el año.
                </p>
              </div>
              
              <p className="mb-4">
                De esta forma, nuestro café nunca deja de recibir nutrientes, lo que garantiza 
                una producción constante y de alta calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
