import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import TextReveal from '@/components/TextReveal';
import BackgroundEffects from '@/components/BackgroundEffects';
import AnimatedLine from '@/components/AnimatedLine';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-brand-500 selection:text-white relative overflow-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-48 pb-10 px-6 container mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white mb-6">
            <TextReveal text="Featured" /> <br />
            <span className="text-neutral-600"><TextReveal text="Works" /></span>
          </h1>
        </section>

        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Projects />
        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
