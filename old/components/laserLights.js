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
      h="40px"
      w="40px"
      bg={props.color}
      borderRadius="full"
      // bgGradient={`radial-gradient(#FFE3E2 10%, ${props.color} 50%, ${props.color})`}
      boxShadow={`0px 0px 10px 10px ${props.color}`}
      // initial={`0px 0px 10px 10px ${props.color}`}
      animate={{ scale: 4 }}
      transition={{
        repeat: '1',
        repeatType: 'reverse',
        delay: `${props.delay}`,
        duration: '0.33',
      }}
    ></MotionBox>
  );
}

// function Circle(props) {
//   return (
//     <MotionBox
//       h="50px"
//       w="50px"
//       bg={props.color}
//       borderRadius="full"
//       // boxShadow={`0px 0px 10px 10px ${props.color}`}
//       initial={`0px 0px 10px 10px ${props.color}`}
//       animate={{ boxShadow: `0px 0px 100px 100px ${props.color}` }}
//       transition={{
//         repeat: '1',
//         repeatType: 'reverse',
//         delay: `${props.delay}`,
//         duration: '0.33',
//       }}
//     ></MotionBox>
//   );
// }

// 1. initial to animate.
// 2. transition to control this transition like:
// delay - to delay the start of animation.
// duration. Can be used only if type is tween.
// type: (by default type is spring). See docs for more info.
// with spring type, we can use stiffness property.
// 3. whileHover = {{scale: 1.3, originX: 0}}
// 4. I ignored two variants videos. maybe things like "when: beforeChildren" and "staggering" are possible o/w too.
// 5. animatepresence. No need for any notes as this video explains it all: https://www.youtube.com/watch?v=Imyi2V7WgGU&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=12 this video also has basics of variants. can watch in extreme fast forward without need of any audio.
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
