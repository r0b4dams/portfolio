'use client';

import Link from 'next/link';
import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';

export const ProjectCard: React.FC<{
  project: IProject;
}> = ({ project }) => {
  const [style, animation] = useSpring(() => ({ opacity: 0, y: 25 }));

  const startAnimation = () => {
    const delay = Math.floor(1 + Math.random() * 250);
    setTimeout(() => {
      animation.start({ opacity: 1, y: 0 });
    }, delay);
  };

  return (
    <animated.div style={style} className='relative'>
      <Link href={`/projects/${project.id}`} className='flex justify-center p-2'>
        <Image
          src={`/images/${project.id}-mockup.png`}
          onLoadingComplete={startAnimation}
          alt={project.name}
          width={640}
          height={360}
          priority
        />
      </Link>

      <div className='project-wrapper xl:opacity-0 p-8 xl:absolute xl:left-0 xl:right-0 xl:top-0 xl:bottom-0 xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:bg-slate-100 dark:xl:bg-slate-800 hover:xl:opacity-90 xl:rounded xl:transition xl:ease-in-out xl:duration-200'>
        <h2 className='duration-300 xl:translate-y-5 mb-3 font-bold xl:text-xl dark:xl:text-slate-50'>
          {project.name}
        </h2>

        <p className='duration-700 xl:translate-y-5 lg:min-h-[48px] mb-3 dark:xl:text-slate-50'>
          {project.desc}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className='duration-1000 xl:translate-y-5 text-base font-medium leading-6 text-blue-400 w-fit'
        >
          Learn more →
        </Link>
      </div>
    </animated.div>
  );
};
