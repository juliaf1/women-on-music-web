import { AppProps } from 'next/app';

import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({
  Component,
  pageProps: { ...pageProps }
}: AppProps) {
  return(
    <>
      <div className="degradeBackground" />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
