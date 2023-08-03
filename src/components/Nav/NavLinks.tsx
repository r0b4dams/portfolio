import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { animated, useSprings, useTrail } from '@react-spring/web';
import { routes } from './routes';

export const NavLinks: React.FC = () => {
  const location = useRouter().pathname;

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
          width: location === route.path ? '100%' : '0%',
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
                  location === route.path
                    ? 'pointer-events-none duration-100'
                    : 'hover:scale-125 duration-100'
                }
              >
                <NextLink href={route.path}>{route.name}</NextLink>
                <animated.div style={borders[i]} className='h-2 ' />
              </div>
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};
