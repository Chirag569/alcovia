'use client'

import { motion } from 'framer-motion'

interface ScribbleOverlayProps {
  text: 'AT' | 'OUT'
  className?: string
}

export default function ScribbleOverlay({ text, className = '' }: ScribbleOverlayProps) {
  if (text === 'AT') {
    return (
      <motion.svg
        className={`absolute ${className}`}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Scribble line */}
        <motion.path
          d="M20,80 Q30,20 50,40 T90,30 T130,50 T170,40"
          stroke="#C21807"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {/* Text overlay */}
        <text
          x="100"
          y="70"
          fontSize="90"
          fontFamily="Georgia, serif"
          fontWeight="900"
          fill="#C21807"
          opacity="0.12"
          textAnchor="middle"
          transform="rotate(-12 100 70)"
          style={{ fontStyle: 'italic', letterSpacing: '0.05em' }}
        >
          AT
        </text>
      </motion.svg>
    )
  }

  return (
    <motion.svg
      className={`absolute ${className}`}
      viewBox="0 0 350 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Scribble line */}
      <motion.path
        d="M30,60 Q50,10 80,30 T140,20 T200,40 T260,30 T320,25"
        stroke="#C21807"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {/* Text overlay */}
      <text
        x="175"
        y="70"
        fontSize="80"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fill="#C21807"
        opacity="0.12"
        textAnchor="middle"
        transform="rotate(8 175 70)"
        style={{ fontStyle: 'italic', letterSpacing: '0.05em' }}
      >
        OUT
      </text>
    </motion.svg>
  )
}



