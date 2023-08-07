'use client';

import { useEffect } from 'react';
import { animated, config, useSpring } from '@react-spring/web';

const STROKE_DASH_ARRAY = 100;

export const IntroAnimation: React.FC = () => {
  const [{ x }, animation] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    animation.start({ x: 1, config: config.molasses });
  }, [animation]);

  const strokeDashoffset = x.to((x) => (1 - x) * 100);

  return (
    <svg
      role='img'
      className='aspect-square w-[300px] md:w-[600px]'
      viewBox='0 0 24.0 24.0'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g strokeLinecap='round' strokeLinejoin='round'>
        <animated.rect
          id='rectangle'
          fill='none'
          stroke='#E70503'
          strokeWidth={0.5}
          strokeLinecap='round'
          strokeDasharray={STROKE_DASH_ARRAY}
          strokeDashoffset={strokeDashoffset}
          width='10'
          height='22'
          x='13'
          y='1'
        />
        <animated.path
          id='triangle'
          fill='none'
          stroke='#FDDE06'
          strokeWidth={0.5}
          strokeLinecap='round'
          strokeDasharray={STROKE_DASH_ARRAY}
          strokeDashoffset={strokeDashoffset}
          d='M 1,23 H 13 L 7,11 Z'
        />
        <animated.circle
          id='circle'
          fill='none'
          stroke='#0300AD'
          strokeWidth={0.5}
          strokeLinecap='round'
          strokeDasharray={STROKE_DASH_ARRAY}
          strokeDashoffset={strokeDashoffset}
          cx='13'
          cy='17'
          r='6'
        />
      </g>
    </svg>
  );
};
