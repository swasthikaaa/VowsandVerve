"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", num: "01", href: "/#services" },
    { name: "Packages", num: "02", href: "/#packages" },
    { name: "Portfolio", num: "03", href: "/#portfolio" },
    { name: "How It Works", num: "04", href: "/#process" },
    { name: "Who We Are", num: "05", href: "/who-are-we" },
    { name: "Contact", num: "06", href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-4">
      {/* Floating Capsule Container */}
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 border ${
          scrolled
            ? "bg-cream/80 backdrop-blur-lg py-2.5 px-6 shadow-xl border-gold-antique/25"
            : "bg-cream-light/40 backdrop-blur-md py-4 px-8 border-gold-antique/10"
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 overflow-hidden rounded-full border border-gold-antique/30 bg-cream p-0.5 transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Vows & Verve Monogram"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base font-semibold tracking-widest text-emerald-deep leading-none group-hover:text-gold-antique transition-colors duration-300">
                Vows & Verve
              </span>
              <span className="font-sans text-[7px] uppercase tracking-widest text-gold-antique mt-0.5">
                Digital Styling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group flex items-baseline gap-1 font-sans text-[11px] font-semibold text-emerald-deep/80 hover:text-gold-antique uppercase tracking-widest transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-antique after:transition-all after:duration-300 hover:after:w-full"
              >
                <span className="font-serif text-[8px] text-gold-antique font-normal italic">
                  {link.num}.
                </span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-emerald-deep hover:bg-gold-antique text-cream hover:text-emerald-deep font-sans text-[10px] font-semibold uppercase tracking-widest rounded-full border border-gold-antique/30 transition-all duration-300 shadow-sm"
            >
              Start Styling
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 text-emerald-deep hover:text-gold-antique transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-0 bg-emerald-deep/30 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-72 bg-cream-light border-l border-gold-antique/25 z-45 p-8 flex flex-col justify-between transition-transform duration-500 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-8 mt-12">
          <div className="flex items-center gap-3 border-b border-gold-antique/10 pb-4">
            <div className="relative w-8 h-8 overflow-hidden rounded-full border border-gold-antique/30 bg-cream">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-serif text-base font-bold text-emerald-deep tracking-wider">
              Vows & Verve
            </span>
          </div>

          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline gap-2 font-serif text-base font-medium text-emerald-deep hover:text-gold-antique transition-colors duration-300 pb-1 border-b border-gold-antique/5"
              >
                <span className="font-sans text-[9px] text-gold-antique font-semibold">
                  {link.num}.
                </span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="w-full justify-center inline-flex items-center gap-2 px-5 py-3 bg-emerald-deep hover:bg-gold-antique text-cream hover:text-emerald-deep font-sans text-xs font-semibold uppercase tracking-widest rounded-full border border-gold-antique/30 transition-all duration-300"
          >
            Start Styling
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <p className="text-[9px] text-center text-emerald-deep/40 mt-4 font-sans tracking-widest uppercase">
            Celebrate love in every detail, every event.
          </p>
        </div>
      </div>
    </header>
  );
}
