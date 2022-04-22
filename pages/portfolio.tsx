import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectData } from '../@types/projects';
import { getAllProjectData } from '../lib/projects';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjectData();
  return {
    props: {
      projects,
    },
  };
};

const styles = {
  flex: 'flex flex-wrap',
};

const Portfolio: NextPage<{ projects: ProjectData }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{`Robert Adams' Portfolio`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.flex}>
        {projects.map((project) => (
          <div key={project.id} className='w-1/2'>
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
        ))}
      </section>
    </>
  );
};

export default Portfolio;
