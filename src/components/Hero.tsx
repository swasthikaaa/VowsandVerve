import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-cream-light wedding-grid-bg">
      
      {/* Background Soft Golden Glowing Flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(197,168,90,0.12)_0%,transparent_60%)] pointer-events-none select-none blur-2xl" />

      {/* Luxury Structural Borders (Double Framing Grid) */}
      <div className="absolute inset-x-6 inset-y-6 border border-gold-antique/15 pointer-events-none hidden md:block" />
      <div className="absolute inset-x-8 inset-y-8 border border-gold-antique/5 pointer-events-none hidden md:block" />
      
      {/* Editorial Grid Lines (Decorative Columns) */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-gold-antique/5 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-gold-antique/5 pointer-events-none hidden lg:block" />

      {/* Decorative Traditional Floral SVG Corners */}
      <div className="absolute top-12 left-12 w-24 h-24 opacity-20 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold-antique w-full h-full stroke-[0.75]">
          <path d="M0,0 Q30,0 30,30 Q30,60 60,60 Q90,60 90,90" />
          <path d="M0,0 L10,10 M10,0 L0,10" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 w-24 h-24 opacity-20 pointer-events-none hidden md:block rotate-180">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-gold-antique w-full h-full stroke-[0.75]">
          <path d="M0,0 Q30,0 30,30 Q30,60 60,60 Q90,60 90,90" />
          <path d="M0,0 L10,10 M10,0 L0,10" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Editorial Sub-Badge */}
        <div className="animate-fade-in flex items-center gap-2 px-4 py-1.5 border border-gold-antique/25 bg-cream/90 backdrop-blur-sm rounded-full mb-8 shadow-sm">
          <span className="text-gold-antique text-[9px] animate-pulse">✦</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-emerald-deep font-bold">
            Personalized Wedding Identities · Colombo
          </span>
          <span className="text-gold-antique text-[9px] animate-pulse">✦</span>
        </div>

        {/* Overlapping Luxury Frame with Logo */}
        <div className="animate-fade-in relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-10 group">
          {/* External delicate borders */}
          <div className="absolute inset-0 rounded-full border border-gold-antique/20 scale-105 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-gold-antique/5 scale-115 pointer-events-none" />
          
          {/* Main Logo Container with deep glassmorphism shadow */}
          <div className="relative w-full h-full overflow-hidden rounded-full border border-gold-antique/70 bg-cream/80 backdrop-blur-md p-3 shadow-2xl transition-all duration-700 group-hover:rotate-2">
            <Image
              src="/logo.png"
              alt="Vows & Verve Official Logo"
              fill
              className="object-cover scale-[1.02]"
              priority
            />
          </div>
          
          {/* Luxury sparkles */}
          <div className="absolute -top-3 right-0 text-gold-antique animate-sparkle">
            <Sparkles className="w-5 h-5 stroke-[1.2]" />
          </div>
          <div className="absolute -bottom-3 left-0 text-gold-antique animate-sparkle [animation-delay:1.2s]">
            <Sparkles className="w-4.5 h-4.5 stroke-[1.2]" />
          </div>
        </div>

        {/* Dynamic Display Typography */}
        <div className="animate-slide-up space-y-6 max-w-4xl">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light tracking-[0.03em] text-emerald-deep leading-[1.05]">
            Your Wedding, <br />
            <span className="italic font-normal text-gold-antique relative">
              Fully Styled
              {/* Elegance line indicator below 'Fully Styled' */}
              <span className="absolute bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-antique/40 to-transparent" />
            </span>
          </h1>
          
          <p className="font-serif text-base sm:text-xl md:text-2xl text-emerald-deep/90 max-w-xl mx-auto font-light tracking-wider leading-relaxed pt-2">
            “One brand, every event, beautifully coordinated.”
          </p>
          
          <div className="w-12 h-[1px] bg-gold-antique/30 mx-auto my-3" />
          
          <p className="font-sans text-xs sm:text-sm md:text-base text-emerald-deep/60 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            We design bespoke, coordinated visual identities for modern couples. From custom monograms to WhatsApp invites and reception signages—styled perfectly to fit your culture.
          </p>
        </div>

        {/* Enhanced CTAs */}
        <div className="animate-slide-up [animation-delay:0.3s] mt-12 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-emerald-deep hover:bg-gold-antique text-cream hover:text-emerald-deep font-sans text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border border-gold-antique/20 shadow-xl"
          >
            Start Your Wedding Brand
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4.5 bg-transparent hover:bg-cream-dark/40 text-emerald-deep font-sans text-[10px] font-bold uppercase tracking-[0.2em] border border-gold-antique/40 hover:border-gold-antique transition-all duration-500"
          >
            View Design Services
          </a>
        </div>

      </div>

      {/* Decorative vertical coordinates overlay on side (Editorial style) */}
      <div className="absolute left-6 bottom-16 writing-mode-vertical text-[8px] font-sans tracking-[0.3em] uppercase text-emerald-deep/30 pointer-events-none hidden md:block">
        Vows & Verve Studio // LK.CO.2026
      </div>
      <div className="absolute right-6 bottom-16 writing-mode-vertical text-[8px] font-sans tracking-[0.3em] uppercase text-emerald-deep/30 pointer-events-none hidden md:block">
        Personalized Wedding Branding
      </div>

    </section>
  );
}
