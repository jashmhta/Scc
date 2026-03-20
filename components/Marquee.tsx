'use client';

import { motion } from 'motion/react';

const clients = [
  'LARSEN & TOUBRO',
  'TATA PROJECTS',
  'RELIANCE INFRA',
  'SHAPOORJI PALLONJI',
  'GODREJ PROPERTIES',
  'LODHA GROUP',
  'MAHINDRA LIFESPACES',
  'K RAHEJA CORP',
];

export default function Marquee() {
  return (
    <section className="py-10 bg-brand-500 overflow-hidden relative z-10 flex">
      <motion.div
        className="flex whitespace-nowrap min-w-full"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {clients.map((client, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-950">
              {client}
            </span>
            <span className="text-neutral-950/30 text-4xl">✦</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex whitespace-nowrap min-w-full"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {clients.map((client, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            <span className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-neutral-950">
              {client}
            </span>
            <span className="text-neutral-950/30 text-4xl">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
