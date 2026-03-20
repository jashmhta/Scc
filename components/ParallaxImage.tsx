'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function ParallaxImage({ src, alt, className = '' }: { src: string, alt: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
