"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center bg-rose-900 text-white">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2544&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-950 via-rose-900/80 to-rose-900/50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-md mb-6">
                        <Heart className="w-6 h-6 text-rose-300 fill-rose-300 animate-pulse" />
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
                        One day, these memories <br /> will mean everything.
                    </h2>

                    <p className="text-xl text-rose-100 max-w-2xl mx-auto leading-relaxed">
                        Don't let your story get lost in a camera roll. Give it the home it deserves.
                    </p>

                    <div className="pt-8">
                        <Link href="/create">
                            <Button
                                size="lg"
                                variant="shine"
                                className="text-lg px-12 py-8 bg-white text-rose-600 hover:bg-rose-50 border-0 shadow-2xl shadow-rose-900/50"
                            >
                                Start Creating My Website
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <p className="mt-4 text-sm text-rose-200 opacity-80">
                            Takes less than 5 minutes • No coding required
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
