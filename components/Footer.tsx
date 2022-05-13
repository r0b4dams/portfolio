import Link from 'next/link';
import { useRouter } from 'next/router';

const year = new Date().getFullYear();

const Footer: React.FC = (): JSX.Element => {
  const router = useRouter();
  console.log(router.route);

  const color = (() => {
    switch (router.route) {
      case '/projects':
        return 'bg-yellow-200';
      case '/about':
        return 'bg-red-500';
      case '/contact':
        return 'bg-blue-500';
      default:
        return 'bg-yellow-200';
    }
  })();

  return (
    <>
      <div className={`h-1 w-full ${color}`}></div>
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
