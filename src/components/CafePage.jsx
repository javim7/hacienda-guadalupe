// src/components/CafePage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import CafeTradition from '@/features/cultivos/cafe/CafeTradition'
import CafeToday from '@/features/cultivos/cafe/CafeToday'
import CafeNutrition from '@/features/cultivos/cafe/CafeNutrition'
import CafeSystem from '@/features/cultivos/cafe/CafeSystem'

export default function Cafe() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.cafe.title')} description={t('meta.cafe.description')} />
      <SectionHeader title={t('cafe.sectionHeader')} />
      <CafeTradition />
      <CafeToday />
      <CafeNutrition />
      <CafeSystem />
    </>
  )
}
