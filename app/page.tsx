"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Templates from "@/components/Templates";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackgroundElements from "@/components/BackgroundElements";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground antialiased selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden relative">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <UseCases />
      <HowItWorks />
      <Templates />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
