import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTrail, useSprings, animated } from 'react-spring';

const routes = ['projects', 'about', 'contact'];

const colorMap: { [key: string]: string } = {
  projects: '#0000ff',
  about: '#ff0000',
  contact: '#ffff00',
};

const NavList: React.FC = (): JSX.Element => {
  const router = useRouter();

  const trail = useTrail(routes.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  const routeStyle = useSprings(
    routes.length,
    routes.map((route) => ({
      from: { width: '0%' },
      to: { width: router.pathname === `/${route}` ? '100%' : '0%' },
    }))
  );

  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        {trail.map((mountStyle, idx) => (
          <animated.li
            key={routes[idx]}
            style={mountStyle}
            className='hover:scale-125 duration-150 origin-center first-letter:uppercase'
          >
            <Link href={`/${routes[idx]}`}>
              <a>{routes[idx]}</a>
            </Link>
            <animated.div
              style={routeStyle[idx]}
              className={`h-2 bg-[${colorMap[routes[idx]]}]`}
            ></animated.div>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
