import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

export default function Events() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    { image: 'events/workshop-thumb.png', path: '/workshop' },
    { image: 'events/competition-thumb.png', path: '/competition' },
    { image: 'events/lectures-thumb.png', path: '/lectures' },
  ];

  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: cardsRef, inView: cardsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="event-section relative px-4 md:px-10 py-20 text-white overflow-hidden min-h-screen flex flex-col items-center"
      id="tickets"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),_transparent_70%)] mix-blend-screen" style={{ transform: 'translateY(-10%)' }}></div>
        <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] overflow-hidden z-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-300 opacity-40 rounded-full blur-sm animate-floatUp"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Title */}
      <h2
        ref={titleRef}
        className={clsx(
          'font-pixel text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-16 transition-all duration-1000 ease-out',
          titleInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'
        )}
      >
        Discover What
        <br />
        <span className="text-cyan-300">We Have for You!</span>
      </h2>

      {/* Cards */}
      <div
        ref={cardsRef}
        className={clsx(
          'flex flex-col sm:flex-row justify-center items-center gap-8 px-4 mt-10 md:mt-20 flex-wrap transition-all duration-1000 ease-out delay-200',
          cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        )}
      >
        {cards.map((card, index) => {
          const isOtherCardHovered = hoveredIndex !== null && hoveredIndex !== index;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(card.path)}
              className={clsx(
                'cursor-pointer transition-all duration-500 ease-in-out w-[260px] sm:w-[280px] md:w-[300px] h-[300px] rounded-xl overflow-hidden border border-cyan-400 bg-[#111118] shadow-xl',
                isOtherCardHovered &&
                  'scale-90 blur-sm rotate-[-3deg] brightness-75 shadow-inner'
              )}
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-cover pointer-events-none transition-transform duration-500"
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Text */}
        <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mt-20 lg:mt-32 text-white">

        And much more...
      </h2>
    </section>
  );
}
