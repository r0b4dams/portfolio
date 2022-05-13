import Head from 'next/head';
import type { NextPage } from 'next/types';
import Icon from '../components/Icon';
import NewtonsCradle from '../components/newtonsCradle';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  width: 'w-[90%] md:w-full',
  padding: 'pl-10 ',
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
        <div className='flex flex-col items-center justify-center space-y-5'>
          <ul className='flex space-x-10'>
            <li>
              <Icon icon={'gmail'} size={52} />
            </li>
            <li>
              <Icon icon={'linkedin'} size={52} />
            </li>
            <li>
              <Icon icon={'github'} size={52} />
            </li>
          </ul>
          <NewtonsCradle />
        </div>
      </section>
    </>
  );
};

export default Contact;
