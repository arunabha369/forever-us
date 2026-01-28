"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Image as ImageIcon, Music, Lock, Globe, Sparkles, Smartphone, HeartHandshake } from "lucide-react";
import { Card } from "./ui/Card";

const Features = () => {
    const features = [
        {
            title: "Interactive Timeline",
            description: "Scroll through your relationship history with buttery smooth animations.",
            icon: <Clock className="w-6 h-6 text-white" />,
            color: "from-rose-400 to-rose-600",
        },
        {
            title: "Memory Gallery",
            description: "A beautiful masonry grid for your photos and videos, optimized for quality.",
            icon: <ImageIcon className="w-6 h-6 text-white" />,
            color: "from-purple-400 to-purple-600",
        },
        {
            title: "Background Music",
            description: "Set the mood with your special song playing softly in the background.",
            icon: <Music className="w-6 h-6 text-white" />,
            color: "from-rose-400 to-orange-400",
        },
        {
            title: "Total Privacy",
            description: "Password protect your site or make it public. You are in control.",
            icon: <Lock className="w-6 h-6 text-white" />,
            color: "from-blue-400 to-cyan-500",
        },
        {
            title: "Custom Domain",
            description: "Connect your own domain (e.g., sarahandtom.com) easily.",
            icon: <Globe className="w-6 h-6 text-white" />,
            color: "from-emerald-400 to-teal-500",
        },
        {
            title: "AI Love Story",
            description: "Our AI helps write your love story content if you're stuck for words.",
            icon: <Sparkles className="w-6 h-6 text-white" />,
            color: "from-amber-400 to-orange-500",
        },
        {
            title: "Mobile Perfect",
            description: "Looks stunning on every device, from iPhone to desktop.",
            icon: <Smartphone className="w-6 h-6 text-white" />,
            color: "from-indigo-400 to-purple-500",
        },
        {
            title: "Surprise Reveal",
            description: "Keep the site locked with a countdown until the special moment.",
            icon: <HeartHandshake className="w-6 h-6 text-white" />,
            color: "from-pink-400 to-rose-500",
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-rose-50/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-600 font-bold text-xs tracking-widest uppercase mb-4">
                        Everything You Need
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                        Built for Emotion, <br /> Designed for Forever
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We've thought of everything so you can focus on the memories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Card
                                className="p-6 h-full flex flex-col hover:border-rose-200 transaction-colors duration-300"
                                variant="default"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 font-display">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
