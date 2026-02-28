// src/components/HulePage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import HuleFarm from '@/features/cultivos/hule/HuleFarm'
import HuleHistory from '@/features/cultivos/hule/HuleHistory'
import HuleProducts from '@/features/cultivos/hule/HuleProducts'
import HuleTechniques from '@/features/cultivos/hule/HuleTechniques'

export default function Hule() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.hule.title')} description={t('meta.hule.description')} />
      <SectionHeader title={t('hule.sectionHeader')} />
      <HuleFarm />
      <HuleHistory />
      <HuleProducts />
      <HuleTechniques />
    </>
  )
}
