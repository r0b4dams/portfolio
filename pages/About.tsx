import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
import Icon from '../components/Icon';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  margin: 'my-5',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
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
        <div className='items-start space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0'>
          <div className='flex flex-col items-center space-x-2 pt-8'>
            <Image
              src='/images/avatar.jpg'
              alt='avatar'
              layout='intrinsic'
              height={192}
              width={192}
              className='rounded-full'
            />
            <h2 className='pt-4 pb-2 text-3xl font-bold leading-8 tracking-tight'>
              Robert Adams
            </h2>
            <p className='pb-8 lg:col-span-2 text-lg'>Software Engineer</p>
          </div>

          <div className='space-y-10'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto alias consequuntur, nihil pariatur minima cupiditate
              saepe laboriosam quam distinctio eos totam natus in ullam nisi
              ducimus facere similique ea quis?
            </p>

            <div className=''>
              <h3 className='mb-1 text-lg font-medium'>Languages</h3>
              <div className='flex flex-wrap space-x-5'>
                {['typescript', 'javascript', 'html', 'css'].map((icon) => (
                  <Icon size={48} key={icon} icon={icon} />
                ))}
              </div>

              <h3 className='mb-1 text-lg font-medium'>Front-End</h3>
              <div className='flex flex-wrap space-x-5'>
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
                  <Icon size={48} key={icon} icon={icon} />
                ))}
              </div>

              <h3 className='mb-1 text-lg font-medium'>Back-End</h3>
              <div className='flex flex-wrap space-x-5'>
                {[
                  'node',
                  'tsnode',
                  'express',
                  'mysql',
                  'postgresql',
                  'sequelize',
                  'mongodb',
                  'mongoose',
                ].map((icon) => (
                  <Icon size={48} key={icon} icon={icon} />
                ))}
              </div>

              <h3 className='mb-1 text-lg font-medium'>DevOps</h3>
              <div className='flex flex-wrap space-x-5'>
                {['git', 'github', 'heroku', 'vercel'].map((icon) => (
                  <Icon size={48} key={icon} icon={icon} />
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
