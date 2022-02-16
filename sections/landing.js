import { Container, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionText = motion(Text);
const MotionContainer = motion(Container);

export default function Landing() {
  return (
    <MotionContainer
      maxW="container.xl"
      bg="black"
      h="100vh"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
    >
      <MotionText
        align="center"
        fontFamily="Faster One"
        color="white"
        fontSize="50px"
        whileHover={{
          scale: 1.5,
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
    </MotionContainer>
  );
}
