// src/components/AboutPage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import History from '@/features/about/History'
import Team from '@/features/about/Team'
import Images from '@/features/about/Images'

export default function About() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.about.title')} description={t('meta.about.description')} />
      <SectionHeader title={t('about.sectionHeader')} />
      <History />
      <Team />
      <Images />
    </>
  )
}
