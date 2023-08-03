'use client';

import { animated, useTransition } from '@react-spring/web';

interface Props {
  children: React.ReactNode;
}

export const AnimatedPage: React.FC<Props> = ({ children }) => {
  const pageTransition = useTransition(children, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });
  return pageTransition((style) => (
    <animated.main style={style} className='flex flex-col container grow px-5'>
      {children}
    </animated.main>
  ));
};
