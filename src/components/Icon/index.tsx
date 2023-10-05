import Image from 'next/image';

export const Icon: React.FC<{
  src: string;
  size?: number;
  className?: string;
}> = ({ size = 16, src, className }) => {
  return <Image height={size} width={size} src={src} alt='icon' className={`${className}`} />;
};
