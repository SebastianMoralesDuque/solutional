import { FC } from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: FC<LogoProps> = ({ className = "w-16 h-16" }) => (
    <svg viewBox="0 0 800 800" className={className} xmlns="http://www.w3.org/2000/svg">
        <style>
            {`.stroke-main { fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; }
        .fill-dark { fill: currentColor; }
        .fill-light { fill: none; }`}
        </style>
        <defs>
            <g id="data-port">
                <rect x="-80" y="-80" width="160" height="160" className="stroke-main fill-light" strokeWidth="6" />
                <line x1="-80" y1="-80" x2="-35" y2="-35" className="stroke-main" strokeWidth="5" />
                <line x1="80" y1="-80" x2="35" y2="-35" className="stroke-main" strokeWidth="5" />
                <line x1="80" y1="80" x2="35" y2="35" className="stroke-main" strokeWidth="5" />
                <line x1="-80" y1="80" x2="-35" y2="35" className="stroke-main" strokeWidth="5" />
                <rect x="-35" y="-35" width="70" height="70" className="stroke-main fill-light" strokeWidth="5" />
                <circle cx="0" cy="0" r="15" className="fill-dark" />
            </g>
            <g id="data-stream">
                <line x1="0" y1="0" x2="0" y2="280" className="stroke-main" strokeWidth="14" />
                <line x1="-24" y1="25" x2="-24" y2="240" className="stroke-main" strokeWidth="8" />
                <line x1="24" y1="35" x2="24" y2="210" className="stroke-main" strokeWidth="8" />
                <line x1="-48" y1="50" x2="-48" y2="180" className="stroke-main" strokeWidth="4" />
                <line x1="48" y1="65" x2="48" y2="190" className="stroke-main" strokeWidth="4" />
                <line x1="-24" y1="260" x2="-24" y2="300" className="stroke-main" strokeWidth="8" />
                <line x1="24" y1="230" x2="24" y2="250" className="stroke-main" strokeWidth="8" />
            </g>
        </defs>
        <g id="cube-structure">
            <polygon points="400,200 608,320 608,560 400,680 192,560 192,320" className="stroke-main fill-light" strokeWidth="16" />
            <line x1="400" y1="440" x2="400" y2="680" className="stroke-main" strokeWidth="12" />
            <line x1="400" y1="440" x2="192" y2="320" className="stroke-main" strokeWidth="12" />
            <line x1="400" y1="440" x2="608" y2="320" className="stroke-main" strokeWidth="12" />
        </g>
        <use href="#data-port" transform="matrix(1.04, 0.6, -1.04, 0.6, 400, 320)" />
        <use href="#data-port" transform="matrix(1.04, 0.6, 0, 1.2, 296, 500)" />
        <use href="#data-port" transform="matrix(1.04, -0.6, 0, 1.2, 504, 500)" />
        <use href="#data-stream" transform="translate(400, 320) rotate(180)" />
        <use href="#data-stream" transform="translate(296, 500) rotate(60)" />
        <use href="#data-stream" transform="translate(504, 500) rotate(-60)" />
    </svg>
);
