// src/features/home/Context.jsx
import Link from 'next/link'

export default function Crops({
  title = 'More than Just Milk',
  text = `While Positively Grown is a dairy farm, we also raise pastured beef and eggs. Additionally, we are curating an ever-growing selection of other products for you to purchase. We work with other local farmers to be able to provide you with raw unfiltered honey and fresh homemade bread. Just like great great grandma used to make!`,
  ctaText = 'About Our Partners',
  ctaHref = '/partners',
  bgColorVar = 'var(--muted)' // usa la variable --muted (beige) definida en globals.css
}) {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: bgColorVar }}
      aria-labelledby="split-section-title"
    >
      <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-52">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT: titulo grande */}
          <div className="order-1 md:order-1">
            <h2 id="split-section-title" className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
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
