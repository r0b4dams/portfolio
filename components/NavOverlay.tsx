import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';

type MenuProps = {
  active: boolean;
  handleToggle: () => void;
};

const links = ['projects', 'about', 'contact'];

const NavOverlay: React.FC<MenuProps> = ({ active, handleToggle }) => {
  const router = useRouter();

  const style = useSpring({
    from: { x: '100%' },
    to: { x: active ? '0%' : '100%' },
  });

  return (
    <animated.div
      style={style}
      className='overlay flex justify-center items-center'
    >
      <nav>
        <ul className='font-bold text-3xl space-y-10'>
          {links.map((link) => (
            <li
              key={link}
              className={
                router.pathname === `/${link}`
                  ? 'first-letter:uppercase pointer-events-none '
                  : 'first-letter:uppercase'
              }
            >
              <Link href={`/${link}`}>
                <a onClick={handleToggle}>{link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </animated.div>
  );
};

export default NavOverlay;
