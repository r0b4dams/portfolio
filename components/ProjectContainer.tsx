import React, { useEffect } from 'react';
import Project from './Project';
import { ProjectData } from '../@types/projects';
import { useTrail } from 'react-spring';

const ProjectContainer: React.FC<{ projects: ProjectData }> = ({
  projects,
}): JSX.Element => {
  const [trail, api] = useTrail(projects.length, () => ({ opacity: 0, y: 25 }));

  useEffect(() => {
    api.start({ opacity: 1, y: 0 });
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap'>
      {trail.map((style, idx) => (
        <Project key={projects[idx].id} project={projects[idx]} style={style} />
      ))}
    </div>
  );
};

export default ProjectContainer;
