// components/StaggeredText.tsx
'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Interfaces for Typing ---
interface StaggeredTextProps {
  text: string;
  className?: string; // Optional Tailwind classes for the outer container
}

// --- Framer Motion Variants ---

const lineVariants: Variants = {
  // Initial state: text hidden and pushed down
  hidden: { opacity: 0, y: '100%' }, 
  // Animated state: text fully visible and in correct position
  visible: {
    opacity: 1, 
    y: '0%',
    transition: {
      // Custom ease for a smooth, punchy entry (premium feel)
      ease: [0.65, 0.05, 0, 1], 
      duration: 1.0,
    }
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each line's animation
      delayChildren: 0.2, // Initial delay before the first line starts
    },
  },
};

// --- Component ---

export default function StaggeredText({ text, className = '' }: StaggeredTextProps) {
  // Use a regex to identify keywords and wrap them in a span for the accent color
  const renderTextWithHighlights = (line: string) => {
    // Keywords for highlighting (customize this list for Alcovia's mission)
    const keywords = [
      'Unprecedented Learnings', 'Failing regularly', 'building with friends', 
      'self discovery', 'legacy building', 'future of tomorrow'
    ];
    
    // Create a large regex pattern to find all keywords globally (g) and case-insensitive (i)
    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
    
    // Split the line by the keywords, keeping the keywords in the array
    const parts = line.split(pattern);

    return parts.map((part, index) => {
      // Check if the part matches one of our keywords (using case-insensitive find)
      if (keywords.some(kw => kw.toLowerCase() === part.toLowerCase())) {
        return (
          // Apply the electric accent color to the highlighted words
          <span key={index} className="text-lime-400 font-extrabold">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      // Trigger the animation when 80% of the component is visible
      viewport={{ once: true, amount: 0.8 }} 
      className={className}
    >
      {/* Split the input text by newline characters to animate line by line */}
      {text.split('\n').map((line, index) => (
        <div key={index} style={{ overflow: 'hidden' }}>
          <motion.span
            variants={lineVariants}
            className="inline-block whitespace-pre-wrap"
          >
            {renderTextWithHighlights(line)}
          </motion.span>
        </div>
      ))}
    </motion.p>
  );
}