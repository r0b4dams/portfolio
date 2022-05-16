import Head from 'next/head';
import type { NextPage } from 'next/types';
import Icon from '../components/Icon';
import NewtonsCradle from '../components/NewtonsCradle';
import { getStyles } from '../utils';

const headerStyles = getStyles({
  margin: 'my-5',
  fontSize: 'text-3xl sm:text-5xl md:text-7xl',
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
