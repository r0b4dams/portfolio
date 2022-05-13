import Link from 'next/link';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <div className='h-1 w-full bg-blue-500'></div>
      <footer className='flex flex-col items-end'>
        <div className='self-center p-5'>
          <Link href='/contact'>
            <a>
              <div className='font-semibold'>Robert Adams © {year}</div>
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
