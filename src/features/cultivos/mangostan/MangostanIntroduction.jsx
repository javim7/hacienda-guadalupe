// src/features/cultivos/mangostan/MangostanIntroduction.jsx
import Image from 'next/image'

export default function MangostanIntroduction() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Una fruta exótica, nueva pero prometedora
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                El mangostán es un proyecto reciente en Hacienda Guadalupe que nos cautivó por 
                su sabor único y sus múltiples beneficios. Esta fruta tropical es reconocida por 
                ser rica en antioxidantes, en especial xantonas, que le confieren propiedades 
                antiinflamatorias, antioxidantes, e incluso potenciales efectos antidiabéticos 
                y anticancerígenos.
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Beneficios de la cáscara
                </h3>
                <p className="mb-4">
                  La cáscara del mangostán también es valiosa: contiene flavonoides, taninos, 
                  antocianinas y ácidos fenólicos, compuestos con efectos antioxidantes, 
                  antimicrobianos y protectores celulares. Estos nutrientes ayudan a fortalecer 
                  el sistema inmunológico, la piel y a combatir procesos inflamatorios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Mangostan/mangostan3.jpeg"
              alt="Mangostán cultivado en Hacienda Guadalupe"
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
