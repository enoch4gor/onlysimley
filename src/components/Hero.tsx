"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { HeroScroll } from "./HeroScroll";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-0 overflow-hidden">

            {/* Centered Heading */}
            <div className="max-w-5xl mx-auto text-center z-10 px-6 mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-medium leading-[0.9] text-stone-900 mb-8"
                >
                    TURN PHOTOS <br />
                    <span className="italic font-light text-stone-500">INTO MODELS</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-xl mx-auto text-lg md:text-xl text-stone-600 leading-relaxed mb-12"
                >
                    Spacious, design-led AI generation with a Japanese soul.
                    Crafted for e-commerce, fashion brands, and meaningful connection.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <button className="group relative inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full text-lg font-medium overflow-hidden transition-all hover:pr-10">
                        <span>Start Generating</span>
                        <ArrowDownRight className="w-5 h-5 transition-transform group-hover:rotate-[-45deg]" />
                    </button>
                </motion.div>
            </div>

            {/* Hero Scroll Section */}
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
