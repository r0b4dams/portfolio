import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../@types/projects';

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div className='w-full lg:w-1/2 p-2 relative'>
    <Link href={`/projects/${project.id}`}>
      <a className='flex justify-center'>
        <Image
          src={`/images/${project.id}-demo.gif`}
          alt=''
          layout='intrinsic'
          height={360}
          width={640}
          className='rounded'
        />
      </a>
    </Link>

    <div className='project-wrapper xl:opacity-0 p-5 xl:absolute xl:left-2 xl:right-2 xl:top-2 xl:bottom-2 xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:bg-stone-800 hover:xl:opacity-90 xl:rounded xl:transition xl:ease-in-out xl:duration-200'>
      <h2 className='duration-300 xl:translate-y-5 mb-3 font-bold xl:text-xl xl:text-stone-100'>
        {project.name}
      </h2>

      <p className='duration-700 xl:translate-y-5 lg:min-h-[48px] mb-3 xl:text-stone-100'>
        {project.desc}
      </p>

      <Link href={`/projects/${project.id}`}>
        <a className='duration-1000 xl:translate-y-5 text-base font-medium leading-6 text-blue-400 w-fit'>
          Learn more →
        </a>
      </Link>
    </div>
  </div>
);

export default Project;
