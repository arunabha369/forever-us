import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/BackgroundElements";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ForeverUs - Every Love Story Deserves a Home",
  description: "Create a beautiful, hosted website for your relationship journey. The perfect digital gift for anniversaries, interactions, and weddings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground selection:bg-rose-100 selection:text-rose-900`}
      >
        <BackgroundElements />
        <Navbar />
        <div className="fixed inset-0 pointer-events-none select-none">
          {/* Texture overlay handled in CSS */}
        </div>
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
