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
        text={`Our family farm is committed to raising our animals with care and respect to produce the healthiest, safest raw milk for our community here in Hopkins, MI, and throughout Southwest Michigan. 

Our herd of 38 jersey cows is raised on pasture, with as much of their food as possible grown on the farm. They aren't given vaccinations or growth hormones and on the rare occasion when we need to give a cow antibiotics, their milk is not shared with our customers. Our milk is tested weekly and our equipment is sanitized four times each day, giving you confidence in the safety of our raw milk.`}
        ctaText="About Our Farm"
        ctaHref="/about"
        imageSrc="/images/hule.JPG"
        imageAlt="Person feeding a calf"
      />

      <Context
        title="More than Just Milk"
        text={`While Positively Grown is a dairy farm, we also raise pastured beef and eggs. Additionally, we are curating an ever-growing selection of other products for you to purchase. We work with other local farmers to be able to provide you with raw unfiltered honey and fresh homemade bread. Just like great great grandma used to make!
(etc.)`}
        ctaText="About Our Partners"
        ctaHref="/partners"
      />
    </>
  )
}
