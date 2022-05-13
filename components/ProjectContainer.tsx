import React from 'react';
import Project from './Project';
import { ProjectData } from '../@types/projects';

const ProjectContainer: React.FC<{ projects: ProjectData }> = ({
  projects,
}): JSX.Element => {
  return (
    <div
      id='portfolio'
      className='flex flex-col items-center justify-center lg:flex-row lg:flex-wrap'
    >
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectContainer;
