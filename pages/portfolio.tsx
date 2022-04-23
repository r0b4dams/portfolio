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

const Portfolio: NextPage<{ projects: ProjectData }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | Portfolio'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ProjectContainer projects={projects} />
    </>
  );
};

export default Portfolio;
