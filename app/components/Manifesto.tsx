"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Users, Sparkles, Trophy, Handshake } from "lucide-react";

const offerings = [
  {
    icon: Users,
    title: "Mentorship from professionals",
    description: "Connect with industry experts and gain valuable insights",
  },
  {
    icon: Sparkles,
    title: "Self Discovery",
    description: "Explore your potential and find your unique path",
  },
  {
    icon: Trophy,
    title: "Build leadership",
    description: "Develop leadership skills through real-world experiences",
  },
  {
    icon: Handshake,
    title: "Meet future builders",
    description: "Join a community of ambitious creators and innovators",
  },
];

export default function Manifesto() {
  const containerRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth motion values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    mass: 0.4,
  });

  // Cards disappear smoothly
  const cardsOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
  const cardsTranslate = useTransform(smoothProgress, [0, 0.35], ["0px", "180px"]);
  const cardsScale = useTransform(smoothProgress, [0, 0.35], [1, 0.6]);

  // Text grows larger while cards fade
  const textScale = useTransform(smoothProgress, [0, 0.4], [1, 1.45]);
  const textOpacity = useTransform(smoothProgress, [0.1, 0.4], [0.4, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[230vh] w-full bg-[#111] overflow-hidden"
    >
      {/* -------------------- CARDS SECTION -------------------- */}
      <motion.div
        style={{
          opacity: cardsOpacity,
          y: cardsTranslate,
          scale: cardsScale,
        }}
        className="sticky top-0 pt-32 pb-20 px-6 md:px-10 lg:px-20 z-30"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {offerings.map((off, index) => {
            const Icon = off.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
                className="
                  bg-white/90 
                  border border-[#C21807]/25
                  rounded-3xl 
                  p-10 
                  shadow-2xl 
                  backdrop-blur-md 
                  transition-all
                "
              >
                <Icon className="w-12 h-12 text-[#C21807] mb-4" />
                <h3 className="text-3xl font-bold text-[#C21807] drop-shadow-sm">
                  {off.title}
                </h3>
                <p className="mt-3 text-[#0F1F3D]/80 text-lg">{off.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

 {/* -------------------- MANIFESTO TEXT -------------------- */}
<motion.div
  style={{
    scale: textScale,
    opacity: textOpacity,
  }}
  className="
    absolute 
    top-0 left-0 
    w-full h-full 
    flex items-center justify-center 
    px-4 md:px-8 lg:px-16 
    pointer-events-none
    overflow-hidden
  "
>
  <motion.h2
    className="
      text-[#F5F5DC] 
      text-[5vw] 
      sm:text-[4vw]
      md:text-[3.5vw] 
      lg:text-[3vw]
      font-extrabold
      leading-[1.7] 
      tracking-tight
      text-center
      uppercase
      max-w-[95vw]
      break-words
    "
    style={{
      wordBreak: 'break-word',
      hyphens: 'auto',
      marginTop: '25%',
    }}
  >
    <span className="text-[#C21807]">Unprecedented Learnings,</span>
    <br />
    Failing regularly, building with friends,
    <br />
    while being on journey of self-discovery.
    <br />
    Build your legacy for tomorrow.
  </motion.h2>
</motion.div>

    </section>
  );
}
