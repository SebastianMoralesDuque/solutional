"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 2000);
    };

    return (
        <section id="contacto" className="w-full px-4 md:px-8 pb-4 md:pb-8">
            <div className="rounded-2xl md:rounded-3xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-950 p-8 md:p-20 shadow-sm relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                        {/* Left side: Content */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white mb-6 tracking-tight leading-[1.1]">
                                ¿Listo para<br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent italic">
                                    Escalar el Futuro?
                                </span>
                            </h2>
                            <p className="text-black/60 dark:text-white/60 text-lg md:text-xl max-w-md mb-12 leading-relaxed">
                                Estamos aquí para convertir tus ideas más ambiciosas en realidades digitales impulsadas por IA.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Mail size={20} />, label: "Email", value: "hello@solutional.tech" },
                                    { icon: <Phone size={20} />, label: "Teléfono", value: "+34 900 123 456" },
                                    { icon: <MapPin size={20} />, label: "Ubicación", value: "Madrid, España" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-black/70 dark:text-white/70 hover:text-blue-500 transition-colors duration-300">
                                        <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest opacity-50 font-bold">{item.label}</p>
                                            <p className="font-medium">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side: Form */}
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="h-full flex flex-col items-center justify-center text-center p-8 bg-blue-50 dark:bg-blue-500/5 rounded-3xl border border-blue-200 dark:border-blue-500/20"
                                    >
                                        <div className="size-20 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                                        <p className="text-black/60 dark:text-white/60 max-w-xs">
                                            Hemos recibido tu información. Un especialista de Solutional Tech se pondrá en contacto contigo en breve.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="mt-8 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest hover:underline"
                                        >
                                            Enviar otro mensaje
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-6 p-8 md:p-10 bg-zinc-50 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 shadow-xl"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 ml-1">Nombre</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Tu nombre"
                                                    className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 ml-1">Empresa</label>
                                                <input
                                                    type="text"
                                                    placeholder="Tu empresa"
                                                    className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 ml-1">Email Corporativo</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="ejemplo@empresa.com"
                                                className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 ml-1">Mensaje</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="¿En qué podemos ayudarte?"
                                                className="w-full bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none transition-colors"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full bg-black dark:bg-blue-600 hover:bg-zinc-800 dark:hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 group"
                                        >
                                            {status === "submitting" ? (
                                                <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Enviar Mensaje
                                                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
