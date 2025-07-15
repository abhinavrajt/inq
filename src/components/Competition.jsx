import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GridParticles from './GridParticles';

const competitions = [
  { title: 'Code Royale', image: 'events/a.png', description: 'Compete in intense coding battles and win exciting prizes.', price: '₹199', registerLink: '#' },
  { title: 'Design Sprint', image: 'events/a.png', description: 'Show off your UI/UX skills in this fast-paced design challenge.', price: '₹149', registerLink: '#' },
  { title: 'Robo Race', image: 'events/a.png', description: 'Build and race your own bot in a thrilling competition.', price: '₹249', registerLink: '#' },
  { title: 'Hackathon', image: 'events/a.png', description: 'Solve real-world problems in an overnight coding marathon.', price: '₹299', registerLink: '#' },
  { title: 'Quiz Whizz', image: 'events/a.png', description: 'Test your knowledge and speed in this tech quiz showdown.', price: '₹99', registerLink: '#' },
  { title: 'Tech Debate', image: 'events/a.png', description: 'Debate the hottest topics in tech with fellow enthusiasts.', price: '₹129', registerLink: '#' },
];

export default function Competition() {
  const [selected, setSelected] = useState(null);
  const [showShareOverlay, setShowShareOverlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (location.hash) {
      const decoded = decodeURIComponent(location.hash.slice(1)).replace(/-/g, ' ').toLowerCase();
      const match = competitions.find(e => e.title.toLowerCase() === decoded);
      if (match) {
        setSelected(match);
      }
    }
  }, [location.hash]);

  const handleShare = (event) => {
    const url = `${window.location.origin}/competition#${encodeURIComponent(event.title.replace(/\s+/g, '-'))}`;
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

  const goBackToEvents = () => {
    navigate('/#tickets');
  };

  return (
    <div className="event-section min-h-screen px-4 md:px-10 py-20 text-white relative z-10 overflow-x-hidden">
      <GridParticles />

      {/* Title */}
      <h1 className="text-center text-2xl sm:text-5xl font-bold pixel-font z-10 relative leading-none">
  {'Competitions'.split('').map((char, i) => (
    <span
      key={i}
      className="inline-block animate-wave-char text-blue-400"
      style={{
        animationDelay: `${i * 0.1}s`,
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      }}
    >
      {char}
    </span>
  ))}
</h1>
<div className="w-24 h-1 bg-blue-400 mx-auto mt-2 mb-8 rounded-full" />


      {/* Cards */}
      <div className="z-10 relative flex flex-wrap justify-center gap-6 max-w-[900px] mx-auto">
        {competitions.map((event, index) => (
          <div
            key={index}
            onClick={() => setSelected(event)}
            className="card-glow animate-glow w-[260px] h-[260px] rounded-xl bg-[#111118] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Go Back Button */}
      <div className="mt-10 text-center z-10 relative">
        <button
          onClick={goBackToEvents}
          className="btn-glow px-5 py-2 rounded-lg text-sm"
        >
          ← Go Back to Events
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative bg-[#0d0d16] border border-cyan-500 shadow-2xl rounded-xl p-6 w-[90%] max-w-md text-white">
            <button
              className="absolute top-3 right-4 text-2xl text-cyan-300 hover:text-white transition"
              onClick={() => {
                setSelected(null);
                navigate('/competition', { replace: true });
              }}
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

      {/* Share Fallback */}
      {showShareOverlay && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="bg-[#12121a] text-white p-6 rounded-xl border border-cyan-500 shadow-xl text-center max-w-xs w-full">
            <p className="text-sm mb-4">Copy this link manually:</p>
            <div className="bg-gray-800 px-3 py-2 rounded text-xs break-all mb-4">
              {`${window.location.origin}/competition#${encodeURIComponent(selected.title.replace(/\s+/g, '-'))}`}
            </div>
            <button
              onClick={() => setShowShareOverlay(false)}
              className="btn-glow px-4 py-1.5 text-sm"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
