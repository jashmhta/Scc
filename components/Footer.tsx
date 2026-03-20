'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './FadeIn';
import AnimatedSVG from './AnimatedSVG';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <AnimatedSVG className="top-0 left-0 w-full h-full text-brand-500 opacity-5" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <FadeIn direction="up" className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 bg-brand-500 rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="font-display font-bold text-xl text-white">S</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                SHUBHAAM
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-xs">
              Your trusted partner for superior concrete flooring solutions in Mumbai. Quality, innovation, and customer satisfaction.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Informative Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Team', 'Testimonials', 'Blog', 'Contact Us'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors text-sm uppercase tracking-wider font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              {['Industrial Flooring', 'Commercial Spaces', 'Polished Concrete', 'Epoxy Coatings'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-brand-500 transition-colors text-sm uppercase tracking-wider font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4 text-neutral-400 text-sm leading-relaxed">
              <li>
                <strong className="text-white uppercase tracking-wider block mb-1">Address:</strong>
                Mumbai, Maharashtra, India
              </li>
              <li>
                <strong className="text-white uppercase tracking-wider block mb-1">Phone:</strong>
                <a href="tel:+919876543210" className="hover:text-brand-500 transition-colors">+91 98765 43210</a>
              </li>
              <li>
                <strong className="text-white uppercase tracking-wider block mb-1">Email:</strong>
                <a href="mailto:info@shubhaamconcret.com" className="hover:text-brand-500 transition-colors">info@shubhaamconcret.com</a>
              </li>
            </ul>
          </FadeIn>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm uppercase tracking-wider font-medium">
            &copy; {new Date().getFullYear()} Shubhaam Concrete Floors Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
