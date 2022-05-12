import { getProjectIds, getProjectData } from '../../lib/projects';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import ProjectImage from '../../components/ProjectImage';
import ProjectContent from '../../components/ProjectContent';
import { getStyles } from '../../utils';
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
  width: 'w-[90%] md:w-full',
  padding: 'pl-10 ',
  margin: 'mx-auto mt-5',
  border: 'border-b-2 border-gray-100',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
  fontWeight: 'font-bold',
});

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <>
      <section className='container'>
        <h1 className={headerStyles}>{project.name}</h1>

        <p className='w-[90%] mx-auto border-b-2 border-gray-100 p-2 lg:w-1/2 lg:m-0'>
          {project.desc}
        </p>

        <div className='space-y-5'>
          <div className='flex flex-col md:flex-row md:flex-wrap'>
            <ProjectImage source={`/images/${project.id}-demo.gif`} />

            <div className='w-full flex flex-col justify-center md:w-1/2 p-5 space-y-5 text-sm sm:text-base md:text:xl lg:text-xl'>
              <p>Harum deserunt iusto aliquid accusamus dignissimos autem</p>

              <p>
                Delectus velit veniam, harum debitis quam fugiat iure, magni,
                vitae veritatis voluptatibus asperiores alias nesciunt at!
              </p>

              <p>
                Quia dolor aliquid eveniet aliquam, obcaecati nulla deleniti
                impedit cum, quis ea distinctio.
              </p>
            </div>
          </div>
        </div>

        <div className=' flex flex-col justify-center md:flex-row-reverse md:flex-wrap'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <div className='w-full md:w-1/2 p-10 bg-gray-100'>
            <h2 className='mb-3 text-2xl font-bold'>Technologies</h2>
            <div className='flex flex-wrap space-x-5 p-5'>
              {project.tech.stack.map((icon) => (
                <Icon key={icon} size={48} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center md:flex-row md:flex-wrap'>
          <ProjectImage source={`/images/${project.id}-demo.gif`} />
          <div className='w-full md:w-1/2 p-10 bg-gray-50'>
            <h2 className='mb-3 text-2xl font-bold'>My Role</h2>

            <div className='p-5 space-y-5 text-sm sm:text-base md:text:xl lg:text-xl'>
              <p>
                Quia dolor aliquid eveniet aliquam, obcaecati nulla deleniti
                impedit cum, quis ea distinctio.
              </p>
              <p>Harum deserunt iusto aliquid accusamus dignissimos autem</p>
              <p>
                Delectus velit veniam, harum debitis quam fugiat iure, magni,
                vitae veritatis voluptatibus asperiores alias nesciunt at!
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 p-10'>
            <h2 className='mb-3 text-2xl font-bold'>Challenges</h2>
            <div className='space-y-2 p-2'>
              <p>Harum deserunt iusto aliquid accusamus dignissimos autem</p>
              <p>
                Delectus velit veniam, harum debitis quam fugiat iure, magni,
                vitae veritatis voluptatibus asperiores alias nesciunt at!
              </p>
              <p>
                Quia dolor aliquid eveniet aliquam, obcaecati nulla deleniti
                impedit cum, quis ea distinctio.
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 p-10'>
            <h2 className='mb-3 text-2xl font-bold'>Successes</h2>
            <div className='space-y-2 p-2'>
              <p>
                Delectus velit veniam, harum debitis quam fugiat iure, magni,
                vitae veritatis voluptatibus asperiores alias nesciunt at!
              </p>
              <p>
                Quia dolor aliquid eveniet aliquam, obcaecati nulla deleniti
                impedit cum, quis ea distinctio.
              </p>
              <p>Harum deserunt iusto aliquid accusamus dignissimos autem</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
