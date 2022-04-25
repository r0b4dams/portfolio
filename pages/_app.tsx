import '../styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

type NextPageWithLayout = NextPage & {
  isIntro?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  return Component.isIntro ? (
    <Component />
  ) : (
    <Layout page={<Component {...pageProps} />} />
  );
};

export default App;
