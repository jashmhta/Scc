'use client';

import FadeIn from './FadeIn';
import HoverImageReveal from './HoverImageReveal';
import AnimatedSVG from './AnimatedSVG';

const expertiseList = [
  {
    text: 'Industrial Facilities',
    imageSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
    alt: 'Industrial Facilities',
  },
  {
    text: 'Commercial Retail',
    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    alt: 'Commercial Retail',
  },
  {
    text: 'Warehousing',
    imageSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    alt: 'Warehousing',
  },
  {
    text: 'Aviation Hangars',
    imageSrc: 'https://images.unsplash.com/photo-1559664560-60b642646399?q=80&w=800&auto=format&fit=crop',
    alt: 'Aviation Hangars',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 bg-neutral-950 relative z-10 border-t border-white/5 overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <FadeIn direction="up">
            <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none text-white">
              Specialized <br />
              <span className="text-neutral-600">Sectors</span>
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col">
          {expertiseList.map((item, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1}>
              <HoverImageReveal text={item.text} imageSrc={item.imageSrc} alt={item.alt} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
