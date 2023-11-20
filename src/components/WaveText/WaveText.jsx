import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const WaveText = ({
  text = 'Wave Text',
  delay = 0,
  duration = 0.05,
  replay = true,
  ...props
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {staggerChildren: duration, delayChildren: i * delay},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Holder
      variants={container}
      initial="hidden"
      animate={replay ? 'visible' : 'hidden'}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </Holder>
  );
};

const Holder = styled(motion.p)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1;
  margin: 0;
  padding: 0;
  > span {
    line-height: 1.2;
  }
`;

export default WaveText;
