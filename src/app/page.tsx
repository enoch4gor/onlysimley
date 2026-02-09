import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WavyBackground } from "@/components/WavyBackground";
import ComparisonSlider from "@/components/ComparisonSlider";
import { ModelShowcase } from "@/components/ModelShowcase";
import { CallToAction } from "@/components/CallToAction";
import { SiteFooter } from "@/components/SiteFooter";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden selection:bg-yellow-200 selection:text-stone-900">
            <Navbar />
            <WavyBackground />

            {/* Hero Section */}
            <Hero />

            {/* Showcase Section */}
            <section id="work" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-display mb-6">Real Results. <span className="text-stone-400 font-light italic">Instantly.</span></h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        See how our AI transforms standard flat-lay photos into professional model shoots.
                        Drag the slider to compare.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Example 1 */}
                    <div className="aspect-[3/4] w-full">
                        <ComparisonSlider
                            beforeImage="/Image/4/4-Before1.jpg"
                            afterImage="/Image/4/4-After2.jpg"
                            altText="Casual Wear Transformation"
                        />
                    </div>
                    {/* Example 2 */}
                    <div className="aspect-[3/4] w-full">
                        <ComparisonSlider
                            beforeImage="/Image/2/2-Before1.jpg"
                            afterImage="/Image/2/2-After1.jpg"
                            altText="Formal Wear Transformation"
                        />
                    </div>
                </div>
            </section>

            {/* Features / How it Works */}
            <section id="process" className="py-32 bg-stone-900 text-stone-50 rounded-t-[3rem] mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 group">
                                <Image
                                    src="/Image/4/4-Before1.jpg"
                                    alt="Raw Photo Upload"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-yellow-400 font-mono text-sm tracking-wider">01. UPLOAD</span>
                                <h3 className="text-3xl font-display">Raw Photos</h3>
                                <p className="text-stone-400 leading-relaxed">Upload your ghost mannequin or flat lay product shots. No professional model needed.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 group">
                                <Image
                                    src="/Image/4/4-After1.jpg"
                                    alt="AI Generation Process"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <div className="space-y-2">
                                <span className="text-yellow-400 font-mono text-sm tracking-wider">02. GENERATE</span>
                                <h3 className="text-3xl font-display">AI Magic</h3>
                                <p className="text-stone-400 leading-relaxed">Our model analyzes the garment and generates a hyper-realistic human model wearing it.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700 group">
                                {/* Fallback to placeholder if asset is missing, but structure is ready */}
                                <div className="absolute inset-0 bg-stone-800 flex items-center justify-center text-stone-600">
                                    <span className="font-mono text-xs">e-Commerce Ready Asset</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <span className="text-yellow-400 font-mono text-sm tracking-wider">03. DOWNLOAD</span>
                                <h3 className="text-3xl font-display">eCommerce Ready</h3>
                                <p className="text-stone-400 leading-relaxed">Download high-resolution images ready for your Shopify or WooCommerce store.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Model Showcase Parallax Section */}
            <ModelShowcase />

            {/* Call To Action Section */}
            <CallToAction />

            {/* Premium Site Footer */}
            <SiteFooter />
        </main>
    );
}
