import ProjectImage from '../../components/ProjectImage';
import Icon from '../../components/Icon';
import { getProjectIds, getProjectData } from '../../lib/projects';
import { getStyles } from '../../utils';

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

const headerStyles = getStyles({
  width: 'w-1/2',
  margin: 'mt-5',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
  fontWeight: 'font-bold',
});

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <>
      <section className='container'>
        <h1 className={headerStyles}>{project.name}</h1>

        <div className='flex flex-col md:flex-row-reverse md:flex-wrap'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <div className='w-full md:w-1/2 space-y-10 flex flex-col justify-evenly'>
            <p className=''>{project.desc}</p>
            {project.features.map((feature, idx) => (
              <p key={idx}>{feature}</p>
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-center md:flex-row md:flex-wrap'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <div className='w-full md:w-1/2 flex flex-wrap justify-center space-x-5'>
            {project.tech.map((icon) => (
              <Icon key={icon} size={48} icon={icon} />
            ))}
          </div>
        </div>

        {project.role && (
          <div className='flex flex-col justify-center md:flex-row md:flex-wrap'>
            <ProjectImage source={`/images/${project.id}-demo.gif`} />
            <div className='w-full md:w-1/2 border-gray-500 border-2 '>
              <h2 className=''>My Role</h2>
              {project.role.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>
        )}

        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 border-gray-500 border-2 '>
            <h2 className=''>Challenges</h2>
            {project.challenges.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>

          <div className='w-full md:w-1/2 border-gray-500 border-2 '>
            <h2 className=''>Successes</h2>
            {project.successes.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
