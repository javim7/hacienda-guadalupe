// src/features/cultivos/cafe/CafeSystem.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function CafeSystem() {
  const t = useTranslations('cafe.system')
  
  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              {t('title')}
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <p className="mb-4">
                {t('text1')}
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-4 text-white">
                <li><strong>{t('plantDistance')}</strong> {t('plantDistanceValue')}</li>
                <li><strong>{t('rowDistance')}</strong> {t('rowDistanceValue')}</li>
                <li><strong>{t('irrigation')}</strong></li>
                <li><strong>{t('axes')}</strong> {t('axesValue')}</li>
              </ul>
          
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Cafe/cafe4.JPG"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              quality={85}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
