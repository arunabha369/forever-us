"use client";

import React from "react";
import { motion } from "framer-motion";

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Left Rose Blob */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-200/30 blur-[100px]"
            />

            {/* Middle Right Purple Blob */}
            <motion.div
                animate={{
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-lavender-200/30 blur-[120px]"
            />

            {/* Bottom Left Peach Blob */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, -20, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-peach-200/30 blur-[90px]"
            />

            {/* Floating particles/Sparkles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full opacity-60"
                    style={{
                        width: Math.random() * 4 + 2 + "px",
                        height: Math.random() * 4 + 2 + "px",
                        left: Math.random() * 100 + "%",
                        top: Math.random() * 100 + "%",
                        filter: "blur(1px)"
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundElements;
