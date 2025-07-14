// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 0.6, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.2,
      }
    )

    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      }
    )

    gsap.to(bgRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])

  return (
    <section className="relative h-screen bg-[#0f0f1a] overflow-hidden text-white flex items-center justify-center px-4">
      {/* background pattern grid */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 z-0"
      />

      {/* title content */}
      <div className="z-10 text-center">
        <h1
          ref={titleRef}
          className="text-[64px] md:text-[100px] font-extrabold tracking-wider text-yellow-300 drop-shadow-lg pixel-font"
        >
          NOT
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-2xl font-mono text-blue-300"
        >
          .....
        </p>
      </div>
    </section>
  )
}
