"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Expanded image sets for the showcase (7 sets)
const SHOWCASE_ITEMS = [
    // SET 1 (Top Left)
    {
        id: 1,
        type: "before",
        src: "/Image/2/2-Before1.jpg",
        alt: "Original Photo 1",
        yOffset: 50,
        xOffset: "5%",
        width: "w-56 md:w-64",
        aspect: "aspect-[3/4]"
    },
    {
        id: 2,
        type: "after",
        src: "/Image/2/2-After1.jpg",
        alt: "AI Model Variant 1",
        yOffset: -100,
        xOffset: "35%",
        width: "w-72 md:w-80",
        aspect: "aspect-[3/4]"
    },

    // SET 2 (Right Side)
    {
        id: 3,
        type: "after",
        src: "/Image/2/2-After2.jpg",
        alt: "AI Model Variant 2",
        yOffset: 150,
        xOffset: "70%",
        width: "w-64 md:w-72",
        aspect: "aspect-[3/4]"
    },

    // SET 3 (Center Area)
    {
        id: 4,
        type: "after",
        src: "/Image/3/3-After1.jpg",
        alt: "AI Model Variant 3",
        yOffset: -50,
        xOffset: "25%",
        width: "w-80 md:w-96",
        aspect: "aspect-[3/4]"
    },
    {
        id: 5,
        type: "before",
        src: "/Image/3/3-Before1.jpg",
        alt: "Original Photo 2",
        yOffset: 200,
        xOffset: "5%",
        width: "w-56 md:w-64",
        aspect: "aspect-[3/4]"
    },

    // SET 4 (Mid Right)
    {
        id: 6,
        type: "after",
        src: "/Image/3/3-After2.jpg",
        alt: "AI Model Variant 4",
        yOffset: 0,
        xOffset: "60%",
        width: "w-72 md:w-80",
        aspect: "aspect-[3/4]"
    },

    // SET 5 (Lower Left)
    {
        id: 7,
        type: "before",
        src: "/Image/4/4-Before1.jpg",
        alt: "Original Photo 3",
        yOffset: 100,
        xOffset: "10%",
        width: "w-64 md:w-72",
        aspect: "aspect-[3/4]"
    },
    {
        id: 8,
        type: "after",
        src: "/Image/4/4-After1.jpg",
        alt: "AI Model Variant 5",
        yOffset: -80,
        xOffset: "40%",
        width: "w-64 md:w-72",
        aspect: "aspect-[3/4]"
    },

    // SET 6 (Lower Right)
    {
        id: 9,
        type: "after",
        src: "/Image/4/4-After2.jpg",
        alt: "AI Model Variant 6",
        yOffset: 120,
        xOffset: "75%",
        width: "w-72 md:w-80",
        aspect: "aspect-[3/4]"
    },
    {
        id: 10,
        type: "after",
        src: "/Image/5/5-After1.jpg",
        alt: "AI Model Variant 7",
        yOffset: -120,
        xOffset: "55%",
        width: "w-64 md:w-72",
        aspect: "aspect-[3/4]"
    },

    // SET 7 (Bottom Center)
    {
        id: 11,
        type: "before",
        src: "/Image/5/5-Before1.jpg",
        alt: "Original Photo 4",
        yOffset: 180,
        xOffset: "20%",
        width: "w-56 md:w-64",
        aspect: "aspect-[3/4]"
    },
    {
        id: 12,
        type: "after",
        src: "/Image/5/5-After2.jpg",
        alt: "AI Model Variant 8",
        yOffset: -60,
        xOffset: "50%",
        width: "w-80 md:w-96",
        aspect: "aspect-[3/4]"
    }
];

export function ModelShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section
            ref={containerRef}
            className="relative min-h-[250vh] bg-stone-950 overflow-hidden py-24"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32 sticky top-24 z-20 mix-blend-difference">
                    <h2 className="text-4xl md:text-8xl font-display text-white mb-6 tracking-tight">
                        Diverse Models. <span className="text-stone-500 italic block mt-2 text-2xl md:text-4xl font-light">One Click Away.</span>
                    </h2>
                </div>

                <div className="relative h-[200vh] w-full">
                    {SHOWCASE_ITEMS.map((item, index) => {
                        // Create varied parallax speeds for depth
                        const y = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [0, item.yOffset * (index % 2 === 0 ? 4 : 2)]
                        );

                        return (
                            <motion.div
                                key={item.id}
                                style={{ y, left: item.xOffset, top: `${(index * 7)}%` }}
                                className={`absolute ${item.width} ${item.aspect} rounded-xl overflow-hidden shadow-2xl border border-stone-800/50 transition-all duration-700`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: index * 0.05 }}
                                viewport={{ once: true, margin: "-5%" }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className={`absolute top-4 ${item.type === 'before' ? 'left-4' : 'right-4'} px-3 py-1 rounded-full text-xs font-bold tracking-wider ${item.type === 'before'
                                    ? 'bg-black/50 text-white backdrop-blur-md'
                                    : 'bg-yellow-400 text-stone-900'
                                    }`}>
                                    {item.type === 'before' ? 'ORIGINAL' : 'AI MODEL'}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
