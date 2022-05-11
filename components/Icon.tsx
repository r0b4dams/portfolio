import { CSSProperties } from 'react';
import icons from '../lib/icons';

const Icon: React.FC<{
  size?: number;
  color?: string;
  icon: string; // name of icon
  className?: string;
  style?: CSSProperties;
  viewBox?: string;
}> = ({
  size = 16,
  icon = '',
  color,
  className = '',
  style = {},
  viewBox = '0 0 24 24',
}) => {
  const data = icons[icon];
  return (
    <svg
      className={className}
      style={style}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path fill={color ? color : data.color} d={data.path} />
    </svg>
  );
};

export default Icon;
