"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function WavyBackground() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <div className="fixed inset-0 w-full h-full -z-10 bg-stone-50 overflow-hidden pointer-events-none">
            {/* Organic Line 1 - Yellow */}
            <motion.svg
                style={{ y: y1 }}
                className="absolute top-0 right-0 w-[80vw] h-[120vh] opacity-40 text-yellow-200"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M30,0 C50,20 80,20 100,0 L100,100 C80,80 50,80 30,100 Z"
                    fill="currentColor"
                />
            </motion.svg>

            {/* Organic Line 2 - Subtle Gray */}
            <motion.svg
                style={{ y: y2 }}
                className="absolute top-[20%] left-[-10%] w-[60vw] h-[100vh] opacity-20 text-stone-200"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,0 C20,30 50,30 100,0 L100,100 C50,70 20,70 0,100 Z"
                    fill="currentColor"
                />
            </motion.svg>
        </div>
    );
}
