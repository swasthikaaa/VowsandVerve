import Image from "next/image";
import Link from "next/link";
import { Mail, Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-deep text-cream border-t border-gold-antique/20 py-16 relative overflow-hidden">
      {/* Subtle background graphics */}
      <div className="absolute inset-0 opacity-5 pointer-events-none wedding-grid-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border border-gold-antique/30 bg-cream p-0.5">
                <Image
                  src="/logo.png"
                  alt="Vows & Verve Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xl font-bold tracking-wider text-cream">
                  Vows & Verve
                </span>
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique">
                  Digital Wedding Styling
                </span>
              </div>
            </div>
            <p className="text-cream/70 text-sm max-w-xs font-sans font-light mt-2">
              We design elegant wedding identities for modern couples through custom logos, digital invitations, event signage, and matching wedding visuals.
            </p>
          </div>

          {/* Tagline / Positioning */}
          <div className="flex flex-col items-center justify-center">
            <div className="luxury-border p-6 max-w-sm text-center">
              <span className="font-sans text-xs uppercase tracking-widest text-gold-antique block mb-2 font-medium">
                Our Vision
              </span>
              <p className="font-serif text-lg italic text-cream">
                “Celebrate love in every detail.”
              </p>
            </div>
          </div>

          {/* Socials & Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <span className="font-serif text-lg font-semibold text-cream tracking-wide">
              Connect With Us
            </span>
            <div className="flex gap-4">
              <a
                href="mailto:vowsandverve@gmail.com"
                className="w-10 h-10 rounded-full border border-gold-antique/20 hover:border-gold-antique bg-emerald-light hover:bg-gold-antique text-cream hover:text-emerald-deep flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/vowsandverve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-antique/20 hover:border-gold-antique bg-emerald-light hover:bg-gold-antique text-cream hover:text-emerald-deep flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@vowsandverve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-antique/20 hover:border-gold-antique bg-emerald-light hover:bg-gold-antique text-cream hover:text-emerald-deep flex items-center justify-center transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                {/* Custom TikTok SVG since Lucide doesn't have it natively sometimes */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.2 2.27 2.06 3.75 2.45v3.98c-1.63-.03-3.23-.51-4.63-1.39-.42-.26-.81-.57-1.17-.91v7.69c.04 1.83-.54 3.63-1.64 5.09-1.36 1.8-3.5 2.94-5.8 3.12-2.3.18-4.59-.44-6.36-1.74-1.92-1.41-3.12-3.55-3.26-5.94-.14-2.4 1-4.75 2.98-6.14 1.77-1.25 3.98-1.72 6.13-1.29v4.04c-1.12-.31-2.31-.1-3.27.57-.96.67-1.52 1.79-1.5 2.97.02 1.19.64 2.28 1.66 2.9 1.02.62 2.3.61 3.32-.02 1.02-.63 1.6-1.76 1.56-2.95V.02z" />
                </svg>
              </a>
            </div>
            <div className="text-xs text-cream/50 font-sans tracking-wide mt-2">
              <p>vowsandverve@gmail.com</p>
              <p className="mt-1 md:text-right">Kandy, Sri Lanka</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gold-antique/10 my-10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-sans tracking-wider">
          <p>© {currentYear} Vows & Verve. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for Sri Lankan Wedding Couples with
            <span className="text-gold-antique animate-pulse">✦</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
