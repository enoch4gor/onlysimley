"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, RefreshCcw } from "lucide-react";
import { HeroScroll } from "./HeroScroll";
import ComparisonSlider from "./ComparisonSlider";

const HERO_EXAMPLES = [
    {
        id: 1,
        before: "/Image/4/4-Before1.jpg",
        after: "/Image/4/4-After1.jpg",
        alt: "Studio Portrait"
    },
    {
        id: 2,
        before: "/Image/3/3-Before1.jpg",
        after: "/Image/3/3-After1.jpg",
        alt: "Outdoor Lifestyle"
    },
    {
        id: 3,
        before: "/Image/9/9-Before1.jpg",
        after: "/Image/9/9-After1.jpg",
        alt: "Urban Fashion"
    }
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % HERO_EXAMPLES.length);
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 w-full z-10 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & CTA */}
                    <div className="text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl lg:text-8xl font-display font-medium leading-[0.9] text-stone-900 mb-8"
                        >
                            TURN SNAPSHOTS <br />
                            <span className="italic font-light text-stone-500">INTO HIGH-END MODELS</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="max-w-xl text-lg md:text-xl text-stone-600 leading-relaxed mb-10"
                        >
                            Turn normal product snap photos into big brand feel models like Nike, LV, Gucci level.
                            Elevate your brand instantly.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <button className="group relative inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-all hover:pr-10 shadow-lg hover:shadow-xl">
                                <span>Start Generating</span>
                                <ArrowDownRight className="w-5 h-5 transition-transform group-hover:rotate-[-45deg]" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column: Comparison Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full w-full"
                                >
                                    <ComparisonSlider
                                        beforeImage={HERO_EXAMPLES[currentIndex].before}
                                        afterImage={HERO_EXAMPLES[currentIndex].after}
                                        altText={HERO_EXAMPLES[currentIndex].alt}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Switch Image Button */}
                        <div className="mt-6 flex justify-center lg:justify-end">
                            <button
                                onClick={handleNextImage}
                                className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium text-sm tracking-wide bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200 shadow-sm hover:bg-white"
                            >
                                <RefreshCcw className="w-4 h-4" />
                                <span>Switch Example</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Hero Scroll Section - Pushed to bottom */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-full mt-auto mb-8"
            >
                <HeroScroll />
            </motion.div>
        </section>
    );
}
