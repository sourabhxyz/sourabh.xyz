import {
  Container,
  Text,
  Box,
  Heading,
  Icon,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { navHeight } from '../globalVars';
import Timeline from '../components/timeline';
import { ChevronDownIcon } from '@chakra-ui/icons';
import HeroBg from '../components/heroBg';
import BioWorksBg from '../components/bioWorksBg';
import NextLink from 'next/link';
import Link from 'next/link';

const MotionContainer = motion(Container);
const MotionIcon = motion(Icon);
const MotionBox = motion(Box);
const containerSize = '768px'; // container.md
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const sentence = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.09,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Home() {
  return (
    // My initial animation of x moving from 100% to 0 is causing issues for mobile screens where width then becomes 50%. Discussion here https://stackoverflow.com/questions/68911663/framer-motion-animation-causes-website-to-expand & here https://github.com/framer/motion/issues/987. Instead of applying their fixes now, I have decided to see it once the site is complete. 
    <MotionContainer
      maxW={containerSize}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <Hero />
      <BioWorks />
    </MotionContainer>
  );
}

function Hero() {
  const headingFW = '600';
  const headingFS = { base: 'xl', sm: '2xl', lg: '3xl' };
  const textFW = '600';
  const textFS = { base: 'sm', sm: 'md', lg: 'lg' };
  const subTextFS = { base: 'xs', sm: 'sm', lg: 'sm' };
  return (
    <Box
      // w={'auto'} // this is an issue because 1. default is already auto I believe, 2. there is no width of container set.
      h={`calc(100vh - ${navHeight})`} // since height is fixed here, if our svg requires more height, it won't be able to take it, i.e., there won't be any overflow.
      position={'relative'}
    >
      <Box position={'absolute'} bottom={'0px'} left={'0px'} zIndex={'-1'}>
        <HeroBg />
      </Box>
      <NextLink href='#timeline'>
        <MotionIcon
          as={ChevronDownIcon}
          position={'absolute'}
          bottom="20px"
          left="50%"
          boxSize={'2em'}
          color="black"
          cursor="pointer"  // somehow cursor is not having pointer on hover, so need to explicitly mention.
          animate={{
            y: ['0px', '2px', '0px'],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: 'Infinity',
            repeatType: 'reverse',
            duration: '2',
            repeatDelay: '3',
            delay: '3',
          }}
        >
        </MotionIcon>
      </NextLink>
      {/* ref for motion text using framer: https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d */}
      <MotionFlex
        alignItems={'center'}
        justifyContent={'center'}
        w="auto"
        h="full"
        direction={'column'}
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        <HStack backdropFilter={'blur(15px)'} borderRadius="2xl" p="10px">
          <MotionText
            fontWeight={headingFW}
            fontSize={headingFS}
            // position={'relative'}
            // _after={{
            //   content: "''",
            //   width: 'full',
            //   height: '30%',
            //   position: 'absolute',
            //   bottom: 1,
            //   left: 0,
            //   bg: 'red.200',
            //   zIndex: -1,
            // }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              repeat: 'Infinity',
              repeatDelay: '4',
            }}
          >
            👋
            {/* {'👋!'.split('').map((char, index) => {
              return (
                <MotionBox as={'span'} key={index} variants={letter}>
                  {char}
                </MotionBox>
              );
            })} */}
          </MotionText>
          <MotionText fontWeight={headingFW} fontSize={headingFS}>
            {'Meet'.split('').map((char, index) => {
              return (
                <MotionBox as={'span'} key={index} variants={letter}>
                  {char}
                </MotionBox>
              );
            })}
          </MotionText>
          <MotionText
            position={'relative'}
            fontWeight={headingFW}
            fontSize={headingFS}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.200',
              zIndex: -1,
            }}
          >
            {'Sourabh'.split('').map((char, index) => (
              <MotionBox as={'span'} key={index} variants={letter}>
                {char}
              </MotionBox>
            ))}
          </MotionText>
        </HStack>
        <HStack backdropFilter={'blur(5px)'} borderRadius="xl" pt="8px">
          <MotionText fontWeight={textFW} fontSize={textFS} variants={letter}>
            Full stack
          </MotionText>
          <Text
            fontWeight={textFW}
            fontSize={textFS}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'blue.200',
              zIndex: -1,
            }}
          >
            {'web3'.split('').map((char, index) => {
              return (
                <MotionBox as={'span'} key={index} variants={letter}>
                  {char}
                </MotionBox>
              );
            })}
          </Text>
          <Text fontWeight={textFW} fontSize={textFS}>
            {'developer'.split('').map((char, index) => {
              return (
                <MotionBox as={'span'} key={index} variants={letter}>
                  {char}
                </MotionBox>
              );
            })}
          </Text>
        </HStack>
        <HStack backdropFilter={'blur(5px)'} borderRadius="xl" pt="6px">
          <MotionText fontWeight={textFW} fontSize={subTextFS} variants={letter} color={"purple"}>
            λ
          </MotionText>
          <MotionText fontWeight={textFW} fontSize={subTextFS} variants={letter}>
            Haskell, Cardano, ZKP & Solidity
          </MotionText>
        </HStack>
      </MotionFlex>
    </Box>
  );
}

