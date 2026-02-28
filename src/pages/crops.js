import CultivosPage from '@/components/CultivosPage';

export default function Crops() {
  return <CultivosPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
