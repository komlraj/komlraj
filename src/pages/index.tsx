import type { NextPage } from 'next';
import Head from 'next/head';
import Skills from '@/components/Skills';
import ExperiencesAndEducation from '@/components/ExperiencesAndEductaion';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Komalraj Portfolio</title>
        <meta name="description" content="Komalraj's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Your components here */}
        <Skills skills={[/* your skills data */]} />
        <ExperiencesAndEducation />
      </main>
    </div>
  );
};

export default Home; 