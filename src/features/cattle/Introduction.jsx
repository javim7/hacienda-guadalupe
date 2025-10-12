// src/features/cattle/GYR.jsx
import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Introducción
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
              El Señor Roberto Mombiela de León inició la crianza de ganado Gyr en 1978, y en la década de los 90, orientó su selección hacia la línea lechera. A lo largo de estos años, hemos participado en múltiples ferias, obteniendo numerosos premios gracias a la selección y al avance genético de nuestro ganado.
              </p>
              
              <p className="mb-4">
              Actualmente, estamos transformando nuestra ganadería hacia un modelo regenerativo. 
              En este sistema, utilizamos el pasto de manera eficiente, cuidamos la vida del suelo y su entorno, 
              y trabajamos buscando un tipo de ganado de bajo mantenimiento, apoyandonos en las razas Boran y Mashona, originarias de África, que se adaptan excelentemente a nuestro clima y condiciones.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Ganado/vacaMainLarge.jpeg"
              alt="Ganado Gyr lechero en Hacienda Guadalupe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
