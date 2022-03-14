// Motivation: https://dexpools.com/

import {
  Container,
  Text,
  Box,
  Heading,
  Icon,
  Flex,
  Button,
  HStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { navHeight } from '../globalVars';
import Timeline from './timeline';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import HeroBg from '../components/heroBg';
import BioWorksBg from '../components/bioWorksBg';

const MotionContainer = motion(Container);
const MotionIcon = motion(Icon);
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);
const containerSize = '768px'; // container.md
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const sentence = {
  hidden: {},
  visible: {
    transition: {
      dealy: 0.5,
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

export default function Landing() {
  return (
    /* 
    My initial animation of 
      c
    is causing issues for mobile screens where width then becomes 50%. Discussion here https://stackoverflow.com/questions/68911663/framer-motion-animation-causes-website-to-expand & here https://github.com/framer/motion/issues/987. Instead of applying there fixes now, I have decided to see it once the site is complete. 
    */
    <MotionContainer
      maxW={containerSize}
      // overflow={'hidden'}
      // position={'relative'}
      // bg="white"
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
  return (
    <Box
      // w={'auto'} // this is an issue because 1. default is already auto I believe, 2. there is no width of container set.
      h={`calc(100vh - ${navHeight})`} // since height is fixed here, if our svg requires more height, it won't be able to take it, i.e., there won't be any overflow.
      // bgImage={'url(/heroBg.svg)'}
      // https://stackoverflow.com/a/30679082/11183512
      // bgSize={'cover'}
      // https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
      // bgSize={`auto calc(100vh - ${navHeight})`}
      // 'no-repeat' is not needed when 'bgSize' is 'cover'.
      // bgRepeat={'no-repeat'}
      // need bgPosition as explained here: https://www.youtube.com/watch?v=3T_Jy1CqH9k when setting 'bgSize' as 'cover'.
      // bgPosition={'bottom left'}
      position={'relative'}
    >
      <Box position={'absolute'} bottom={'0px'} left={'0px'} zIndex={'-1'}>
        <HeroBg />
      </Box>
      <MotionIcon
        as={ChevronDownIcon}
        position={'absolute'}
        bottom="20px"
        left="50%"
        boxSize={'2em'}
        color="black"
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
      ></MotionIcon>
      {/* Need to be very careful here. Increasing left may get text to overflow (basically an issue for long works like Unleashing), ruining the mobile experience. */}
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
        // h={`calc(100vh - ${navHeight})`}
      >
        <HStack
          backdropFilter={'blur(10px)'}
          borderRadius="2xl"
          p="10px"
          // initial={{ opacity: 0, y: '-250px' }}
          // animate={{ opacity: 1, y: '0px' }}
        >
          <MotionText
            fontWeight={headingFW}
            fontSize={headingFS}
            position={'relative'}
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
            {'Swasti!'.split('').map((char, index) => {
              return (
                <MotionBox
                  as={'span'}
                  key={char + '-' + index}
                  variants={letter}
                >
                  {char}
                </MotionBox>
              );
            })}
          </MotionText>
          <MotionText fontWeight={headingFW} fontSize={headingFS}>
            {'Meet'.split('').map((char, index) => {
              return (
                <MotionBox
                  as={'span'}
                  key={char + '-' + index}
                  variants={letter}
                >
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
              bg: 'blue.200',
              zIndex: -1,
            }}
          >
            {'Sourabh'.split('').map((char, index) => (
              <MotionBox as={'span'} key={char + '-' + index} variants={letter}>
                {char}
              </MotionBox>
            ))}
          </MotionText>
        </HStack>
        <HStack backdropFilter={'blur(5px)'} borderRadius="xl" p="10px">
          <MotionText fontWeight={textFW} fontSize={textFS} variants={letter}>
            Full stack
          </MotionText>
          <Text fontWeight={textFW} fontSize={textFS}>
            {'web3'.split('').map((char, index) => {
              return (
                <MotionBox
                  as={'span'}
                  key={char + '-' + index}
                  variants={letter}
                >
                  {char}
                </MotionBox>
              );
            })}
          </Text>
          <Text fontWeight={textFW} fontSize={textFS}>
            {'developer'.split('').map((char, index) => {
              return (
                <MotionBox
                  as={'span'}
                  key={char + '-' + index}
                  variants={letter}
                >
                  {char}
                </MotionBox>
              );
            })}
          </Text>
        </HStack>
        {/* <Heading
          fontFamily="Faster One"
          // this overflowwrap won't work with w='auto'
          overflowWrap="break-word"
          w="full"
          // margin will increase width but padding won't so use padding.
          // paddingLeft={'100px'}
          textAlign={'center'}
        >
          Unleashing Defi!
        </Heading>
        <Text textAlign={'center'}>Meet Web3 Developer</Text> */}
      </MotionFlex>
    </Box>
  );
}

function BioWorks() {
  const headingFW = '600';
  const headingFS = { base: 'xl', sm: '2xl', lg: '3xl' };
  const textFW = '600';
  const textFS = { base: 'xl', sm: '2xl', lg: '3xl' };
  /* The purpose of following logic is to get height of content */
  const [timeLineHeight, setTimeLineHeight] = useState(0);
  const timeLineRef = useRef(null);

  useEffect(() => {
    setTimeLineHeight(timeLineRef.current.clientHeight);
  }, []); // an empty dependency array so that it runs only once at render.
  return (
    // an aliter could be background-attachment. https://stackoverflow.com/a/36532574/11183512 but I avoided it as it isn't supported in safari. It might have a workaround though: https://css-tricks.com/the-fixed-background-attachment-hack/ but I am happy with my solution.
    // My solution only has one issue: https://stackoverflow.com/a/13546011/11183512 https://stackoverflow.com/questions/13545947/position-absolute-and-parent-height one can easily fix this by putting overflow: 'hidden' but for me it adds another scroll bar (which could be preferrable) but I am using JS solution.
    <Box
      position={'relative'}
      h={timeLineHeight}
      id="bio-works"
      // h="100%"
      // overflow="hidden"
      // height={'1%'}
      // h={'auto'}
    >
      <Box
        position={'sticky'}
        top={'0px'}
        // w={'full'}
        h="100vh"
        // w="full"
        // zIndex={'5'}
        // h={'calc(100vh - 60px)'}
        // bg="red"
        // opacity={'50%'}
        // bgImage={
        //   'url(https://c8.alamy.com/comp/FJ0JN2/businessman-wearing-black-suit-throwing-newspaper-in-the-air-FJ0JN2.jpg)'
        // }
        // bgSize={'cover'}
        // bgPosition={'center center'}
        // id="findme"
      >
        <Box
          position={'absolute'}
          bottom={'0px'}
          left={'0px'}
          id="ajay"
          backdropFilter={'blur(10px)'}
        >
          <BioWorksBg />
        </Box>
        {/* <Icon
      position={}
      
      >
        
      </Icon>   */}
      </Box>
      <Box
        position={'absolute'}
        top={'0px'}
        ref={timeLineRef}
        paddingLeft={'20px'}
        // paddingTop={'60px'}
        paddingBottom={'85px'}
        zIndex={'-1'}
      >
        <Heading
          position={'relative'}
          fontWeight={headingFW}
          fontSize={headingFS}
          // borderBottom={1}
          // borderStyle={'solid'}
          // borderColor={'gray.200'}
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
        {Timeline()}
      </Box>
      {/* <MotionText
        align="center"
        fontFamily="Faster One"
        color="black"
        fontSize="50px"
        whileHover={{
          // scale: 1.5,
          textShadow: '0px 0px 8px rgb(255, 255, 255)',
        }}
        animate={
          {
            // fontSize: '0px',
          }
        }
        // letterSpacing="-5px"
      >
        Web3 Developer
      </MotionText> */}
    </Box>
  );
}
