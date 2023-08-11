'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const year = new Date().getFullYear();

export const Footer: React.FC = () => {
  const pathname = usePathname();

  const [style, api] = useSpring(() => ({
    opacity: 0,
    y: 20,
  }));

  useEffect(() => {
    api.start({ opacity: 1, y: 0 });
  }, [api]);

  return (
    <footer className='container flex flex-col items-center py-8'>
      <animated.div style={style}>
        <Link
          href='/contact'
          className={
            pathname === '/contact'
              ? 'pointer-events-none font-semibold space-x-1'
              : 'font-semibold space-x-1'
          }
        >
          <span className='border-b-pm-blue border-b-2'>Robert</span>
          <span className='border-b-pm-red border-b-2'>Adams</span>
          <span>©</span>
          <span className='border-b-pm-yellow border-b-2'>{year}</span>
        </Link>
      </animated.div>
    </footer>
  );
};
