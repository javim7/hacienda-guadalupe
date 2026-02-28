// src/features/about/Images.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Images() {
  const t = useTranslations('about.gallery')

  const imageRoutes = [
    '/images/Hule/hule3.jpeg',
    '/images/Ganado/vaca.JPG',
    '/images/Ganado/vaca2.JPG',
    '/images/Hule/hule2.jpeg',
  ]

  return (
    <section className="w-full -mb-px">
      <div className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1400px]">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12 text-center text-gray-900">
            {t('title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {imageRoutes.map((imageSrc, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-200">
                <Image
                  src={imageSrc}
                  alt={t('imageAlt', { number: index + 1 })}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="transition-transform duration-300 hover:scale-105"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
