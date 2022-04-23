import React from 'react';
import Project from './Project';
import { ProjectData } from '../@types/projects';

const styles = {
  flex: 'flex flex-col lg:flex-row flex-wrap',
  container: 'container m-auto',
};

const ProjectContainer: React.FC<{ projects: ProjectData }> = ({
  projects,
}): JSX.Element => {
  return (
    <section id='portfolio' className={`${styles.container} ${styles.flex}`}>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectContainer;
