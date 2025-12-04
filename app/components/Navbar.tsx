'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const handleScroll = (id: string) => {
    const section = document.getElementById(id)

    if (section) {
      // Prevent navbar overlap
      const yOffset = -80
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    // Close mobile menu
    setIsOpen(false)
  }

  const navItems = [
    { id: 'about-section', label: 'About Us' },
    { id: 'footer-section', label: 'Contact Us' }
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
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          {/* Desktop Logo */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Alcovia Logo"
              width={45}
              height={45}
              className="rounded-full shadow-md"
            />

            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tight text-[#0F1F3D]">
                alcovia
              </h1>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase -mt-1 text-[#1E3A8A]">
                AHEAD OF THE CURVE
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu Buttons */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => { setActiveLink(item.id); handleScroll(item.id) }}
                className={`px-5 py-2 rounded-full transition-all duration-300 font-medium text-sm tracking-wide ${
                  activeLink === item.id
                    ? 'bg-gradient-to-r from-[#C21807] to-[#FF3B30] text-white shadow-md'
                    : 'text-[#0F1F3D] hover:text-[#C21807] border border-[#C21807]/30 hover:border-[#C21807]'
                }`}
              >
                {item.label}
              </motion.button>
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
      >
        <div className="px-4 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Mobile Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Alcovia Logo"
                width={38}
                height={38}
                className="rounded-full shadow-md"
              />
              <div>
                <h1 className="text-lg font-black text-[#0F1F3D]">
                  alcovia
                </h1>
                <p className="text-[8px] font-semibold tracking-[0.2em] uppercase text-[#1E3A8A]">
                  AHEAD OF THE CURVE
                </p>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C21807]/10 to-[#FF3B30]/10 flex items-center justify-center border border-[#C21807]/20"
            >
              {isOpen ? <X className="w-5 h-5 text-[#C21807]" /> : <Menu className="w-5 h-5 text-[#C21807]" />}
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
            >
              <div className="px-4 py-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                    onClick={() => { setActiveLink(item.id); handleScroll(item.id) }}
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
