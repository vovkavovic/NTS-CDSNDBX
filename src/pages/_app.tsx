import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'tss-react';
import { createEmotionSsrAdvancedApproach } from 'tss-react/next';

const {
  augmentDocumentWithEmotionCache, withAppEmotionCache,
} = createEmotionSsrAdvancedApproach({ key: 'tss' });

export { augmentDocumentWithEmotionCache };

function Globals() {
  return (
    <GlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
          WebkitTapHighlightColor: 'transparent',
          overscrollBehavior: 'none',
          overscrollBehaviorBlock: 'none',
        },
        html: {
          minHeight: '100% !important',
          height: '100%',
        },
        body: {
          minHeight: '100% !important',
          height: '100%',
          fontWeight: 400,
          fontFamily: 'Helvetica, sans-serif',
          margin: 0,
          padding: 0,
        },
        '.page-root, .content-root': { height: '100% !important' },
        '#__next': {
          minHeight: '100% !important',
          height: '100%',
        },
      }}
    />
  );
}

function App({
  Component, pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
      </Head>
      <Globals/>
      <Component {...pageProps}/>
    </>
  );
}

export default withAppEmotionCache(App);

