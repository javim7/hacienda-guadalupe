// src/components/HomePage.jsx
import { useTranslations } from 'next-intl'
import Hero from '@/features/home/Hero'
import About from '@/features/home/About'
import Cattle from '@/features/home/Cattle'
import Crops from '@/features/home/Crops'
import Projects from '@/features/home/Projects'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <>
    <Hero
      title={t('hero.title')}
      ctaText={t('hero.cta')}
      ctaHref="/contact"
    />

    <About
      title={t('about.title')}
      text={t('about.text')}
      ctaText={t('about.cta')}
      ctaHref="/about"
      imageSrc="/images/Otras/iglesia.JPG"
      imageAlt={t('about.imageAlt')}
    />

    <Crops
      title={t('crops.title')}
      text={t('crops.text')}
      ctaText={t('crops.cta')}
      ctaHref="/crops"
    />

    <Cattle
      title={t('cattle.title')}
      text={t('cattle.text')}
      ctaText={t('cattle.cta')}
      ctaHref="/cattle"
      imageSrc="/images/Ganado/vacasLarge.jpeg"
      imageAlt={t('cattle.imageAlt')}
    />

    <Projects
      title={t('projects.title')}
      text={t('projects.text')}
      ctaText={t('projects.cta')}
      ctaHref="/projects"
    />
    </>
  )
}
