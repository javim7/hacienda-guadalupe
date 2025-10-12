// src/features/about/History.jsx
import Image from 'next/image'

export default function History() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Nuestra Historia
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
              Hacienda Guadalupe fue adquirida en 1958 por el Señor Roberto Mombiela de León, dando así continuidad a una tradición agrícola y ganadera con más de 150 años de historia.
              </p>
              
              <p className="mb-4">
                Desde entonces, esta herencia se ha transmitido con orgullo y responsabilidad a través de generaciones, manteniendo viva la pasión por la agricultura y el compromiso con la excelencia en cada cosecha.
              </p>
              
              <p className="mb-4">
              Hoy, la finca está en manos de su tercera generación, que, con el conocimiento acumulado de la familia, ha impulsado una diversificación inteligente y sostenible, consolidando nuestro legado y reafirmando nuestro compromiso con la agricultura guatemalteca.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Otras/jefes.JPG"
              alt="Tradición familiar en Hacienda Guadalupe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
