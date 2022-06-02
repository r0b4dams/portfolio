import Link from 'next/link';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <footer className='flex flex-col items-center py-10'>
        <div className=''>
          <Link href='/contact'>
            <a
              className={
                router.pathname === '/contact'
                  ? 'pointer-events-none font-semibold space-x-1'
                  : 'font-semibold space-x-1'
              }
            >
              <span className='border-b-blue-500 border-b'>Robert</span>
              <span className='border-b-red-500 border-b'>Adams</span>
              <span>©</span>
              <span className='border-b-yellow-200 border-b'>{year}</span>
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
