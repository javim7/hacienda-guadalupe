// src/features/about/Pillars.jsx
import Image from 'next/image'

export default function Pillars() {
  return (
    <section className="w-full" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Nuestros Pilares
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <div className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">
                  Mangostán
                </h3>
                <p className="mb-4">
                  Con una tradición de cultivo de 4 años y en constante expansión, 
                  nuestro mangostán representa la excelencia en frutas tropicales, 
                  cultivado con técnicas tradicionales y modernas innovaciones.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">
                  Café Robusta
                </h3>
                <p className="mb-4">
                  Cultivado bajo un modelo de ciclo altamente intensivo que busca 
                  eficacia y calidad, nuestro café robusta refleja nuestro compromiso 
                  con la excelencia en cada grano cosechado.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">
                  Proyectos de Innovación
                </h3>
                <p className="mb-4">
                  Hemos incorporado proyectos innovadores con pitahaya, bambú y chlorella, 
                  reflejando nuestro compromiso por explorar nuevas fronteras agrícolas 
                  y contribuir al desarrollo sostenible de la finca.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/hule.JPG"
              alt="Nuestros pilares agrícolas en Hacienda Guadalupe"
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
