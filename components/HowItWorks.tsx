"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Grid, Edit3, Rocket } from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Choose a Template",
            description: "Pick from our stunning, handcrafted designs.",
            icon: <Grid className="w-8 h-8 text-rose-500" />
        },
        {
            id: 2,
            title: "Add Your Memories",
            description: "Upload photos, videos, and write your story.",
            icon: <Edit3 className="w-8 h-8 text-rose-500" />
        },
        {
            id: 3,
            title: "Share Forever",
            description: "Get a live link instantly to share with loved ones.",
            icon: <Rocket className="w-8 h-8 text-rose-500" />
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden z-10">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                        Three Steps to Forever
                    </h2>
                    <p className="text-lg text-gray-600">
                        No coding required. Just love.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-rose-200 to-transparent -translate-y-8 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex-1 w-full max-w-sm"
                        >
                            <Card className="text-center p-8 bg-white/40 hover:bg-white/60 border-white/60 backdrop-blur-md h-full flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6 shadow-md shadow-rose-100 relative group">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-rose-100 flex items-center justify-center font-bold text-rose-600 text-sm shadow-sm">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-display">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
