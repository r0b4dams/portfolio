import Image from 'next/image';

const ProjectImage: React.FC<{ source: string }> = ({
  source,
}): JSX.Element => {
  return (
    <div className='w-full md:w-1/2 p-1'>
      <div className='flex'>
        <Image
          src={source}
          alt=''
          layout='intrinsic'
          height={360}
          width={640}
        />
      </div>
    </div>
  );
};

export default ProjectImage;
