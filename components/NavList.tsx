import Link from 'next/link';

const NavList: React.FC = (): JSX.Element => {
  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        <li className='border-b-2 border-yellow-500'>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </li>
        <li className='border-b-2 border-red-500'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li className='border-b-2 border-blue-500'>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
