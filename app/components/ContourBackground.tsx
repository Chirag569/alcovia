'use client'

export default function ContourBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="contourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C21807" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FF3B30" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C21807" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Organic contour lines */}
        <path
          d="M0,200 Q200,150 400,200 T800,200 T1200,200 T1600,200 T1920,200"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.4"
        />
        <path
          d="M0,400 Q300,350 600,400 T1200,400 T1920,400"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M0,600 Q250,550 500,600 T1000,600 T1500,600 T1920,600"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M0,800 Q400,750 800,800 T1600,800 T1920,800"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M0,1000 Q350,950 700,1000 T1400,1000 T1920,1000"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.25"
        />
        
        {/* Vertical contour lines */}
        <path
          d="M200,0 Q200,200 200,400 T200,800 T200,1080"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.2"
        />
        <path
          d="M600,0 Q600,300 600,600 T600,1080"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.25"
        />
        <path
          d="M1000,0 Q1000,250 1000,500 T1000,1080"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.3"
        />
        <path
          d="M1400,0 Q1400,200 1400,400 T1400,800 T1400,1080"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.2"
        />
        <path
          d="M1720,0 Q1720,300 1720,600 T1720,1080"
          fill="none"
          stroke="url(#contourGradient)"
          strokeWidth="2"
          opacity="0.25"
        />
      </svg>
    </div>
  )
}



