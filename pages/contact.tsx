import Head from 'next/head';
import type { NextPage } from 'next/types';
import { MouseEventHandler, useEffect, useState } from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';
import Icon from '../components/Icon';
import NewtonsCradle from '../components/NewtonsCradle';

const data = [
  { icon: 'gmail', href: 'mailto:adamsiii.robert@gmail.com' },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/r0b-adams/',
  },
  { icon: 'github', href: 'https://github.com/r0b-adams' },
];

const Contact: NextPage = () => {
  const [{ x }, strokeApi] = useSpring(() => ({ x: 0 }));
  const [iconTrail, IconTrailApi] = useTrail(data.length, () => ({
    scale: 0,
    transformOrigin: 'center',
  }));
  const [button, btnApi] = useSpring(() => ({
    scale: 0,
    transformOrigin: 'center',
  }));

  useEffect(() => {
    IconTrailApi.start({ scale: 1 });
  }, []);

  const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await navigator.clipboard.writeText('adamsiii.robert@gmail.com');
      strokeApi.start({ x: 1, config: config.default });
      setTimeout(() => {
        strokeApi.start({ x: 0, config: config.molasses });
      }, 2500);
    } catch (err) {
      console.error(err);
      alert('Error copying email to clipboard');
    }
  };

  return (
    <>
      <Head>
        <title>{'Robert Adams | Contact'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container flex flex-col grow'>
        <h1 className='my-5 text-3xl sm:text-5xl md:text-7xl font-bold'>
          Contact
        </h1>

        <div className='grow flex flex-col items-center justify-center space-y-5'>
          <ul id='icons' className='flex space-x-10'>
            {iconTrail.map((style, idx) =>
              data[idx].icon === 'gmail' ? (
                <animated.li
                  key={idx}
                  style={style}
                  onMouseEnter={() => btnApi.start({ scale: 1 })}
                >
                  <a href={data[idx].href}>
                    <Icon
                      icon={data[idx].icon}
                      size={52}
                      className='xl:hover:scale-125 duration-100'
                    />
                  </a>
                </animated.li>
              ) : (
                <animated.li key={idx} style={style}>
                  <a
                    href={data[idx].href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon
                      icon={data[idx].icon}
                      size={52}
                      className='lg:hover:scale-125 duration-100'
                    />
                  </a>
                </animated.li>
              )
            )}
          </ul>

          <animated.button
            id='email'
            className='cursor-pointer	relative border rounded p-5'
            onClick={handleClick}
            style={button}
          >
            <div className='absolute top-0 right-0 h-5 w-5 '>
              <animated.svg
                id='clipboard'
                className='absolute'
                width='20px'
                height='20px'
                viewBox='0 0 16 16'
                fill='none'
                stroke='#e5e7eb'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeDasharray={100}
                strokeDashoffset={x.to((x) => x * 100)}
              >
                <path d='M5.75 4.75H10.25V1.75H5.75V4.75Z' />
                <path d='M3.25 2.88379C2.9511 3.05669 2.75 3.37987 2.75 3.75001V13.25C2.75 13.8023 3.19772 14.25 3.75 14.25H12.25C12.8023 14.25 13.25 13.8023 13.25 13.25V3.75001C13.25 3.37987 13.0489 3.05669 12.75 2.88379' />
              </animated.svg>
              <animated.svg
                id='check'
                className='absolute'
                width='20'
                height='20'
                viewBox='0 0 16 16'
                fill='none'
                stroke='#00ff00'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeDasharray={100}
                strokeDashoffset={x.to((x) => (x - 1) * 100)}
              >
                <path d='M13.25 4.75L6 12L2.75 8.75' />
              </animated.svg>
            </div>
            <span className='font-medium'>adamsiii.robert@gmail.com</span>
          </animated.button>

          <div id='cradle'>
            <NewtonsCradle />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
