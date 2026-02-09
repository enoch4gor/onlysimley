import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
    title: "Only Smiley | Turn Photos into AI Models",
    description: "Transform your product photos into professional AI models instantly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                inter.variable,
                outfit.variable,
                spaceGrotesk.variable,
                "min-h-screen bg-stone-50 font-sans antialiased text-stone-900 selection:bg-yellow-200 selection:text-stone-900"
            )}>
                {children}
            </body>
        </html>
    );
}
