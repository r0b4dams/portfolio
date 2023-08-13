import { Heading } from './Heading';
import { Body } from './Body';

interface Props {
  children: React.ReactNode;
}

interface PageComponents {
  Heading: typeof Heading;
  Body: typeof Body;
}

export const Page: React.FC<Props> & PageComponents = ({ children }) => <>{children}</>;

Page.Heading = Heading;
Page.Body = Body;
