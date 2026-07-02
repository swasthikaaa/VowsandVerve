import { Star, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gold-light/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-8 bg-gold-antique" />
                <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep leading-tight">
                A Wedding Identity, <br />
                <span className="italic font-light text-gold-antique font-serif">Not Just an Invitation</span>
              </h2>
            </div>
            
            <p className="font-sans text-emerald-deep/80 text-base sm:text-lg font-light leading-relaxed">
              At Vows & Verve, we help couples create a complete visual identity for their special day. From the first digital invite to the final welcome board, every design is carefully coordinated to match your wedding theme, culture, and personality.
            </p>
            
            <div className="border-t border-gold-antique/20 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold-antique">
                  <Heart className="w-4 h-4" />
                  <span className="font-serif text-sm font-semibold text-emerald-deep">Culturally Tailored</span>
                </div>
                <p className="text-xs text-emerald-deep/75 font-sans leading-relaxed">
                  Beautiful custom designs respecting Kandyan, Hindu, Nikah, and Western traditions.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold-antique">
                  <Star className="w-4 h-4" />
                  <span className="font-serif text-sm font-semibold text-emerald-deep">Coordinated Sets</span>
                </div>
                <p className="text-xs text-emerald-deep/75 font-sans leading-relaxed">
                  Perfect visual cohesion across digital invites, event signage, and social media.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gold-antique">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-serif text-sm font-semibold text-emerald-deep">Bespoke Monograms</span>
                </div>
                <p className="text-xs text-emerald-deep/75 font-sans leading-relaxed">
                  Custom handcrafted couple logos that encapsulate your unique story.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame/Parchment */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm luxury-border bg-cream-light p-8 sm:p-10 shadow-lg relative">
              {/* Corner Ornaments */}
              <div className="absolute top-2 left-2 text-gold-antique/40 text-xs">✦</div>
              <div className="absolute top-2 right-2 text-gold-antique/40 text-xs">✦</div>
              <div className="absolute bottom-2 left-2 text-gold-antique/40 text-xs">✦</div>
              <div className="absolute bottom-2 right-2 text-gold-antique/40 text-xs">✦</div>
              
              <div className="text-center space-y-6">
                <div className="w-12 h-12 mx-auto rounded-full border border-gold-antique/30 flex items-center justify-center text-gold-antique">
                  <span className="font-serif text-lg italic">V</span>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-emerald-deep tracking-wider">
                  The Vows & Verve Promise
                </h3>
                
                <div className="w-16 h-[1px] bg-gold-antique/35 mx-auto" />
                
                <p className="font-serif italic text-sm text-emerald-deep/80 leading-relaxed">
                  “We believe a couple's wedding identity should be as unique as their love story. Our promise is to deliver seamless, breathtaking digital stationery that makes your wedding brand unforgettable, from the first RSVP to the final thank you.”
                </p>
                
                <div className="space-y-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                    Vows & Verve Studio
                  </span>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-emerald-deep/40 block">
                    Established 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
