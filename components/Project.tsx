import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../@types/projects';

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div className='w-fit p-1 m-1 border-2 border-dashed border-blue-500 rounded-md shadow-lg'>
    <Link href={`/projects/${project.id}`}>
      <a className='flex'>
        <Image
          className='rounded-lg shadow'
          src={`/images/${project.id}-demo.gif`}
          alt=''
          layout='intrinsic'
          height={360}
          width={640}
        />
      </a>
    </Link>
  </div>
);

export default Project;
