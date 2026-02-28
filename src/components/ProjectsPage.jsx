// src/components/ProjectsPage.jsx
import { useTranslations } from 'next-intl'
import SEOHead from '@/components/SEOHead'
import SectionHeader from '@/components/SectionHeader'
import ProjectPreview from '@/features/proyectos/ProjectPreview'

export default function Projects() {
  const t = useTranslations()

  return (
    <>
      <SEOHead title={t('meta.projects.title')} description={t('meta.projects.description')} />
      <SectionHeader title={t('projects.sectionHeader')} />
      
      <ProjectPreview
        title={t('projects.honey.title')}
        description={t('projects.honey.description')}
        benefits={t.raw('projects.honey.benefits')}
        imageSrc="/images/Otras/miel.jpg"
        imageAlt={t('projects.honey.imageAlt')}
        reverse={false}
        priority={true}
      />

      <ProjectPreview
        title={t('projects.pitahaya.title')}
        description={t('projects.pitahaya.description')}
        benefits={t.raw('projects.pitahaya.benefits')}
        imageSrc="/images/Otras/pitahaya.jpeg"
        imageAlt={t('projects.pitahaya.imageAlt')}
        reverse={true}
        backgroundColor="red"
      />

      <ProjectPreview
        title={t('projects.chlorella.title')}
        description={t('projects.chlorella.description')}
        benefits={t.raw('projects.chlorella.benefits')}
        imageSrc="/images/Otras/chlorella.jpg"
        imageAlt={t('projects.chlorella.imageAlt')}
        reverse={false}
      />
    </>
  )
}
