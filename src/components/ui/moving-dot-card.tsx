import React, { useState, useEffect } from 'react';

interface DotCardProps {
    target?: number;
    duration?: number;
    label?: string;
}

export default function DotCard({ target = 777000, duration = 2000, label = "Views" }: DotCardProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const range = end - start;
        if (range <= 0) return;
        const increment = Math.ceil(end / (duration / 50));
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, 50);
        return () => clearInterval(timer);
    }, [target, duration]);

    const display = count < 1000 ? count : `${Math.floor(count / 1000)}k`;

    return (
        <div className="outer">
            <div className="dot"></div>
            <div className="card bg-white dark:bg-zinc-950 border-black/10 dark:border-white/10 transition-colors duration-500">
                <div className="ray opacity-20 dark:opacity-100"></div>
                <div className="text text-black dark:text-white">{display}</div>
                <div className="label text-black/40 dark:text-white/40">{label}</div>
                <div className="line topl bg-black/5 dark:bg-white/5"></div>
                <div className="line leftl bg-black/5 dark:bg-white/5"></div>
                <div className="line bottoml bg-black/5 dark:bg-white/5"></div>
                <div className="line rightl bg-black/5 dark:bg-white/5"></div>
            </div>
        </div>
    );
}
