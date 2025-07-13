import React from 'react'
import Hero from './components/Hero'
import ScrollIntro from './components/ScrollIntro'
import Events from './components/Events'
import TicketsSection from './components/TicketsSection'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  return (
    <div className="overflow-x-hidden font-sans bg-[#0a0a10]">
      <LoadingScreen />
      {/* Top Hero Section */}
      <Hero />

      {/* Optional Scroll-Based Intro */}
      <ScrollIntro />

      {/* 3D Glass Event Cards */}
      <Events />

      {/* Ticket Call-To-Action */}
      <TicketsSection />

      {/* Sponsor Wall or Carousel */}
      <Sponsors />

      {/* Final Footer */}
      <Footer />
    </div>
  )
}

export default App
