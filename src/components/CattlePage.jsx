// src/components/CattlePage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import Introduction from '@/features/cattle/Introduction'
import GyrLechero from '@/features/cattle/GyrLechero'
import PastoreoVoisin from '@/features/cattle/PastoreoVoisin'

export default function Cattle() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.cattle.title')} description={t('meta.cattle.description')} />
      <SectionHeader title={t('cattle.sectionHeader')} />
      <Introduction />
      <GyrLechero />
      <PastoreoVoisin />
    </>
  )
}