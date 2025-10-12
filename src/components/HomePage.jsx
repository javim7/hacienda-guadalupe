// src/components/HomePage.jsx
import Hero from '@/features/home/Hero'
import About from '@/features/home/About'
import Cattle from '@/features/home/Cattle'
import Crops from '@/features/home/Crops'
import Projects from '@/features/home/Projects'

export default function HomePage() {
  return (
    <>

    <Hero
      title={'Tradición e innovación agrícola y ganadera en Guatemala\nRealizando un manejo regenerativo y sostenible en cada proyecto'}
      ctaText="Contáctanos"
      ctaHref="/contact"
    />

    <About
      title="Hacienda Guadalupe"
      text={`Hacienda Guadalupe, fundada en 1958 por Roberto Mombiela de León, continúa una tradición agrícola y ganadera familiar con más de 150 años en Guatemala. Actualmente, bajo el cuidado de la tercera generación, la hacienda mantiene viva esa herencia combinándola con una visión de innovación y sostenibilidad. Con orgullo y responsabilidad, trabaja por conservar la fertilidad del suelo y proteger la flora y fauna del entorno, reafirmando su compromiso con el desarrollo sostenible para las futuras generaciones.`}
      ctaText="Sobre Nuestra Hacienda"
      ctaHref="/about"
      imageSrc="/images/Otras/iglesia.JPG"
      imageAlt="Persona alimentando una ternera"
    />


    <Crops
      title="Nuestros Cultivos"
      text={`En Hacienda Guadalupe cultivamos hule, café y mangostán con prácticas sostenibles y técnicas modernas. En nuestra plantación de hule, la extracción y recolección de látex se realiza con mano de obra especializada. El café robusta recibe riego y nutrición de precisión en un sistema intensivo que maximiza su productividad. Y el mangostán, proyecto joven, se cuida con manejo biológico y bioinsumos para asegurar frutos de alta calidad.`}
      ctaText="Sobre Nuestros Cultivos"
      ctaHref="/crops"
    />
    <Cattle
      title="Nuestro Ganado"
      text={`Roberto Mombiela de León inició la cría de la raza Gyr en 1978. A lo largo de estos años ha obtenido numerosos premios en exposiciones y concursos de ordeño. Actualmente trabajamos en una ganadería regenerativa, conservando la vida del suelo y su entorno mediante sistemas de pastoreo intensivo no selectivo y el uso de genética de bajo mantenimiento y sin uso de productos químicos.`}
      ctaText="Sobre Nuestro Ganado"
      ctaHref="/cattle"
      imageSrc="/images/Ganado/vacasLarge.jpeg"
      imageAlt="Ganado en Hacienda Guadalupe"
    />

    <Projects
      title="Proyectos Extra"
      text={`En Hacienda Guadalupe vamos más allá de los cultivos tradicionales con proyectos innovadores y sostenibles. Producimos miel de alta calidad con nuestras colmenas que también polinizan nuestros cultivos. Cultivamos pitahaya, una fruta exótica de sabor único y propiedades nutricionales excepcionales. Desarrollamos microalgas Chlorella como superalimento y bioinsumo natural.`}
      ctaText="Sobre Nuestros Proyectos"
      ctaHref="/projects"
    />
    </>
  )
}
