import Image from 'next/image';

const Icon: React.FC<{ src: string; className: string }> = ({
  src,
  className,
}): JSX.Element => (
  <div>
    <Image src={src} alt='' className={className} height={25} width={25} />
  </div>
);

export default Icon;
