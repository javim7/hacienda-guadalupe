// src/features/home/Summary.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function About({
  title = 'Hacienda Guadalupe',
  text = `Our family farm is committed to raising our animals with care and respect to produce the healthiest, safest raw milk for our community here in Hopkins, MI, and throughout Southwest Michigan.

Our herd of 38 jersey cows is raised on pasture, with as much of their food as possible grown on the farm. They aren’t given vaccinations or growth hormones and on the rare occasion when we need to give a cow antibiotics, their milk is not shared with our customers. Our milk is tested weekly and our equipment is sanitized four times each day, giving you confidence in the safety of our raw milk.`,
  ctaText = 'Sobre Nosotros',
  ctaHref = '/about',
  imageSrc = '/images/feeding.jpg',
  imageAlt = 'Persona alimentando un ternero'
}) {
  return (
    <section className="w-full">
      {/*
        md:min-h-[72vh] -> asegura presencia en desktop pero permite que la sección crezca si el contenido es más alto,
        items-start para que en mobile el contenido se apile y empuje hacia abajo; en md la columna de texto se centra verticalmente.
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: en mobile items-start (top), en md se centra verticalmente */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
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

        {/* RIGHT: imagen
            - mobile: altura fija razonable (apaisada) para no ser gigante;
            - md+: h-full para ocupar la altura que genere la columna izquierda (gracias a md:min-h y al contenido real)
            - overflow-hidden para que no se salga.
        */}
        <div className="order-2 md:order-2">
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
      </div>
    </section>
  )
}
