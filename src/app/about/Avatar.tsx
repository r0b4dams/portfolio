'use client';

import Image from 'next/image';
import { animated, useSpring } from '@react-spring/web';

const AnimatedImg = animated(Image);

export const Avatar: React.FC = () => {
  const [style, animation] = useSpring(() => ({ scale: 0, opacity: 0 }));

  const animate = () => {
    animation.start({ scale: 1, opacity: 1 });
  };

  return (
    <AnimatedImg
      onLoadingComplete={animate}
      src='/images/avatar.jpg'
      className='avatar rounded-full'
      alt='avatar'
      style={style}
      height={164}
      width={164}
    />
  );
};
