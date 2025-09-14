// src/features/home/Hero.jsx
import Image from 'next/image'
import Link from 'next/link'

export default function Hero({
  imageSrc = '/images/vacas.JPG',
  title = 'Hacienda Guadalupe\nTradición e innovación agrícola en Guatemala',
  ctaText = 'Conoce Más Sobre Nosotros',
  ctaHref = '/about'
}) {
  return (
    <section className="w-full">
      {/* IMAGE: full-bleed + eliminar línea blanca con -mb-px */}
      <div className="w-full relative h-[38vh] sm:h-[44vh] md:h-[50vh] lg:h-[54vh] -mb-px">
        <Image
          src={imageSrc}
          alt="Hacienda hero"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* CTA BAND: menos alto y color rojo claro vía variable */}
      <div
        className="w-full py-12 md:py-16"
        style={{ backgroundColor: 'var(--brand-corinto-light)', color: 'var(--brand-contrast)' }}
      >
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px] text-center">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug mb-4">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          
          <Link
            href={ctaHref}
            className="inline-block bg-white text-[var(--brand-corinto)] px-5 py-2 rounded-md font-medium shadow-sm hover:shadow-md transition"
            aria-label={ctaText}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  )
}
