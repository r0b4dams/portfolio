import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
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
            <p className='text-gray-600 pb-5'>Software Engineer</p>
          </div>

          <div className='md:w-2/3 space-y-5'>
            <p>
              Coming out of college I accepted a position as an avionics repair
              technician. It was a promising job and my adaptability and ability
              to learn quickly paid off: in less than a year I had earned
              trainer status in both the repair of in-flight hardware as well as
              the maintenance repair software used for documentation.
            </p>
            <p>
              Unfortunately, the uncertainty caused by the pandemic led to a lot
              of restructuring and I felt like I’d hit a wall in my professional
              growth. I realized I needed to make a change. I’d always enjoyed
              the programming aspects of my physics degree, so when I saw a
              chance to apply for a full stack web development certificate, I
              jumped at it.
            </p>
            <p>
              I’m glad I did, because in earning it, it really solidified my
              appreciation for what I enjoy in a job: learning new things,
              problem solving, and helping build something tangible. I’m eager
              to contribute my skills to a collaborative environment, and look
              to find a position where I can further develop current skills as
              well as acquire new ones. I’m really excited and I look forward to
              learning more!
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
