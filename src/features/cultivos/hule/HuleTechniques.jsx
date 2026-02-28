// src/features/cultivos/hule/HuleTechniques.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function HuleTechniques() {
  const t = useTranslations('hule.techniques')

  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--brand-corinto-light)' }}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Image */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-300">
            <Image
              src="/images/Hule/hule3.jpeg"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              quality={85}
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT: Text Content */}
        <div className="order-1 md:order-2 flex items-start md:items-center">
          <div className="w-full px-6 py-8 md:px-20 md:py-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              {t('title')}
            </h2>

            <div className="text-base md:text-lg text-white leading-relaxed max-w-[620px]">
              <p className="mb-4">
                {t('text1')}
              </p>
              
              <p className="mb-4">
                {t('text2')}
              </p>

              <ul className="list-disc list-inside space-y-2 mb-4 text-white">
                <li>{t('step1')}</li>
                <li>{t('step2')}</li>
                <li>{t('step3')}</li>
              </ul>
              
              <p className="mb-4">
                {t('text3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
