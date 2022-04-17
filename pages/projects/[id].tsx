import Link from 'next/link';
import { getProjectIds, getProjectData } from '../../lib/projects';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = getProjectData(params!.id as string);
  return {
    props: {
      project,
    },
  };
};

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <>
      <section>
        <h1>{project.name}</h1>
        <p>{project.desc}</p>
      </section>
      <section>
        <Link href='/'>
          <a>Back to Projects</a>
        </Link>
      </section>
    </>
  );
};

export default ProjectPage;
