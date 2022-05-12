import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => (
  <Link href='/'>
    <a className='h-[50px] aspect-square relative lg:h-[100px]'>
      <Image src={`/icons/drawing-1.svg`} alt='' layout='fill' />
    </a>
  </Link>
);

export default Logo;
