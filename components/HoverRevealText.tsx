'use client';

import { motion } from 'motion/react';

export default function HoverRevealText({ text, className = '' }: { text: string, className?: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative overflow-hidden whitespace-nowrap cursor-pointer flex ${className}`}
    >
      <div className="flex">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: '-100%' },
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex text-brand-500">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: '100%' },
              hovered: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
