import projects from '../projects.json';

import Link from 'next/link';
import { Page, BadgeList as ProjectTech } from '@/components';
import { ProjectFeatures, ProjectGif, ProjectLinks } from '.';

interface Props {
  params: { id: string };
}

function getProject(id: string) {
  const project = projects.find((project) => id === project.id);
  if (project) {
    return project as IProject;
  }
  throw new Error('project not found');
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props) {
  const project = getProject(params.id);
  return {
    title: `Robert Adams | ${project.name}`,
  };
}

export default function Project({ params }: Props) {
  const project = getProject(params.id);

  return (
    <Page>
      <Page.Heading>{project.name}</Page.Heading>

      <p className='font-thin text-xl'>{project.desc}</p>

      <Link href='/projects' className='w-fit text-blue-400'>
        ← back to projects
      </Link>

      <Page.Body>
        <div className='flex flex-col lg:flex-wrap lg:flex-row-reverse md:w-full'>
          <div className='self-center pt-5 lg:pt-0 lg:w-1/2'>
            <ProjectGif id={project.id} name={project.name} />
          </div>

          <div className='flex flex-col self-center md:w-[640px] lg:w-1/2 lg:self-auto'>
            <ProjectLinks
              projectName={project.name}
              repoURL={project.repoURL}
              appURL={project.appURL}
            />
            <div className='flex flex-col grow justify-between'>
              <ProjectFeatures features={project.features} />
              <div className='mt-3'>
                <ProjectTech title='Technologies' skills={project.tech} />
              </div>
            </div>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
}
