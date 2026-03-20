'use client';

import { motion } from 'motion/react';
import { Box, Layers, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';
import ScrollRevealText from './ScrollRevealText';

const products = [
  {
    title: 'Floor Hardners',
    desc: 'Enhance the abrasion resistance and durability of your concrete floors significantly.',
    icon: ShieldCheck,
  },
  {
    title: 'Polypropylene (PP) Fibres',
    desc: 'Structural fibres designed to control shrinkage cracks and improve impact resistance.',
    icon: Layers,
  },
  {
    title: 'Steel Fiber',
    desc: 'High-tensile steel fibers for maximum load-bearing capacity and crack control.',
    icon: Box,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-32 bg-neutral-950 relative z-10 border-t border-white/5 overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <FadeIn direction="up">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Products
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white mb-6">
              Premium <br />
              <span className="text-neutral-600">Materials</span>
            </h2>
            <div className="text-neutral-400 max-w-2xl mx-auto text-lg text-balance">
              <ScrollRevealText text="We supply top-grade concrete additives and reinforcement materials to ensure your flooring projects meet the highest industry standards." />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.1}
              className="group relative p-10 bg-neutral-900 border border-white/5 hover:border-brand-500/30 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:bg-brand-500/10 transition-colors duration-500" />
              
              <div className="w-16 h-16 bg-neutral-950 border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:border-brand-500/50 group-hover:text-brand-500 transition-colors duration-500">
                <product.icon size={32} className="text-neutral-400 group-hover:text-brand-500 transition-colors duration-500" />
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-4">
                {product.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                {product.desc}
              </p>
              
              <button className="text-brand-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group/btn">
                Learn More <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
