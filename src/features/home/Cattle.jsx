// src/features/home/Cattle.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Cattle({
  title = 'Nuestro Ganado',
  text = `Miguel Roberto Mombiela Bruni lleva más de 30 años trabajando con ganado Gyr lechero, dedicándose especialmente a la genética. Actualmente, implementamos el pastoreo racional Voisin (PRV), un sistema que optimiza el uso del pasto, mejora la salud del suelo y del ganado, y aumenta la productividad de manera sostenible. Además, estamos incorporando la raza Boran, reconocida por su adaptación a climas cálidos, ciclo de parto eficiente y menor requerimiento de alimento.`,
  ctaText = 'Sobre Nuestro Ganado',
  ctaHref = '/cattle',
  imageSrc = '/images/vaca.JPG',
  imageAlt = 'Ganado en Hacienda Guadalupe'
}) {
  return (
    <section className="w-full">
      {/*
        md:min-h-[72vh] -> asegura presencia en desktop pero permite que la sección crezca si el contenido es más alto,
        items-start para que en mobile el contenido se apile y empuje hacia abajo; en md la columna de texto se centra verticalmente.
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: imagen (reversed order compared to About section) */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>

        {/* RIGHT: en mobile items-start (top), en md se centra verticalmente */}
        <div className="order-1 md:order-2 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              {title}
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              {text.split('\n').map((p, i) => (
                <p key={i} className="mb-4">{p}</p>
              ))}
            </div>

            <div className="mt-6 md:mt-8">
              <Link
                href={ctaHref}
                className="inline-block px-6 py-3 rounded-md shadow-sm transition"
                style={{ backgroundColor: 'var(--brand-corinto-light)', color: 'var(--brand-contrast)' }}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

