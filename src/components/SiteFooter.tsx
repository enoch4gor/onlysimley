"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function SiteFooter() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <footer ref={containerRef} className="relative bg-[#f8f5eb] text-stone-900 pt-32 pb-12 overflow-hidden min-h-screen flex flex-col justify-between">
            {/* Abstract Background Lines */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none opacity-30"
            >
                <svg className="w-full h-full" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-200 800 C 200 400, 600 900, 1000 600 S 1600 200, 1800 400" stroke="#fcd34d" strokeWidth="80" fill="none" opacity="0.5" />
                    <path d="M-100 200 C 300 100, 800 400, 1200 200 S 1600 0, 1800 100" stroke="#fcd34d" strokeWidth="40" fill="none" opacity="0.3" />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-grow flex flex-col">

                {/* Top Section: Reviews */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-auto">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm font-mono tracking-widest text-stone-500 uppercase">Featured Guest Reviews:</span>
                            <button className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-full text-xs hover:bg-stone-800 transition-colors">
                                <span>See all Reviews</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-4xl md:text-5xl font-display leading-tight">
                            "THE QUALITY IS UNMATCHED. <br />
                            IT LOOKS EXACTLY LIKE A <br />
                            REAL STUDIO SHOOT."
                        </h3>

                        <div className="flex items-end justify-between">
                            <div>
                                <p className="font-bold text-lg">Sarah Jenkins</p>
                                <p className="text-stone-500 text-sm">Fashion Brand Owner</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-300 transition-colors">
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-300 transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center: Branding */}
                <div className="py-24 md:py-32 relative">
                    <h1 className="text-[12vw] leading-[0.8] font-display text-stone-900 text-center tracking-tighter mix-blend-multiply opacity-90 break-words">
                        ONLY SMILEY
                    </h1>
                </div>

                {/* Bottom: Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm mt-auto border-t border-stone-200 pt-12">
                    <div className="max-w-sm text-stone-500">
                        <p>
                            World-class AI fashion models connecting brands with their audience through superior visual storytelling.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 font-medium">
                        <div className="space-y-4">
                            <a href="#" className="block hover:text-stone-500 transition-colors">GET STARTED</a>
                            <a href="#" className="block hover:text-stone-500 transition-colors">PRICING</a>
                        </div>
                        <div className="space-y-4">
                            <a href="#" className="block hover:text-stone-500 transition-colors">CASE STUDIES</a>
                            <a href="#" className="block hover:text-stone-500 transition-colors">CONTACT SUPPORT</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
