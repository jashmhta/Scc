'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';
import ParallaxImage from './ParallaxImage';

const projects = [
  {
    title: 'Nice Modern Project',
    category: 'Commercial',
    img: 'https://images.unsplash.com/photo-1541888087525-efb31ab531ea?q=80&w=1000&auto=format&fit=crop',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-2',
  },
  {
    title: 'Cool Tile Kitchen Floor',
    category: 'Residential',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    title: 'Awesome Outdoor Project',
    category: 'Exterior',
    img: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=1000&auto=format&fit=crop',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    title: 'Statuary Marble Kitchen',
    category: 'Premium',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
    colSpan: 'col-span-1 md:col-span-2',
    rowSpan: 'row-span-1',
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="py-32 bg-neutral-900 relative overflow-hidden" ref={containerRef}>
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-10" />
      {/* Background Text */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], [0, -500]) }}
        className="absolute top-1/4 left-0 text-[15vw] font-display font-black text-neutral-800/20 whitespace-nowrap pointer-events-none z-0"
      >
        OUR PORTFOLIO
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="up">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Professional Projects
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              Showcase <br />
              <span className="text-neutral-600">Of Mastery</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.2}>
            <button className="group flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-brand-500 transition-colors">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.1}
              className={`group relative overflow-hidden bg-neutral-950 ${project.colSpan} ${project.rowSpan}`}
            >
              <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors duration-500 z-10" />
              <ParallaxImage
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-bold uppercase tracking-wide text-white">
                  {project.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
