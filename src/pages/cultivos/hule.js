import HulePage from '@/components/HulePage';

export default function Hule() {
  return <HulePage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  }
}
