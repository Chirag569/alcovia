'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ContourBackground from './ContourBackground'
import ScribbleOverlay from './ScribbleOverlay'

export default function SchoolToggle() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#F5F5DC]">
      {/* Contour Background */}
      <ContourBackground />

      {/* Container for both cards - both always visible */}
      <div className="relative w-full h-screen flex">
        {/* Left Card - At School */}
        <motion.div
          className="relative w-full md:w-1/2 h-screen flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative h-full flex flex-col justify-between overflow-hidden group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Base gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C21807] via-[#FF3B30] to-[#C21807]" />
              
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/atschool/image.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              
              {/* Red tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C21807]/60 via-[#FF3B30]/50 to-[#C21807]/60" />
            </div>

            {/* Scribble Overlay */}
            <ScribbleOverlay
              text="AT"
              className="top-20 left-12 z-10 w-48 h-32 md:w-64 md:h-40"
            />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 items-start text-left">
              {/* Top Section: Title */}
              <div className="mt-20 md:mt-32">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6"
                  style={{ lineHeight: '0.9' }}
                >
                  <span className="text-[#D7FF1F]">AT</span>{' '}
                  <span className="text-white">SCHOOL</span>
                </motion.h1>
              </div>

              {/* Bottom Section: Subtitle and Button */}
              <div className="items-start flex flex-col gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 max-w-xl leading-relaxed"
                >
                  How Alcovia helps students ace school.
                </motion.p>

                {/* Neon Button */}
                <motion.a
                  href="/atschool"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.15, boxShadow: '0 0 40px rgba(215, 255, 31, 0.9)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#D7FF1F] transition-all duration-300 z-30 relative shadow-2xl"
                  style={{
                    boxShadow: '0 0 25px rgba(215, 255, 31, 0.7), inset 0 0 20px rgba(215, 255, 31, 0.3)', height: '30%',
                  }}
                >
                  <ArrowRight 
                    className="w-8 h-8 md:w-10 md:h-10 text-[#0F1F3D] stroke-[3]" 
                    style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))' }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Edge Cut-off Effect (Lando Norris style) */}
            <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 bg-gradient-to-r from-transparent via-black/10 to-black/30 pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Card - Outside School */}
        <motion.div
          className="relative w-full md:w-1/2 h-screen flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative h-full flex flex-col justify-between overflow-hidden group">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Base gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C21807] via-[#FF3B30] to-[#C21807]" />
              
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(/outsideschool/image.png)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              
              {/* Red tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C21807]/60 via-[#FF3B30]/50 to-[#C21807]/60" />
            </div>

            {/* Scribble Overlay */}
            <ScribbleOverlay
              text="OUT"
              className="top-20 right-12 z-10 w-48 h-32 md:w-64 md:h-40"
            />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 items-end text-right">
              {/* Top Section: Title */}
              <div className="mt-20 md:mt-32">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6"
                  style={{ lineHeight: '0.9' }}
                >
                  OUTSIDE SCHOOL
                </motion.h1>
              </div>

              {/* Bottom Section: Subtitle and Button */}
              <div className="items-end flex flex-col gap-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 max-w-xl leading-relaxed"
                >
                  How Alcovia builds unique value for every Alcovian.
                </motion.p>

                {/* Neon Button */}
                <motion.a
                  href="/outsideschool"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.15, boxShadow: '0 0 40px rgba(215, 255, 31, 0.9)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#D7FF1F] transition-all duration-300 z-30 relative shadow-2xl"
                  style={{
                    boxShadow: '0 0 25px rgba(215, 255, 31, 0.7), inset 0 0 20px rgba(215, 255, 31, 0.3)', height: '30%',
                  }}
                >
                  <ArrowRight 
                    className="w-8 h-8 md:w-10 md:h-10 text-[#0F1F3D] stroke-[3]" 
                    style={{ filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.3))' }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Edge Cut-off Effect (Lando Norris style) */}
            <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 bg-gradient-to-l from-transparent via-black/10 to-black/30 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Center Divider Line - Subtle */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10 z-20 pointer-events-none" />
    </section>
  )
}
