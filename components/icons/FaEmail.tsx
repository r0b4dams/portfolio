import Image from 'next/image';

// thanks to Font Awesome for svg icon
const FaEmail = () => (
  <Image
    src='/icons/email.svg'
    alt='github'
    className={'bg-slate-50'}
    width={30}
    height={30}
  />
);

export default FaEmail;
