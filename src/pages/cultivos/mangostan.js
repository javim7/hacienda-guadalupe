import MangostanPage from '@/components/MangostanPage';

export default function Mangostan() {
  return <MangostanPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  }
}
