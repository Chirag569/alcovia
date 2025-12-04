"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const manifestoLines = [
  "Unprecedented Learnings,",
  "Failing regularly, building with friends,",
  "while being on a journey of self-discovery.",
  "Build your legacy for tomorrow.",
];

export default function Manifesto() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.15 },
    },
  };

  const lineVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "circOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.99 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-[#111] text-center overflow-hidden">
      {/* Manifesto block */}
      <div
        className={`
          mx-auto px-6
          ${isMobile ? "pt-20 pb-12 max-w-[92%]" : "min-h-screen flex items-center justify-center"}
        `}
      >
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.h2
            className={`
              text-[#F5F5DC] font-extrabold uppercase leading-[1.22]
              mx-auto pointer-events-none
              ${isMobile
                ? "text-3xl max-w-[90vw]"
                : "text-[clamp(40px,7.2vw,95px)] max-w-[78vw]"
              }
            `}
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            {manifestoLines.map((line, idx) => (
              <motion.span key={idx} variants={lineVariant} className="block">
                {idx === 0 ? (
                  <span className="text-[#C21807]">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>
      </div>

      {/* Cards section */}
      <div className="max-w-6xl mx-auto px-6 pb-28 md:pb-44">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offerings.map((off, index) => {
            const Icon = off.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                custom={index}
                variants={cardVariant}
                className="
                  bg-white/95 border border-[#C21807]/20
                  rounded-3xl p-10 shadow-2xl backdrop-blur-md
                "
              >
                <Icon className="w-12 h-12 text-[#C21807] mb-4" />
                <h3 className="text-3xl font-bold text-[#C21807]">
                  {off.title}
                </h3>
                <p className="mt-3 text-[#0F1F3D]/80 text-lg">
                  {off.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
