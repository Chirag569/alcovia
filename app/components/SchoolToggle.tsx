'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import ContourBackground from './ContourBackground'
import ScribbleOverlay from './ScribbleOverlay'

export default function SchoolToggle() {
  return (
    <section
      className="
        relative 
        min-h-0 md:min-h-screen 
        overflow-hidden 
        bg-[#F5F5DC] 
        pb-0 mb-0
      "
    >

      <ContourBackground />

      {/* ALWAYS SIDE-BY-SIDE */}
      <div
        className="
          flex flex-row 
          items-center justify-center
          w-full gap-4
          px-2 md:px-4
          mb-0 pb-0
        "
      >

        {/* ================= LEFT CARD ================= */}
        <motion.div
          className="
            relative 
            w-[48%] md:w-1/2 
            h-[52vh] md:h-screen 
            rounded-2xl md:rounded-3xl 
            overflow-hidden 
            flex-shrink-0
          "
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-full w-full rounded-3xl overflow-hidden">

            {/* FIX: NO CUTTING */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url(/atschool/image.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>

            <ScribbleOverlay
              text="AT"
              className="top-6 left-4 md:top-12 md:left-12 w-20 h-16 md:w-48 md:h-36 z-10"
            />

            <div className="relative z-20 p-4 md:p-12 flex flex-col justify-between h-full">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-8xl font-black text-white leading-none mt-8 md:mt-24"
              >
                <span className="text-[#C1121F]">AT</span> SCHOOL
              </motion.h1>

              <div className="flex flex-col gap-3 md:gap-6">
                <p className="text-xs md:text-3xl text-white/90">
                  How Alcovia helps students ace school.
                </p>

                <motion.a
                  href="/atschool"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-[#C1121F]"
                >
                  <ArrowRight className="w-5 h-5 md:w-12 md:h-12 text-white" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT CARD ================= */}
        <motion.div
          className="
            relative 
            w-[48%] md:w-1/2 
            h-[52vh] md:h-screen 
            rounded-2xl md:rounded-3xl 
            overflow-hidden 
            flex-shrink-0
          "
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-full w-full rounded-3xl overflow-hidden">

            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url(/outsideschool/image.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>

            <ScribbleOverlay
              text="OUT"
              className="top-6 right-4 md:top-12 md:right-12 w-20 h-16 md:w-48 md:h-36 z-10"
            />

            <div className="relative z-20 p-4 md:p-12 flex flex-col justify-between h-full text-right">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-8xl font-black text-white leading-none mt-8 md:mt-24"
              >
                OUTSIDE SCHOOL
              </motion.h1>

              <div className="flex flex-col items-end gap-3 md:gap-6">
                <p className="text-xs md:text-3xl text-white/90">
                  How Alcovia builds unique value for every Alcovian.
                </p>

                <motion.a
                  href="/outsideschool"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-[#C1121F]"
                >
                  <ArrowLeft className="w-5 h-5 md:w-12 md:h-12 text-white" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* CENTER LINE — desktop only */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
    </section>
  )
}
