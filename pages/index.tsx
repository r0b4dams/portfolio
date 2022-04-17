import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjectData } from '../lib/projects';
import type { GetStaticProps, NextPage } from 'next/types';
import type { ProjectData } from '../@types/projects';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjectData();
  return {
    props: {
      projects,
    },
  };
};

const Home: NextPage<{
  projects: ProjectData;
}> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{`Robert Adams' Portfolio`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='intro'>
        <Image src='/images/avatar.jpg' alt='avatar' height={144} width={144} />
        <h1>Salutation!</h1>
        <p>Some additional intro text!</p>
        <p>Welcome to my portfolio!</p>
      </section>

      <section>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <a>{project.id}</a>
              </Link>
            </li>
          );
        })}
      </section>
    </>
  );
};

export default Home;
