import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => {

  // use for conditional rendering if 404
  // const is404 = Component.displayName === 'ErrorPage';
  return <Layout page={<Component {...pageProps} />} />;
};

export default App;
