import Head from 'next/head';
import LaserLights from '../components/laser-lights';
import Landing from '../sections/landing';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function MotionLanding() {
  return (
    <MotionBox
      initial={{
        x: '100vw',
      }}
      animate={{ x: 0 }} // I am happy with default spring type's duration for this animation.
      // transition={{ delay: 1 }}
    >
      {Landing()}
    </MotionBox>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>sourabh.xyz</title>
        <meta name="description" content="About Sourabh" />
      </Head>
      {/* {LaserLights()} */}
      {/* {MotionLanding()} */}
      {loading ? LaserLights() : MotionLanding()}
    </div>
  );
}
