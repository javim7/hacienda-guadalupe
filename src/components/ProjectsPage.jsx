// src/components/ProjectsPage.jsx
import Head from 'next/head'
import SectionHeader from '@/components/SectionHeader'
import ProjectPreview from '@/features/proyectos/ProjectPreview'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Proyectos Extra - Hacienda Guadalupe</title>
        <meta name="description" content="Descubre nuestros proyectos innovadores: Miel, Pitahaya, Chlorella y Bambú en Hacienda Guadalupe" />
      </Head>

      <SectionHeader title="PROYECTOS EXTRA" />
      
      {/* Miel Preview */}
      <ProjectPreview
        title="Miel"
        description="Nuestro proyecto de apicultura produce miel de alta calidad, aprovechando la rica biodiversidad de nuestra finca. Las abejas contribuyen no solo a la producción de miel, sino también a la polinización de nuestros cultivos, creando un ecosistema más saludable y productivo."
        benefits={[
          "Producción de miel de alta calidad",
          "Polinización natural de cultivos",
          "Ecosistema más saludable",
          "Biodiversidad preservada"
        ]}
        imageSrc="/images/Hule/hule.JPG"
        imageAlt="Colmenas y producción de miel en Hacienda Guadalupe"
        linkHref="/proyectos/miel"
        reverse={false}
        priority={true}
      />

      {/* Pitahaya Preview */}
      <ProjectPreview
        title="Pitahaya"
        description="La pitahaya es uno de nuestros cultivos más innovadores, una fruta exótica que combina belleza y sabor. Cultivamos variedades seleccionadas que se adaptan perfectamente a nuestro clima, ofreciendo frutos de primera calidad con un sabor único y propiedades nutricionales excepcionales."
        benefits={[
          "Fruta exótica de alta calidad",
          "Propiedades nutricionales excepcionales",
          "Cultivo innovador y sostenible",
          "Adaptación perfecta al clima"
        ]}
        imageSrc="/images/Cafe/cafe.JPG"
        imageAlt="Cultivo de pitahaya en Hacienda Guadalupe"
        linkHref="/proyectos/pitahaya"
        reverse={true}
        backgroundColor="red"
      />

      {/* Chlorella Preview */}
      <ProjectPreview
        title="Chlorella"
        description="Nuestra producción de microalgas Chlorella representa la vanguardia de la agricultura sostenible. Estas microalgas no solo son un superalimento con propiedades nutricionales extraordinarias, sino que también las utilizamos como bioinsumo natural para mejorar la salud de nuestros suelos y cultivos."
        benefits={[
          "Superalimento con propiedades extraordinarias",
          "Bioinsumo natural para suelos",
          "Agricultura sostenible de vanguardia",
          "Mejora la salud de cultivos"
        ]}
        imageSrc="/images/Mangostan/mangostan.JPG"
        imageAlt="Cultivo de microalgas Chlorella en Hacienda Guadalupe"
        linkHref="/proyectos/chlorella"
        reverse={false}
      />

      {/* Bambú Preview */}
      <ProjectPreview
        title="Bambú"
        description="El bambú es un cultivo versátil y sostenible que forma parte de nuestra visión de agricultura regenerativa. Este recurso renovable de rápido crecimiento no solo contribuye a la captura de carbono, sino que también ofrece múltiples aplicaciones industriales y ecológicas, representando el futuro de la agricultura sostenible."
        benefits={[
          "Agricultura regenerativa",
          "Captura de carbono natural",
          "Múltiples aplicaciones industriales",
          "Recurso renovable de rápido crecimiento"
        ]}
        imageSrc="/images/Mangostan/mangostan.JPG"
        imageAlt="Cultivo de bambú en Hacienda Guadalupe"
        linkHref="/proyectos/bamboo"
        reverse={true}
        backgroundColor="red"
      />
    </>
  )
}
