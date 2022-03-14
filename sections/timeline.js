import {
  List,
  ListItem,
  Box,
  Flex,
  HStack,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

const achievements = [
  {
    title: 'College Era',
    children: [
      {
        title: 'First - Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
    ],
  },
  {
    title: 'Something',
    children: [
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
    ],
  },

  {
    title: 'Mining Era',
    children: [
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Joined IIT PKD3',
        description: 'I am Osome!3',
      },
      {
        title: 'Joined IIT PKD1',
        description: 'I am Osome!1',
      },
      {
        title: 'Joined IIT PKD2',
        description: 'I am Osome!2',
      },
      {
        title: 'Last - Joined IIT PKD3',
        description: 'I am Osome!3',
      },
    ],
  },
];
function getPixel(str) {
  // let whiteSpaceCount = 0;
  // str.split('').map((ch) => {
  //   if (ch === ' ') {
  //     whiteSpaceCount = whiteSpaceCount + 1;
  //   }
  // });
  // // characters need more pixels whereas whitespace requires less.
  // const pixels =
  //   (str.length - whiteSpaceCount) * (100 / 10) + whiteSpaceCount * (100 / 10);
  // console.log(str, ' ', whiteSpaceCount, ' ', pixels);
  // return `${pixels}px`;
  if (typeof window !== 'undefined') {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    return `${context.measureText(str).width * 2}px`;
  } else {
    return '100px';
  }
}

export default function Timeline() {
  const headingFW = '600';
  const headingFS = { base: 'sm', sm: 'md', lg: 'lg' };
  const textFW = '600';
  const textFS = { base: 'xl', sm: '2xl', lg: '3xl' };
  return (
    <List paddingBottom={4}>
      {achievements.map(({ title, children }, index) => {
        return (
          <>
            <Heading
              fontSize={headingFS}
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
                  key={title}
                  zIndex={1}
                  paddingTop={4}
                  position="relative"
                >
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
                        {title}
                      </Heading>
                      <Text size="sm" width="full" textAlign={'left'}>
                        {description}
                      </Text>
                    </VStack>
                  </HStack>
                </ListItem>
              );
            })}
          </>
        );
      })}
    </List>
  );
}
