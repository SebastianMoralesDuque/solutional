"use client";

import { Button } from "@/components/ui/button";

const ICONS_ROW1 = [
    "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
    "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    "https://cdn-icons-png.flaticon.com/512/732/732084.png",
    "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    "https://cdn-icons-png.flaticon.com/512/281/281763.png",
    "https://cdn-icons-png.flaticon.com/512/888/888879.png",
];

const ICONS_ROW2 = [
    "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    "https://cdn-icons-png.flaticon.com/512/888/888841.png",
    "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
    "https://cdn-icons-png.flaticon.com/512/906/906361.png",
    "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    "https://cdn-icons-png.flaticon.com/512/888/888847.png",
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 2) => Array.from({ length: repeat }).flatMap(() => icons);

export default function IntegrationHero() {
    return (
        <section className="relative py-0 overflow-hidden bg-transparent w-full">
            {/* Theme-aware grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Content Container (Text) */}
            <div className="relative max-w-7xl mx-auto px-6 text-center mb-12">
                <span className="inline-block px-3 py-1 mb-4 text-sm rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white">
                    ⚡ Integrations
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-black dark:text-white transition-colors duration-500">
                    Integrate with favorite tools
                </h1>
                <p className="mt-4 text-lg text-gray-500 dark:text-zinc-400 max-w-xl mx-auto transition-colors duration-500">
                    250+ top apps are available to integrate seamlessly with your workflow.
                </p>
                <a href="#contacto">
                    <Button variant="default" className="mt-8 px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition">
                        Get started
                    </Button>
                </a>
            </div>

            {/* Carousel Container (Full Width - Overflows parent) */}
            <div className="relative w-[calc(100%+4rem)] -ml-4 md:w-[calc(100%+8rem)] md:-ml-16 overflow-hidden py-2">
                {/* Row 1 */}
                <div className="flex gap-10 whitespace-nowrap animate-scroll-left mb-6">
                    {repeatedIcons(ICONS_ROW1, 2).map((src, i) => (
                        <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center transition-colors duration-500">
                            <img src={src} alt="icon" className="h-10 w-10 object-contain" loading="lazy" width="40" height="40" />
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="flex gap-10 whitespace-nowrap animate-scroll-right">
                    {repeatedIcons(ICONS_ROW2, 2).map((src, i) => (
                        <div key={i} className="h-16 w-16 flex-shrink-0 rounded-full bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center transition-colors duration-500">
                            <img src={src} alt="icon" className="h-10 w-10 object-contain" loading="lazy" width="40" height="40" />
                        </div>
                    ))}
                </div>

                {/* Fade overlays at the absolute edges */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent pointer-events-none transition-colors duration-500 z-10" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent pointer-events-none transition-colors duration-500 z-10" />
            </div>

        </section>
    );
}
