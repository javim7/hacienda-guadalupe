// src/features/cattle/GYR.jsx
import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              Introducción
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                Miguel Roberto Mombiela Bruni lleva más de 30 años trabajando con ganado Gyr lechero, 
                dedicándose especialmente a la genética. A lo largo de estos años, hemos participado 
                en múltiples ferias, obteniendo numerosos premios gracias a la calidad de nuestro ganado.
              </p>
              
              <p className="mb-4">
                Actualmente, estamos implementando el pastoreo racional Voisin (PRV), un sistema que 
                optimiza el uso del pasto, mejora la salud del suelo y del ganado, y aumenta la 
                productividad de manera sostenible. Este método permite que los animales se alimenten 
                de pasturas frescas de manera controlada, reduciendo el desgaste del terreno y 
                favoreciendo la regeneración de los pastos.
              </p>
              
              <p className="mb-4">
                Además, estamos incorporando la raza Boran, reconocida por adaptarse muy bien a 
                climas cálidos y pequeños, tener un ciclo de parto más eficiente y requerir menos 
                alimento para alcanzar su peso máximo. Para esto, hemos traído semen y embriones de 
                esta raza, y ya contamos con varias terneras Boran, con planes de seguir expandiendo 
                nuestro rebaño.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src="/images/Ganado/vacaMainLarge.jpeg"
              alt="Ganado Gyr lechero en Hacienda Guadalupe"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
