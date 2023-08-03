import { Page } from '@/components';
import { ProjectCard } from '../../components/ProjectCard';

import projects from './projects.json';

export default async function Projects() {
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
