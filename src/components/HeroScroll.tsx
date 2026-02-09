"use client";

import Image from "next/image";

const IMAGES = [
    { id: 2, before: "/Image/2/2-Before1.jpg", after: "/Image/2/2-After1.jpg" },
    { id: 3, before: "/Image/3/3-Before1.jpg", after: "/Image/3/3-After1.jpg" },
    { id: 4, before: "/Image/4/4-Before1.jpg", after: "/Image/4/4-After1.jpg" },
    { id: 5, before: "/Image/5/5-Before1.jpg", after: "/Image/5/5-After1.jpg" },
    { id: 6, before: "/Image/6/6-Before1.jpg", after: "/Image/6/6-After1.jpg" },
    { id: 7, before: "/Image/7/7-Before1.jpg", after: "/Image/7/7-After1.jpg" },
    { id: 8, before: "/Image/8/8-Before1.jpg", after: "/Image/8/8-After1.jpg" },
    { id: 9, before: "/Image/9/9-Before1.jpg", after: "/Image/9/9-After1.jpg" },
];

export function HeroScroll() {
    return (
        <div className="w-full overflow-hidden py-10 bg-transparent relative z-20">
            {/* Inline animation since we don't have tailwind.config.js */}
            <div
                className="flex w-max hover:[animation-play-state:paused] group"
                style={{
                    animation: 'scroll 60s linear infinite'
                }}
            >

                {/* First set of images */}
                <div className="flex gap-16 px-8 items-end">
                    {IMAGES.map((img) => (
                        <div key={`a-${img.id}`} className="flex items-end gap-4 shrink-0 hover:scale-105 transition-transform duration-500">
                            {/* Product Image (Left) - 50% size visually by height/width constraint */}
                            <div className="relative w-[150px] md:w-[200px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-stone-200">
                                <Image
                                    src={img.before}
                                    alt={`Product ${img.id}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                                    PRODUCT
                                </div>
                            </div>

                            {/* AI Model Image (Right) - Full size */}
                            <div className="relative w-[300px] md:w-[400px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                                <Image
                                    src={img.after}
                                    alt={`AI Model ${img.id}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-yellow-400 text-stone-900 text-xs px-3 py-1 rounded-full font-bold tracking-wider shadow-sm">
                                    AI MODEL
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex gap-16 px-8 items-end">
                    {IMAGES.map((img) => (
                        <div key={`b-${img.id}`} className="flex items-end gap-4 shrink-0 hover:scale-105 transition-transform duration-500">
                            {/* Product Image (Left) */}
                            <div className="relative w-[150px] md:w-[200px] aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-stone-200">
                                <Image
                                    src={img.before}
                                    alt={`Product ${img.id}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                                    PRODUCT
                                </div>
                            </div>

                            {/* AI Model Image (Right) */}
                            <div className="relative w-[300px] md:w-[400px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-stone-200">
                                <Image
                                    src={img.after}
                                    alt={`AI Model ${img.id}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-yellow-400 text-stone-900 text-xs px-3 py-1 rounded-full font-bold tracking-wider shadow-sm">
                                    AI MODEL
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
