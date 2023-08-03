import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Link } from './Link';

export const Greeting: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Title />
      <Subtitle />
      <Link href='/about' />
    </div>
  );
};
