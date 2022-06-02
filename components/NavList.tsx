import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTrail, useSprings, animated } from 'react-spring';

const data = [
  { name: 'projects', color: '#0000ff' },
  { name: 'about', color: '#ff0000' },
  { name: 'contact', color: '#ffff00' },
];

const NavList: React.FC = (): JSX.Element => {
  const router = useRouter();

  const linkTrail = useTrail(data.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  const routeStyle = useSprings(
    data.length,
    data.map((item) => ({
      from: { width: '0%' },
      to: { width: router.pathname === `/${item.name}` ? '100%' : '0%' },
    }))
  );

  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        {linkTrail.map((mountStyle, idx) => (
          <animated.li
            key={data[idx].name}
            style={mountStyle}
            className='first-letter:uppercase'
          >
            <div className='hover:scale-125 duration-100'>
              <Link href={`/${data[idx].name}`}>
                <a>{data[idx].name}</a>
              </Link>
              <animated.div
                style={routeStyle[idx]}
                className={`h-2 bg-[${data[idx].color}]`}
              ></animated.div>
            </div>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
