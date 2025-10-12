// src/features/cultivos/hule/HuleBenefits.jsx
import Image from 'next/image'

export default function HuleBenefits() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Image */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-300">
            <Image
              src="/images/Hule/hule3.jpeg"
              alt="Beneficios del hule natural en Hacienda Guadalupe"
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Variedades adaptadas y técnica de injerto
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <p className="mb-4">
                En Hacienda Guadalupe trabajamos con variedades de hule que hemos identificado 
                como las mejor adaptadas a nuestro clima y suelo arcilloso rojo. Siendo estas RRIM 600, PB 260 y PB 235.
              </p>
              
              <p className="mb-4">
                Nuestro proceso es completo y cuidadoso:
              </p>

              <ul className="list-disc list-inside space-y-2 mb-4 text-white">
                <li>Seleccionamos semillas resistentes a hongos como patrón.</li>
                <li>Obtenemos yemas de nuestros árboles más productivos y resistentes a enfermedades para establecer y mantener nuestro jardín clonal.</li>
                <li>Realizamos injertos para desarrollar árboles con mayor productividad.</li>
              </ul>
              
              <p className="mb-4">
                De esta manera, mantenemos un ciclo integral que va desde el semillero hasta 
                el campo, asegurando plantaciones sanas, fuertes y sostenibles a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
