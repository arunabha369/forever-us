"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Heart, Gem, Calendar, Gift, Baby, MapPin, Sparkles } from "lucide-react";

const UseCases = () => {
    const useCases = [
        {
            title: "Love Story",
            icon: <Heart className="w-6 h-6 text-rose-500" />,
            description: "Chronicle your journey from the first date to now.",
            color: "bg-rose-50",
        },
        {
            title: "Anniversary",
            icon: <Calendar className="w-6 h-6 text-rose-500" />,
            description: "A digital memory lane to celebrate your years together.",
            color: "bg-rose-50",
        },
        {
            title: "Proposal",
            icon: <Gem className="w-6 h-6 text-rose-500" />,
            description: "The perfect way to pop the question with memories.",
            color: "bg-rose-50",
        },
        {
            title: "Wedding",
            icon: <Sparkles className="w-6 h-6 text-rose-500" />,
            description: "Share your story and details with guests beautifully.",
            color: "bg-rose-50",
        },
        {
            title: "Birthday Surprise",
            icon: <Gift className="w-6 h-6 text-rose-500" />,
            description: "A gift that lasts longer than a single day.",
            color: "bg-rose-50",
        },
        {
            title: "Long Distance",
            icon: <MapPin className="w-6 h-6 text-rose-500" />,
            description: "Bridge the gap with a shared digital space.",
            color: "bg-rose-50",
        },
        {
            title: "Baby Announcement",
            icon: <Baby className="w-6 h-6 text-rose-500" />,
            description: "Share the joy of your growing family.",
            color: "bg-rose-50",
        }
    ];

    return (
        <section id="use-cases" className="py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        More Than Just Valentine's
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Life is full of moments worth saving. Create a dedicated space for every chapter of your story.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <Card
                            key={useCase.title}
                            className="p-6 border-white/40 bg-white/40 backdrop-blur-md hover:bg-white/60 shadow-lg"
                            hoverEffect={true}
                        >
                            <div className="mb-4 p-3 rounded-2xl bg-rose-50 w-fit">
                                {useCase.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 font-display">{useCase.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {useCase.description}
                            </p>
                        </Card>
                    ))}
                    {/* CTA Card */}
                    <Card className="p-6 bg-gradient-to-br from-rose-500 to-purple-600 text-white flex flex-col justify-center items-center text-center">
                        <h3 className="text-xl font-bold mb-2 font-display">Your Special Moment?</h3>
                        <p className="text-white/90 text-sm mb-4">Create a custom site for any occasion.</p>
                        <button className="px-4 py-2 bg-white text-rose-600 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors">
                            Get Started
                        </button>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
