// src/components/CultivosPage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import CropPreview from '@/features/cultivos/CropPreview'

export default function Cultivos() {
  return (
    <>
      <Head>
        <title>Cultivos - Hacienda Guadalupe</title>
        <meta name="description" content="Conoce nuestros cultivos principales: Hule, Café y Mangostán en Hacienda Guadalupe" />
      </Head>

      <SectionHeader title="CULTIVOS" />
      
      {/* Hule Preview */}
      <CropPreview
        title="Hule"
        description="Nuestro cultivo de hule representa una tradición de excelencia y sostenibilidad. Cultivamos hule natural de alta calidad, siguiendo prácticas responsables que respetan el medio ambiente y garantizan la pureza del producto."
        benefits={[
          "Cultivo sostenible y responsable",
          "Alta calidad y pureza natural",
          "Proceso de producción certificado",
          "Compromiso con el medio ambiente"
        ]}
        imageSrc="/images/hule.JPG"
        imageAlt="Cultivo de hule en Hacienda Guadalupe"
        linkHref="/cultivos/hule"
        reverse={false}
      />

      {/* Café Preview */}
      <CropPreview
        title="Café"
        description="Nuestro café robusta se cultiva bajo un modelo de ciclo altamente intensivo que busca eficacia y calidad. Cada grano refleja nuestro compromiso con la excelencia y la tradición cafetalera guatemalteca."
        benefits={[
          "Modelo de cultivo intensivo",
          "Alta eficiencia y calidad",
          "Tradición cafetalera guatemalteca",
          "Granos seleccionados cuidadosamente"
        ]}
        imageSrc="/images/hero.jpg"
        imageAlt="Cultivo de café en Hacienda Guadalupe"
        linkHref="/cultivos/cafe"
        reverse={true}
        backgroundColor="red"
      />

      {/* Mangostán Preview */}
      <CropPreview
        title="Mangostán"
        description="Con una tradición de cultivo de 4 años y en constante expansión, nuestro mangostán representa la excelencia en frutas tropicales. Cultivamos esta fruta exótica con técnicas tradicionales y modernas innovaciones."
        benefits={[
          "Tradición de 4 años en constante expansión",
          "Fruta tropical de alta calidad",
          "Técnicas tradicionales e innovadoras",
          "Cultivo en crecimiento sostenido"
        ]}
        imageSrc="/images/feeding.jpg"
        imageAlt="Cultivo de mangostán en Hacienda Guadalupe"
        linkHref="/cultivos/mangostan"
        reverse={false}
      />
    </>
  )
}
