'use client';

import { motion } from 'motion/react';

export default function AnimatedSVG({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-20 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M-100 200 C 200 400, 400 -100, 800 300 S 1200 100, 1500 500"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M-100 800 C 300 900, 500 500, 900 700 S 1300 600, 1500 900"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="10 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
