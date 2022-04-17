import type { NextPage } from 'next/types';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Robert Adams' Portfolio Home`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section id='intro'>
        <Image src='/images/avatar.jpg' alt='avatar' height={144} width={144} />
        <h1>Salutation!</h1>
        <p>Some additional intro text!</p>
        <p>Welcome to my portfolio!</p>
      </section>
      <section id='projects'>
        <Link href='/'>
          <a>
            <Image
              src='/images/traductora-demo.gif'
              alt='console log demo'
              height={180}
              width={320}
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              src='/images/console-log-demo.gif'
              alt='console log demo'
              height={180}
              width={320}
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              src='/images/pantrimonium-demo.gif'
              alt='console log demo'
              height={180}
              width={320}
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              src='/images/vedomy-demo.gif'
              alt='console log demo'
              height={180}
              width={320}
            />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <Image
              src='/images/dad-jokes-demo.gif'
              alt='console log demo'
              height={180}
              width={320}
            />
          </a>
        </Link>
      </section>
    </>
  );
};

export default Home;
