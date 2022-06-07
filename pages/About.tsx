import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
import { useEffect } from 'react';
import { useTrail, config, animated } from 'react-spring';
import SkillBadge from '../components/SkillBadge';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  margin: 'my-5',
  fontSize: 'text-3xl sm:text-5xl md:text-7xl',
  fontWeight: 'font-bold',
});

const lgs = ['typescript', 'javascript', 'html', 'css'];
const fts = [
  'react',
  'redux',
  'next',
  'jquery',
  'mui',
  'tailwind',
  'bootstrap',
  'materialize',
];
const bks = [
  'node',
  'express',
  'mysql',
  'postgresql',
  'sequelize',
  'mongodb',
  'mongoose',
];
const dvs = ['git', 'github', 'heroku', 'vercel'];

const About: NextPage = () => {
  const [lg, lgAPI] = useTrail(lgs.length, () => ({ opacity: 0, y: 20 }));
  const [ft, ftAPI] = useTrail(fts.length, () => ({ opacity: 0, y: 20 }));
  const [bk, bkAPI] = useTrail(bks.length, () => ({ opacity: 0, y: 20 }));
  const [dv, dvAPI] = useTrail(dvs.length, () => ({ opacity: 0, y: 20 }));

  useEffect(() => {
    lgAPI.start({ opacity: 1, y: 0 });
    ftAPI.start({ opacity: 1, y: 0 });
    bkAPI.start({ opacity: 1, y: 0 });
    dvAPI.start({ opacity: 1, y: 0 });
  }, []);

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
              <div>
                <ul className='flex flex-wrap'>
                  {lg.map((style, idx) => (
                    <animated.li key={lgs[idx]} style={style}>
                      <SkillBadge icon={lgs[idx]} size={24} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3 className=''>Front-End</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {ft.map((style, idx) => (
                    <animated.li key={fts[idx]} style={style}>
                      <SkillBadge icon={fts[idx]} size={24} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3>Back-End</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {bk.map((style, idx) => (
                    <animated.li key={bks[idx]} style={style}>
                      <SkillBadge icon={bks[idx]} size={24} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3 className=''>DevOps</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {dv.map((style, idx) => (
                    <animated.li key={dvs[idx]} style={style}>
                      <SkillBadge icon={dvs[idx]} size={24} />
                    </animated.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
