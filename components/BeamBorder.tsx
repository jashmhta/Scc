'use client';
import { motion } from 'motion/react';

export default function BeamBorder({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-[1px] ${className}`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0 340deg, #ff4e00 360deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative z-10 h-full w-full rounded-2xl bg-neutral-950">
        {children}
      </div>
    </div>
  );
}
