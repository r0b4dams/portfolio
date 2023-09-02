import { Heading } from './Heading';
import { Body } from './Body';

interface Props {
  children: React.ReactNode;
}

interface AppPage extends React.FC<Props> {
  Heading: typeof Heading;
  Body: typeof Body;
}

export const Page: AppPage = ({ children }) => {
  return <main className='container flex flex-col grow px-3 md:px-0'>{children}</main>;
};

Page.Heading = Heading;
Page.Body = Body;
