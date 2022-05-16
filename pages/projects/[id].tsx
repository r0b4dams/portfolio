import ProjectImage from '../../components/ProjectImage';
import Icon from '../../components/Icon';
import { getProjectIds, getProjectData } from '../../lib/projects';
import { getStyles } from '../../utils';

import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import SkillBadge from '../../components/SkillBadge';

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
      <section className='container'>
        <h1 className={headerStyles}>{project.name}</h1>
        <p className='py-3'>{project.desc}</p>

        <div className='flex flex-col md:flex-row-reverse md:flex-wrap items-center'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />

          <div className='w-full md:w-1/2 lg:px-5 py-5'>
            <ul className='lg:pb-5 space-y-5 text-sm'>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className='flex-wrap justify-center hidden lg:flex'>
              {project.tech.map((icon) => (
                <SkillBadge key={icon} size={22} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        {/* mobile and tablet */}
        <div className='flex flex-wrap justify-center p-5 lg:hidden'>
          {project.tech.map((icon) => (
            <SkillBadge key={icon} size={22} icon={icon} />
          ))}
        </div>

        <div className='flex flex-col justify-center md:flex-row md:flex-wrap items-center'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />

          <div className='w-full md:w-1/2 lg:px-5 py-5'>
            <div className='h-full flex justify-center items-center'>
              <ul className='lg:pb-5 space-y-5 text-sm'>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
