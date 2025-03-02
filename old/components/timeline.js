import {
  List,
  ListItem,
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { Fragment } from 'react';

function getPixel(str) {
  // logic reference: https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics/width & https://stackoverflow.com/a/14291586/11183512 & https://stackoverflow.com/questions/58704990/calculate-pixel-width-of-text-without-knowing-font-in-react-javascript
  if (typeof window !== 'undefined') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    return `${context.measureText(str).width * 2}px`;
  } else {
    return '100px';
  }
}

export default function Timeline({ achievements }) {
  return (
    <List>
      {achievements.map(({ title, children }, index) => {
        return (
          <Fragment key={index}>
            <Heading
              fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }}
              paddingTop={'30px'}
              position={'relative'}
              _after={{
                content: "''",
                width: getPixel(title),
                height: '10%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.100',
                // bgGradient: 'linear(to-r, red.00, blue.200)',
                zIndex: -1,
              }}
            >
              {title}
            </Heading>
            {children.map(({ title, description }, index) => {
              const isLastElement = index === children.length - 1;
              const isFirstElement = index === 0;
              return (
                <ListItem
                  key={index}
                  zIndex={1}
                  paddingTop={4}
                  position="relative"
                >
                  {children.length > 1 ? (
                    <Flex
                      left="5px"
                      top={isFirstElement ? 5 : 0}
                      width="2.5px"
                      bottom={0}
                      height={isLastElement ? 5 : 'unset'}
                      zIndex={-1}
                      position="absolute"
                      backgroundColor="gray.100"
                    />
                  ) : null}

                  <HStack
                    // width="full"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                  >
                    <Box
                      minWidth="14px"
                      height="14px"
                      marginTop={1}
                      borderRadius="full"
                      bgGradient={'linear(to-r, red.500, blue.500)'}
                    />

                    <VStack
                      // width="full"
                      spacing={2}
                      textAlign="left"
                    >
                      <Heading width="full" size="xs" textAlign="left">
                        {title.map(({ text, linkText }, index) =>
                          linkText === '' ? (
                            <Box as={'span'} key={index}>
                              {text}
                            </Box>
                          ) : (
                            <NextLink href={linkText} passHref key={index}>
                              <Link isExternal={true} color="blue">
                                {text}
                              </Link>
                            </NextLink>
                          )
                        )}
                      </Heading>
                      <Text size="sm" width="full" textAlign={'left'}>
                        {description.map(({ text, linkText }, index) =>
                          linkText === '' ? (
                            <Box as={'span'} key={index}>
                              {text}
                            </Box>
                          ) : (
                            <NextLink href={linkText} passHref key={index}>
                              <Link isExternal={true} color="blue">
                                {text}
                              </Link>
                            </NextLink>
                          )
                        )}
                      </Text>
                    </VStack>
                  </HStack>
                </ListItem>
              );
            })}
          </Fragment>
        );
      })}
    </List>
  );
}
