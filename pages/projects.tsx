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
        <h1 className='w-[90%] m-auto my-5 border-b-2 border-slate-900 border-dotted p-2'>
          Projects
        </h1>
      </section>
      <ProjectContainer projects={projects} />
    </>
  );
};

export default Projects;
