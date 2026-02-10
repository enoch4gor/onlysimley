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



            {/* Features / How it Works */}
            <section id="process" className="py-32 bg-stone-900 text-stone-50 rounded-t-[3rem] mt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 01 */}
                        <div className="relative group h-[500px] rounded-2xl overflow-hidden border border-stone-800">
                            <Image
                                src="/Image/5/5-Before1.jpg"
                                alt="Raw Photo Upload"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                                <span className="text-yellow-400 font-mono text-xl tracking-wider font-bold">01. UPLOAD</span>
                                <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">
                                    Raw Photos
                                </h3>
                                <p className="text-stone-300 text-lg leading-relaxed font-medium">
                                    Simply send us your product images to our real artist using your favorite messenger app
                                    (no need to download anything and learn how to use the system), we do it all for you.
                                </p>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="relative group h-[500px] rounded-2xl overflow-hidden border border-stone-800">
                            <Image
                                src="/Image/5/5-After1.jpg"
                                alt="AI Generation Process"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                                <span className="text-yellow-400 font-mono text-xl tracking-wider font-bold">02. AI MAGIC</span>
                                <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">
                                    Sit Back
                                </h3>
                                <p className="text-stone-300 text-lg leading-relaxed font-medium">
                                    You sit back and have a coffee and we will send you back super professional photo in couple hours
                                    for your review, you only pay for the AI model image that you like.
                                </p>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div className="relative group h-[500px] rounded-2xl overflow-hidden border border-stone-800">
                            <Image
                                src="/Image/e-Commerce.png" // User provided e-commerce asset
                                alt="eCommerce Ready"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                                <span className="text-yellow-400 font-mono text-xl tracking-wider font-bold">03. E-COMMERCE</span>
                                <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">
                                    Conversion
                                </h3>
                                <p className="text-stone-300 text-lg leading-relaxed font-medium">
                                    You just upload the high quality model image to your e-commerce site like Shopify or Amazon
                                    and watch the product skyrocket in conversion rate!
                                </p>
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
