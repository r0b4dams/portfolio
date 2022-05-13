import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ProjectContainer from '../components/ProjectContainer';
import { getAllProjectData } from '../lib/projects';
import { ProjectData } from '../@types/projects';
import { getStyles } from '../utils';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjectData();
  return {
    props: {
      projects,
    },
  };
};

const headerStyles = getStyles({
  margin: 'my-5',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
  fontWeight: 'font-bold',
});

const Projects: NextPage<{ projects: ProjectData }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | Portfolio'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='container'>
          <h1 className={headerStyles}>Projects</h1>
        <ProjectContainer projects={projects} />
      </section>
    </>
  );
};

export default Projects;
