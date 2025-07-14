import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
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

// Component to scroll to hash fragment on route change
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

// Component to track last visited route and save in sessionStorage
function TrackRouteChange() {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('lastVisitedPath', location.pathname);
  }, [location]);

  return null;
}

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

function AppContent() {
  return (
    <>
      <ScrollToHash />
      <TrackRouteChange />
      <LoadingScreen />
      <div className="overflow-x-hidden font-sans bg-[#0a0a10]">
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

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
