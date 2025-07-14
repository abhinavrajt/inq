import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Full Landing Page Components
import Hero from './components/Hero';
import ScrollIntro from './components/ScrollIntro';
import Events from './components/Events';
import TicketsSection from './components/TicketsSection';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Separate Pages
import Workshop from './components/Workshop';
import Competition from './components/Competition';
import Lectures from './components/Lectures';

// Scroll to the hash fragment in URL
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return null;
}

// Save the last visited route (optional helper)
function TrackRouteChange() {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('lastVisitedPath', location.pathname);
  }, [location]);

  return null;
}

// Landing page composed of sections
function FullLandingPage() {
  return (
    <>
      <Hero />
      <ScrollIntro />
      <Events />
      <TicketsSection />
      <Sponsors />
      <Footer />
    </>
  );
}

// Main app content
function AppContent() {
  return (
    <>
      <ScrollToHash />
      <TrackRouteChange />
      <LoadingScreen />

      {/* ✅ Fixed background grid */}
      <div className="static-grid" />

      {/* App layout wrapper */}
      <div className="relative z-10 overflow-x-hidden font-sans bg-[#0a0a10]">
        <Routes>
          <Route path="/" element={<FullLandingPage />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/lectures" element={<Lectures />} />
        </Routes>
      </div>
    </>
  );
}

// Wrap everything in Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
