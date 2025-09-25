// src/features/cultivos/cafe/CafeSystem.jsx
import Image from 'next/image'

export default function CafeSystem() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Sistema altamente intensivo
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <p className="mb-4">
                Inspirados en las técnicas modernas de países líderes como Brasil y Nicaragua, 
                hemos implementado un sistema de siembra altamente intensivo:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-4 text-white">
                <li><strong>Distancia entre plantas:</strong> 0.65 metros.</li>
                <li><strong>Distancia entre calles:</strong> 3 metros.</li>
                <li><strong>Manejo de cada planta:</strong> se le dejan únicamente dos ejes, para optimizar su productividad y facilitar el manejo.</li>
              </ul>
              
              <p className="mb-4">
                Este modelo nos permite aprovechar al máximo cada metro cuadrado, con plantas 
                sanas, controladas y en plena producción.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/cafe4.jpg"
              alt="Sistema intensivo de cultivo de café en Hacienda Guadalupe"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
