"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    // Wavy line parallax
    const lineY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative py-32 bg-stone-50 overflow-hidden">
            {/* Organic Wavy Background Line */}
            <motion.div
                style={{ top: lineY }}
                className="absolute inset-0 pointer-events-none opacity-10"
            >
                <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
                    <path d="M-100 400 C 200 200, 400 600, 700 400 S 1200 100, 1500 400" stroke="black" strokeWidth="2" fill="none" />
                </svg>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-7xl font-display text-stone-900 leading-[0.9]">
                            WORLD'S BEST <br />
                            AI MODELS
                        </h2>
                        <h3 className="text-2xl md:text-4xl font-light text-stone-500">
                            UNMATCHED QUALITY <br />
                            FOR YOUR BRAND
                        </h3>
                    </div>

                    <div className="flex flex-col justify-between items-start lg:items-end space-y-8">
                        <p className="text-stone-600 max-w-md text-lg leading-relaxed text-left lg:text-right">
                            Experience the highest resolution, most realistic AI fashion models available.
                            Our technology preserves every texture, fold, and detail of your garments,
                            creating visuals indistinguishable from professional photoshoots.
                        </p>
                        <button className="group flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-stone-800 transition-colors">
                            <span>Start Creating Now</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[600px] items-center">
                    {/* Left - Scenic/Gateway */}
                    <motion.div style={{ y: y1 }} className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/Image/7/7-After1.jpg" // Using Set 7
                            alt="High Quality Result"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Center - Detail Shot */}
                    <motion.div style={{ y: y2 }} className="relative h-[300px] w-[80%] mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                            src="/Image/2/2-After1.jpg" // Using Set 2 (AI Model)
                            alt="Texture Detail"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right - Lifestyle/Group */}
                    <motion.div style={{ y: y3 }} className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/Image/8/8-After1.jpg" // Using Set 8
                            alt="Lifestyle Scene"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
