/*
Few things to follow:
  * Don't use '100vw' as container is given a max width, and you don't want to override it.
  * Previously (https://github.com/sourabhxyz/sourabh.xyz/blob/6fdfede7f26581c8491e5bdcf4513dd088b3d2a5/pages/index.js#L22) anchor links didn't navigate to their section if url is pasted in browser. This is because (I have verified) of me loading 'LaserLights' first and then going to 'Landing' page.
*/

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head'
//
// Following is to achieve smooth scroll for fragments, reference: https://github.com/vercel/next.js/issues/5136#issuecomment-633990141
const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>sourabh.xyz</title>
        <meta name="description" content="About Sourabh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
