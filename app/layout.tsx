import type { Metadata } from 'next';
import { Oswald, Manrope } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import Spotlight from '@/components/Spotlight';
import PageTransition from '@/components/PageTransition';
import AnimatePresenceWrapper from '@/components/AnimatePresenceWrapper';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shubhaam Concrete Floors | Premium Flooring Solutions',
  description: 'Your trusted partner for superior concrete flooring solutions in Mumbai. Quality, innovation, and customer satisfaction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable} dark scroll-smooth`}>
      <body className="bg-neutral-950 text-neutral-200 font-sans antialiased selection:bg-brand-500 selection:text-white cursor-none">
        <SmoothScroll>
          <Spotlight />
          <CustomCursor />
          <AnimatePresenceWrapper>
            <PageTransition>{children}</PageTransition>
          </AnimatePresenceWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
