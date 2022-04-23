import Head from 'next/head';
import type { NextPage } from 'next/types';
import ContactCard from '../components/ContactCard';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Robert Adams | Contact'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='h-[40vh] p-[10px]'>
        <h1 className='text-5xl'>{"Let's get in touch!"}</h1>
        <p className='text-xl'>
          Contact me for professional opportunities or project collaboration!
        </p>
      </section>
      <section className='container flex flex-wrap items-center justify-around'>
        <ContactCard src={'/icons/email.svg'} cardColor={'bg-slate-500'} />
        <ContactCard src={'/icons/linkedin.svg'} cardColor={'bg-slate-600'} />
        <ContactCard src={'/icons/github.svg'} cardColor={'bg-slate-700'} />
        <ContactCard src={'/icons/resume.svg'} cardColor={'bg-slate-800'} />
      </section>
    </>
  );
};

export default Contact;
