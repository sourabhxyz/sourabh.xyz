import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// Following is to achieve smooth scroll for fragments, ref: https://github.com/vercel/next.js/issues/5136#issuecomment-633990141
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

/*
Few things to follow:
  * Don't use '100vw' as container is given a max width, and you don't want to override it.
*/

/*

Known issues: 

  1. Anchor links doesn't navigate to their section if url is pasted in browser. This is because (I have verified) of me loading 'LaserLights' first and then going to 'Landing' page. I have coded it's solution in 'testing2'.


*/
