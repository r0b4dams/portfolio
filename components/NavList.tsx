import Link from 'next/link';

const NavList: React.FC = (): JSX.Element => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        <li className=''>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li className=''>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li className=''>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
