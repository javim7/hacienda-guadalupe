// src/pages/_app.jsx
import Head from 'next/head'
import '@/styles/globals.css' // si usas alias @
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Hacienda Guadalupe</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
