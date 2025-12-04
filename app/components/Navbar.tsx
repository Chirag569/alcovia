'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F5F5DC]/95 backdrop-blur-md border-b border-[#C21807]/10 shadow-lg py-3' 
            : 'bg-transparent py-6'
        }`}
        style={{ 
          height: isScrolled ? '70px' : '90px',
          minHeight: isScrolled ? '70px' : '90px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - EXACT as in screenshot */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            {/* Circular A Logo */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C21807] to-[#FF3B30] flex items-center justify-center shadow-md">
                {/*<span className="text-white font-bold text-xl">A</span>*/}
                <Image src="/logo.png" alt="Alcovia Logo" width={40} height={40} />
              </div>
              {/* Subtle glow */}
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#C21807] to-[#FF3B30] blur-md opacity-30" />
            </div>
            
            {/* Text Logo */}
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tight" style={{ color: '#0F1F3D' }}>
                alcovia
              </h1>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-[-2px]" style={{ color: '#1E3A8A' }}>
                AHEAD OF THE CURVE
              </p>
            </div>
          </motion.div>

          {/* Navigation Links - ONLY TWO BUTTONS (NO JOIN NOW) */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <button
                  onClick={() => setActiveLink(item.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${
                    activeLink === item.id
                      ? 'bg-gradient-to-r from-[#C21807] to-[#FF3B30] text-white shadow-md'
                      : 'text-[#0F1F3D] hover:text-[#C21807] border border-[#C21807]/30 hover:border-[#C21807]'
                  }`}
                >
                  {item.label}
                  {activeLink === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full border-2 border-white/30"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F5F5DC]/95 backdrop-blur-md border-b border-[#C21807]/10 shadow-lg py-3' 
            : 'bg-transparent py-4'
        }`}
        style={{ 
          height: isScrolled ? '60px' : '80px',
          minHeight: isScrolled ? '60px' : '80px'
        }}
      >
        <div className="px-4 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Mobile Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C21807] to-[#FF3B30] flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <div>
                <h1 className="text-lg font-black" style={{ color: '#0F1F3D' }}>
                  alcovia
                </h1>
                <p className="text-[8px] font-semibold tracking-[0.2em] uppercase" style={{ color: '#1E3A8A' }}>
                  AHEAD OF THE CURVE
                </p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C21807]/10 to-[#FF3B30]/10 flex items-center justify-center border border-[#C21807]/20"
            >
              {isOpen ? (
                <X className="w-5 h-5" style={{ color: '#C21807' }} />
              ) : (
                <Menu className="w-5 h-5" style={{ color: '#C21807' }} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-[#F5F5DC]/95 backdrop-blur-md border-t border-[#C21807]/10 shadow-lg overflow-hidden"
              style={{ marginTop: isScrolled ? '0px' : '0px' }}
            >
              <div className="px-4 py-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                    onClick={() => {
                      setActiveLink(item.id)
                      setIsOpen(false)
                    }}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                      activeLink === item.id
                        ? 'bg-gradient-to-r from-[#C21807] to-[#FF3B30] text-white'
                        : 'text-[#0F1F3D] hover:bg-[#C21807]/10'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}