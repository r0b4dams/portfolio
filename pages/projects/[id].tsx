import ProjectImage from '../../components/ProjectImage';
import { getProjectIds, getProjectData } from '../../lib/projects';
import { getStyles } from '../../utils';

import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import SkillBadge from '../../components/SkillBadge';
import Head from 'next/head';
import Icon from '../../components/Icon';

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

const headerStyles = getStyles({
  margin: 'mt-5',
  fontSize: 'text-3xl sm:text-5xl md:text-7xl',
  fontWeight: 'font-bold',
});

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{`Robert Adams | ${project.name}`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container'>
        <div className='flex items-center'>
          <h1 className={headerStyles}>{project.name}</h1>
        </div>
        <p className='py-3'>{project.desc}</p>

        <div
          id='content-container'
          className='flex flex-col lg:flex-row lg:flex-wrap'
        >
          <div
            id='features-tech'
            className='flex flex-col justify-evenly p-1 lg:w-1/2'
          >
            <div>
              <h2 className='py-2 font-medium'>Features</h2>
              <ul className='space-y-3 font-thin'>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='py-2 font-medium'>Technologies</h2>
              <div className='flex flex-wrap justify-center'>
                {project.tech.map((icon) => (
                  <SkillBadge key={icon} size={22} icon={icon} />
                ))}
              </div>
            </div>
          </div>

          <div className='p-1 lg:w-1/2'>
            <ProjectImage source={`/images/${project.id}-demo.gif`} />
          </div>

          <div className='p-1 lg:w-1/2'>
            <ProjectImage source={`/images/${project.id}-demo.gif`} />
          </div>

          <div
            id='reflection'
            className='p-3 flex flex-col justify-center p-1 lg:w-1/2'
          >
            <ul className='space-y-3 font-thin'>
              {project.discussion.map((data, idx) => (
                <li key={idx}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
