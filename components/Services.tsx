'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import BeamBorder from './BeamBorder';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';
import ScrollRevealText from './ScrollRevealText';

const services = [
  {
    title: 'Industrial Flooring',
    desc: 'Heavy-duty concrete floors designed to withstand extreme loads and harsh industrial environments.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Commercial Spaces',
    desc: 'Aesthetic and durable flooring solutions for retail, offices, and public commercial areas.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Polished Concrete',
    desc: 'High-gloss, low-maintenance polished concrete floors that combine beauty with extreme durability.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Epoxy Coatings',
    desc: 'Seamless, chemical-resistant epoxy flooring systems for specialized industrial and commercial needs.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-neutral-950 relative z-10 overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="up" className="max-w-2xl">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Professional Services
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              Engineered <br />
              <span className="text-neutral-600">For Excellence</span>
            </h2>
          </FadeIn>
          <div className="text-neutral-400 max-w-md text-lg">
            <ScrollRevealText text="We deliver cutting-edge concrete flooring solutions tailored to your specific requirements, ensuring longevity and performance." />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <BeamBorder className="group relative overflow-hidden bg-neutral-900 h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                </div>
                <div className="p-8 relative z-20 bg-neutral-900 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 h-full">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-3 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </BeamBorder>
            </FadeIn>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="none" className="relative aspect-square">
            <div className="absolute inset-0 bg-brand-500/20 rounded-full blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
              alt="Construction Worker"
              fill
              className="relative z-10 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-brand-500 p-8 z-20 rounded-xl shadow-2xl">
              <p className="text-6xl font-display font-black text-white leading-none">15+</p>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-100 mt-2">Years of Excellence</p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none text-white mb-8">
              The Foundation <br /> Of Trust
            </h2>
            <p className="text-neutral-400 text-lg mb-10 text-balance">
              We don&apos;t just pour concrete; we build foundations that last generations. Our expertise, advanced technology, and commitment to quality set us apart in the industry.
            </p>
            
            <ul className="space-y-6">
              {[
                'Uncompromising Quality Standards',
                'Advanced Flooring Technologies',
                'Experienced Professional Team',
                'Timely Project Delivery',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                  <CheckCircle2 className="text-brand-500 flex-shrink-0" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
