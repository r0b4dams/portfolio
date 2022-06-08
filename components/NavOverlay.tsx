import Link from 'next/link';
import { useSpring, animated, config, easings } from 'react-spring';

type MenuProps = {
  active: boolean;
  handleToggle: () => void;
};

const NavOverlay: React.FC<MenuProps> = ({ active, handleToggle }) => {
  const style = useSpring({
    to: { x: active ? '0%' : '100%' },
  });

  return (
    <animated.nav
      style={style}
      className='overlay flex justify-center items-center'
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
    </animated.nav>
  );
};

export default NavOverlay;
