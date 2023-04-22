import NextImage from "next/image";

export const Icon: React.FC<{
  size?: number;
  src: string;
  className?: string;
}> = ({ size = 16, src, className }) => {
  return <NextImage height={size} width={size} src={src} alt="" className={className} />;
};
