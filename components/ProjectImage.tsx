import Image from 'next/image';

const ProjectImage: React.FC<{ source: string }> = ({
  source,
}): JSX.Element => {
  return (
    <div className='flex'>
      <Image src={source} alt='' layout='intrinsic' height={360} width={640} />
    </div>
  );
};

export default ProjectImage;
