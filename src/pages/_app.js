// src/pages/_app.jsx
import Head from 'next/head'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="America/Guatemala"
      onError={() => {}}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Hacienda Guadalupe</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextIntlClientProvider>
  )
}
