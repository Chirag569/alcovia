import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Alcovia - Building Tomorrow's Leaders Today",
  description: "Unprecedented learnings through mentorship, self-discovery, and leadership building.",
  icons: {
    icon: '/logo.png',          // FAVICON
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* FAVICON FOR ALL BROWSERS */}
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <body>{children}</body>
    </html>
  )
}
