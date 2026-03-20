'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-40 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/3209211/3209211-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950"></div>
      </div>

      <div className="container relative z-10 px-6 pt-32 mx-auto flex flex-col items-center justify-center text-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-500 border border-brand-500/30 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Trusted Partners in Concrete Flooring
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tighter leading-[0.85] text-white mb-6">
            <TextReveal text="Superior" /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              <TextReveal text="Concrete" />
            </span>
            <br /> <TextReveal text="Solutions" />
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-400 font-medium mb-10 text-balance">
            With an unwavering commitment to quality, innovation, and customer satisfaction, we have emerged as a leading force in the concrete flooring industry in Mumbai.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <MagneticButton className="group relative px-8 py-4 bg-brand-500 text-white font-bold uppercase tracking-widest text-sm overflow-hidden rounded-full">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-brand-500 font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500">
                Explore Projects <ArrowRight size={16} className="translate-x-1" />
              </span>
            </MagneticButton>

            <MagneticButton className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-500 group-hover:bg-brand-500/10 transition-colors">
                <Play size={18} className="ml-1 group-hover:text-brand-500 transition-colors" />
              </div>
              Watch Showreel
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-full bg-brand-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
