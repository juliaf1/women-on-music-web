import Head from 'next/head';

import { HomeBanner } from '../components/HomeBanner';
import { stripe } from '../services/stripe';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Música Brasileira</title>
      </Head>

      <HomeBanner />
    </>
  )
};