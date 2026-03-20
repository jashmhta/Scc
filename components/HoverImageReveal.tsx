'use client';

import { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import Image from 'next/image';

export default function HoverImageReveal({ text, imageSrc, alt }: { text: string, imageSrc: string, alt: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 150); // 150 is half of image width
    mouseY.set(e.clientY - rect.top - 150); // 150 is half of image height
  };

  return (
    <div
      ref={ref}
      className="relative py-6 border-b border-white/10 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center justify-between relative z-10 mix-blend-difference">
        <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-400 group-hover:text-white transition-colors duration-300">
          {text}
        </h3>
        <span className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
          Explore ↗
        </span>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] pointer-events-none z-0 overflow-hidden rounded-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
        }}
        style={{ x, y }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  );
}
