import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Products from '@/components/Products';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';
import AnimatedLine from '@/components/AnimatedLine';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-brand-500 selection:text-white relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Services />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Expertise />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Projects />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Products />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Team />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Testimonials />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
