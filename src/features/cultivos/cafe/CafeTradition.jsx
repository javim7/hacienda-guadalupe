// src/features/cultivos/cafe/CafeTradition.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function CafeTradition() {
  const t = useTranslations('cafe.tradition')
  
  return (
    <section className="w-full -mb-px">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[78vh]">
        {/* LEFT: Text Content */}
        <div className="order-1 md:order-1 flex items-start md:items-center">
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
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="order-2 md:order-2">
          <div className="w-full h-56 sm:h-72 md:h-full relative overflow-hidden bg-gray-200">
            <Image
              src="/images/Cafe/cafe2.JPG"
              alt={t('imageAlt')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
