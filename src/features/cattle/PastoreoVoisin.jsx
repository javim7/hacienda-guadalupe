// src/features/cattle/PastoreoVoisin.jsx

export default function PastoreoVoisin() {
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Pastoreo Racional Voisin
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              El Pastoreo Racional Voisin (PRV) es un sistema de manejo de pasturas desarrollado 
              por el francés André Voisin en la década de 1950. Este método revolucionario se 
              basa en principios científicos que optimizan la relación entre el suelo, las plantas 
              y los animales, maximizando la productividad de manera sostenible.
            </p>
            
            <p className="mb-6">
              En Hacienda Guadalupe, implementamos este sistema dividiendo nuestros potreros 
              en pequeñas parcelas que los animales pastorean de forma intensiva pero breve. 
              Esto permite que las pasturas se regeneren completamente antes del siguiente 
              pastoreo, manteniendo la calidad nutricional y la productividad del forraje.
            </p>
            
            <p className="mb-6">
              Los beneficios del PRV incluyen: mayor producción de forraje por hectárea, 
              mejora de la estructura del suelo, reducción de la erosión, aumento de la 
              biodiversidad, y mejor salud animal debido al acceso constante a pasturas frescas 
              y nutritivas.
            </p>
            
            <p className="mb-8">
              Este sistema nos permite mantener una carga animal óptima mientras preservamos 
              la salud de nuestros suelos y pasturas, contribuyendo a una producción ganadera 
              verdaderamente sostenible y regenerativa.
            </p>
          </div>

          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                src="/videos/voison2.mp4"
                controls
                className="w-full h-full object-cover"
                title="Pastoreo Racional Voisin - Hacienda Guadalupe"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Video: Implementación del Pastoreo Racional Voisin en nuestra finca
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
