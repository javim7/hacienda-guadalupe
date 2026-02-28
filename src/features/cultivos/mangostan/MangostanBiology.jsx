// src/features/cultivos/mangostan/MangostanBiology.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function MangostanBiology() {
  const t = useTranslations('mangostan.biology')
  
  return (
    <section className="w-full -mb-px bg-white">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Image */}
        <div className="order-2 md:order-1">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Mangostan/mangostan2.jpeg"
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
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900">
              {t('title')}
            </h2>

            <div className="text-base md:text-lg text-gray-800 leading-relaxed max-w-[620px]">
              <p className="mb-4">
                {t('text1')}
              </p>
              
              <p className="mb-4">
                {t('text2')}
              </p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {t('chlorellaTitle')}
                </h3>
                <p className="mb-2">
                  {t('chlorellaIntro')}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
                  <li><strong>{t('foliar')}</strong> {t('foliarText')}</li>
                  <li><strong>{t('soil')}</strong> {t('soilText')}</li>
                  <li><strong>{t('fertilization')}</strong> {t('fertilizationText')}</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
