'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20)

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 600)
    }, 2300)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#722F37] text-center px-6"
        >
          <motion.h1
            className="font-bold text-5xl sm:text-6xl md:text-7xl text-[#F5E1C0] tracking-wide"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ALCOVIA
          </motion.h1>

          {/* Quote */}
          <motion.p
            className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-medium italic max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            “Dare to become everything you were born to be.”
          </motion.p>

          {/* Percentage */}
          <motion.div
            className="mt-8 text-2xl sm:text-3xl font-extrabold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {percentage}%
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 sm:w-80 md:w-96 h-3 bg-white/25 rounded-full mt-3 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-[#F5E1C0] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ ease: 'easeOut', duration: 0.15 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
