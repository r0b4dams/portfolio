import Icon from './Icon';
import icons from '../lib/icons';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className='bg-white border-t-4 border-blue-500 flex flex-col items-center justify-center p-5'>
      <div className='flex flex-col items-center space-y-5'>
        <ul className='flex space-x-10'>
          <li className=''>
            <Icon icon={'gmail'} size={32} />
          </li>
          <li>
            <Icon icon={'linkedin'} size={32} />
          </li>
          <li>
            <Icon icon={'github'} size={32} />
          </li>
        </ul>
        <div className='font-semibold'>Robert Adams © {year}</div>
      </div>
    </footer>
  );
};

export default Footer;
