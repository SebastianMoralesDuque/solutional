"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Globe,
    Rocket,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/Logo";

export const TextHoverEffect = ({
    text,
    duration,
    className,
}: {
    text: string;
    duration?: number;
    automatic?: boolean;
    className?: string;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    return (
        <svg
            ref={svgRef}
            width="100%"
            height="100%"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className={cn("select-none uppercase cursor-pointer", className)}
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="25%" stopColor="#6366f1" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="75%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#2563eb" />
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    initial={{ cx: "50%", cy: "50%" }}
                    animate={maskPosition}
                    transition={{ duration: duration ?? 0, ease: "easeOut" }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-neutral-300 font-display text-4xl font-bold dark:stroke-neutral-800 transition-colors duration-500"
                style={{ opacity: hovered ? 0.7 : 0 }}
            >
                {text}
            </text>
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-[#3ca2fa] font-display text-4xl font-bold 
        dark:stroke-[#3ca2fa99]"
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="0.3"
                mask="url(#textMask)"
                className="fill-transparent font-display text-4xl font-bold"
            >
                {text}
            </text>
        </svg>
    );
};

export const FooterBackgroundGradient = () => {
    return (
        <div
            className="absolute inset-0 z-0 opacity-50 dark:opacity-100 transition-opacity duration-500"
            style={{
                background:
                    "radial-gradient(125% 125% at 50% 10%, #3ca2fa05 50%, #3ca2fa11 100%)",
            }}
        />
    );
};

export function HoverFooter() {
    const footerLinks = [
        {
            title: "Recursos",
            links: [
                { label: "Servicios IA", href: "#" },
                { label: "Desarrollo Web", href: "#" },
                { label: "Casos de Éxito", href: "#" },
                { label: "Blog Tech", href: "#" },
            ],
        },
        {
            title: "Empresa",
            links: [
                { label: "Sobre Nosotros", href: "#" },
                { label: "Carreras", href: "#" },
                {
                    label: "Soporte 24/7",
                    href: "#",
                    pulse: true,
                },
            ],
        },
    ];

    const contactInfo = [
        {
            icon: <Mail size={18} className="text-[#3ca2fa]" />,
            text: "hello@solutional.tech",
            href: "mailto:hello@solutional.tech",
        },
        {
            icon: <Phone size={18} className="text-[#3ca2fa]" />,
            text: "+34 900 123 456",
            href: "tel:+34900123456",
        },
        {
            icon: <MapPin size={18} className="text-[#3ca2fa]" />,
            text: "Madrid, España",
        },
    ];

    const socialLinks = [
        { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
        { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
        { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
        { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
        { icon: <Globe size={20} />, label: "Globe", href: "#" },
    ];

    return (
        <footer className="bg-white dark:bg-black relative h-fit rounded-2xl md:rounded-3xl overflow-hidden mx-4 md:mx-8 mb-8 border border-black/5 dark:border-white/10 shadow-2xl transition-colors duration-500">
            <div className="max-w-7xl mx-auto p-8 md:p-20 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-3">
                            <Logo className="w-10 h-10 text-[#3ca2fa]" />
                            <span className="text-black dark:text-white text-2xl font-display font-bold tracking-tighter transition-colors duration-500">
                                Solutional <span className="text-black/50 dark:text-white/50">Tech</span>
                            </span>
                        </div>
                        <p className="text-sm text-black/40 dark:text-white/40 leading-relaxed max-w-xs transition-colors duration-500">
                            Líderes en automatización inteligente y desarrollo de experiencias digitales de alto rendimiento.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-black dark:text-white text-lg font-display font-semibold mb-6 transition-colors duration-500">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label} className="relative w-fit">
                                        <a
                                            href={link.href}
                                            className="text-black/60 dark:text-white/60 hover:text-[#3ca2fa] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </a>
                                        {link.pulse && (
                                            <span className="absolute top-1 -right-3 w-1.5 h-1.5 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact section */}
                    <div>
                        <h4 className="text-black dark:text-white text-lg font-display font-semibold mb-6 transition-colors duration-500">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-sm">
                                    {item.icon}
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-black/60 dark:text-white/60 hover:text-[#3ca2fa] transition-colors"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span className="text-black/60 dark:text-white/60">
                                            {item.text}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-black/5 dark:border-white/5 my-8 transition-colors duration-500" />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-6 md:space-y-0 text-white/40">
                    {/* Social icons */}
                    <div className="flex space-x-6">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center md:text-left uppercase tracking-widest font-medium">
                        &copy; {new Date().getFullYear()} Solutional Tech. Built for the future.
                    </p>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="hidden lg:flex h-[25rem] -mt-36 -mb-24 pointer-events-none sm:pointer-events-auto">
                <TextHoverEffect text="Solutional" className="z-50" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}
