import Link from 'next/link';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <footer className='flex flex-col items-end py-5'>
        <div className='self-center'>
          <Link href='/contact'>
            <a>
              <div className='font-semibold space-x-1'>
                <span className='border-b-blue-500 border-b'>Robert</span>
                <span className='border-b-red-500 border-b'>Adams</span>
                <span>©</span>
                <span className='border-b-yellow-200 border-b'>{year}</span>
              </div>
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
