import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The Coffee" />
        <link rel="icon" href="/favicon.ico" />
        <title>The Coffee</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
