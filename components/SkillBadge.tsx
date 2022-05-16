import { CSSProperties } from 'react';
import icons from '../lib/icons';

const SkillBadge: React.FC<{
  size?: number;
  icon: string;
}> = ({ icon = '', size = 16 }) => {
  const { name, paths, fills, url } = icons[icon];
  return (
    <div className='flex items-center border p-1 rounded m-1 w-fit bg-white'>
      <svg
        role='img'
        viewBox='0 0 24 24'
        width={`${size}px`}
        height={`${size}px`}
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <title>{name}</title>
        {paths.map((path, idx) => (
          <path key={idx} d={path} fill={fills[idx]}></path>
        ))}
      </svg>
      <span className='pl-1 font-light'>{name}</span>
    </div>
  );
};

export default SkillBadge;
