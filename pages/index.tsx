import type { NextPage } from 'next/types';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Robert Adams' Portfolio Home`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Main</div>
    </>
  );
};

export default Home;