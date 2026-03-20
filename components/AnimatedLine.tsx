'use client';

import { motion } from 'motion/react';

export default function AnimatedLine({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-[1px] relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-neutral-800"></div>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 3 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent w-1/2"
      />
    </div>
  );
}
