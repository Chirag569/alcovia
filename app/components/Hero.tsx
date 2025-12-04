"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";

export default function WingsMouseParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null); 
  const leftWingRef = useRef<HTMLDivElement | null>(null);
  const rightWingRef = useRef<HTMLDivElement | null>(null);

  const [isMoving, setIsMoving] = useState(false);
  const [wingStyles, setWingStyles] = useState({
    left: { top: 0, left: 0, width: 0 },
    right: { top: 0, left: 0, width: 0 },
  });

  const measureAndPositionWings = () => {
    if (!containerRef.current || !wrapperRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const mascotRect = wrapperRef.current.getBoundingClientRect();

    /** Shoulder Level (WINGS MOVE UP MORE) */
    const SHOULDER_FACTOR = 0.22; // moved UP from 0.32 → wings higher
    const shoulderY = mascotRect.top + mascotRect.height * SHOULDER_FACTOR;

    /** Wings size */
    const wingWidth = mascotRect.width * 1.15;

    /** Wings vertical fine-tuning */
    const verticalOffset = wingWidth * 0.14; // reduced for UPWARD shift

    /** REVERSED WINGS  
     *  - Left wing now appears on RIGHT  
     *  - Right wing now appears on LEFT  
     */

    // *Right wing position now uses left-wing original calc*
    const newLeft = mascotRect.right - wingWidth * 0.45;
    const newLeftTop = shoulderY - containerRect.top - verticalOffset;

    // *Left wing position now uses right-wing original calc*
    const newRight = mascotRect.left - wingWidth * 0.65;
    const newRightTop = shoulderY - containerRect.top - verticalOffset;

    setWingStyles({
      left: { 
        top: newLeftTop, 
        left: newLeft - containerRect.left, 
        width: wingWidth 
      },
      right: { 
        top: newRightTop, 
        left: newRight - containerRect.left, 
        width: wingWidth 
      },
    });
  };

  useLayoutEffect(() => {
    measureAndPositionWings();
    window.addEventListener("resize", measureAndPositionWings);
    return () => window.removeEventListener("resize", measureAndPositionWings);
  }, []);

  useEffect(() => {
    setTimeout(measureAndPositionWings, 300);
    setTimeout(measureAndPositionWings, 700);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let moveTimeout: number | undefined;

    const handleMove = (e: MouseEvent) => {
      clearTimeout(moveTimeout);
      setIsMoving(true);
      moveTimeout = window.setTimeout(() => setIsMoving(false), 500);

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const intensity = 18;

        const nx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const ny = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        if (leftWingRef.current)
          leftWingRef.current.style.transform = `translate(${nx * intensity}px, ${ny * intensity}px)`;

        if (rightWingRef.current)
          rightWingRef.current.style.transform = `translate(${-nx * intensity}px, ${ny * intensity}px)`;
      });
    };

    container.addEventListener("mousemove", handleMove);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const onMascotLoad = () => {
    requestAnimationFrame(() => requestAnimationFrame(measureAndPositionWings));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-start justify-center bg-[#F7F2E8]"
      style={{ minHeight: "100vh" }}
    >
      {/* MASCOT NOW MOVED DOWN MORE */}
      <div style={{ height: "180px", flexShrink: 0 }} />

      <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('/alcovia-pattern.png')] bg-cover" />

      {/* LEFT WING — BUT REVERSED → THIS IS NOW RIGHT SIDE */}
      <div
        ref={leftWingRef}
        style={{
          position: "absolute",
          top: wingStyles.left.top,
          left: wingStyles.left.left,
          width: wingStyles.left.width,
          opacity: isMoving ? 1 : 0,
          transition: "opacity 300ms ease",
          transformOrigin: "left center",
          pointerEvents: "none",
        }}
      >
        {/* SWAPPED WING IMAGE */}
        <Image src="/left-wing.png" alt="Left Wing" width={1200} height={1200} priority />
      </div>

      {/* RIGHT WING — BUT REVERSED → THIS IS NOW LEFT SIDE */}
      <div
        ref={rightWingRef}
        style={{
          position: "absolute",
          top: wingStyles.right.top,
          left: wingStyles.right.left,
          width: wingStyles.right.width,
          opacity: isMoving ? 1 : 0,
          transition: "opacity 300ms ease",
          transformOrigin: "right center",
          pointerEvents: "none",
        }}
      >
        {/* SWAPPED WING IMAGE */}
        <Image src="/right-wing.png" alt="Right Wing" width={1200} height={1200} priority />
      </div>

      {/* MASCOT — MOVED DOWN + SMALLER */}
      <div
        ref={wrapperRef}
        style={{
          zIndex: 20,
          transform: "scale(1.15)", // smaller size
          marginTop: "50px", // pushes mascot DOWN more
        }}
      >
        <Image
          src="/alcovian-boy.png"
          alt="Alcovian Mascot"
          width={420}
          height={650}
          priority
          onLoadingComplete={onMascotLoad}
          style={{ display: "block", pointerEvents: "none" }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          width: "100%",
          textAlign: "center",
          zIndex: 30,
        }}
      >
        
      
      </div>
    </div>
  );
}
