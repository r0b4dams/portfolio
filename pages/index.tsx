import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Intro = () => {
  return (
    <>
      <Head>
        <title>{`Robert Adams`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container flex items-center justify-center min-h-[100vh] w-[100vw]'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='md:hidden self-center'>
            <Image
              src={`/icons/drawing-1.svg`}
              alt=''
              height={150}
              width={150}
            />
          </div>

          <div className='pl-3 '>
            <h1 className='text-5xl my-5 md:text-8xl'>Hi, I&apos;m Robert!</h1>
            <h2 className='text-2xl my-5 md:text-5xl'>Software Engineer</h2>
          </div>

          <div className='my-5 self-center'>
            <Link href='/projects'>
              <a className='px-5 py-2 text-l md:text-xl rounded border-2 border-gray-100'>
                View Portfolio
              </a>
            </Link>
          </div>
        </div>

        <div className='w-full md:w-1/2 hidden md:block'>
          <Image src={`/icons/drawing-1.svg`} alt='' height={600} width={600} />
        </div>
      </div>
    </>
  );
};

// add bool property for conditional layout
Intro.isIntro = true;

export default Intro;
