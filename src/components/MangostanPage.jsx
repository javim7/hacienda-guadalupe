// src/components/MangostanPage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import MangostanIntroduction from '@/features/cultivos/mangostan/MangostanIntroduction'
import MangostanCultivation from '@/features/cultivos/mangostan/MangostanCultivation'
import MangostanBiology from '@/features/cultivos/mangostan/MangostanBiology'
import MangostanExpertise from '@/features/cultivos/mangostan/MangostanExpertise'

export default function Mangostan() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.mangostan.title')} description={t('meta.mangostan.description')} />
      <SectionHeader title={t('mangostan.sectionHeader')} />
      <MangostanIntroduction />
      <MangostanCultivation />
      <MangostanBiology />
      <MangostanExpertise />
    </>
  )
}
