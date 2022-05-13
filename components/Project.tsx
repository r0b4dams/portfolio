import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../@types/projects';

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div className='w-full lg:w-1/2 p-1'>
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
    <div className='p-5 xl:hidden'>
      <h1 className='mb-3 font-bold'>
        {project.name}
      </h1>
      <p className='min-h-[48px] mb-3 max-w-none'>{project.desc}</p>
      <Link href={`/projects/${project.id}`}>
        <a className='text-base font-medium leading-6 text-blue-500'>
          Learn more →
        </a>
      </Link>
    </div>
  </div>
);

export default Project;
