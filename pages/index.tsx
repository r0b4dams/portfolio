import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getStyles } from '../utils';

const pageStyles = getStyles({
  height: 'h-[100vh]',
  width: 'w-[100vw]',
  container: 'container',
  display: 'flex items-center justify-center',
});

const buttonStyles = getStyles({
  height: 'h-12',
  fontSize: 'text-l md:text-xl',
  width: 'w-6/12',
  display: 'flex items-center justify-center',
  border: 'rounded border-2 border-gray-100',
  bgColor: 'bg-white',
});

const Intro = () => {
  return (
    <>
      <Head>
        <title>{`Robert Adams | Full-Stack Web Developer`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='intro' className={pageStyles}>
        <div className='flex items-center justify-center flex-wrap w-full'>
          <div className='w-full md:w-1/2'>
            <div className='m-auto w-[90%] px-4'>
              <h1 className='text-5xl my-4 md:text-8xl'>{"Hi, I'm Robert!"}</h1>
              <h2 className='text-2xl my-4 md:text-5xl'>
                {'Software Engineer'}
              </h2>
            </div>

            <div className='m-auto w-[90%] flex my-4 space-x-5 items-center'>
              <Link href='/projects'>
                <a className={buttonStyles}>View Portfolio</a>
              </Link>
            </div>
          </div>

          <div className='w-full md:w-1/2 hidden md:block'>
            <Image
              src={`/icons/drawing-1.svg`}
              alt=''
              height={600}
              width={600}
            />
          </div>
        </div>
      </section>
    </>
  );
};

// add bool property for conditional layout
Intro.isIntro = true;

export default Intro;
