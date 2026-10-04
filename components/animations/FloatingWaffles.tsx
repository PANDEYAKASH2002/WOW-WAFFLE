'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WaffleIcon } from '../illustrations/WaffleIcon';
import { WaffleSlice } from '../illustrations/WaffleSlice';
import { Sparkle } from '../illustrations/Sparkle';

export const FloatingWaffles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Waffle Icon top right */}
      <motion.div
        className="absolute top-[15%] right-[8%] opacity-20 hidden md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <WaffleIcon size={72} />
      </motion.div>

      {/* Floating Waffle Slice top left */}
      <motion.div
        className="absolute top-[35%] left-[5%] opacity-25 hidden md:block"
        animate={{
          y: [0, 25, 0],
          rotate: [0, -20, 10, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <WaffleSlice size={64} />
      </motion.div>

      {/* Floating Sparkle middle right */}
      <motion.div
        className="absolute top-[60%] right-[12%] opacity-30"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Sparkle size={32} />
      </motion.div>

      {/* Floating Waffle Icon bottom left */}
      <motion.div
        className="absolute bottom-[20%] left-[8%] opacity-15 hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 12, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <WaffleIcon size={56} />
      </motion.div>
    </div>
  );
};
