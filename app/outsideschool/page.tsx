import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Heart, Trophy, Users, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outside School | Alcovia',
  description: 'How Alcovia fulfills its mission of building differentiation for each Alcovian beyond the classroom.',
}

export default function OutsideSchoolPage() {
  const features = [
    {
      icon: Sparkles,
      title: 'Personal Development',
      description: 'Discover your unique strengths and passions through guided self-discovery programs.',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Build empathy, resilience, and emotional awareness through experiential learning.',
    },
    {
      icon: Trophy,
      title: 'Leadership Skills',
      description: 'Develop leadership capabilities through real-world projects and mentorship opportunities.',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect with like-minded peers and build lasting relationships with future leaders.',
    },
    {
      icon: Target,
      title: 'Career Exploration',
      description: 'Explore various career paths and discover your calling through workshops and mentorship.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#F5F5DC]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/outsideschool/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#C21807]/60 via-[#FF3B30]/50 to-[#C21807]/60" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6">
            OUTSIDE SCHOOL
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/95 mb-8 leading-relaxed">
            How Alcovia fulfills its mission of building differentiation for each Alcovian.
          </p>
          
          {/* Back Button */}
          <Link href="/">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-16 text-center" style={{ color: '#0F1F3D' }}>
            Building Differentiation Beyond the Classroom
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white/80 border-2 border-[#C21807]/20 rounded-2xl p-8 hover:border-[#C21807]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Icon className="w-12 h-12 text-[#C21807] mb-4" />
                  <h3 className="text-2xl font-bold text-[#0F1F3D] mb-3">{feature.title}</h3>
                  <p className="text-[#1E3A8A]/80 text-lg leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}



