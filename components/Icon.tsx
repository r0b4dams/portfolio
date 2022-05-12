import { CSSProperties } from 'react';
import icons from '../lib/icons';

const Icon: React.FC<{
  size?: number;
  icon: string;
  className?: string;
  style?: CSSProperties;
}> = ({ icon = '', size = 16, className = '', style = {} }) => {
  const { name, paths, fills, url } = icons[icon];
  return (
    <div className={`flex items-center space-x-1`}>
      <svg
        role='img'
        className={className}
        style={style}
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
    </div>
  );
};

export default Icon;
