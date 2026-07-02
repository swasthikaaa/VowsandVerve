import { Check, MailOpen, Layers, Award } from "lucide-react";

export default function Packages() {
  const packages = [
    {
      name: "Basic Digital Invite",
      icon: MailOpen,
      tagline: "Essential digital invitation for modern styling.",
      features: [
        "1 coordinated digital wedding invitation",
        "Optimized for WhatsApp & PDF sharing",
        "Standard typography layout selection",
        "Customized color palette matching your theme",
        "Up to 2 rounds of design revisions",
        "Delivery in high-resolution PDF & PNG formats",
      ],
      highlight: false,
      cta: "Inquire for Details",
      priceText: "DM for pricing",
    },
    {
      name: "Logo + Invite Set",
      icon: Award,
      tagline: "Beautifully coordinated monogram & invitation.",
      features: [
        "Custom handcrafted Couple Monogram / Logo",
        "Coordinated digital wedding invitation card",
        "Matching font pairings and color scheme",
        "Culturally aligned design accents",
        "Up to 3 rounds of design revisions",
        "High-res PNG, PDF, and Monogram Vector files",
      ],
      highlight: true,
      cta: "Enquire Now",
      priceText: "Custom quote available",
    },
    {
      name: "Full Wedding Branding Set",
      icon: Layers,
      tagline: "Complete visual identity from invite to reception.",
      features: [
        "Custom handcrafted Couple Monogram / Logo",
        "Digital Wedding Invitation (PDF/WhatsApp)",
        "Coordinated Homecoming / Reception Invite",
        "Matching Welcome Sign Board design file",
        "Coordinated Thank-you card layout",
        "Instagram Story & countdown template design",
        "All source vector files, print-ready files & digital assets",
      ],
      highlight: false,
      cta: "Request Custom Quote",
      priceText: "Bespoke pricing",
    },
  ];

  return (
    <section id="packages" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative borders/gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold block">
            Our Packages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep">
            Curated Branding Tiers
          </h2>
          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />
          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            Select a custom design tier to establish a unified aesthetic across all your wedding invitations and event displays.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 ${
                  pkg.highlight
                    ? "bg-cream-light border-2 border-gold-antique shadow-xl scale-105 z-10"
                    : "bg-cream-light border border-gold-antique/25 hover:border-gold-antique/60 shadow-md hover:-translate-y-1"
                }`}
              >
                {/* Popular Badge */}
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-antique text-cream px-4 py-1 text-[9px] font-sans font-semibold uppercase tracking-widest border border-gold-dark/40 shadow-sm">
                    Most Popular
                  </div>
                )}

                {/* Decorative gold card details */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-gold-antique/30" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-gold-antique/30" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-gold-antique/30" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-gold-antique/30" />

                <div className="space-y-6">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                      pkg.highlight ? "border-gold-antique text-gold-antique bg-cream" : "border-gold-antique/20 text-emerald-deep/60"
                    }`}>
                      <Icon className="w-4.5 h-4.5 stroke-[1.5]" />
                    </div>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold">
                      Package Tier
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-emerald-deep">
                      {pkg.name}
                    </h3>
                    <p className="font-sans text-xs text-emerald-deep/60 leading-relaxed font-light">
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="border-t border-gold-antique/10 my-4" />

                  {/* Features List */}
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-gold-antique shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-emerald-deep/80 font-light leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="mt-10 space-y-4">
                  {/* Pricing Placeholder */}
                  <div className="text-center bg-cream border border-gold-antique/15 py-3">
                    <span className="font-serif text-base text-gold-antique italic font-medium block">
                      {pkg.priceText}
                    </span>
                    <span className="font-sans text-[8px] uppercase tracking-widest text-emerald-deep/40 block mt-0.5">
                      No Hidden Charges
                    </span>
                  </div>

                  {/* CTA button */}
                  <a
                    href="#contact"
                    className={`w-full justify-center inline-flex items-center gap-2 px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-emerald-deep hover:bg-gold-antique text-cream hover:text-emerald-deep border border-gold-antique/30 shadow-[3px_3px_0px_rgba(197,168,90,0.3)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                        : "bg-transparent hover:bg-cream-dark text-emerald-deep border border-gold-antique/30 hover:border-gold-antique"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
