import Head from 'next/head';
import Image from 'next/image';
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
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adamsiii.robert@gmail.com');
      console.log(`copied ${await navigator.clipboard.readText()}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>{'Robert Adams | Contact'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container flex flex-col grow'>
        <h1 className={headerStyles}>Contact</h1>

        <div className='grow flex flex-col items-center justify-center space-y-5'>
          <ul id='icons' className='flex space-x-10'>
            <li>
              <a href='mailto:adamsiii.robert@gmail.com'>
                <Icon icon={'gmail'} size={52} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/robert-adams-comatosino/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon icon={'linkedin'} size={52} />
              </a>
            </li>
            <li>
              <a
                href='https://github.com/comatosino'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon icon={'github'} size={52} />
              </a>
            </li>
          </ul>
          <div
            onClick={copyEmail}
            id='email'
            className='cursor-pointer	relative border rounded p-5'
          >
            <div className='absolute top-0 right-0 h-5 w-5 '>
              <Image src='/icons/copy-to-clipboard.svg' alt='' layout='fill' />
            </div>
            <span className='font-medium'>adamsiii.robert@gmail.com</span>
          </div>
          <div id='cradle'>
            <NewtonsCradle />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
