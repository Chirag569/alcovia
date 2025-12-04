# Alcovia Website

A premium, high-performance website for Alcovia built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Custom Cursor**: Spring-physics cursor with wing design
- **Smooth Animations**: 60fps animations throughout using Framer Motion
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Premium UI**: Dark theme with gradient accents and micro-interactions
- **Performance Optimized**: Lighthouse score >90

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 🚀 Deployment

Deploy to Vercel:

```bash
npm run deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📁 Project Structure

```
app/
├── components/
│   ├── Hero.tsx          # Hero section with custom cursor
│   ├── Manifesto.tsx     # Typography and offering cards
│   ├── Offerings.tsx     # 9-item offerings grid
│   ├── SchoolToggle.tsx  # Interactive toggle section
│   ├── Footer.tsx        # Footer with fanned social cards
│   └── LoadingScreen.tsx # Initial loading animation
├── layout.tsx            # Root layout
├── page.tsx              # Main page
└── globals.css           # Global styles

public/
└── grid.svg              # Grid pattern for background
```

## 🎨 Design Principles

- Premium feel with smooth animations
- Heavy, premium scroll feel
- Bold typography with tight tracking
- Dark theme with gradient accents
- Micro-interactions on hover/click

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.js`: Next.js configuration
- `tsconfig.json`: TypeScript configuration

## 📄 License

Private project for Alcovia.



