import Link from 'next/link';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <footer className='flex flex-col items-end'>
        <div className='h-1 bg-yellow-200 w-full'></div>
        {/* <div className='h-1 bg-red-500 w-2/3'></div>
        <div className='h-1 bg-blue-500 w-full'></div> */}

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
