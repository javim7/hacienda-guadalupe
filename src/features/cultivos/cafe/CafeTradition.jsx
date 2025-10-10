// src/features/cultivos/cafe/CafeTradition.jsx
import Image from 'next/image'

export default function CafeTradition() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Una tradición que evoluciona
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                El café siempre ha estado presente en la historia de nuestra familia. 
                Por generaciones cultivamos café de altura, manteniendo viva una tradición 
                que marcó a toda Guatemala.
              </p>
              
              <p className="mb-4">
                Sin embargo, en Hacienda Guadalupe hemos decidido dar un paso adelante: 
                dejar atrás los métodos tradicionales y apostar por nuevas técnicas más 
                intensivas y eficientes.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Cafe/cafe2.JPG"
              alt="Tradición cafetalera en Hacienda Guadalupe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
