"use client";

import React from "react";
import Link from "next/link";
import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                            <span className="font-display font-bold text-lg text-foreground">
                                ForeverUs
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Helping couples and families preserve their most precious memories in a digital home that lasts forever.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#templates" className="hover:text-rose-500">Templates</Link></li>
                            <li><Link href="#pricing" className="hover:text-rose-500">Pricing</Link></li>
                            <li><Link href="/examples" className="hover:text-rose-500">Examples</Link></li>
                            <li><Link href="/gift" className="hover:text-rose-500">Gift Cards</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-rose-500">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-rose-500">Love Stories</Link></li>
                            <li><Link href="/contact" className="hover:text-rose-500">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-rose-500">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-400">
                            &copy; {new Date().getFullYear()} ForeverUs Inc.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-400">
                        Made with <Heart className="w-3 h-3 inline text-rose-500 fill-rose-500 mx-1" /> for love.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-400">
                        <Link href="/terms" className="hover:text-gray-600">Terms</Link>
                        <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
                        <Link href="/security" className="hover:text-gray-600">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
