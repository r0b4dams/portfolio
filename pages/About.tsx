import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
import Icon from '../components/Icon';
import SkillBadge from '../components/SkillBadge';
import SpanishBadge from '../components/SpanishBadge';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  margin: 'my-5',
  fontSize: 'text-3xl sm:text-5xl md:text-7xl',
  fontWeight: 'font-bold',
});

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | About'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container'>
        <h1 className={headerStyles}>About</h1>

        <div className='md:flex'>
          <div className='flex flex-col items-center pt-8 md:w-1/3'>
            <Image
              src='/images/avatar.jpg'
              alt='avatar'
              layout='intrinsic'
              height={192}
              width={192}
              className='rounded-full'
            />
            <h2 className='py-4 pb-1 text-xl font-bold lg:text-3xl'>
              Robert Adams
            </h2>
            <p className='text-gray-600'>Software Engineer</p>
          </div>

          <div className='md:w-2/3'>
            <p className='text-sm py-3 md:text-base text-gray-600'>
              Ducimus facere similique ea quis? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto alias consequuntur, nihil
              pariatur minima cupiditate saepe laboriosam quam distinctio eos
              totam natus in ullam nisi.
            </p>
            <p className='text-sm py-3 md:text-base text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias consequuntur, nihil pariatur minima cupiditate
              saepe laboriosam quam distinctio eos totam natus in ullam nisi
              ducimus facere similique ea quis?
            </p>

            <div className='space-y-2'>
              <h3 className=''>Languages</h3>
              <div className='flex flex-wrap'>
                {['typescript', 'javascript', 'html', 'css'].map((icon) => (
                  <SkillBadge size={24} key={icon} icon={icon} />
                ))}
                <SpanishBadge />
              </div>

              <h3 className=''>Front-End</h3>
              <div className='flex flex-wrap'>
                {[
                  'react',
                  'redux',
                  'next',
                  'jquery',
                  'mui',
                  'tailwind',
                  'bootstrap',
                  'materialize',
                ].map((icon) => (
                  <SkillBadge size={24} key={icon} icon={icon} />
                ))}
              </div>

              <h3 className=''>Back-End</h3>
              <div className='flex flex-wrap'>
                {[
                  'node',
                  'express',
                  'mysql',
                  'postgresql',
                  'sequelize',
                  'mongodb',
                  'mongoose',
                ].map((icon) => (
                  <SkillBadge size={24} key={icon} icon={icon} />
                ))}
              </div>

              <h3 className=''>DevOps</h3>
              <div className='flex flex-wrap'>
                {['git', 'github', 'heroku', 'vercel'].map((icon) => (
                  <SkillBadge size={24} key={icon} icon={icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
