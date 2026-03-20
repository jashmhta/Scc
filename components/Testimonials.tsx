'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Project Manager, BuildTech',
    text: 'Shubhaam Concrete Floors delivered exceptional quality on our industrial warehouse project. Their team was professional, timely, and the floor finish is flawless.',
  },
  {
    name: 'Anita Desai',
    role: 'Architect, Studio A',
    text: 'We partnered with them for a high-end commercial space. The polished concrete finish exceeded our expectations and added a premium feel to the entire area.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-neutral-900 relative overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-10" />
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <FadeIn direction="up">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white mb-6">
              Client <br />
              <span className="text-neutral-600">Feedback</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.2}
              className="bg-neutral-950 p-12 relative border border-white/5"
            >
              <Quote size={48} className="text-brand-500/20 absolute top-8 right-8" />
              <p className="text-xl text-neutral-300 italic mb-8 relative z-10 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-500 font-bold text-xl uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
