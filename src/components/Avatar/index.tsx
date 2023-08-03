'use client';

import NextImage from 'next/image';
import { animated, useSpring } from '@react-spring/web';

import avatar from './avatar.jpg';

const AnimatedImg = animated(NextImage);

export const Avatar: React.FC = () => {
  const [style, animation] = useSpring(() => ({ scale: 0, opacity: 0 }));

  const animate = () => {
    animation.start({ scale: 1, opacity: 1 });
  };

  return (
    <AnimatedImg
      onLoadingComplete={animate}
      src={avatar}
      className='avatar rounded-full'
      alt='avatar'
      style={style}
      height={164}
      width={164}
    />
  );
};
