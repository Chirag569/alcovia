import Image from 'next/image'

const cards = [
  { src: '/footer-cards/1.jpg', angle: '-rotate-3', label: 'Instagram', link: 'https://instagram.com/alcovia.life' },
  { src: '/footer-cards/2.jpg', angle: 'rotate-1', label: 'Twitter', link: 'https://twitter.com/alcovia' },
  { src: '/footer-cards/3.jpg', angle: '-rotate-2', label: 'LinkedIn', link: 'https://linkedin.com/company/alcovia' },
  { src: '/footer-cards/4.jpg', angle: 'rotate-3', label: 'YouTube', link: 'https://youtube.com/@alcovia' },
  { src: '/footer-cards/5.jpg', angle: '-rotate-1', label: 'Mentor Sessions', link: '#' },
]

const links = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

export default function Footer() {
  return (
    <section className="relative bg-[#FCF7EF] text-[#0F1F3D] pt-32 pb-12 overflow-hidden">
      
      {/* TOP GRADIENT */}
      <div className="absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent to-[#FCF7EF] pointer-events-none" />

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-[#0F1F3D] mb-14">
        WHAT’S UP ON SOCIALS
      </h2>

      {/* CARD SECTION */}
      <div className="flex flex-col items-center gap-6 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
          {cards.map((card, index) => (
            <a
              key={card.src}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full max-w-xs lg:max-w-sm rounded-3xl shadow-xl bg-white overflow-hidden 
              transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-105 group 
              ${index !== 0 ? 'lg:-ml-8' : ''} lg:${card.angle}`}
            >
              <div className="relative h-56 md:h-64 lg:h-72">
                <Image
                  src={card.src}
                  alt={card.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 text-white font-semibold tracking-wide uppercase text-sm">
                  {card.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#C21807]/20 my-12 mx-6 md:mx-12" />

      {/* BOTTOM SECTION */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6 items-center text-sm tracking-wide">

          {/* Address */}
          <div className="space-y-1 text-[#0F1F3D]/80 font-semibold">
            <p>WeWork, Two Horizon Centre,</p>
            <p>DLF Phase 5, Gurugram</p>
            <p>Call Us - +91 9070606050</p>
            <p>Email Us - info@alcovia.life</p>
          </div>

          {/* Logo Center */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 mb-4">
              <Image
                src="/logo.png"
                alt="Alcovia Logo"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>
            <p className="uppercase tracking-[0.35em] text-[#001F3F] text-xs font-semibold">
              Ahead of the Curve.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col items-baseline lg:items-end gap-2 text-[#0F1F3D] font-semibold">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="uppercase text-xs tracking-widest hover:text-[#C21807] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#C21807]/20 my-8 mx-6 md:mx-12" />

      {/* COPYRIGHT */}
      <div className="text-center text-xs uppercase tracking-[0.35em] text-[#0F1F3D]/70 font-semibold">
        Alcovia © 2025. Ahead of the Curve.
      </div>

    </section>
  )
}
