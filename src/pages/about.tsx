import Head from 'next/head';

import { AboutBanner } from '../components/AboutBanner';
import { AboutDetailBanner } from '../components/AboutDetailBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Música Brasileira | Sobre</title>
      </Head>

      <AboutBanner />
      <AboutDetailBanner />
    </>
  )
};