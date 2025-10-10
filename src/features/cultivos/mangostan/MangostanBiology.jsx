// src/features/cultivos/mangostan/MangostanBiology.jsx
import Image from 'next/image'

export default function MangostanBiology() {
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Image */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Mangostan/mangostan2.jpeg"
              alt="Manejo biológico del mangostán en Hacienda Guadalupe"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="order-1 md:order-2 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Manejo biológico y nutrición natural
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                El mangostán en Hacienda Guadalupe se cuida con especial atención a la biología 
                del suelo y la salud de la planta:
              </p>
              
              <p className="mb-4">
                Aplicamos Bacillus, Trichoderma y micorrizas, que fortalecen las raíces, 
                protegen contra enfermedades y mejoran la absorción de nutrientes.
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  Con nuestra producción de microalgas Chlorella:
                </h3>
                <p className="mb-2">
                  elaboramos bioinsumos que usamos en dos vías:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
                  <li><strong>Aplicación foliar:</strong> actuando como un bioestimulante rico en aminoácidos naturales.</li>
                  <li><strong>Aplicación al suelo:</strong> que aporta nitrógeno y proteínas que nutren directamente la planta.</li>
                </ul>
              </div>
              
              <p className="mb-4">
                Este enfoque nos permite mantener un cultivo sano, fuerte y sostenible, 
                respetando tanto la planta como el ecosistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
