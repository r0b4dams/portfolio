import Nav from './Nav';
import { useRouter } from 'next/router';
import { useSpring, animated } from 'react-spring';

const blueMap: { [key: string]: string } = {
  '/projects': '100%',
  '/about': '33%',
  '/contact': '66%',
};

const redMap: { [key: string]: string } = {
  '/projects': '66%',
  '/about': '100%',
  '/contact': '33%',
};

const yellowMap: { [key: string]: string } = {
  '/projects': '33%',
  '/about': '66%',
  '/contact': '100%',
};

const Header: React.FC = (): JSX.Element => {
  const router = useRouter();
  const blueStyle = useSpring({
    from: { width: '0%' },
    to: { width: blueMap[router.pathname] ?? '0%' },
  });
  const redStyle = useSpring({
    from: { width: '0%' },
    to: { width: redMap[router.pathname] ?? '0%' },
  });
  const yellowStyle = useSpring({
    from: { width: '0%' },
    to: { width: yellowMap[router.pathname] ?? '0%' },
  });

  return (
    <>
      <header>
        <Nav />
        <div className='space-y-1'>
          <animated.div
            style={blueStyle}
            className='h-2 bg-[#0000ff] relative z-10'
          ></animated.div>
          <animated.div
            style={redStyle}
            className='h-2 bg-[#ff0000] relative z-10'
          ></animated.div>
          <animated.div
            style={yellowStyle}
            className='h-2 bg-[#ffff00] relative z-10'
          ></animated.div>
        </div>
      </header>
    </>
  );
};

export default Header;
