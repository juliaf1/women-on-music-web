import Head from 'next/head';

import { AboutBanner } from '../components/AboutBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Música Brasileira | Sobre</title>
      </Head>

      <AboutBanner />
    </>
  )
};