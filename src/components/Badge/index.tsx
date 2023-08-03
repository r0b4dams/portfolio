import { icons } from '@/lib/icons';
import { Icon } from '../Icon';
import { filterDarkMode } from '@/utils/filterDarkMode';

interface Props {
  text?: string;
  skill: string;
  size?: number;
}

export const Badge: React.FC<Props> = ({ text, skill = '', size = 24 }) => {
  const { name, path } = icons[skill];

  return (
    <div className='flex items-center w-fit bg-slate-50 bg-opacity-10 rounded p-1 mr-1 mb-1 border dark:border-slate-600'>
      <Icon src={path} size={size} className={filterDarkMode(skill)} />
      <span className='px-2 font-light text-md'>{text || name}</span>
    </div>
  );
};
