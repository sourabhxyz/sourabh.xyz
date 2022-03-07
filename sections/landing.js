// Motivation: https://dexpools.com/

import { Container, Text, Box, Flex, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';

const MotionText = motion(Text);
const MotionContainer = motion(Container);
const MotionBox = motion(Box);

export default function Landing() {
  const router = useRouter();
  return (
    <MotionContainer
      maxW="container.xl"
      // bg="white"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
    >
      <Navbar />
      <MotionText
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
      </MotionText>
      <Box h="100vh" bg={'red'}>
        hwello.
      </Box>
      <Box h="100vh" bg={'green'} id="bio-works">
        <Button onClick={() => console.log(router.asPath)}>click me</Button>
      </Box>
    </MotionContainer>
  );
}
