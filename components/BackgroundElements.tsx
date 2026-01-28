"use client";

import React from "react";

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 translate-z-0">
            {/* Top Left Rose Blob */}
            <div
                className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-200/30 blur-[100px] animate-float will-change-transform"
            />

            {/* Middle Right Purple Blob */}
            <div
                className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-lavender-200/30 blur-[120px] animate-float-delayed will-change-transform"
            />

            {/* Bottom Left Peach Blob */}
            <div
                className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-peach-200/30 blur-[90px] animate-float will-change-transform"
            />
        </div>
    );
};

export default BackgroundElements;
