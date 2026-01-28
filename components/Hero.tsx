"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "./ui/Button";
import Scene from "./Scene";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* 3D Background */}
            <Scene />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-rose-100 text-rose-600 text-sm font-medium mb-4"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                        </span>
                        The #1 Gift for Relationships
                    </motion.div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground leading-tight">
                        Every Love Story <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 animate-gradient-x">
                            Deserves a Home
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Turn your memories into a beautiful, hosted website you can share forever.
                        The perfect emotional gift for anniversaries, proposals, and weddings.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/create">
                            <Button size="lg" variant="primary" className="w-full sm:w-auto shadow-rose-200/50">
                                Create Our Website
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                        <Link href="https://forever-us-template-one.vercel.app/" target="_blank">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                <PlayCircle className="w-4 h-4 mr-2" />
                                View Templates
                            </Button>
                        </Link>
                    </div>

                    {/* Social Proof / Trust */}
                    <div className="pt-12 flex items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Add logos here later */}
                        <p className="text-xs text-uppercase tracking-widest text-gray-500 font-semibold">LOVED BY 10,000+ COUPLES</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
