import React, { useEffect, useState } from 'react'
import './loading.css'

const loadingMessages = [
  'Loading Assets...',
  'Loading Sprites...',
  'Loading Sounds...',
  'Loading Scripts...',
  'Loading AI Modules...',
  'Finalizing...',
]

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setFadeOut(true)
          setTimeout(() => setLoaded(true), 1000)
          return 100
        }
        return prev + 1
      })
    }, 40)

    const textCycleInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 1600)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textCycleInterval)
    }
  }, [])

  if (loaded) return null

  const totalBlocks = 10
  const blocksFilled = Math.floor((progress / 100) * totalBlocks)

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      } bg-black`}
    >
      <div className="flex flex-col items-center gap-6 px-4 sm:px-6 w-full max-w-[95vw] sm:max-w-[400px]">
        <div className="loading-text font-arcade text-xs sm:text-sm md:text-base text-center">
          {loadingMessages[textIndex]}
        </div>

        <div className="flex gap-[4px] sm:gap-[6px] md:gap-[10px]">
          {[...Array(totalBlocks)].map((_, idx) => (
            <div
              key={idx}
              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${
                idx < blocksFilled ? 'bg-yellow-400 box-glow' : 'bg-white'
              }`}
            ></div>
          ))}
        </div>

        <div className="progress-number text-yellow-300 font-arcade text-xs sm:text-sm mt-1 sm:mt-2 opacity-80">
          {progress}%
        </div>
      </div>
    </div>
  )
}
