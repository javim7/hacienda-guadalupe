import ContactPage from '@/components/ContactPage';

export default function Contact() {
  return <ContactPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
