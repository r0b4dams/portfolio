const ProjectContent: React.FC<{ heading: string }> = ({
  heading,
}): JSX.Element => {
  return (
    <div className='w-full md:w-1/2 p-2'>
      <h4 className='mb-3 text-2xl font-bold'>{heading}</h4>
      <div className='p-5'>
        <ul className='list-disc ml-5'>
          <li>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet!</li>
          <li>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet!</li>
          <li>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet!</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectContent;
