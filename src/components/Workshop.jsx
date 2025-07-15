import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GridParticles from "./GridParticles";


const workshops = [
  { title: 'Cyber Intelligence', image: 'events/a.png', description: 'Unlock the secrets of digital defense and learn about modern hacking techniques.', price: '₹299', registerLink: '#' },
  { title: 'AI Art Generator', image: 'events/a.png', description: 'Create stunning visuals with the power of artificial intelligence.', price: '₹199', registerLink: '#' },
  { title: 'Blockchain Basics', image: 'events/a.png', description: 'Understand how blockchain is reshaping industries worldwide.', price: '₹249', registerLink: '#' },
  { title: 'Game Design 101', image: 'events/a.png', description: 'Build your first game from concept to playable prototype.', price: '₹299', registerLink: '#' },
  { title: 'Metaverse Magic', image: 'events/a.png', description: 'Step into the metaverse and create immersive VR/AR experiences.', price: '₹199', registerLink: '#' },
  { title: 'Space Tech Workshop', image: 'events/a.png', description: 'Explore satellite communication and orbital tech.', price: '₹349', registerLink: '#' },
];

export default function Workshop() {
  const [selected, setSelected] = useState(null);
  const [showShareOverlay, setShowShareOverlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const hash = decodeURIComponent(location.hash.replace('#', ''));
    const match = workshops.find(w => w.title.replace(/\s+/g, '-') === hash);
    if (match) setSelected(match);
  }, [location]);

  const handleShare = (event) => {
    const url = `${window.location.origin}/workshop#${encodeURIComponent(event.title.replace(/\s+/g, '-'))}`;
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

  const goBackToEvents = () => navigate('/#tickets');

  const closeModal = () => {
    setSelected(null);
    navigate('/workshop', { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="event-section min-h-screen px-4 md:px-10 py-20 pb-10 text-white relative z-10 overflow-x-hidden">
      <GridParticles />

      {/* Title */}
      <div className="text-center relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold pixel-font mb-2 inline-block">
          {'Workshops'.split('').map((char, i) => (
            <span key={i} className="inline-block animate-wave-char text-blue-400"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out',
              }}>{char}</span>
          ))}
        </h1>
        <div className="h-1 w-20 bg-cyan-400 rounded mx-auto mt-3" />
      </div>

      {/* Cards */}
      <div className="z-10 relative flex flex-wrap justify-center gap-6 max-w-[900px] mx-auto mt-10">
        {workshops.map((event, index) => (
          <div key={index} onClick={() => setSelected(event)}
            className="card-glow animate-glow w-[260px] h-[260px] rounded-xl bg-[#111118] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover rounded-xl" />
          </div>
        ))}
      </div>

      {/* Go Back Button */}
      <div className="mt-10 text-center z-10 relative">
        <button onClick={goBackToEvents} className="btn-glow px-5 py-2 rounded-lg text-sm">
          ← Go Back to Events
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative bg-[#0d0d16] border border-cyan-500 shadow-2xl rounded-xl p-6 w-[90%] max-w-md text-white">
            <button className="absolute top-3 right-4 text-2xl text-cyan-300 hover:text-white transition"
              onClick={closeModal}>
              ✕
            </button>
            <img src={selected.image} alt={selected.title} className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-cyan-300">{selected.title}</h3>
            <p className="text-sm text-gray-300 my-2">{selected.description}</p>
            <p className="text-yellow-400 font-semibold mb-4">{selected.price}</p>
            <div className="flex items-center gap-3">
              <a href={selected.registerLink} className="btn-glow inline-block text-sm">Register</a>
              <button onClick={() => handleShare(selected)} className="text-cyan-300 hover:text-white transition text-xl" title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 5.828V13a1 1 0 1 1-2 0V5.828L8.707 8.121a1 1 0 0 1-1.414-1.414l4.243-4.243a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414L13 5.828z"/>
                  <path d="M5 11a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H7v-6a1 1 0 0 0-1-1z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Overlay Fallback */}
      {showShareOverlay && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-[#12121a] text-white p-6 rounded-xl border border-cyan-500 shadow-xl text-center max-w-xs w-full">
            <p className="text-sm mb-4">Copy this link manually:</p>
            <div className="bg-gray-800 px-3 py-2 rounded text-xs break-all mb-4">
              {`${window.location.origin}/workshop#${encodeURIComponent(selected.title.replace(/\s+/g, '-'))}`}
            </div>
            <button onClick={() => setShowShareOverlay(false)} className="btn-glow px-4 py-1.5 text-sm">
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
