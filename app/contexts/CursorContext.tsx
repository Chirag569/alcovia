'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useMotionValue } from 'framer-motion'

interface CursorContextType {
  cursorX: ReturnType<typeof useMotionValue<number>>
  cursorY: ReturnType<typeof useMotionValue<number>>
}

const CursorContext = createContext<CursorContextType | null>(null)

export function CursorProvider({ children }: { children: ReactNode }) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  return (
    <CursorContext.Provider value={{ cursorX, cursorY }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = useContext(CursorContext)
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider')
  }
  return context
}



