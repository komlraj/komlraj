import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '@/components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Komal Raj</title>
        <meta name="description" content="Komalraj's portfolio website" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Main />
    </>
  );
};

export default Home; 