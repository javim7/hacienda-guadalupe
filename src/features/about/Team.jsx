// src/features/about/Team.jsx

export default function Team() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Nuestro Equipo
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed">
            <p className="mb-6">
              Bajo la dirección de Roberto Mombiela Bruni, nuestro equipo combina la sabiduría 
              tradicional de generaciones de agricultores con un enfoque moderno hacia la 
              sostenibilidad y la innovación.
            </p>
            
            <p className="mb-6">
              Cada miembro de nuestro equipo comparte la pasión por la excelencia agrícola y 
              el compromiso con prácticas responsables que honran tanto la tierra como las 
              comunidades que servimos.
            </p>
            
            <p className="mb-6">
              Trabajamos juntos para mantener viva la tradición familiar mientras exploramos 
              nuevas fronteras en la agricultura sostenible, asegurando que Hacienda Guadalupe 
              continúe siendo un referente de calidad y responsabilidad ambiental en Guatemala.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
