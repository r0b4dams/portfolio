import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../@types/projects';

const Project: React.FC<{ project: Project }> = ({ project }) => (
  <div className='container w-full lg:w-1/2'>
    <Link href={`/projects/${project.id}`}>
      <a>
        <Image
          src={`/images/${project.id}-demo.gif`}
          alt=''
          layout='responsive'
          height={360}
          width={640}
        />
      </a>
    </Link>
  </div>
);

export default Project;
