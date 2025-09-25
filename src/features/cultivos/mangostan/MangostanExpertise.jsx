// src/features/cultivos/mangostan/MangostanExpertise.jsx
import Image from 'next/image'

export default function MangostanExpertise() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Asesoría especializada
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <p className="mb-4">
                Contamos con el apoyo del ingeniero <strong>Víctor Hugo Diaz Fuentes</strong>, 
                investigador del Instituto Nacional de Investigaciones Forestales Agrícolas y 
                Pecuarios (INIFAP), especialista mexicano en mangostán.
              </p>
              
              <p className="mb-4">
                Es autor del libro <em>"El mangostán: historia, botánica, cultivo y usos"</em> 
                dedicado a esta fruta y con años de investigación en su manejo, quien nos asesora 
                en cada etapa del proyecto.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/mangostan3.JPG"
              alt="Asesoría especializada en mangostán con el Ing. Víctor Hugo Diaz Fuentes"
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
