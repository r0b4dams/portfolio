interface Props {
  features: string[];
}

export const ProjectFeatures: React.FC<Props> = ({ features }) => {
  return (
    <div id='features' className='mt-3'>
      <h2 className='font-medium'>Features</h2>
      <ul className='space-y-3 font-thin pr-5'>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};
