import Image from "next/image";
import { ZoomIn } from "lucide-react";

export default function Portfolio() {
  const items = [
    {
      title: "Luxury Kandyan Wedding",
      subtitle: "Traditional Sri Lankan Elegance",
      image: "/portfolio/kandyan_wedding.png",
      details: "Ornate gold borders inspired by Kandyan royal jewelry, set on warm textured ivory cardstock with maroon accents.",
    },
    {
      title: "Tamil Hindu Wedding",
      subtitle: "Sacred & Vibrant Heritage",
      image: "/portfolio/tamil_wedding.png",
      details: "Gilded peacock motifs and temple-inspired borders, showcasing a harmonious palette of rich gold and vibrant saffron.",
    },
    {
      title: "Muslim Nikah Invite",
      subtitle: "Intricate Islamic Geometry",
      image: "/portfolio/nikah_invite.png",
      details: "Regal deep emerald green backgrounds embellished with custom gold arabesque patterns and elegant calligraphy.",
    },
    {
      title: "Christian Church Wedding",
      subtitle: "Classic Floral Minimalism",
      image: "/portfolio/christian_wedding.png",
      details: "Delicate white and gold floral borders, thin gold guidelines, and timeless serif typography on fine deckled paper.",
    },
    {
      title: "Minimal White & Gold",
      subtitle: "Modern Luxury Monogram",
      image: "/portfolio/minimal_gold_wedding.png",
      details: "An embossed gold couple crest at the center with ample breathing room, presenting a sleek contemporary layout.",
    },
    {
      title: "Royal Maroon & Gold",
      subtitle: "Regal Majesty Theme",
      image: "/portfolio/royal_maroon_wedding.png",
      details: "Intricate gold foil lettering set against rich royal maroon background card overlays, offering a grand aesthetic.",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-cream-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none wedding-grid-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold block">
            Our Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep">
            Signature Design Showcase
          </h2>
          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />
          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            Explore our curated portfolio of cultural and modern wedding themes designed for Sri Lankan couples.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-cream-light border border-gold-antique/20 overflow-hidden relative shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-w-770px) 100vw, (max-w-1200px) 50vw, 33vw"
                />
                
                {/* Elegant overlay on hover */}
                <div className="absolute inset-0 bg-emerald-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 z-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out space-y-3">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold-light font-semibold block">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-cream tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                      {item.details}
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 text-gold-light text-xs font-semibold uppercase tracking-wider font-sans">
                      <ZoomIn className="w-3.5 h-3.5" />
                      View Details
                    </div>
                  </div>
                </div>

                {/* Subtle border outline */}
                <div className="absolute inset-3 border border-gold-antique/10 pointer-events-none z-20 group-hover:border-gold-light/35 transition-colors duration-500" />
              </div>

              {/* Bottom text for small screens or default view */}
              <div className="p-5 border-t border-gold-antique/15 bg-cream">
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique block font-semibold">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-lg font-bold text-emerald-deep mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
