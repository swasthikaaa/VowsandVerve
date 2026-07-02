import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vows & Verve | Luxury Wedding Branding & Digital Styling Studio",
  description: "Personalized wedding identities, couple monograms, digital invitations, event signage, and social media visuals. Custom coordinated designs for modern Sri Lankan couples.",
  keywords: "wedding branding, digital wedding invitation, couple monogram, wedding logo, sri lankan wedding, event styling, vows and verve, wedding stationery, welcome board",
  openGraph: {
    title: "Vows & Verve | Luxury Wedding Branding & Digital Styling Studio",
    description: "Personalized wedding identities, couple monograms, digital invitations, event signage, and social media visuals. Custom coordinated designs for modern Sri Lankan couples.",
    type: "website",
    locale: "en_LK",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream text-emerald-deep font-sans antialiased flex flex-col justify-between selection:bg-gold-antique/20 selection:text-emerald-deep">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