function BioWorks() {
  const headingFW = '600';
  const headingFS = { base: 'xl', sm: '2xl', lg: '3xl' };

  // -------------------------
  // Timeline variables
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
            { text: '(Oct) Wrote a tutorial on ', linkText: '' },
            {
              text: 'Segment trees (lazy & persistent) in Haskell',
              linkText: 'https://www.reddit.com/r/haskell/comments/xzlhs4/segment_tress_lazy_persistent_in_haskell/',
            },
          ],
          description: [
          ],
        },
        {
          title: [
            { text: '(Early July) Created ', linkText: '' },
            {
              text: 'Tutorial on Zero Knowledge Proofs (specifically zkSNARKs) in collaboration with cryptonaukri.com',
              linkText: '',
            },
          ],
          description: [
            {
              text: 'First part',
              linkText: 'https://www.youtube.com/watch?v=1tw2wB5i9z8',
            },
            {
              text: ' and ',
              linkText: '',
            },
            {
              text: 'Second part',
              linkText: 'https://www.youtube.com/watch?v=wYdzIwqZBQ0',
            },
            fullStop,
          ],
        },
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
              text: 'As good product requires good art. Also being good with these tools allows one to express themselves better. Created all the art of this site myself.',
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
              text: "Making a living from crypto, I was naturally inclined to invest in crypto and that's when I came to explore various DeFi protocols, which showed me how nascent is this space. Thus, by the end of 2021, I made my decision to become full time developer in this field.",
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
              text: 'Secured highest CGPA in my discipline by being consistently good with academics and thus received Gold medal 🥇 [See ',
              linkText: '',
            },
            {
              text: 'here',
              linkText: 'https://youtu.be/DVCxygL8xoQ?t=7310',
            },
            {
              text: ']. Received certificate for Academic Excellence in 2nd & 3rd year aswell, which can be seen ',
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
  // -------------------------
  return (
    // to see how to have full height relative background see: https://github.com/sourabhxyz/sourabh.xyz/commit/772b43eedd2ff994c750ed8e3027c7adbf36bcf9 there I also have logic to get height of container. Since I don't need full background, also I can't have this footer as full background as then text will go over it. Thanks to https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46 for help with bottom sticky.
    <Box position={'relative'} id="timeline" paddingTop={navHeight}>
      <Box paddingLeft={'20px'}>
        <Heading
          position={'relative'}
          fontWeight={headingFW}
          fontSize={headingFS}
          _after={{
            content: "''",
            width: '120px',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bgGradient: 'linear(to-r, red.200, blue.200)',
            zIndex: -1,
          }}
        >
          Timeline
        </Heading>
        <Timeline achievements={achievements}/>
      </Box>
      <Box
        position={'sticky'}
        bottom={'0'}
        backdropFilter={'blur(10px)'}
        zIndex={'1'}
        marginTop={'10px'}
      >
        <BioWorksBg />
      </Box>
    </Box>
  );
}
