"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "shine";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";

        const variants = {
            primary: "bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-[1.02]",
            secondary: "bg-white/80 backdrop-blur-md border border-white/50 text-foreground hover:bg-white hover:border-white shadow-sm hover:shadow-md",
            outline: "bg-transparent border border-white/40 text-foreground hover:bg-white/10 hover:border-white/60",
            ghost: "bg-transparent text-foreground/80 hover:text-foreground hover:bg-black/5",
            shine: "bg-white text-rose-500 shadow-xl shadow-rose-500/20 hover:shadow-rose-500/40 border border-white/50 relative overflow-hidden"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {/* Shine effect for shine variant */}
                {variant === "shine" && (
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent before:w-full before:h-full before:-skew-x-30" />
                )}

                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                <span className="relative z-10 flex items-center gap-2">
                    {children as React.ReactNode}
                </span>
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
