import Head from 'next/head';
import type { NextPage } from 'next/types';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  width: 'w-[90%] md:w-full',
  padding: 'p-2 ',
  margin: 'm-auto my-5',
  border: 'border-b-2 border-gray-100',
  fontSize: 'text-3xl sm:text-4xl md:text-6xl',
  fontWeight: 'font-bold',
});

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | Contact'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container'>
        <h1 className={headerStyles}>Contact</h1>
      </section>
    </>
  );
};

export default Contact;
