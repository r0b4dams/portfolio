import Link from 'next/link';

type MenuProps = {
  active: boolean;
  handleToggle: () => void;
};

const NavOverlay: React.FC<MenuProps> = ({ active, handleToggle }) => {
  return (
    <nav
      className={
        active
          ? 'overlay flex justify-center items-center translate-x-0'
          : 'overlay flex justify-center items-center'
      }
    >
      <ul className='font-bold text-3xl space-y-10'>
        <li>
          <Link href='/projects'>
            <a onClick={handleToggle}>Projects</a>
          </Link>
        </li>
        <li className=''>
          <Link href='/about'>
            <a onClick={handleToggle}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a onClick={handleToggle}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavOverlay;
