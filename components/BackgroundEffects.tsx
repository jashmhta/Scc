import React from 'react';

export default function BackgroundEffects() {
  return (
    <>
      {/* Abstract Background SVGs */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ffffff" opacity="0.3" />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 78, 0, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 78, 0, 0)" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)" />
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-gradient)" />
        </svg>
        
        {/* Animated Circles */}
        <svg className="absolute top-1/4 -right-64 w-[800px] h-[800px] text-brand-500/10 animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.2" opacity="0.5" />
        </svg>

        {/* Animated Lines */}
        <svg className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] text-neutral-500/10 animate-[pulse_10s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 L100 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 80 L80 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 60 L60 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 40 L40 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 20 L20 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20 100 L100 20" stroke="currentColor" strokeWidth="0.5" />
          <path d="M40 100 L100 40" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-500/30 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Ambient Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-500/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-600/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-white/5 blur-[100px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
    </>
  );
}
