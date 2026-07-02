"use client";

import { useState } from "react";
import { Mail, Instagram, Send, Sparkles, Calendar, Clock, Laptop } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    theme: "minimal",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        weddingDate: "",
        theme: "minimal",
        message: "",
      });
    }, 4000);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setSelectedDate("");
      setSelectedTime("");
    }, 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const times = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];
  const dates = [
    { label: "Mon, Jul 6", val: "2026-07-06" },
    { label: "Tue, Jul 7", val: "2026-07-07" },
    { label: "Wed, Jul 8", val: "2026-07-08" },
    { label: "Thu, Jul 9", val: "2026-07-09" },
    { label: "Fri, Jul 10", val: "2026-07-10" },
  ];

  return (
    <section id="contact" className="py-24 bg-cream-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none wedding-grid-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-gold-antique font-semibold block">
            Begin Your Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-deep">
            Let’s Create Your Dream Wedding Identity
          </h2>
          <div className="w-20 h-[1px] bg-gold-antique/30 mx-auto my-4" />
          <p className="font-sans text-sm sm:text-base text-emerald-deep/70 max-w-xl mx-auto font-light">
            Contact us today to receive our styling brochure, discuss package customization, or request a custom quotation.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Booking consultation + channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Booking Consultation Card */}
            <div className="luxury-border bg-emerald-deep text-cream p-8 shadow-md relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none wedding-grid-bg" />
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique font-semibold block">
                    Bespoke Consultation
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream tracking-wide">
                    Private Design Session
                  </h3>
                </div>

                <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                  Reserve a virtual design session with our lead styling director. We will review your theme, fonts, and coordinate Sri Lankan traditional details.
                </p>

                {bookingConfirmed ? (
                  <div className="bg-cream/10 border border-gold-antique/30 p-4 text-center space-y-2 animate-fade-in">
                    <Sparkles className="w-5 h-5 text-gold-antique mx-auto" />
                    <h4 className="font-serif text-sm font-semibold text-cream">Consultation Confirmed</h4>
                    <p className="font-sans text-[10px] text-cream/70 leading-relaxed">
                      We have booked your slot for {selectedDate} at {selectedTime}. A calendar invitation has been sent to your email.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <span className="font-sans text-[9px] uppercase tracking-wider text-gold-antique font-semibold block">
                        Select a Discovery Date
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.val}
                            type="button"
                            onClick={() => setSelectedDate(d.label)}
                            className={`px-2 py-2 text-[10px] font-sans text-center transition-all border ${
                              selectedDate === d.label
                                ? "bg-gold-antique text-emerald-deep border-gold-antique font-semibold"
                                : "bg-transparent text-cream/80 border-cream/20 hover:border-gold-antique/50"
                            }`}
                          >
                            {d.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="font-sans text-[9px] uppercase tracking-wider text-gold-antique font-semibold block">
                        Select an Available Time (IST)
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {times.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`px-3 py-1.5 text-[9px] font-sans transition-all border ${
                              selectedTime === t
                                ? "bg-gold-antique text-emerald-deep border-gold-antique font-semibold"
                                : "bg-transparent text-cream/80 border-cream/20 hover:border-gold-antique/50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedTime}
                      className="w-full justify-center inline-flex items-center gap-2 px-4 py-3 bg-cream hover:bg-gold-antique disabled:bg-cream/40 text-emerald-deep font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border border-gold-antique disabled:border-transparent"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Reserve Design Suite
                    </button>
                  </form>
                )}

                <div className="flex items-center justify-between border-t border-cream/10 pt-4 text-[10px] text-cream/60 font-sans">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gold-antique" /> 30 Mins</span>
                  <span className="flex items-center gap-1"><Laptop className="w-3 h-3 text-gold-antique" /> Virtual Session</span>
                </div>

              </div>
            </div>

            {/* Channels Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              
              {/* Gmail Card */}
              <a
                href="mailto:vowsandverve@gmail.com"
                className="luxury-card p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-full border border-gold-antique/30 bg-cream flex items-center justify-center text-gold-antique">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique font-bold block">
                    Email Us
                  </span>
                  <span className="font-serif text-sm font-semibold text-emerald-deep block mt-0.5">
                    vowsandverve@gmail.com
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://instagram.com/vowsandverve"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-card p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-full border border-gold-antique/30 bg-cream flex items-center justify-center text-gold-antique">
                  <svg
                    className="w-4.5 h-4.5"
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
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique font-bold block">
                    Instagram DM
                  </span>
                  <span className="font-serif text-sm font-semibold text-emerald-deep block mt-0.5">
                    @vowsandverve
                  </span>
                </div>
              </a>

              {/* TikTok Card */}
              <a
                href="https://tiktok.com/@vowsandverve"
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-card p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left hover:scale-[1.01]"
              >
                <div className="w-10 h-10 rounded-full border border-gold-antique/30 bg-cream flex items-center justify-center text-gold-antique">
                  <svg
                    className="w-4.5 h-4.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.2 2.27 2.06 3.75 2.45v3.98c-1.63-.03-3.23-.51-4.63-1.39-.42-.26-.81-.57-1.17-.91v7.69c.04 1.83-.54 3.63-1.64 5.09-1.36 1.8-3.5 2.94-5.8 3.12-2.3.18-4.59-.44-6.36-1.74-1.92-1.41-3.12-3.55-3.26-5.94-.14-2.4 1-4.75 2.98-6.14 1.77-1.25 3.98-1.72 6.13-1.29v4.04c-1.12-.31-2.31-.1-3.27.57-.96.67-1.52 1.79-1.5 2.97.02 1.19.64 2.28 1.66 2.9 1.02.62 2.3.61 3.32-.02 1.02-.63 1.6-1.76 1.56-2.95V.02z" />
                  </svg>
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold-antique font-bold block">
                    TikTok
                  </span>
                  <span className="font-serif text-sm font-semibold text-emerald-deep block mt-0.5">
                    @vowsandverve
                  </span>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-cream-light border border-gold-antique/20 p-8 sm:p-10 shadow-md relative">
            
            {/* Corner border details */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gold-antique/30" />
            <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-gold-antique/30" />
            <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-gold-antique/30" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gold-antique/30" />

            {submitted ? (
              <div className="py-20 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-antique/10 border border-gold-antique flex items-center justify-center text-gold-antique">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-emerald-deep">
                  Thank You, Beloved Couple
                </h3>
                <p className="font-sans text-sm text-emerald-deep/70 max-w-sm mx-auto leading-relaxed">
                  We have received your details. Our design consultants will reach out to you via email within 24 hours with our packages and monogram catalog.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif text-2xl font-bold text-emerald-deep tracking-wide border-b border-gold-antique/15 pb-4">
                  Send a Consultation Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                      Your Full Names
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ranuka & Shenali"
                      className="w-full bg-cream border border-gold-antique/20 px-4 py-3 text-sm text-emerald-deep font-sans rounded-none focus:outline-none focus:border-gold-antique focus:ring-1 focus:ring-gold-antique/30 transition-all placeholder:text-emerald-deep/35"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. client@vowsandverve.com"
                      className="w-full bg-cream border border-gold-antique/20 px-4 py-3 text-sm text-emerald-deep font-sans rounded-none focus:outline-none focus:border-gold-antique focus:ring-1 focus:ring-gold-antique/30 transition-all placeholder:text-emerald-deep/35"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Wedding Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="weddingDate" className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                      Wedding Date (Optional)
                    </label>
                    <input
                      type="text"
                      id="weddingDate"
                      name="weddingDate"
                      value={formData.weddingDate}
                      onChange={handleInputChange}
                      placeholder="e.g. 18th December 2026"
                      className="w-full bg-cream border border-gold-antique/20 px-4 py-3 text-sm text-emerald-deep font-sans rounded-none focus:outline-none focus:border-gold-antique focus:ring-1 focus:ring-gold-antique/30 transition-all placeholder:text-emerald-deep/35"
                    />
                  </div>

                  {/* Preferred Style Theme */}
                  <div className="space-y-1.5">
                    <label htmlFor="theme" className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                      Preferred Style Theme
                    </label>
                    <select
                      id="theme"
                      name="theme"
                      value={formData.theme}
                      onChange={handleInputChange}
                      className="w-full bg-cream border border-gold-antique/20 px-4 py-3 text-sm text-emerald-deep font-sans rounded-none focus:outline-none focus:border-gold-antique focus:ring-1 focus:ring-gold-antique/30 transition-all font-medium"
                    >
                      <option value="kandyan">Luxury Kandyan Wedding</option>
                      <option value="tamil">Tamil Hindu Wedding</option>
                      <option value="nikah">Muslim Nikah Invite</option>
                      <option value="christian">Christian Church Wedding</option>
                      <option value="minimal">Minimal White & Gold</option>
                      <option value="royal">Royal Maroon & Gold</option>
                      <option value="custom">Bespoke Custom Styling</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-gold-antique font-semibold block">
                    Share Your Ideas & Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your colors, themes, culture-specific notes (e.g. Kandyan Poruwa ceremony) or monograms you like..."
                    className="w-full bg-cream border border-gold-antique/20 px-4 py-3 text-sm text-emerald-deep font-sans rounded-none focus:outline-none focus:border-gold-antique focus:ring-1 focus:ring-gold-antique/30 transition-all placeholder:text-emerald-deep/30 resize-none"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className="w-full justify-center inline-flex items-center gap-2.5 px-6 py-4 bg-emerald-deep hover:bg-gold-antique text-cream hover:text-emerald-deep font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 border border-gold-antique/30 shadow-[3px_3px_0px_rgba(197,168,90,0.3)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    Submit Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
