'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Grid offerings data - update image filenames here (img1.jpg, img2.jpg, etc.)
const gridOfferings = [
  { title: 'Career Discovery Workshops', image: 'img1.jpg' },
  { title: 'Podcast Shoots With Industry Experts', image: 'img2.jpg' },
  { title: 'Weekly Mentorship From Harvard & UCL Professionals', image: 'img6.jpg' },
  { title: 'Scientifically Build Academic Score', image: 'img4.jpg' },
  { title: 'Forge Bonds With Similarly Driven Teens', image: 'img5.jpg' },
  { title: '1:1 Mentorship With Top Professionals', image: 'img3.jpg' },
  { title: 'Monthly Career Counsellor Meetings', image: 'img7.jpg' },
  { title: 'Build Resilience', image: 'img8.jpg' },
  { title: 'Build Empathy', image: 'img9.jpg' },
]

// Grid layout configuration - asymmetric editorial style (Lando Norris inspired)
const gridLayout = [
  // Row 1 - Top row with staggered positioning
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: '', margin: 'mt-0', aspect: '3/4' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:-ml-8', margin: 'mt-8 md:mt-12', aspect: '4/3' },
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2', offset: '', margin: 'mt-0', aspect: '4/5' }, // Large center image (1:1 Mentorship) - index 2
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:-ml-6', margin: 'mt-12 md:mt-16', aspect: '3/4' },
  // Row 2 - Bottom row with floating elements
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:ml-4', margin: 'mt-0', aspect: '4/3' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:-ml-10', margin: 'mt-16 md:mt-20', aspect: '3/4' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: '', margin: 'mt-0', aspect: '4/3' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:ml-6', margin: 'mt-8 md:mt-12', aspect: '3/4' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', offset: 'md:-ml-4', margin: 'mt-4 md:mt-8', aspect: '4/3' },
]

export default function Offerings() {
  return (
    <section className="relative bg-[#F5F5DC] min-h-screen overflow-hidden">
      {/* Section Header */}
      <div className="relative z-10 pt-12 md:pt-20 px-6 md:px-12 pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4"
          style={{ color: '#0F1F3D' }}
        >
          OUR
          <br />
          <span style={{ color: '#C21807' }}>OFFERINGS</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mb-6"
          style={{ color: '#1E3A8A' }}
        >
          Discover the comprehensive programs designed to shape future leaders
        </motion.p>
      </div>

      {/* Editorial Grid Section */}
      <div className="relative w-full min-h-screen bg-[#F5F5DC] -mt-4">
        <div className="relative min-h-screen w-full overflow-hidden">
          {/* Contour Background SVG */}
          <div className="absolute inset-0 opacity-20">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1920 1080"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="contourGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C21807" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#FF3B30" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#C21807" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Organic contour lines */}
              <path
                d="M0,150 Q200,100 400,150 T800,150 T1200,150 T1600,150 T1920,150"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.4"
              />
              <path
                d="M0,300 Q300,250 600,300 T1200,300 T1920,300"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.35"
              />
              <path
                d="M0,450 Q250,400 500,450 T1000,450 T1500,450 T1920,450"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <path
                d="M0,600 Q400,550 800,600 T1600,600 T1920,600"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.35"
              />
              <path
                d="M0,750 Q350,700 700,750 T1400,750 T1920,750"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.3"
              />
              <path
                d="M0,900 Q300,850 600,900 T1200,900 T1920,900"
                fill="none"
                stroke="url(#contourGrad)"
                strokeWidth="1.5"
                opacity="0.25"
              />
            </svg>
          </div>

          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid Container */}
          <div className="relative z-10 w-full py-8 md:py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
                {gridOfferings.map((offering, index) => {
                  const layout = gridLayout[index]
                  const isCenterImage = index === 2 // 1:1 Mentorship is the large center image
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: 'easeOut',
                        delay: index * 0.05 
                      }}
                      viewport={{ once: true, margin: '-20%' }}
                      className={`
                        ${layout.colSpan} 
                        ${layout.rowSpan} 
                        ${layout.offset} 
                        ${layout.margin}
                        group
                        cursor-pointer
                        w-full
                        flex
                      `}
                    >
                      <div className="relative w-full overflow-hidden rounded-lg border-2 border-[#C21807]/20 shadow-xl bg-white/5 backdrop-blur-sm">
                        {/* Label */}
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                          <p className="text-xs uppercase tracking-wider opacity-80 text-[#0F1F3D] font-medium drop-shadow-lg bg-[#F5F5DC]/90 px-3 py-1.5 rounded-md border border-[#C21807]/20">
                            {offering.title}
                          </p>
                        </div>

                        {/* Image Container */}
                        <motion.div
                          className="relative w-full overflow-hidden"
                          style={{
                            aspectRatio: layout.aspect,
                            minHeight: isCenterImage ? '500px' : '280px',
                            maxHeight: isCenterImage ? '700px' : '450px',
                            height: '100%',
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.4, ease: 'easeOut' }
                          }}
                        >
                          <div className="absolute inset-0 w-full h-full">
                            <Image
                              src={`/offerings/${offering.image}`}
                              alt={offering.title}
                              fill
                              className="object-cover object-center transition-all duration-500 group-hover:brightness-105 group-hover:contrast-105 group-hover:scale-110"
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: '100%',
                                height: '100%',
                              }}
                              sizes={isCenterImage 
                                ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw' 
                                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'}
                              quality={95}
                              priority={index < 3}
                            />
                          </div>
                          
                          {/* Overlay gradient with red tint */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#C21807]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Subtle shadow on hover */}
                          <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                            style={{ boxShadow: '0 20px 60px rgba(194, 24, 7, 0.2)' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
