import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ProjectContainer from '../components/ProjectContainer';
import { getAllProjectData } from '../lib/projects';
import { ProjectData } from '../@types/projects';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjectData();
  return {
    props: {
      projects,
    },
  };
};

const Projects: NextPage<{ projects: ProjectData }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | Portfolio'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='container'>
        <h1 className='my-5 text-3xl sm:text-5xl md:text-7xl font-bold'>
          Projects
        </h1>
        <ProjectContainer projects={projects} />
      </section>
    </>
  );
};

export default Projects;
