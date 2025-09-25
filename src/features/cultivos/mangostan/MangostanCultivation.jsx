// src/features/cultivos/mangostan/MangostanCultivation.jsx

export default function MangostanCultivation() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Nuestro cultivo
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">
              La plantación tiene ya 4 años, y seguimos estableciendo nuevas áreas. Estimamos 
              que comenzaremos a cosechar frutos hacia el quinto año.
            </p>
            
            <p className="mb-6">
              En verano, aplicamos riego día por medio con microaspersión, ya que el árbol 
              disfruta de abundante agua.
            </p>
            
            <p className="mb-6">
              Gracias a nuestra experiencia, proyectamos obtener fruta de primera calidad.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/cafe.MP4"
                controls
                className="w-full h-full object-cover"
                title="Cultivo de mangostán en Hacienda Guadalupe"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Proceso de cultivo y cuidado del mangostán en Hacienda Guadalupe
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
