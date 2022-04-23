import Image from 'next/image';

const Icon: React.FC<{
  src: string;
  className: string;
  height?: number;
  width?: number;
}> = ({ src, className, height = 30, width = 30 }): JSX.Element => {
  return (
    <div className='flex'>
      <Image
        src={src}
        alt=''
        className={className}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Icon;
