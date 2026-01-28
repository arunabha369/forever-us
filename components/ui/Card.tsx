"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass" | "glass-dark";
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "glass", hoverEffect = true, children, ...props }, ref) => {
        const variants = {
            default: "bg-white border border-gray-100 shadow-sm",
            glass: "bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg",
            "glass-dark": "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg text-white",
        };

        return (
            <motion.div
                ref={ref}
                className={cn(
                    "rounded-3xl overflow-hidden transition-all duration-300",
                    variants[variant],
                    hoverEffect && "hover:shadow-xl hover:translate-y-[-4px]",
                    className
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
