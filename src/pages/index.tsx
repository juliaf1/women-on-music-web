import Head from 'next/head';

import { HomeBanner } from '../components/HomeBanner';
import { stripe } from '../services/stripe';

import styles from '../styles/home.module.scss';

export interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
};

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Música Brasileira</title>
      </Head>

      <HomeBanner product={product} />
    </>
  )
};