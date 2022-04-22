import Image from 'next/image';

// thanks to Font Awesome for svg icon
const FaDeploy = () => (
  <Image
    src='/icons/deploy.svg'
    alt='github'
    className={'bg-slate-50'}
    width={30}
    height={30}
  />
);

export default FaDeploy;
