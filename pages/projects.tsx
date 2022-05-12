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
  width: 'w-[90%] md:w-full',
  padding: 'pl-10 ',
  margin: 'm-auto my-5',
  border: 'border-b-2 border-gray-100',
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
