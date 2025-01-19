import type { NextPage } from 'next';
import Head from 'next/head';
import Main from '@/components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Komalraj Portfolio</title>
        <meta name="description" content="Komalraj's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </>
  );
};

export default Home; 