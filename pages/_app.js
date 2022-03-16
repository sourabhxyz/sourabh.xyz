import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
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
