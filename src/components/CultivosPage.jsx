// src/components/CultivosPage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import CropPreview from '@/features/cultivos/CropPreview'

export default function Cultivos() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.crops.title')} description={t('meta.crops.description')} />
      <SectionHeader title={t('crops.sectionHeader')} />
      
      <CropPreview
        title={t('crops.hule.title')}
        description={t('crops.hule.description')}
        benefits={t.raw('crops.hule.benefits')}
        imageSrc="/images/Hule/huleMainLarge.jpeg"
        imageAlt={t('crops.hule.imageAlt')}
        linkHref="/cultivos/hule"
        reverse={false}
        priority={true}
      />

      <CropPreview
        title={t('crops.cafe.title')}
        description={t('crops.cafe.description')}
        benefits={t.raw('crops.cafe.benefits')}
        imageSrc="/images/Cafe/cafe.JPG"
        imageAlt={t('crops.cafe.imageAlt')}
        linkHref="/cultivos/cafe"
        reverse={true}
        backgroundColor="red"
      />

      <CropPreview
        title={t('crops.mangostan.title')}
        description={t('crops.mangostan.description')}
        benefits={t.raw('crops.mangostan.benefits')}
        imageSrc="/images/Mangostan/mangostanMainLarge.jpeg"
        imageAlt={t('crops.mangostan.imageAlt')}
        linkHref="/cultivos/mangostan"
        reverse={false}
      />
    </>
  )
}
