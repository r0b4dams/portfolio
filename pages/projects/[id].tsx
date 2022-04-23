import Link from 'next/link';
import Image from 'next/image';
import { getProjectIds, getProjectData } from '../../lib/projects';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next/types';
import type { Project } from '../../@types/projects';
import Icon from '../../components/Icon';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const project = getProjectData(params!.id as string);
  return {
    props: {
      project,
    },
  };
};

const ProjectPage: NextPage<{ project: Project }> = ({ project }) => {
  return (
    <section className='container m-auto flex flex-col items-center'>
      <div>
        <Image
          src={`/images/${project.id}-demo.gif`}
          alt=''
          height={360}
          width={640}
        />
      </div>
      <h1>{project.name}</h1>
      <p>{project.desc}</p>
      <h2>Role</h2>
      {project.role}
      <h2>Tech</h2>
      <p>{project.tech}</p>
      <div>
        <ul>
          <li>
            <a href={project.appURL} target='_blank' rel='noreferrer'>
              Deployed App <Icon src={'/icons/deploy.svg'} className={''} />
            </a>
          </li>
          <li>
            <a href={project.repoURL} target='_blank' rel='noreferrer'>
              GitHub Repo <Icon src={'/icons/github.svg'} className={''} />
            </a>
          </li>
        </ul>
        <Link href='/portfolio'>
          <a>{'<< Back to Portfolio'}</a>
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
