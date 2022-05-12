import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../@types/projects';

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div className='w-fit lg:w-1/2 p-4'>
    <Link href={`/projects/${project.id}`}>
      <a className='flex'>
        <Image
          src={`/images/${project.id}-demo.gif`}
          alt=''
          layout='intrinsic'
          height={360}
          width={640}
        />
      </a>
    </Link>
    <div className='p-5 border-x-2 border-b-2 rounded-md border-gray-100 xl:hidden'>
      <h1 className='mb-3 text-2xl font-bold leading-8 tracking-tight'>
        {project.name}
      </h1>
      <p className='prose mb-3 max-w-none'>{project.desc}</p>
      <Link href={`/projects/${project.id}`}>
        <a className='text-base font-medium leading-6 text-blue-500'>
          Learn more →
        </a>
      </Link>
    </div>
  </div>
);

export default Project;
