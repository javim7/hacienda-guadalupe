// src/features/cultivos/cafe/CafeToday.jsx

export default function CafeToday() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Nuestro café hoy
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">
              Actualmente cultivamos café robusta, trabajando con semilla seleccionada con 
              más de 30 años de desarrollo genético y también con variedades de robusta 
              tropicales adaptadas a nuestras condiciones.
            </p>
            
            <p className="mb-6">
              Nuestra finca se ubica a 280 metros sobre el nivel del mar, con una temperatura 
              promedio de 32 °C. Aquí el clima nos presenta dos realidades muy marcadas:
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Invierno lluvioso:
              </h3>
              <p className="mb-4">
                con precipitaciones que van de 2,000 a 2,500 mm anuales, concentrados en esta estación.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Verano muy seco:
              </h3>
              <p className="mb-4">
                prácticamente sin lluvias, lo que nos ha llevado a implementar riego diario: 
                cada planta recibe un litro de agua al día durante una hora de riego.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/cafe.mp4"
                controls
                className="w-full h-full object-cover"
                title="Plantación de café en Hacienda Guadalupe"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Plantación completa de café robusta en Hacienda Guadalupe
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
