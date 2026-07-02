import Image from "next/image";
import { ZoomIn } from "lucide-react";

export default function Portfolio() {
  const items = [
    {
      title: "Wedding Logo & Monogram",
      subtitle: "Personalised Couple Identity",
      image: "/portfolio/wedding_monogram.png",
      details:
        "Custom couple initials, names, and meaningful symbols designed as a premium wedding identity for invitations, cake toppers, gifts, and decor.",
    },
    {
      title: "Digital Wedding Invitations",
      subtitle: "WhatsApp, PDF & Story Invites",
      image: "/portfolio/digital_invitation.png",
      details:
        "Elegant digital invitations created for WhatsApp sharing, Instagram stories, PDF delivery, and modern online wedding announcements.",
    },
    {
      title: "Animated Invitation Videos",
      subtitle: "Modern Motion Invites",
      image: "/portfolio/animated_invite.png",
      details:
        "Short animated invitation videos with romantic transitions, music-friendly layouts, couple names, event details, and cultural design elements.",
    },
    {
      title: "Welcome Board Designs",
      subtitle: "Event Entrance Styling",
      image: "/portfolio/welcome_board.png",
      details:
        "Premium welcome board concepts designed to match the couple’s logo, wedding theme, floral style, colours, and venue atmosphere.",
    },
    {
      title: "Event Signage Suite",
      subtitle: "Seating, Menu & Table Details",
      image: "/portfolio/event_signage.png",
      details:
        "Matching seating charts, table numbers, menu cards, thank-you cards, reception signs, and directional signage for a coordinated event look.",
    },
    {
      title: "Social Media Wedding Visuals",
      subtitle: "Stories, Countdowns & Posts",
      image: "/portfolio/social_media_visuals.png",
      details:
        "Aesthetic Instagram story invitations, wedding countdowns, save-the-date posts, engagement announcements, and couple branding visuals.",
    },
    {
      title: "Complete Wedding Branding Set",
      subtitle: "One Theme Across Every Detail",
      image: "/portfolio/branding_set.png",
      details:
        "A fully coordinated wedding identity including logo, invitation, homecoming invite, welcome board, thank-you card, and Instagram story design.",
    },
    {
      title: "Cultural Wedding Concepts",
      subtitle: "Sri Lankan Multi-Cultural Designs",
      image: "/portfolio/cultural_wedding.png",
      details:
        "Design concepts for Kandyan, Tamil Hindu, Muslim Nikah, Christian church, mixed-culture, luxury hotel, and destination wedding styles.",
    },
    {
      title: "Wedding Mood Boards",
      subtitle: "Colours, Florals & Styling Direction",
      image: "/portfolio/mood_board.png",
      details:
        "Simple event mood boards for wedding themes, stage backdrops, colour palettes, floral concepts, and overall visual direction.",
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
            Complete Wedding Branding Showcase
          </h2>

          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />

          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            Explore our full range of wedding identity designs, from custom couple monograms and digital invitations to event signage, social media visuals, and complete branding sets.
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
                  sizes="(max-width: 770px) 100vw, (max-width: 1200px) 50vw, 33vw"
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