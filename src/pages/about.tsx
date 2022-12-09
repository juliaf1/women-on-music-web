import Head from 'next/head';

import { AboutBanner } from '../components/AboutBanner';
import { AboutDetailSections } from '../components/AboutDetailSections';

export default function Home() {
  return (
    <>
      <Head>
        <title>Música Brasileira | Sobre</title>
      </Head>

      <AboutBanner />
      <AboutDetailSections />
    </>
  )
};