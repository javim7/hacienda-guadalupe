import CattlePage from '@/components/CattlePage';

export default function Cattle() {
  return <CattlePage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
