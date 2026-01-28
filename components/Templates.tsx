"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Eye, ArrowRight } from "lucide-react";

const Templates = () => {
    const templates = [
        {
            name: "The Storybook",
            style: "Romantic & Classical",
            color: "bg-[#f8f5f2]",
            preview: "bg-rose-100",
        },
        {
            name: "Modern Love",
            style: "Clean & Minimalist",
            color: "bg-white",
            preview: "bg-gray-100",
        },
        {
            name: "Cinematic Journey",
            style: "Video-First & Dark Mode",
            color: "bg-slate-900",
            preview: "bg-slate-800",
            dark: true
        },
        {
            name: "Scrapbook",
            style: "Playful & Collage",
            color: "bg-yellow-50",
            preview: "bg-yellow-100",
        }
    ];

    return (
        <section id="templates" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                            Beautifully Crafted Templates
                        </h2>
                        <p className="text-lg text-gray-600">
                            Each design is built to tell a story. Choose the one that feels like you.
                        </p>
                    </div>
                    <a href="https://forever-us-template-one.vercel.app/" target="_blank" className="hidden md:flex shrink-0">
                        <Button variant="outline">
                            View All Templates <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Card
                                className={`h-[400px] relative overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-3xl ${template.color}`}
                                hoverEffect={false}
                            >
                                {/* Mock Browser UI */}
                                <div className="absolute top-4 left-4 right-4 h-8 bg-black/5 rounded-full flex items-center px-3 gap-1.5 backdrop-blur-sm z-20">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                </div>

                                {/* Preview Area (Abstract) */}
                                <div className="absolute inset-x-4 top-16 bottom-4 rounded-2xl overflow-hidden shadow-inner bg-white/50">
                                    <div className={`w-full h-full opacity-50 ${template.preview} flex items-center justify-center`}>
                                        <span className="font-display text-4xl opacity-10 font-bold">{template.name}</span>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px] z-30">
                                    <a href="https://forever-us-template-one.vercel.app/" target="_blank">
                                        <Button variant="shine" size="lg">
                                            <Eye className="mr-2 w-4 h-4" />
                                            Preview
                                        </Button>
                                    </a>
                                </div>

                                {/* Label */}
                                <div className="absolute bottom-8 left-8 z-20 transition-transform duration-300 group-hover:translate-y-20">
                                    <h3 className={`text-2xl font-bold font-display ${template.dark ? 'text-white' : 'text-gray-900'}`}>{template.name}</h3>
                                    <p className={`text-sm font-medium ${template.dark ? 'text-white/70' : 'text-gray-500'}`}>{template.style}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="https://forever-us-template-one.vercel.app/" target="_blank" className="w-full inline-block">
                        <Button variant="outline" className="w-full">
                            View All Templates <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Templates;
