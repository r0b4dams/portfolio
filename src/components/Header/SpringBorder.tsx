'use client';

import data from './springs.json';
import { usePathname } from 'next/navigation';
import { animated, useSprings } from '@react-spring/web';

interface IWidthItem {
  color: string;
  widths: {
    [key: string]: string;
  };
}

export const SpringBorder: React.FC = () => {
  const pathname = usePathname();

  const springs = useSprings(
    data.length,
    data.map((item: IWidthItem) => ({
      from: { width: '0%', backgroundColor: item.color },
      to: { width: item.widths[pathname] ?? '100%' },
    })),
  );

  return (
    <div className='space-y-1'>
      {springs.map((style, idx) => (
        <animated.div key={idx} style={style} className='h-2' />
      ))}
    </div>
  );
};
