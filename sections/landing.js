// Motivation: https://dexpools.com/

import { Container, Text, Box, Heading, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import { navHeight } from '../globalVars';
import Timeline from './timeline';
import { useState, useEffect, useRef } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';

const MotionContainer = motion(Container);
const MotionIcon = motion(Icon);

export default function Landing() {
  return (
    <MotionContainer
      maxW="container.md"
      // bg="white"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
    >
      <Navbar />
      <Hero />
      <BioWorks />
    </MotionContainer>
  );
}

function Hero() {
  return (
    <Box
      w={'full'}
      h={`calc(100vh - ${navHeight})`}
      bgImage={
        'url(https://c8.alamy.com/comp/FJ0JN2/businessman-wearing-black-suit-throwing-newspaper-in-the-air-FJ0JN2.jpg)'
      }
      // https://stackoverflow.com/a/30679082/11183512
      bgSize={'cover'}
      // https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
      // bgSize={`auto calc(100vh - ${navHeight})`}
      // 'no-repeat' is not needed when 'bgSize' is 'cover'.
      // bgRepeat={'no-repeat'}
      // need bgPosition as explained here: https://www.youtube.com/watch?v=3T_Jy1CqH9k when setting 'bgSize' as 'cover'.
      bgPosition={'center left'}
      position={'relative'}
    >
      <MotionIcon
        as={ChevronDownIcon}
        position={'absolute'}
        bottom="20px"
        left="50%"
        boxSize={'2em'}
        color="white"
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
      <Box position={'absolute'} top="30%" left="50%">
        <Heading fontFamily="Faster One">Unleashing DeFi!</Heading>
        <Text>Meet Web3 Developer</Text>
      </Box>
    </Box>
  );
}

function BioWorks() {
  /* The purpose of following logic is to get height of content */
  const [timeLineHeight, setTimeLineHeight] = useState(0);
  const timeLineRef = useRef(null);

  useEffect(() => {
    setTimeLineHeight(timeLineRef.current.clientHeight);
  }, []); // an empty dependency array so that it runs only once at render.
  return (
    // an aliter could be background-attachment. https://stackoverflow.com/a/36532574/11183512 but I avoided it as it isn't supported in safari. It might have a workaround though: https://css-tricks.com/the-fixed-background-attachment-hack/ but I am happy with my solution.
    // My solution only has one issue: https://stackoverflow.com/a/13546011/11183512 one can easily fix this by putting overflow: 'hidden' but for me it adds another scroll bar (which could be preferrable) but I am using JS solution.
    <Box
      position={'relative'}
      border="1px"
      borderColor={'blue'}
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
        w="full"
        // zIndex={'5'}
        // h={'calc(100vh - 60px)'}
        bg="red"
        opacity={'50%'}
        // bgImage={
        //   'url(https://c8.alamy.com/comp/FJ0JN2/businessman-wearing-black-suit-throwing-newspaper-in-the-air-FJ0JN2.jpg)'
        // }
        // bgSize={'cover'}
        // bgPosition={'center center'}
        id="findme"
      >
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
        paddingTop={'60px'}
      >
        {Timeline()}
      </Box>
      {/* <Box position={'absolute'} top={'0px'} ref={timeLineRef}>
        <Text>first</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>alksdjfalks;jfas;lkfj</Text>
        <Text>last</Text>
      </Box> */}
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