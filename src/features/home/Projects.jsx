// src/features/home/Projects.jsx
import Link from 'next/link'

export default function Projects({
  title = 'Proyectos Extra',
  text = `En Hacienda Guadalupe vamos más allá de los cultivos tradicionales con proyectos innovadores y sostenibles. Producimos miel de alta calidad con nuestras colmenas que también polinizan nuestros cultivos. Cultivamos pitahaya, una fruta exótica de sabor único y propiedades nutricionales excepcionales. Desarrollamos microalgas Chlorella como superalimento y bioinsumo natural. Y cultivamos bambú, un recurso renovable de rápido crecimiento que contribuye a la captura de carbono y agricultura regenerativa.`,
  ctaText = 'Sobre Nuestros Proyectos',
  ctaHref = '/projects',
  bgColorVar = 'var(--muted)' // usa la variable --muted (beige) definida en globals.css
}) {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: bgColorVar }}
      aria-labelledby="projects-section-title"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-52">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: titulo grande */}
          <div className="order-1 md:order-1">
            <h2 id="projects-section-title" className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>
          </div>

          {/* RIGHT: texto + CTA */}
          <div className="order-2 md:order-2">
            <div className="max-w-[680px]">
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
                {text}
              </p>

              <div>
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
      </div>
    </section>
  )
}

