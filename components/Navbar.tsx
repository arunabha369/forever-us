"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Heart, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    const navLinks = [
        { name: "Use Cases", href: "#use-cases" },
        { name: "Templates", href: "#templates" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-white/70 backdrop-blur-xl border-white/40 py-3 shadow-sm"
                        : "bg-transparent border-transparent py-5"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                            <motion.div
                                className="absolute inset-0 text-rose-300 blur-sm"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Heart className="w-6 h-6 fill-current" />
                            </motion.div>
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-rose-600 transition-colors">
                            ForeverUs
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <Button variant="ghost" size="sm">Login</Button>
                            <Button variant="primary" size="sm" className="shadow-rose-200">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Start Creating
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-800" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-800" />
                        )}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl md:hidden flex flex-col p-6 gap-6"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-800"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 w-full" />
                    <Button variant="ghost" className="justify-start">Login</Button>
                    <Button variant="primary" className="justify-center">Start Creating</Button>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
