import { Page } from '@/components/Page';
import projects from '../projects.json';
import { ProjectFeatures, ProjectGif, ProjectLinks, BadgeList as ProjectTech } from '@/components';
import Link from 'next/link';

interface Props {
  params: { id: string };
}

function getOneProject(id: string) {
  const project = projects.find((project) => id === project.id);
  if (project) {
    return project as IProject;
  }
  throw new Error('project not found');
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default function Project({ params }: Props) {
  const project = getOneProject(params.id);

  return (
    <Page>
      <Page.Heading>{project.name}</Page.Heading>

      <p className='font-thin text-xl'>{project.desc}</p>

      <Link href='/projects' className='w-fit text-blue-400'>
        ← back to projects
      </Link>

      <Page.Body>
        <div className='flex flex-col lg:flex-wrap lg:flex-row-reverse md:w-full'>
          <div className='self-center pt-5 lg:pt-0 lg:self-auto lg:w-1/2'>
            <ProjectGif id={project.id} name={project.name} />
          </div>

          <div className='flex flex-col self-center md:w-[640px] lg:w-1/2 lg:self-auto'>
            <ProjectLinks
              projectName={project.name}
              repoURL={project.repoURL}
              appURL={project.appURL}
            />
            <ProjectFeatures features={project.features} />
            <div className='mt-3'>
              <ProjectTech title='Technologies' skills={project.tech} />
            </div>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
}
