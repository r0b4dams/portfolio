import NextLink from 'next/link';

import { Logo } from '../Logo';
import { Nav } from '../Nav';
// import { ToggleDarkMode } from '../ToggleDarkMode';
import { SpringBorder } from './SpringBorder';

export const Header: React.FC = () => {
  return (
    <>
      <header className='container flex items-center justify-between'>
        <NextLink href='/'>
          <Logo className='h-[10vh]' />
        </NextLink>
        <div className='flex items-center justify-center '>
          <Nav />
        </div>
      </header>
      <SpringBorder />
    </>
  );
};
