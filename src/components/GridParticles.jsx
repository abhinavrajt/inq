import React from 'react';

export default function GridParticles() {
  return (
    <>
      {/* Static fading grid */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[0] pointer-events-none bg-grid-pattern fade-grid-mask bg-[length:100px_100px]" />

      {/* Subtle radial glow */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[0] pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.07),_transparent_70%)] mix-blend-screen" />

      {/* Animated particles */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 5;
          const blur = Math.random() > 0.5 ? 'blur-sm' : 'blur-md';
          const opacity = Math.random() * 0.4 + 0.2;

          return (
            <div
              key={i}
              className={`absolute bg-cyan-300 rounded-full ${blur} animate-drift`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}
