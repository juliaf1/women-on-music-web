import Head from 'next/head';

import { HomeBanner } from '../components/HomeBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Música Brasileira | Início</title>
      </Head>

      <HomeBanner />
    </>
  )
};