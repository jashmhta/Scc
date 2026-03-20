'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollRevealText({ text, className = '' }: { text: string, className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 50%'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <span key={i} className="relative mr-[0.25em] mt-[0.1em]">
            <span className="absolute opacity-20">{word}</span>
            <motion.span style={{ opacity }}>{word}</motion.span>
          </span>
        );
      })}
    </p>
  );
}
