// src/features/about/Team.jsx
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Team() {
  const t = useTranslations('about.team')

  return (
    <section className="w-full -mb-px" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="w-full py-16 md:py-20">
        <div className="mx-auto w-full px-6 md:px-8 lg:px-16 max-w-[1000px] text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900">
            {t('title')}
          </h2>

          <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
            <p className="mb-6">{t('text1')}</p>
            <p className="mb-6">{t('text2')}</p>
            <p className="mb-6">{t('text3')}</p>
            <p className="mb-6">{t('text4')}</p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/images/Otras/team.JPG"
                alt={t('imageAlt')}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1000px"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-105"
                quality={85}
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">{t('caption')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
