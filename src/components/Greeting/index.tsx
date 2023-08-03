import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { AppLink } from './AppLink';

export const Greeting: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Title />
      <Subtitle />
      <AppLink href='/about' />
    </div>
  );
};
