// src/features/cultivos/hule/HuleVideo.jsx

export default function HuleVideo() {
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Látex y Chipa de primera
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">
              En nuestra finca recolectamos tanto látex de primera como chipa de primera:
            </p>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Látex de primera:
              </h3>
              <p className="mb-4">
                es el líquido lechoso que fluye del árbol tras la incisión. Es la materia prima 
                más fina, utilizada en productos que requieren alta pureza y elasticidad, como 
                guantes médicos, globos, calzado y artículos delicados de caucho.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Chipa de primera:
              </h3>
              <p className="mb-4">
                son los coágulos o sólidos del látex que se forman al contacto con el aire o 
                en los recipientes de recolección. Es altamente valorada para la fabricación 
                de neumáticos y productos industriales que necesitan mayor resistencia y durabilidad.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/huleFly2.mp4"
                controls
                className="w-full h-full object-cover"
                title="Proceso de extracción de hule - Hacienda Guadalupe"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Proceso de extracción de látex de hule natural
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
