"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="font-display text-2xl font-bold tracking-tight z-50">
                    ONLY SMILEY
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center">
                    {["Work", "Process", "Pricing", "About"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium tracking-wide"
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                    <button className="bg-stone-900 text-stone-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 text-stone-900"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-0 left-0 w-full h-screen bg-stone-50 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {["Work", "Process", "Pricing", "About"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-display font-bold text-stone-900"
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
