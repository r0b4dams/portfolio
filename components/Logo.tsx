import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => (
  <Link href='/'>
    <a className='h-[50px] w-[50px] px-[30px] relative'>
      <Image src='/icons/logo.svg' alt='' layout='fill' />
    </a>
  </Link>
);

export default Logo;
