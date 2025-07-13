// src/components/ScrollIntro.jsx
import React, { useRef, useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function ScrollIntro() {
  const videoRef = useRef()
  const [audioEnabled, setAudioEnabled] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    const toggleAudio = () => {
      if (video) {
        video.muted = !video.muted
        setAudioEnabled(!video.muted)
        if (video.paused) {
          video.play().catch(() => {})
        }
      }
    }

    if (video) {
      video.muted = true
      video.play().catch(() => {})
      video.addEventListener('click', toggleAudio)
    }

    return () => {
      if (video) {
        video.removeEventListener('click', toggleAudio)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button
        onClick={() => {
          const video = videoRef.current
          if (video) {
            video.muted = !video.muted
            setAudioEnabled(!video.muted)
          }
        }}
        className="absolute top-4 right-4 z-20 p-2 bg-black/40 rounded-full text-white hover:bg-black/60"
      >
        {audioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between text-white px-6 md:px-16 py-10 md:py-16 z-10">
        <div className="flex justify-between text-3xl md:text-4xl">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-10 bg-blue-400"></div>
              <p className="font-extrabold">32K+</p>
            </div>
            <p className="text-base md:text-xl font-semibold">Active Participants</p>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-3 justify-end mb-2">
              <p className="font-extrabold">18K+</p>
              <div className="w-2 h-10 bg-green-400"></div>
            </div>
            <p className="text-base md:text-xl font-semibold">Campus Footfall</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-5xl w-full text-center px-4">
            <img src="/images/inqualogo.png" alt="INQUA Logo" className="mx-auto w-72 md:w-96 drop-shadow-[0_0_55px_rgba(0,0,0,0.9)]" />
            <p className="mt-6 text-sm md:text-lg font-medium leading-relaxed text-white">
              INQUA is more than a fest — it's a technofuture odyssey igniting imagination and pushing boundaries. <br className="hidden md:block" />
              From immersive tech showcases to mind-bending competitions, it sparks a collective voyage through <br className="hidden md:block" /> innovation, creativity, and futuristic expression.
            </p>
          </div>
        </div>

        <div className="flex justify-between text-3xl md:text-4xl">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-10 bg-yellow-400"></div>
              <p className="font-extrabold">75+</p>
            </div>
            <p className="text-base md:text-xl font-semibold">Featured Events</p>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-3 justify-end mb-2">
              <p className="font-extrabold">180+</p>
              <div className="w-2 h-10 bg-red-400"></div>
            </div>
            <p className="text-base md:text-xl font-semibold">Partner Institutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
