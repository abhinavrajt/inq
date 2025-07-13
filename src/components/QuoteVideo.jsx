import React from 'react'
import video from '../assets/bg-video.mp4'

function QuoteVideo() {
  return (
    <section className="relative h-[70vh] overflow-hidden text-center flex items-center justify-center text-white">
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0">
        <source src={video} type="video/mp4" />
      </video>
      <div className="relative z-10 max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold italic">"Explore the unknown, experience the extraordinary."</h2>
      </div>
    </section>
  )
}

export default QuoteVideo