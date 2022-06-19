import Image from 'next/image';
import { getProjectIds, getProjectData } from '../../lib/projects';

import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import SkillBadge from '../../components/SkillBadge';
import Head from 'next/head';
import Icon from '../../components/Icon';
import { useEffect } from 'react';
import { animated, useTrail, config, useSpring } from 'react-spring';

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

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  const [img, imgAPI] = useSpring(() => ({ opacity: 0, translateX: '100%' }));

  const [tech, techAPI] = useTrail(project.tech.length, () => ({
    opacity: 0,
    y: 20,
  }));

  useEffect(() => {
    techAPI.start({ opacity: 1, y: 0 });
    imgAPI.start({ opacity: 1, translateX: '0%', config: config.molasses });
  }, []);

  return (
    <>
      <Head>
        <title>{`Robert Adams | ${project.name}`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container'>
        <div className='mt-5 flex items-baseline'>
          <h1 className='my-5 text-3xl sm:text-5xl md:text-7xl font-bold'>
            {project.name}
          </h1>
          <div className='flex ml-5 space-x-5 md:ml-10 md:space-x-10'>
            <a href={project.repoURL} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon='github'
                className='w-[24px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px]'
              />
            </a>
            <a href={project.appURL} target='_blank' rel='noopener noreferrer'>
              <Icon
                icon='link'
                className='w-[24px] h-[28px] sm:w-[36px] sm:h-[36px] md:w-[42px] md:h-[42px]'
              />
            </a>
          </div>
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
              <div>
                <ul className='flex flex-wrap justify-center'>
                  {tech.map((style, idx) => (
                    <animated.li key={project.tech[idx]} style={style}>
                      <SkillBadge icon={project.tech[idx]} size={22} />
                    </animated.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='p-1 lg:w-1/2'>
            <animated.div style={img} className='flex'>
              <Image
                priority
                src={`/images/${project.id}-demo.gif`}
                alt=''
                layout='intrinsic'
                height={360}
                width={640}
                className='rounded'
              />
            </animated.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
