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

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
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
