"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { motion } from 'framer-motion';

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    altText?: string;
    className?: string;
}

export default function ComparisonSlider({ beforeImage, afterImage, altText = "Model Transformation", className = "" }: ComparisonSliderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className={`relative w-full h-full overflow-hidden rounded-2xl shadow-xl ${className}`}
        >
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt={`Before: ${altText}`} />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt={`After: ${altText}`} />}
                className="h-full w-full object-cover"
                style={{ height: '100%', width: '100%' }}
            />

            {/* Minimalist Handles / Labels */}
            <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white tracking-wider pointer-events-none z-10">
                ORIGINAL
            </div>
            <div className="absolute top-4 right-4 bg-yellow-400 text-stone-900 px-3 py-1 rounded-full text-xs font-bold tracking-wider pointer-events-none z-10">
                AI MODEL
            </div>
        </motion.div>
    );
}
