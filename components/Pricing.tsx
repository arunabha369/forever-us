"use client";

import React from "react";
import { Check, Sparkles, Heart } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const Pricing = () => {
    const plans = [
        {
            name: "Free Preview",
            price: "$0",
            description: "Design your site and see how it looks. Pay only when you're ready to share.",
            features: [
                "Access to all templates",
                "Upload unlimited photos",
                "Full design customization",
                "Mobile preview",
                "No credit card required"
            ],
            cta: "Start Designing",
            variant: "outline",
            popular: false
        },
        {
            name: "The Forever Gift",
            price: "$49",
            period: "one-time",
            description: "The perfect digital gift. A beautiful website that stays online forever.",
            features: [
                "Everything in Free",
                "Lifetime hosting included",
                "Custom domain connection",
                "Remove branding",
                "Password protection",
                "Gift wrap animation reveal"
            ],
            cta: "Create Gift",
            variant: "primary",
            popular: true
        },
        {
            name: "Annual Memory",
            price: "$29",
            period: "/year",
            description: "Great for anniversaries where you want to add new memories each year.",
            features: [
                "Everything in Forever",
                "Yearly reminder emails",
                "Priority support",
                "50GB Storage",
                "4K Video support"
            ],
            cta: "Choose Annual",
            variant: "secondary",
            popular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 relative z-10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        A Gift That Lasts Forever
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Design for free. Pay once to keep it forever. No hidden monthly fees for your special moment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        <div key={plan.name} className={`relative ${plan.popular ? 'md:-mt-4 md:-mb-4' : ''}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 inset-x-0 flex justify-center z-20">
                                    <div className="bg-gradient-to-r from-rose-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                        <Sparkles className="w-3 h-3" />
                                        MOST POPULAR GIFT
                                    </div>
                                </div>
                            )}
                            <Card
                                className={`p-8 h-full flex flex-col ${plan.popular ? 'border-rose-200 shadow-xl bg-white/60 scale-100 ring-4 ring-rose-50/50 backdrop-blur-md' : 'bg-white/40 border-white/50 hover:bg-white/60 backdrop-blur-sm'}`}
                                variant="default"
                                hoverEffect={true}
                            >
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold font-display text-gray-900">{plan.name}</h3>
                                    <div className="mt-2 flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                        {plan.period && <span className="text-gray-500 text-sm">{plan.period}</span>}
                                    </div>
                                    <p className="mt-4 text-sm text-gray-500 leading-relaxed min-h-[40px]">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-sm text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    variant={plan.variant as any}
                                    className="w-full"
                                    size={plan.popular ? "lg" : "md"}
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <Heart className="w-4 h-4 text-rose-400" />
                        100% Money-back guarantee if they don't love it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
