import { useRouter } from 'next/router';
import Nav from './Nav';
import { getStyles } from '../utils';

const Header: React.FC = (): JSX.Element => {
  const router = useRouter();
  console.log(router.route);
  return (
    <>
      <header>
        <Nav />
        <div className='h-1 bg-blue-500 w-full'></div>
        <div className='h-1 bg-red-500 w-2/3'></div>
        <div className='h-1 bg-yellow-200 w-1/3'></div>
      </header>
    </>
  );
};

export default Header;
