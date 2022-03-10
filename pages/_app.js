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
  * There is slight technicality with 100% & auto. 'auto' may have different behaviour for different tags. I think, avoid setting width to full. https://stackoverflow.com/questions/17468733/difference-between-width-auto-and-width-100-percent#:~:text=width%3A%20auto%3B%20will%20try%20as,without%20regards%20to%20the%20parent. At the same time, should set height to full (XD) https://stackoverflow.com/questions/15943009/difference-between-css-height-100-vs-height-auto#:~:text=height%3A%20100%25%20gives%20the%20element,the%20height%20of%20its%20children. Thing is, you will need to experiment based on your situation. For instance: for flexbox, if I put child's width as auto, it won't take the complete width of parent, if I do width='full' then it will obv take width of parent but at the same time adding margin at left will increase element's total width, though padding won't.

*/

/*

Known issues: 

  1. Anchor links doesn't navigate to their section if url is pasted in browser. This is because (I have verified) of me loading 'LaserLights' first and then going to 'Landing' page. I have coded it's solution in 'testing2'.


*/
