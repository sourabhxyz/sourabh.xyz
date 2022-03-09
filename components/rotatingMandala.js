import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function RotatingMandala() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      // width="50"
      // height="50"
      viewBox="0 0 302.05 341.85"
    >
      <defs>
        <style>
          {`.cls-1,.cls-2{fill:#fff;stroke:#231f20;stroke-miterlimit:10}.cls-2{fill:none}`}
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Swastik">
            <path
              className="cls-1"
              d="M151.03 190.82h100M151.03 90.82h100M51.03 190.82h100M51.03 290.82h100M151.03 90.82v100M51.03 90.82v100M151.03 190.82v100M251.03 190.82v100"
            />
          </g>
          <motion.g
            id="Outer"
            // initial={{ rotate: 180 }}
            // animate={{ rotate: 0 }}
            // transition={{ duration: 4 }}
            animate={{ rotate: Math.floor(scrollY / 10) }}
            // whileHover={{ rotate: 30 }}
          >
            <circle
              id="Circle"
              className="cls-2"
              cx="151.03"
              cy="190.82"
              r="150.53"
            />
            <path
              className="cls-2"
              d="m169.69 61.1-19.17-10.55-19.56 9.81 4.11-21.49-15.38-15.57 21.72-2.74 10.05-19.43 9.31 19.8 21.59 3.57-15.96 14.97 3.29 21.63z"
              // initial={{ pathLength: 0 }}
              // animate={{ pathLength: 1 }}
              // transition={{ duration: 4 }}
            />
          </motion.g>
        </g>
      </g>
    </motion.svg>
  );
}
