import NextLink from 'next/link';
import { Logo, Nav, ThemeToggle } from '@/components';
import { SpringBorder } from './SpringBorder';

export const Header: React.FC = () => {
  return (
    <>
      <header className='container flex items-center justify-between'>
        <NextLink href='/'>
          <Logo className='h-[10vh]' />
        </NextLink>
        <div className='flex items-center justify-center px-5 md:px-0'>
          <Nav />
          <ThemeToggle />
        </div>
      </header>
      <SpringBorder />
    </>
  );
};
