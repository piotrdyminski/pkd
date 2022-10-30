import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../components/global-styles';
import Layout from '../components/layout';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Parafia Kielce-Dyminy</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          headings: { fontFamily: 'Cinzel, serif' },
          components: {
            UnstyledButton: {
              styles: {
                root: {
                  fontFamily: 'Cinzel, serif',
                },
              },
            },
            Button: {
              styles: {
                root: {
                  fontFamily: 'Cinzel, serif',
                },
              },
            },
            Text: {
              styles: {
                root: {
                  lineHeight: 1.7,
                },
              },
            },
          },
        }}
      >
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
