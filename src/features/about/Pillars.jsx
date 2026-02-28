// src/features/about/Pillars.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Pillars() {
  const t = useTranslations('about.pillars')

  return (
    <section className="w-full" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Hule/hule.JPG"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              {t('title')}
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <div className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">{t('mangostanTitle')}</h3>
                <p className="mb-4">{t('mangostanText')}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">{t('cafeTitle')}</h3>
                <p className="mb-4">{t('cafeText')}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-white">{t('projectsTitle')}</h3>
                <p className="mb-4">{t('projectsText')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
