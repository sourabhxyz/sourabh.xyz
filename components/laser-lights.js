// Importing Chakra UI
import { Box, Flex, Text } from '@chakra-ui/react';
// Importing my font
import '@fontsource/faster-one';
// Importing Framer Motion
import { motion } from 'framer-motion';

const MotionText = motion(Text);
const MotionBox = motion(Box);

function Circle(props) {
  return (
    <MotionBox
      h="50px"
      w="50px"
      bg={props.color}
      borderRadius="full"
      // boxShadow={`0px 0px 10px 10px ${props.color}`}
      initial={`0px 0px 10px 10px ${props.color}`}
      animate={{ boxShadow: `0px 0px 100px 100px ${props.color}` }}
      transition={{
        repeat: '1',
        repeatType: 'reverse',
        delay: `${props.delay}`,
        duration: '0.33',
      }}
    ></MotionBox>
  );
}

// 1. initial to animate.
// 2. transition to control this transition like:
// delay - to delay the start of animation.
// duration. Can be used only if type is tween.
// type: (by default type is spring). See docs for more info.
// with spring type, we can use stiffness property.
//

export default function LaserLights() {
  return (
    <Flex align="flex-end" justify="center" bg="black" h="100vh" pb="100px">
      {/* <MotionBox
        bg="white"
        animate={{ boxShadow: '0px 0px 8px rgb(255, 255, 255)' }}
        transition={{ delay: 2 }}
      >
        <Text>Check</Text>
      </MotionBox> */}
      <MotionBox>{Circle({ color: 'red', delay: 0 })}</MotionBox>
      <MotionBox>{Circle({ color: 'blue', delay: 0.33 })}</MotionBox>
    </Flex>
  );
}
