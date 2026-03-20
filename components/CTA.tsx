'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';
import MagneticButton from './MagneticButton';

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-brand-500 relative overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-black opacity-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888087525-efb31ab531ea?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 grayscale" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <FadeIn direction="left" className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white mb-6">
              Got an <br />
              <span className="text-black">Incredible Project</span> <br />
              Right Now?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl font-medium max-w-xl text-balance">
              Let&apos;s build something extraordinary together. Contact our experts for a consultation.
            </p>
          </FadeIn>

          <FadeIn direction="none" delay={0.2} className="flex-shrink-0">
            <MagneticButton className="group relative w-48 h-48 bg-black rounded-full flex flex-col items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-500 overflow-hidden">
              <span className="font-bold uppercase tracking-widest text-sm mb-2 relative z-10">Let&apos;s Talk</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 border border-white/20 rounded-full scale-90 group-hover:scale-100 transition-transform duration-500" />
            </MagneticButton>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
