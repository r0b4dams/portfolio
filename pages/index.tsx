import Head from 'next/head';
import Link from 'next/link';
import { useSpring, animated, config } from 'react-spring';
import { useState, useEffect } from 'react';
import IntroSubtitle from '../components/IntroSubtitle';
import IntroTitle from '../components/IntroTitle';

const Intro = () => {
  const [show, set] = useState(false);

  const [{ x }, drawAPI] = useSpring(() => ({ x: 0 }));
  useEffect(() => {
    drawAPI.start({ x: 1, config: config.molasses });
  }, []);

  const [hideBtn, btnAPI] = useSpring(() => ({ opacity: 0, y: 20 }));

  const handleLoopDone = () => {
    set(() => true);
    btnAPI.start({ opacity: 1, y: 0, config: config.molasses, delay: 1500 });
  };

  return (
    <>
      <Head>
        <title>{`Robert Adams`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container flex items-center justify-center min-h-[100vh] w-[100vw]'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='md:hidden self-center md:self-auto'>
            <svg
              role='img'
              width={300}
              height={300}
              viewBox='0 0 24.0 24.0'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <animated.rect
                  id='rectangle'
                  fill='none'
                  stroke='#ff0000'
                  strokeWidth={0.5}
                  strokeLinecap='round'
                  strokeDasharray={100}
                  strokeDashoffset={x.to((x) => (1 - x) * 100)}
                  width='10'
                  height='22'
                  x='13'
                  y='1'
                />
                <animated.path
                  id='triangle'
                  fill='none'
                  stroke='#ffff00'
                  strokeWidth={0.5}
                  strokeLinecap='round'
                  strokeDasharray={50}
                  strokeDashoffset={x.to((x) => (1 - x) * 50)}
                  d='M 1,23 H 13 L 7,11 Z'
                />
                <animated.circle
                  id='circle'
                  fill='none'
                  stroke='#0000ff'
                  strokeWidth={0.5}
                  strokeLinecap='round'
                  strokeDasharray={50}
                  strokeDashoffset={x.to((x) => (1 - x) * 50)}
                  cx='13'
                  cy='17'
                  r='6'
                />
              </g>
            </svg>
          </div>

          <div className='pl-3'>
            <IntroTitle handleLoopDone={handleLoopDone} />
            <div className='min-h-[50px]'>{show && <IntroSubtitle />}</div>
          </div>

          <animated.div
            style={hideBtn}
            className={show ? 'my-5 self-center' : 'pointer-events-none'}
          >
            <Link href='/projects'>
              <a className='px-5 py-2 text-l md:text-xl rounded border-2 border-gray-100'>
                View Portfolio
              </a>
            </Link>
          </animated.div>
        </div>

        <div className='w-full md:w-1/2 hidden md:block'>
          <svg
            role='img'
            width={600}
            height={600}
            viewBox='0 0 24.0 24.0'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <animated.rect
                id='rectangle'
                fill='none'
                stroke='#ff0000'
                strokeWidth={0.5}
                strokeLinecap='round'
                strokeDasharray={100}
                strokeDashoffset={x.to((x) => (1 - x) * 100)}
                width='10'
                height='22'
                x='13'
                y='1'
              />
              <animated.path
                id='triangle'
                fill='none'
                stroke='#ffff00'
                strokeWidth={0.5}
                strokeLinecap='round'
                strokeDasharray={50}
                strokeDashoffset={x.to((x) => (1 - x) * 50)}
                d='M 1,23 H 13 L 7,11 Z'
              />
              <animated.circle
                id='circle'
                fill='none'
                stroke='#0000ff'
                strokeWidth={0.5}
                strokeLinecap='round'
                strokeDasharray={50}
                strokeDashoffset={x.to((x) => (1 - x) * 50)}
                cx='13'
                cy='17'
                r='6'
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

// add bool property for conditional layout
Intro.isIntro = true;

export default Intro;
