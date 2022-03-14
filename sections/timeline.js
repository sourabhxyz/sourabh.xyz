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
const achievements = [
  {
    title: '2022',
    children: [
      {
        title: [
          { text: '(Jan) Learned Photoshop & Illustrator', linkText: '' },
        ],
        description:
          'As good product requires good art and being good with these tools allows oneself to express themself better.',
      },
      {
        title: [
          { text: '(Feb - Mar) Created ', linkText: '' },
          { text: 'sourabh.xyz', linkText: 'sourabh.xyz' },
        ],
        description:
          'A site for all my relevant info. Created using Next.js, Chakra-UI, Framer motion. Github link can be found here',
      },
    ],
  },
  {
    title: '2020-2021',
    children: [
      {
        title: [{ text: 'Started Crypto mining business', linkText: '' }],
        description:
          'First I used to cash out my mined Ethereum & other crypto assets but then after slowly realised their potential, I had them just left as it is. After learning about all the different protocols',
      },
      {
        title: [
          {
            text: 'Learned web development & smart contract platforms',
            linkText: '',
          },
        ],
        description: 'sldkfj',
      },
    ],
  },
  {
    title: 'College Era (2016-2020)',
    children: [
      {
        title: [
          {
            text: 'Started B. Tech in Computer Science from IIT Palakkad',
            linkText: '',
          },
        ],
        description:
          "Secured computer science stream in one of India's premium technology schools by being in top 0.4%",
      },
      {
        title: [
          {
            text: 'Secured all India rank 20 in preliminary ICPC 2018',
            linkText: '',
          },
        ],
        description:
          'See standing of our team, "team_light" here: https://www.codechef.com/rankings/ACMIND18',
      },
      {
        title: [
          {
            text: 'Secured all India rank 86 among ~4k participants in competitive programming contest conducted by Johnson & Johnson',
            linkText: '',
          },
        ],
        description: 'I am Osome!2',
      },
      {
        title: [
          {
            text: 'Selected by the Ministry of Youth Affairs & Sports, Govt. of India among 200 students to represent India as a youth delegate in the "Indian Youth Delegation to China - 2018"',
            linkText: '',
          },
        ],
        description: 'Fun seeing their culture',
      },
      {
        title: [
          { text: 'Internship at VMware (formely Avi Networks)', linkText: '' },
        ],
        description:
          'I upgraded logging packages to Go language (5x speedup) and did automation using Terraform and Ansible',
      },
      {
        title: [
          { text: 'Topped my stream & became gold medalist 🥇', linkText: '' },
        ],
        description:
          'By being consistently good with academics, I secured highest CGPA in my branch and thus received Gold medal 🥇',
      },
      {
        title: [{ text: 'BTP Appreciation award', linkText: '' }],
        description: 'hello!',
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
          <Fragment key={title}>
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
                        {title.map(({ text, linkText }, index) =>
                          linkText === '' ? (
                            <Box as={'span'} key={index}>
                              {text}
                            </Box>
                          ) : (
                            <NextLink href={linkText} passHref key={linkText}>
                              <Link isExternal={true}>{text}</Link>
                            </NextLink>
                          )
                        )}
                      </Heading>
                      <Text size="sm" width="full" textAlign={'left'}>
                        {description}
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
