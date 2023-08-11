import projects from './projects.json';

import { Page } from '@/components';
import { ProjectCard } from '.';

export default function Projects() {
  return (
    <Page>
      <Page.Heading>Projects</Page.Heading>

      <Page.Body>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </Page.Body>
    </Page>
  );
}
