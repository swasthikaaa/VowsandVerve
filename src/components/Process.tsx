import { Send, FileSearch, Palette, RefreshCw, Download } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Share Wedding Details",
      description: "Submit your theme preferences, event timelines, and culture-specific styling notes to our design consultants.",
      icon: Send,
    },
    {
      num: "02",
      title: "Select Package & Theme",
      description: "Choose from our signature packages (Basic, Logo + Invite, Full Set) and select a suitable base design direction.",
      icon: Palette,
    },
    {
      num: "03",
      title: "Receive First Draft",
      description: "Review digital drafts of your couple monogram and initial wedding invitation layouts within a few working days.",
      icon: FileSearch,
    },
    {
      num: "04",
      title: "Request Revisions",
      description: "Provide feedback on the font pairings, color alignment, and border accents. We fine-tune until it is perfect.",
      icon: RefreshCw,
    },
    {
      num: "05",
      title: "Get Final Digital Files",
      description: "Receive your high-resolution digital sharing cards, animated videos, and print-ready event signage vectors.",
      icon: Download,
    },
  ];

  return (
    <section id="process" className="py-24 bg-cream relative overflow-hidden">
      {/* Delicate line decorations */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold-antique/10 -translate-y-1/2 hidden lg:block z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold block">
            The Method
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep">
            How It Works
          </h2>
          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />
          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            We follow a smooth, structured process to bring your digital wedding branding vision to life, stress-free.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-cream-light border border-gold-antique/20 p-6 flex flex-col justify-between items-center text-center relative shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                {/* Connector line for mobile (vertical) */}
                <div className="absolute left-1/2 -bottom-8 w-[1px] h-8 bg-gold-antique/20 -translate-x-1/2 lg:hidden last:hidden" />

                <div className="space-y-4 w-full">
                  {/* Step Badge */}
                  <div className="w-10 h-10 rounded-full bg-cream border border-gold-antique/30 flex items-center justify-center font-sans text-xs font-semibold text-gold-antique mx-auto group-hover:bg-gold-antique group-hover:text-cream transition-all duration-500">
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-gold-antique/10 flex items-center justify-center text-emerald-deep/50 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5.5 h-5.5 stroke-[1.2]" />
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-emerald-deep tracking-wide">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-xs text-emerald-deep/70 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="w-8 h-[1px] bg-gold-antique/20 mx-auto mt-6 hidden lg:block group-last:hidden absolute -right-4 top-1/2 -translate-y-1/2" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
