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
          "Compromiso con el medio ambiente"
        ]}
        imageSrc="/images/Hule/huleMainLarge.jpeg"
        imageAlt="Cultivo de hule en Hacienda Guadalupe"
        linkHref="/cultivos/hule"
        reverse={false}
        priority={true}
      />

      {/* Café Preview */}
      <CropPreview
        title="Café"
        description="Nuestro café robusta se cultiva bajo un modelo intensivo que busca eficiencia y calidad. Cada grano refleja nuestro compromiso con la excelencia y la tradición cafetalera guatemalteca."
        benefits={[
          "Modelo de cultivo intensivo",
          "Alta eficiencia y calidad",
          "Tradición cafetalera guatemalteca",
          "Granos seleccionados cuidadosamente"
        ]}
        imageSrc="/images/Cafe/cafe.JPG"
        imageAlt="Cultivo de café en Hacienda Guadalupe"
        linkHref="/cultivos/cafe"
        reverse={true}
        backgroundColor="red"
      />

      {/* Mangostán Preview */}
      <CropPreview
        title="Mangostán"
        description="En Hacienda Guadalupe, cultivamos el mangostán con pasión y técnica, El mangostán representa la excelencia en frutas tropicales."
        benefits={[
          "Fruta tropical de alta calidad",
          "Cascara rica en antioxidantes",
          "Propiedades antiinflamatorias naturales",
          "Bajo contenido calórico y rico en fibra"
        ]}
        imageSrc="/images/Mangostan/mangostanMainLarge.jpeg"
        imageAlt="Cultivo de mangostán en Hacienda Guadalupe"
        linkHref="/cultivos/mangostan"
        reverse={false}
      />
    </>
  )
}
