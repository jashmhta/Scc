import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TextReveal from '@/components/TextReveal';
import MagneticButton from '@/components/MagneticButton';
import BackgroundEffects from '@/components/BackgroundEffects';
import AnimatedLine from '@/components/AnimatedLine';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-brand-500 selection:text-white relative overflow-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        
        <section className="pt-48 pb-32 px-6 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black uppercase tracking-tighter leading-none text-white mb-10">
                <TextReveal text="Let's" /> <br />
                <span className="text-brand-500"><TextReveal text="Talk" /></span>
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
                Ready to start your next project? Contact us today to discuss your concrete flooring needs and get a customized quote.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Address</h3>
                  <p className="text-neutral-400">Mumbai, Maharashtra, India</p>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Contact</h3>
                  <p className="text-neutral-400">+91 98765 43210</p>
                  <p className="text-neutral-400">info@shubhaamconcret.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-900 p-10 rounded-2xl border border-white/5">
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-bold uppercase tracking-widest text-xs mb-2">Name</label>
                  <input type="text" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-white font-bold uppercase tracking-widest text-xs mb-2">Email</label>
                  <input type="email" className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-white font-bold uppercase tracking-widest text-xs mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                </div>
                <MagneticButton className="w-full py-4 bg-brand-500 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-brand-600 transition-colors">
                  Send Message
                </MagneticButton>
              </form>
            </div>
          </div>
        </section>

        <AnimatedLine className="max-w-7xl mx-auto opacity-50" />
        <Footer />
      </div>
    </main>
  );
}
