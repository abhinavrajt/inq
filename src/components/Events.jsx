import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const events = {
  workshops: [
    { title: 'Cyber Intelligence', image: 'events/a.png', description: 'Unlock the secrets of digital defense and learn about modern hacking techniques.', price: '₹299', registerLink: '#' },
    { title: 'AI Art Generator', image: 'events/a.png', description: 'Create stunning visuals with the power of artificial intelligence.', price: '₹199', registerLink: '#' },
    { title: 'Blockchain Basics', image: 'events/a.png', description: 'Understand how blockchain is reshaping industries worldwide.', price: '₹249', registerLink: '#' },
    { title: 'Game Design 101', image: 'events/a.png', description: 'Build your first game from concept to playable prototype.', price: '₹299', registerLink: '#' },
    { title: 'Metaverse Magic', image: 'events/a.png', description: 'Step into the metaverse and create immersive VR/AR experiences.', price: '₹199', registerLink: '#' },
    { title: 'Space Tech Workshop', image: 'events/a.png', description: 'Explore satellite communication and orbital tech.', price: '₹349', registerLink: '#' },
  ],
  competitions: [
    { title: 'Hackathon', image: 'events/a.png', description: 'Solve real-world problems with code in 24 hours.', price: '₹0', registerLink: '#' },
    { title: 'Robowars', image: 'events/a.png', description: 'Battle it out with your custom-built robots.', price: '₹399', registerLink: '#' },
    { title: 'Capture the Flag', image: 'events/a.png', description: 'Compete in a cybersecurity treasure hunt.', price: '₹199', registerLink: '#' },
    { title: 'Gaming Tournament', image: 'events/a.png', description: 'Show off your gaming skills and win big.', price: '₹99', registerLink: '#' },
    { title: 'Design Derby', image: 'events/a.png', description: 'UI/UX design challenge with real-time feedback.', price: '₹149', registerLink: '#' },
    { title: 'CodeGolf', image: 'events/a.png', description: 'Shortest solution wins. Think small, win big.', price: '₹99', registerLink: '#' },
  ],
  lectures: [
    { title: 'AI Ethics Talk', image: 'events/a.png', description: 'Discuss the ethical implications of AI advancement.', price: 'Free', registerLink: '#' },
    { title: 'Startup Stories', image: 'events/a.png', description: 'Entrepreneurs share their journey and lessons.', price: 'Free', registerLink: '#' },
    { title: 'Space & Beyond', image: 'events/a.png', description: 'A look at space tech innovations and missions.', price: 'Free', registerLink: '#' },
    { title: 'Quantum 101', image: 'events/a.png', description: 'Intro to quantum computing and its future.', price: 'Free', registerLink: '#' },
    { title: 'Digital India', image: 'events/a.png', description: 'Transformation through technology in governance.', price: 'Free', registerLink: '#' },
    { title: 'Green Tech', image: 'events/a.png', description: 'Sustainable technology and eco-innovation.', price: 'Free', registerLink: '#' },
  ],
};

export default function Events() {
  const [selected, setSelected] = useState(null);
  const [showShareOverlay, setShowShareOverlay] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    const allEvents = [...events.workshops, ...events.competitions, ...events.lectures];
    const match = allEvents.find((e) => e.title.replace(/\s+/g, '-') === hash);
    if (match) {
      document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setSelected(match), 600);
    }
  }, []);

  const handleShare = (event) => {
    const url = `${window.location.origin}/#${encodeURIComponent(event.title.replace(/\s+/g, '-'))}`;
    if (navigator.share) {
      navigator.share({ title: event.title, text: event.description, url }).catch(console.error);
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-md z-50';
        toast.textContent = 'Link copied to clipboard!';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
      });
    } else {
      setShowShareOverlay(true);
    }
  };

  const renderCards = (data) =>
    data.map((event, index) => (
      <div
        key={index}
        tabIndex={0}
        onClick={() => setSelected(event)}
        className="card-glow animate-glow snap-center shrink-0 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] mt-6 sm:mt-[60px] rounded-xl bg-[#111118] flex items-center justify-center cursor-pointer outline-none mx-2 transition-transform duration-300 hover:scale-105"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-xl pointer-events-none"
        />
      </div>
    ));

  const Section = ({ title, items }) => {
    const getPath = (name) => {
      if (name === 'Workshops') return '/workshop';
      if (name === 'Competitions') return '/competition';
      if (name === 'Lectures') return '/lectures';
      return '/';
    };

    return (
      <div className="mb-20 sm:mb-32 relative z-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold pixel-font mt-6 sm:mt-20 mb-2 sm:mb-6 section-title text-center">
          {title.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-wave-char text-blue-400"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}
            >
              {char}
            </span>
          ))}
        </h2>
        <div className="overflow-x-auto flex gap-4 sm:gap-6 px-4 md:px-8 pb-2 mt-0 snap-x snap-mandatory scroll-smooth scrollbar-horizontal custom-scrollbar">
          {renderCards(items)}
        </div>
        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            onClick={() => navigate(getPath(title))}
            className="btn-glow text-xs md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-xl"
          >
            Explore More {title}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="event-section relative px-4 md:px-10 py-20 text-white overflow-hidden min-h-screen" id="tickets">
      {/* 🌐 Grid background wrapper */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 🟦 Grid lines (larger 80px spacing) */}
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,_rgba(0,255,255,0.08)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,255,255,0.08)_1px,_transparent_1px)]"></div>

        {/* 🌌 Radial mask for dissolving edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_80%,_black_100%)] z-10"></div>

        {/* 💫 Cyan radial center glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.12),_transparent_70%)] mix-blend-screen" style={{ transform: 'translateY(-10%)' }}></div>

        {/* 🔵 Floating dots */}
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
            ></div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="relative z-10">
        <Section title="Workshops" items={events.workshops} />
        <Section title="Competitions" items={events.competitions} />
        <Section title="Lectures" items={events.lectures} />
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative bg-[#0d0d16] border border-cyan-500 shadow-2xl rounded-xl p-6 w-[90%] max-w-md text-white">
            <button
              className="absolute top-3 right-4 text-2xl text-cyan-300 hover:text-white transition"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            <img src={selected.image} alt={selected.title} className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-cyan-300">{selected.title}</h3>
            <p className="text-sm text-gray-300 my-2">{selected.description}</p>
            <p className="text-yellow-400 font-semibold mb-4">{selected.price}</p>
            <div className="flex items-center gap-3">
              <a href={selected.registerLink} className="btn-glow inline-block text-sm">Register</a>
              <button
                onClick={() => handleShare(selected)}
                className="text-cyan-300 hover:text-white transition text-xl"
                title="Share"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 5.828V13a1 1 0 1 1-2 0V5.828L8.707 8.121a1 1 0 0 1-1.414-1.414l4.243-4.243a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414L13 5.828z"/>
                  <path d="M5 11a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H7v-6a1 1 0 0 0-1-1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Overlay */}
      {showShareOverlay && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-[#12121a] text-white p-6 rounded-xl border border-cyan-500 shadow-xl text-center max-w-xs w-full">
            <p className="text-sm mb-4">Copy this link manually:</p>
            <div className="bg-gray-800 px-3 py-2 rounded text-xs break-all mb-4">
              {`${window.location.origin}/#${encodeURIComponent(selected.title.replace(/\s+/g, '-'))}`}
            </div>
            <button onClick={() => setShowShareOverlay(false)} className="btn-glow px-4 py-1.5 text-sm">
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
