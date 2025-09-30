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
        title={'Tradición e innovación agrícola y ganadera en Guatemala\nRealizando un manejo regenerativo y sostenible en cada proyecto'}
        ctaText="Contáctanos"
        ctaHref="/contact"
      />

    <Summary
      title="Hacienda Guadalupe"
      text={`Hacienda Guadalupe, fundada en 1958 por Roberto Mombiela de León, continúa una tradición agrícola y ganadera familiar con más de 150 años en Guatemala. Actualmente, bajo el cuidado de la tercera generación, la hacienda mantiene viva esa herencia combinándola con una visión de innovación y sostenibilidad. Con orgullo y responsabilidad, trabaja por conservar la fertilidad del suelo y proteger la flora y fauna del entorno, reafirmando su compromiso con el desarrollo sostenible para las futuras generaciones.`}
      ctaText="Sobre Nuestra Finca"
      ctaHref="/about"
      imageSrc="/images/hule.JPG"
      imageAlt="Persona alimentando una ternera"
    />

    <Context
      title="Nuestros Cultivos"
      text={`En Hacienda Guadalupe cultivamos hule, café y mangostán con prácticas sostenibles y técnicas modernas. En nuestra plantación de hule, la extracción y recolección de látex se realiza con mano de obra especializada. El café robusta recibe riego y nutrición de precisión en un sistema intensivo que maximiza su productividad. Y el mangostán, proyecto joven, se cuida con manejo biológico y bioinsumos para asegurar frutos de alta calidad.`}
      ctaText="Sobre Nuestros Cultivos"
      ctaHref="/crops"
    />
    </>
  )
}
