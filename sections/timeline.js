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

const fullStop = {
  text: '.',
  linkText: '',
};

const achievements = [
  {
    title: '2022',
    children: [
      {
        title: [
          { text: '(May - mid June) Created ', linkText: '' },
          {
            text: 'Tutorial on Solidity, Ethereum Virtual Machine (EVM), Hardhat, ethers.js, Damn Vulnerable Defi',
            linkText:
              'https://youtube.com/playlist?list=PLQENoiVb8xoP3Wd3onKrGtX2EO1JtFUG9',
          },
          fullStop,
        ],
        description: [
          {
            text: 'Beginner friendly, eyes friendly (4k) and time friendly (concise) course.',
            linkText: '',
          },
        ],
      },
      {
        title: [
          { text: '(Mar) Created ', linkText: '' },
          { text: 'prakash.love', linkText: 'https://prakash.love' },
          { text: ' [Not yet complete as waiting for content]', linkText: '' },
        ],
        description: [
          {
            text: 'One place website to get all available information of the personality I revere the most.',
            linkText: '',
          },
        ],
      },
      {
        title: [
          { text: '(Feb - Mar) Created ', linkText: '' },
          { text: 'sourabh.xyz', linkText: 'https://sourabh.xyz' },
        ],
        description: [
          {
            text: 'A site for all my relevant info. Created using ',
            linkText: '',
          },
          {
            text: 'Next.js',
            linkText: 'https://nextjs.org/',
          },
          {
            text: ', ',
            linkText: '',
          },
          {
            text: 'Chakra UI',
            linkText: 'https://chakra-ui.com/',
          },
          {
            text: ' & ',
            linkText: '',
          },
          {
            text: 'Framer motion',
            linkText: 'https://www.framer.com/motion/',
          },
          {
            text: '. Github link can be found ',
            linkText: '',
          },
          {
            text: 'here',
            linkText: 'https://github.com/sourabhxyz/sourabh.xyz',
          },
          fullStop,
        ],
      },
      {
        title: [
          { text: '(Jan) Learned Photoshop & Illustrator 🎨', linkText: '' },
        ],
        description: [
          {
            text: 'As good product requires good art. Also being good with these tools allows one to express themself better. Created all the art of this site myself.',
            linkText: '',
          },
          // {
          //   text: 'here',
          //   linkText:
          //     'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/106304303023789920371752653475848605360782709816354342763386990413081208684545',
          // },
          // {
          //   text: '.',
          //   linkText: '',
          // },
        ],
      },
    ],
  },
  {
    title: '2020-2021',
    children: [
      // {
      //   title: [
      //     {
      //       text: 'Prepared for Indian Civil Service Exam',
      //       linkText: '',
      //     },
      //   ],
      //   description: [
      //     {
      //       text: "Coming from a business family background, I didn't require job and thus wanted to explore for this exam. But... (see below event)",
      //       linkText: '',
      //     },
      //   ],
      // },
      {
        title: [
          {
            text: 'Started Crypto mining business & Graphic cards trading',
            linkText: '',
          },
        ],
        description: [
          {
            text: "By luck as I was selling my personal system, I came to realize about GPU mining and started amassing as many GPU's as I could. First I used to cash out my mined Ethereum & other crypto assets but then after slowly realising the potential of this technology, I started investing in crypto assets. Earlier I was of the opinion to gather as much Ethereum as I can but being in this field, I came to explore various DeFi protocols, which showed me how nascent is this space, their potential & thus I got inclined towards being developer here. And by the end of 2021, I made my decision to enter this field with full force.",
            linkText: '',
          },
        ],
      },
    ],
  },
  {
    title: 'College Era (2016-2020) @ IIT Palakkad',
    children: [
      {
        title: [
          {
            text: 'Topped Computer Science discipline & became gold medalist 🥇',
            linkText: '',
          },
        ],
        description: [
          {
            text: 'Secured highest CGPA in my discipline by being consistently good with academics and thus received Gold medal 🥇 ',
            linkText: '',
          },
          {
            text: 'here',
            linkText: 'https://youtu.be/DVCxygL8xoQ?t=7310',
          },
          {
            text: '. Received certificate for Academic Excellence in 2nd & 3rd year aswell, which can be seen ',
            linkText: '',
          },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/c364f346-962a-4c69-a887-2530ed96f0c5-623c5c1e',
          },
          fullStop,
        ],
      },
      {
        title: [{ text: 'BTP Appreciation award', linkText: '' }],

        description: [
          {
            text: 'Received certificate of Merit in appreciation of the excellent work done towards the final year B. Tech project titled, "Tiger to RISC V Compiler". Certificate can be viewed ',
            linkText: '',
          },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/6db3947b-cb62-4a8f-90cd-056118248ec5-623c5499',
          },
          fullStop,
        ],
      },
      {
        title: [
          {
            text: 'Internship at VMware (formerly Avi Networks)',
            linkText: '',
          },
        ],
        description: [
          {
            text: 'Upgraded logging packages to Go language (5x speedup) and did automation using Terraform and Ansible. Certificate can be viewed ',
            linkText: '',
          },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/04a698a0-911e-4c0f-b92d-89623f393141-623c54d4',
          },
          fullStop,
        ],
      },
      {
        title: [
          {
            text: 'Selected by the Ministry of Youth Affairs & Sports, Govt. of India among 200 students to represent India as a youth delegate in the "Indian Youth Delegation to China - 2018"',
            linkText: '',
          },
        ],
        description: [
          { text: 'Wrote report for the event ', linkText: '' },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/e90e274f-6f34-466e-8a08-b8df892bcf4d-623c72e7',
          },
          { text: ' and certificate ', linkText: '' },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/18d109df-fe3f-418f-ba0d-71d3dadc1cd7-623c6091',
          },
          fullStop,
        ],
      },

      {
        title: [
          {
            text: 'Secured all India rank 20 in preliminary ICPC 2018',
            linkText: '',
          },
        ],
        description: [
          {
            text: 'See standing of our team, "team_light" ',
            linkText: '',
          },
          {
            text: 'here',
            linkText: 'https://www.codechef.com/rankings/ACMIND18',
          },
          fullStop,
        ],
      },
      {
        title: [
          {
            text: 'Secured all India rank 86 among ~4k participants in competitive programming contest conducted by Johnson & Johnson',
            linkText: '',
          },
        ],
        description: [
          { text: 'Can see standing ', linkText: '' },
          {
            text: 'here',
            linkText:
              'https://www.hackerearth.com/challenges/competitive/JNJ-3addresscode-2019/leaderboard/page/2/',
          },
          { text: ' and certificate ', linkText: '' },
          {
            text: 'here',
            linkText:
              'https://www.odrive.com/s/39993368-f029-4d75-ae26-f90263125596-623c5f9b',
          },
          fullStop,
        ],
      },
      {
        title: [
          {
            text: 'Started B. Tech in Computer Science from IIT Palakkad',
            linkText: '',
          },
        ],
        description: [
          {
            text: "Secured computer science stream in one of India's premium technology schools by being in top 0.4% of ~1.3 million applicants.",
            linkText: '',
          },
        ],
      },
    ],
  },
];
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

export default function Timeline() {
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
