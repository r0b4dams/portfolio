import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { animated, config, useSpring, useSprings } from '@react-spring/web';
import { routes } from './routes';

interface Props {
  active: boolean;
  toggle: () => void;
}

export const NavOverlay: React.FC<Props> = ({ active, toggle }) => {
  const pathname = usePathname();

  const translation = useSpring({
    config: config.gentle,
    delay: 250,
    from: {
      x: '100%',
    },
    to: {
      x: active ? '0%' : '100%',
    },
  });

  const borders = useSprings(
    routes.length,
    routes.map((route) => ({
      immediate: true,
      from: {
        borderBottomColor: 'transparent',
      },
      to: {
        borderBottomColor: pathname === route.pathname ? route.color : 'transparent',
      },
    })),
  );

  return (
    <animated.div
      style={translation}
      className='fixed flex justify-center items-center z-50 top-[calc(10vh+32px)] right-[-50px] left-[-50px] bottom-0 md:hidden bg-slate-50 dark:bg-slate-900'
    >
      <ul className='font-bold text-3xl space-y-10'>
        {routes.map((route, i) => {
          return (
            <animated.li
              key={route.pathname}
              style={borders[i]}
              className='border-b-4'
              onClick={toggle}
            >
              <Link key={route.pathname} href={route.pathname}>
                {route.name}
              </Link>
            </animated.li>
          );
        })}
      </ul>
    </animated.div>
  );
};
