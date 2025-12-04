'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useCursor } from '../contexts/CursorContext'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  const { cursorX, cursorY } = useCursor()
  
  // Initialize cursor position off-screen
  useEffect(() => {
    cursorX.set(-100)
    cursorY.set(-100)
  }, [cursorX, cursorY])
  
  // Trail position (1 frame delayed)
  const trailX = useMotionValue(-100)
  const trailY = useMotionValue(-100)
  
  // Update trail from cursor position
  useEffect(() => {
    const unsubscribeX = cursorX.on('change', (latest) => {
      trailX.set(latest)
    })
    const unsubscribeY = cursorY.on('change', (latest) => {
      trailY.set(latest)
    })
    
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [cursorX, cursorY, trailX, trailY])
  
  // Spring configurations
  const mainSpringConfig = { stiffness: 150, damping: 20, mass: 0.1 }
  const trailSpringConfig = { stiffness: 100, damping: 18, mass: 0.15 }
  
  // Main cursor springs
  const cursorXSpring = useSpring(cursorX, mainSpringConfig)
  const cursorYSpring = useSpring(cursorY, mainSpringConfig)
  
  // Trail springs (slower for ghost effect)
  const trailXSpring = useSpring(trailX, trailSpringConfig)
  const trailYSpring = useSpring(trailY, trailSpringConfig)
  
  // Scale and opacity for hover states
  const cursorScale = useMotionValue(1)
  const cursorOpacity = useMotionValue(1)

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouchDevice = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }
    
    const touchDevice = checkTouchDevice()
    setIsTouchDevice(touchDevice)

    if (touchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      // Update cursor position (shared via context)
      cursorX.set(clientX)
      cursorY.set(clientY)
      
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const hoverable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-magnetic]')
      
      if (hoverable) {
        setIsHovering(true)
        cursorScale.set(1.5)
      } else {
        setIsHovering(false)
        cursorScale.set(1)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      cursorScale.set(1)
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY, trailX, trailY, isVisible, cursorScale])

  if (isTouchDevice) return null

  return (
    <>
      {/* Ghost trail (1 frame delayed) */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <div className="w-9 h-9 rounded-full bg-[#FF3B30]/20 blur-sm" />
      </motion.div>

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? cursorOpacity : 0,
          scale: cursorScale,
        }}
        transition={{ 
          opacity: { duration: 0.2 },
          scale: { type: 'spring', stiffness: 300, damping: 25 }
        }}
      >
        {/* Outer halo ring - Red glow */}
        <motion.div
          animate={{
            opacity: isHovering ? 0.5 : 0.35,
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute inset-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#C21807] to-[#FF3B30] blur-md"
          style={{
            mixBlendMode: 'screen',
            boxShadow: '0 0 20px rgba(255, 59, 48, 0.4)',
          }}
        />
        
        {/* Inner dot - Red circle */}
        <motion.div
          className="relative w-[18px] h-[18px] rounded-full bg-[#FF3B30] border border-white/20 shadow-lg"
          style={{
            boxShadow: '0 0 15px rgba(255, 59, 48, 0.3), inset 0 0 10px rgba(194, 24, 7, 0.2)',
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-[#FF3B30]/50 blur-sm" />
        </motion.div>
        
        {/* Hover border enhancement */}
        <motion.div
          animate={{
            opacity: isHovering ? 0.4 : 0.2,
            scale: isHovering ? 1.3 : 1,
            borderWidth: isHovering ? '2px' : '1px',
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-[18px] h-[18px] rounded-full border-white pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
      </motion.div>
    </>
  )
}
