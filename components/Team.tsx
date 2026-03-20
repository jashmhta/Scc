'use client';

import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';

const team = [
  {
    name: 'Rahul Sharma',
    role: 'Founder & CEO',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Priya Patel',
    role: 'Head of Operations',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Engineer',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-neutral-950 relative z-10 border-t border-white/5 overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="up">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Experts
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              The Team <br />
              <span className="text-neutral-600">Behind It All</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.1}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-6 relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-end gap-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-1">
                {member.name}
              </h3>
              <p className="text-brand-500 font-bold uppercase tracking-widest text-xs">
                {member.role}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
