import Head from 'next/head';

import Link from 'next/link';

const Intro = () => {
  return (
    <>
      <Head>
        <title>{`Robert Adams' Portfolio`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='intro'>
        <Link href='/portfolio'>
          <a>GOTO portfolio</a>
        </Link>
      </section>
    </>
  );
};

export default Intro;
