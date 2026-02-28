import ProjectsPage from '@/components/ProjectsPage';

export default function Projects() {
  return <ProjectsPage />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  }
}
