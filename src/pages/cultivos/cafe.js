import CafePage from '@/components/CafePage';

export default function Cafe() {
  return <CafePage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  }
}
