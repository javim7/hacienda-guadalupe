// src/features/cultivos/hule/HuleIntroduction.jsx
import Image from 'next/image'

export default function HuleIntroduction() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Hule en Hacienda Guadalupe
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                En Hacienda Guadalupe, el cultivo de hule es parte esencial de nuestra finca. 
                Nos beneficia especialmente el suelo arcilloso rojo, que es ideal para este 
                cultivo y permite que nuestros árboles crezcan fuertes y productivos.
              </p>
              
              <p className="mb-4">
                Contamos con picadores especializados exclusivamente en hule, quienes realizan 
                cortes técnicos y precisos para obtener la mayor producción sin lastimar los 
                árboles. Además, cada mes llevamos a cabo una evaluación de pica de primer nivel, 
                en la que medimos la eficiencia y calidad del trabajo de nuestros picadores.
              </p>
              
              <p className="mb-4">
                Esto asegura una recolección responsable, sostenible y con la mejor productividad 
                posible.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/hule2.JPG"
              alt="Proceso de cultivo de hule en Hacienda Guadalupe"
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
