import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import TextReveal from '@/components/TextReveal';
import BackgroundEffects from '@/components/BackgroundEffects';
import AnimatedLine from '@/components/AnimatedLine';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-brand-500 selection:text-white relative overflow-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-48 pb-20 px-6 container mx-auto">
          <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white mb-10">
            <TextReveal text="Building" /> <br />
            <span className="text-neutral-600"><TextReveal text="Foundations" /></span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-neutral-400 text-lg leading-relaxed">
              Shubhaam Concrete Floors Pvt Ltd is your trusted partner for superior concrete flooring solutions in Mumbai. With an unwavering commitment to quality, innovation, and customer satisfaction, we have emerged as a leading force in the concrete flooring industry.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Our team of experts leverages cutting-edge technology and premium materials to deliver flooring that withstands the test of time, heavy loads, and harsh environments.
            </p>
          </div>
        </section>

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
