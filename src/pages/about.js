import AboutPage from '@/components/AboutPage';

export default function About() {
  return <AboutPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
