"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/**
 * Hero with wings attached to mascot shoulders.
 * Wings are positioned relative to the mascot wrapper for precise alignment.
 */

export default function WingsMouseParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftWingRef = useRef<HTMLDivElement | null>(null);
  const rightWingRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isMoving, setIsMoving] = useState(false);
  let moveTimeout: NodeJS.Timeout;

  // Tweak these if you want to nudge wings up/down or in/out
  // Percentage from top of wrapper where wings anchor (shoulder level)
  const WING_TOP_PERCENT = 34; // try 34 - 40 range; increase to move wings down, decrease to move up
  // How far wings extend horizontally outside the wrapper (vw based)
  const WING_OUTER_OFFSET_VW = 12;

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(moveTimeout);
      setIsMoving(true);
      moveTimeout = setTimeout(() => setIsMoving(false), 600);

      // compute normalized cursor relative to viewport center
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / (w / 2); // -1 .. 1
      const y = (e.clientY - h / 2) / (h / 2); // -1 .. 1

      // Parallax intensity — tweak if needed
      const intensity = 24;
      const rotateMax = 10;

      // left wing movement
      if (leftWingRef.current) {
        // use translate3d for GPU acceleration
        leftWingRef.current.style.transform =
          `translate3d(${x * intensity}px, ${y * intensity}px, 0) rotateZ(${-x * rotateMax}deg)`;
      }
      // right wing movement (mirror)
      if (rightWingRef.current) {
        rightWingRef.current.style.transform =
          `translate3d(${-x * intensity}px, ${y * intensity}px, 0) rotateZ(${-x * rotateMax}deg)`;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-start justify-center"
      style={{ background: "#F7F2E8" }}
    >
      {/* Push content below navbar — adjust if your navbar height differs */}
      <div className="h-24 w-full" />

      {/* subtle background pattern like Lando */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none bg-[url('/alcovia-pattern.png')] bg-cover" />

      {/* centered wrapper for mascot + wings */}
      <div
        ref={wrapperRef}
        className="relative z-20 flex items-center justify-center"
        // limit wrapper width so wings anchor reliably; responsive
        style={{ width: "min(900px, 86vw)" }}
      >
        {/* LEFT WING: positioned relative to wrapper */}
        <div
          ref={leftWingRef}
          // use inline style for top because it's percent relative to wrapper
          style={{
            position: "absolute",
            left: `-${WING_OUTER_OFFSET_VW}vw`,
            top: `${WING_TOP_PERCENT}%`,
            width: "38%",
            transformOrigin: "right center",
            transition: "opacity 300ms ease, transform 120ms linear",
            opacity: isMoving ? 1 : 0,
            willChange: "transform, opacity",
            pointerEvents: "none",
          }}
        >
          <Image src="/left-wing.png" alt="Left Wing" width={1200} height={1200} priority />
        </div>

        {/* mascot - center */}
        <div
          className="relative"
          style={{
            // scaling so mascot is large like Lando site; adjust if needed
            transform: "scale(1.6)",
            WebkitTransform: "scale(1.6)",
          }}
        >
          <Image
            src="/alcovian-boy.png"
            alt="Alcovian Mascot"
            width={480}
            height={720}
            priority
            draggable={false}
            style={{ display: "block", userSelect: "none", pointerEvents: "none" }}
          />
        </div>

        {/* RIGHT WING: positioned relative to wrapper */}
        <div
          ref={rightWingRef}
          style={{
            position: "absolute",
            right: `-${WING_OUTER_OFFSET_VW}vw`,
            top: `${WING_TOP_PERCENT}%`,
            width: "38%",
            transformOrigin: "left center",
            transition: "opacity 300ms ease, transform 120ms linear",
            opacity: isMoving ? 1 : 0,
            willChange: "transform, opacity",
            pointerEvents: "none",
          }}
        >
          <Image src="/right-wing.png" alt="Right Wing" width={1200} height={1200} priority />
        </div>
      </div>

      {/* optional caption/text under mascot */}
      <div className="absolute bottom-12 w-full flex items-center justify-center pointer-events-none">
        <div className="text-center px-4">
          <h1 className="text-[32px] md:text-[44px] font-bold tracking-tight" style={{ color: "#0A1A2F" }}>
            Building Futures, One Step Ahead.
          </h1>
          <p className="mt-2 text-lg opacity-80" style={{ color: "#8A131A" }}>
            Where ambition meets guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
