import { getProjectIds, getProjectData } from '../../lib/projects';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import ProjectImage from '../../components/ProjectImage';
import ProjectContent from '../../components/ProjectContent';
import { getStyles } from '../../utils';

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
  width: 'w-[90%] md:w-full',
  padding: 'p-2 ',
  margin: 'mx-auto mt-5',
  border: 'border-b-2 border-gray-100',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
  fontWeight: 'font-bold',
});

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <>
      <section className='container'>
        <div className='h-[90vh]'>
          <h1 className={headerStyles}>{project.name}</h1>

          <p className='w-[90%] mx-auto border-b-2 border-gray-100 p-2 lg:w-1/2 lg:m-0'>
            {project.desc}
          </p>

          <div className='flex flex-col items-center lg:flex-row lg:flex-wrap'>
            <ProjectImage source={`/images/${project.id}-demo.gif`} />
            <ProjectContent heading={'Features'} />
          </div>
        </div>

        <div
          id='tech'
          className='h-screen bg-gray-100 flex flex-col items-center justify-center lg:flex-row-reverse lg:flex-wrap'
        >
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <ProjectContent heading={'Technologies'} />
        </div>

        <div
          id='role'
          className='h-screen bg-gray-50 flex flex-col items-center justify-center lg:flex-row lg:flex-wrap'
        >
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <ProjectContent heading={'My Role'} />
        </div>

        <div
          id='reflection'
          className='h-[95vh] flex flex-col justify-center items-center'
        >
          <ProjectContent heading={'Challenges'} />
          <ProjectContent heading={'Successes'} />
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
