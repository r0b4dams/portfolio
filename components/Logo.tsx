import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => (
  <Link href='/'>
    <a className='h-[50px] aspect-square lg:h-[100px] relative z-10'>
      <svg
        id='logo'
        className='h-full w-full'
        width='24.0px'
        height='24.0px'
        viewBox='0 0 24.0 24.0'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          stroke='#ff0000'
          strokeWidth='2'
          d='M 3.7271811,2 21.343297,22.53033'
          id='red'
        />
        <path
          fill='none'
          stroke='#0000ff'
          strokeWidth='2'
          d='m 3.7271811,2 h 6.4999999 c 2.643593,2e-7 4.624355,1.1435937 5.696152,3 1.071797,1.8564065 1.071797,4.1435935 0,6 -1.071797,1.856405 -3.052559,3 -5.696152,3 H 8.7271811'
          id='blue'
        />
        <path
          fill='none'
          stroke='#ffff00'
          strokeWidth='2'
          d='M 3.7271811,2 V 23'
          id='yellow'
        />
      </svg>
    </a>
  </Link>
);

export default Logo;
