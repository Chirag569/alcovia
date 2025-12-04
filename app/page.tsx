'use client'

import { useState, useEffect, useRef } from 'react'
import { CursorProvider } from './contexts/CursorContext'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Offerings from './components/Offerings'
import SchoolToggle from './components/SchoolToggle'
import Footer from './components/Footer'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Handle scroll detection for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle loading sequence with smooth transitions
  useEffect(() => {
    // Simulate assets loading (shorter for better UX)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced from 1800 for faster loading

    return () => clearTimeout(timer)
  }, [])

  // Show content after loading screen fades out
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 200) // Small delay for smooth transition
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // Handle scroll restoration and analytics
  useEffect(() => {
    if (showContent && contentRef.current) {
      // Smooth scroll to top after loading
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      
      // You could add page view analytics here
      // logPageView('home_page_loaded')
    }
  }, [showContent])

  return (
    <CursorProvider>
      {/* Custom cursor is always present */}
      <CustomCursor />
      
      {/* Loading screen with smooth exit */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            onComplete={() => setIsLoading(false)}
            key="loading"
          />
        )}
      </AnimatePresence>

      {/* Main content with smooth entrance */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            ref={contentRef}
          >
            <SmoothScroll>
              {/* Navbar - Always visible */}
              <Navbar isScrolled={isScrolled} />
              
              <main className="min-h-screen bg-[#F5F5DC] cursor-none antialiased">
                <div className="relative">
                  {/* Subtle background texture for entire site */}
                  <div className="fixed inset-0 bg-gradient-to-br from-[#F5F5DC] via-[#FFF8E7] to-[#F5F5DC] opacity-100 z-0" />
                  
                  {/* Grid pattern overlay */}
                  <div 
                    className="fixed inset-0 z-0 opacity-5"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF3B30' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  
                  {/* Floating gradient orbs */}
                  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#C21807]/5 to-[#FF3B30]/5 blur-3xl"
                      animate={{
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#FF3B30]/5 to-[#1E3A8A]/5 blur-3xl"
                      animate={{
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 5
                      }}
                    />
                  </div>

                  {/* Content container with fade-in effect */}
                  <div className="relative z-10">
                    <Hero />
                    <Manifesto />
                    <Offerings />
                    <SchoolToggle />
                    <Footer />
                  </div>

                  {/* Scroll progress indicator */}
                  <div 
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C21807] via-[#FF3B30] to-[#C21807] z-40 origin-left transition-transform duration-150"
                    style={{ 
                      transform: `scaleX(${typeof window !== 'undefined' 
                        ? window.scrollY / (document.body.scrollHeight - window.innerHeight) 
                        : 0})` 
                    }}
                  />
                  
                  {/* Back to top button */}
                  {isScrolled && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-[#C21807] to-[#FF3B30] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                      aria-label="Scroll to top"
                    >
                      <svg 
                        className="w-5 h-5 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              </main>
            </SmoothScroll>
          </motion.div>
        )}
      </AnimatePresence>
    </CursorProvider>
  )
}