'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PlayButtonProps {
  onPlay?: () => void
  onPause?: () => void
  className?: string
}

export default function PlayButton({ onPlay, onPause, className = '' }: PlayButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [rippleKey, setRippleKey] = useState(0)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
    setRippleKey((prev) => prev + 1)
    
    if (isPlaying) {
      onPause?.()
    } else {
      onPlay?.()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  // Animation variants
  const containerVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  }

  const textVariants = {
    topText: {
      normal: { y: 0, opacity: 1 },
      hover: { y: -4, opacity: 0.9 },
    },
    bottomText: {
      normal: { y: 0, opacity: 1 },
      hover: { y: 4, opacity: 0.9 },
    },
  }

  const glowVariants = {
    normal: { scale: 1, opacity: 0.5 },
    hover: { scale: 1.2, opacity: 0.8 },
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={containerVariants}
      initial="normal"
      animate={isHovered ? 'hover' : 'normal'}
      whileTap="tap"
      whileFocus={{ scale: 1.05, outline: '2px solid white', outlineOffset: '4px' }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      data-cursor-magnetic
      className={`
        relative
        w-16 h-16 md:w-20 md:h-20
        rounded-full
        bg-gradient-to-br from-[#C21807] to-[#FF3B30]
        shadow-lg shadow-[#FF3B30]/20
        flex items-center justify-center
        overflow-hidden
        focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black
        transition-all duration-300
        ${className}
      `}
      aria-label={isPlaying ? 'Pause' : 'Play'}
      aria-pressed={isPlaying}
    >
      {/* Glow background effect */}
      <motion.div
        variants={glowVariants}
        initial="normal"
        animate={isHovered ? 'hover' : 'normal'}
        transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-br from-[#C21807]/30 to-[#FF3B30]/30 rounded-full blur-md -z-10"
      />

      {/* Inner shadow for depth */}
      <div className="absolute inset-0 rounded-full shadow-inner shadow-black/30" />

      {/* Ripple effect on click */}
      <AnimatePresence>
        {rippleKey > 0 && (
          <motion.div
            key={rippleKey}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border-2 border-white/40"
          />
        )}
      </AnimatePresence>

      {/* Text content - PLAY PLAY stacked (hidden when playing) */}
      <AnimatePresence mode="wait">
        {!isPlaying && (
          <motion.div
            key="play-text"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="relative flex flex-col items-center justify-center h-full z-10"
          >
            {/* Top PLAY */}
            <motion.span
              variants={textVariants.topText}
              initial="normal"
              animate={isHovered ? 'hover' : 'normal'}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-white leading-none"
              style={{ willChange: 'transform, opacity' }}
            >
              PLAY
            </motion.span>

            {/* Bottom PLAY */}
            <motion.span
              variants={textVariants.bottomText}
              initial="normal"
              animate={isHovered ? 'hover' : 'normal'}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="text-[10px] md:text-xs font-black uppercase tracking-tighter text-white leading-none"
              style={{ willChange: 'transform, opacity' }}
            >
              PLAY
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover gradient overlay (only when not playing) */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-[#C21807] to-[#FF3B30] rounded-full z-0"
        />
      )}

      {/* Active/Playing state indicator */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            key="playing-indicator"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="flex gap-1.5 items-end">
              <motion.div
                animate={{ scaleY: [1, 1.8, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0, ease: 'easeInOut' }}
                className="w-1.5 h-5 bg-white rounded-full"
              />
              <motion.div
                animate={{ scaleY: [1, 2.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.15, ease: 'easeInOut' }}
                className="w-1.5 h-6 bg-white rounded-full"
              />
              <motion.div
                animate={{ scaleY: [1, 1.6, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
                className="w-1.5 h-4 bg-white rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

