import { ShieldCheck, MailOpen, Landmark, Camera, FolderHeart } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Wedding Logo / Couple Monogram",
      description: "A custom handcrafted crest or monogram featuring your initials, carefully designed to encapsulate your personal style, culture, and wedding theme.",
      icon: ShieldCheck,
    },
    {
      title: "Digital Wedding Invitations",
      description: "Elegant digital invite packages (PDFs/images/videos) optimized for WhatsApp and social sharing, featuring custom typography and animated transition effects.",
      icon: MailOpen,
    },
    {
      title: "Event Signage",
      description: "Perfecty coordinated high-resolution print-ready files for welcome boards, seating charts, table numbers, menu cards, and venue directional signs.",
      icon: Landmark,
    },
    {
      title: "Social Media Wedding Visuals",
      description: "Stunning Instagram story layouts, countdown graphics, save-the-date filters, and announcement designs to build excitement for your special day.",
      icon: Camera,
    },
    {
      title: "Complete Wedding Branding Sets",
      description: "The ultimate coordinated experience. A unified branding handbook containing your logo, color palette, custom fonts, matching cards, and templates for all events.",
      icon: FolderHeart,
    },
  ];

  return (
    <section id="services" className="py-24 bg-cream-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none wedding-grid-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold block">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep">
            Personalized Wedding Styling
          </h2>
          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />
          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            We provide cohesive, high-end digital design and branding assets to ensure every detail of your wedding feels beautifully coordinated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="luxury-card p-8 flex flex-col justify-between h-full relative"
              >
                {/* Custom gold accent corners inside the card */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gold-antique/20" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gold-antique/20" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gold-antique/20" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gold-antique/20" />

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-gold-antique/30 bg-cream flex items-center justify-center text-gold-antique transition-transform duration-500 hover:rotate-6">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-emerald-deep tracking-wide">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-emerald-deep/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gold-antique/10 flex justify-between items-center">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold">
                    Digital Design
                  </span>
                  <span className="text-emerald-deep/30 font-serif text-sm italic">
                    0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom request CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm text-emerald-deep/60">
            Looking for something custom?{" "}
            <a
              href="#contact"
              className="text-gold-antique hover:text-gold-dark font-medium underline underline-offset-4 decoration-gold-antique/30 transition-colors"
            >
              Request a Bespoke Visual Identity
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
