// src/components/HomePage.jsx
import Head from 'next/head'
import Hero from '@/features/home/Hero'
import Summary from '@/features/home/Summary'
import Context from '@/features/home/Context'

export default function HomePage() {
  return (
    <>

      <Hero
        imageSrc="/images/vacas.JPG"
        title={'Tradición e innovación agrícola en Guatemala\nCultivando calidad y sostenibilidad en cada proyecto'}
        ctaText="Conoce Más Sobre Nosotros"
        ctaHref="/about"
      />

    <Summary
      title="Hacienda Guadalupe"
      text={`Hacienda Guadalupe es una finca familiar fundada en 1956 por Roberto Mombiela de León, continuando una tradición agrícola de más de 150 años. Bajo la dirección de Roberto Mombiela Bruni, la finca diversifica sus cultivos con sostenibilidad y técnica: mangostán en expansión, café robusta en sistema intensivo, y proyectos innovadores como pitahaya, bambú y producción de microalgas (Chlorella). Nuestro enfoque combina herencia familiar, innovación y cuidado del suelo para producir con calidad y responsabilidad.`}
      ctaText="Sobre Nuestra Finca"
      ctaHref="/about"
      imageSrc="/images/hule.JPG"
      imageAlt="Persona alimentando una ternera"
    />

    <Context
      title="Nuestros Cultivos"
      text={`En Hacienda Guadalupe cultivamos hule, café y mangostán con prácticas sostenibles y técnicas modernas. Nuestro hule crece en suelo arcilloso rojo y se recolecta con picadores especializados para obtener látex y chipa de primera. El café robusta recibe riego y nutrición de precisión en un sistema intensivo que maximiza su productividad. Y el mangostán, proyecto joven, se cuida con manejo biológico y bioinsumos para asegurar frutos de alta calidad.`}
      ctaText="Sobre Nuestros Cultivos"
      ctaHref="/crops"
    />
    </>
  )
}
