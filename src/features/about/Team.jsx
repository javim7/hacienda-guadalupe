// src/features/about/Team.jsx
import Image from 'next/image'

export default function Team() {
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            Nuestro Equipo
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
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

          {/* Team Image */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Otras/team.JPG"
                alt="Equipo de Hacienda Guadalupe"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              Familia Mombiela en una feria ganadera
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
