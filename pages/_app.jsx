import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={ session }>
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  </SessionProvider>
);

export default App;