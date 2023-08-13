import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { animated, useSprings, useTrail } from '@react-spring/web';
import { routes } from './routes';

export const NavLinks: React.FC = () => {
  const pathname = usePathname();

  const trail = useTrail(routes.length, {
    from: {
      opacity: 0,
      y: 20,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const borders = useSprings(
    routes.length,
    routes.map((route) => {
      return {
        from: {
          width: '0%',
          backgroundColor: route.color,
        },
        to: {
          width: pathname === route.pathname ? '100%' : '0%',
        },
      };
    }),
  );

  return (
    <div className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        {trail.map((style, i) => {
          const route = routes[i];

          return (
            <animated.li key={i} style={style}>
              <div
                className={
                  pathname === route.pathname
                    ? 'pointer-events-none duration-100'
                    : 'hover:scale-125 duration-100'
                }
              >
                <Link href={route.pathname}>{route.name}</Link>
                <animated.div style={borders[i]} className='h-2 ' />
              </div>
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};
