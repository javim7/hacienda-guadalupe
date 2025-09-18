// src/features/cattle/GyrLechero.jsx

export default function GyrLechero() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Gyr Lechero
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              El ganado Gyr lechero representa la excelencia en la producción láctea tropical. 
              Esta raza originaria de la India se ha adaptado perfectamente a las condiciones 
              climáticas de Guatemala, demostrando una resistencia excepcional al calor y 
              una capacidad de producción láctea superior.
            </p>
            
            <p className="mb-6">
              Nuestro programa de mejoramiento genético se enfoca en seleccionar animales 
              con características óptimas para la producción de leche, incluyendo conformación 
              corporal ideal, capacidad de adaptación al clima tropical y resistencia a 
              enfermedades comunes en la región.
            </p>
            
            <p className="mb-8">
              A través de años de experiencia y participación en ferias ganaderas, hemos 
              desarrollado una línea genética reconocida por su calidad y productividad, 
              contribuyendo al desarrollo de la ganadería lechera en Guatemala.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/gyr.MP4"
                controls
                className="w-full h-full object-cover"
                title="Ganado Gyr Lechero - Hacienda Guadalupe"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Nuestro ganado Gyr lechero en acción
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
