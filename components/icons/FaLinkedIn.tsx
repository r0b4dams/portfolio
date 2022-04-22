import Image from 'next/image';

// thanks to Font Awesome for svg icon
const FaLinkedIn = () => (
  <Image
    src='/icons/linkedin.svg'
    alt='github'
    className={'bg-slate-50'}
    width={30}
    height={30}
  />
);

export default FaLinkedIn;
