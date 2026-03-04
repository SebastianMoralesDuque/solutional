"use client";

import React, { useEffect, useRef, useCallback } from 'react';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
    if (!colorString) return null;
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
        return {
            r: parseInt(match[1], 10),
            g: parseInt(match[2], 10),
            b: parseInt(match[3], 10),
        };
    }
    return null;
};

interface InteractiveArrowProps {
    targetRef: React.RefObject<HTMLElement | null>;
    color?: string; // Optional hex or rgb color
    active?: boolean;
}

export const InteractiveArrow: React.FC<InteractiveArrowProps> = ({
    targetRef,
    color,
    active = true
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const animationFrameIdRef = useRef<number>(0);

    const resolvedCanvasColorsRef = useRef({
        strokeStyle: { r: 255, g: 255, b: 255 }, // Default white
    });

    useEffect(() => {
        if (color) {
            const parsed = parseRgbColor(color);
            if (parsed) resolvedCanvasColorsRef.current.strokeStyle = parsed;
        } else {
            // Try to use CSS variable for foreground
            const tempElement = document.createElement('div');
            tempElement.style.display = 'none';
            document.body.appendChild(tempElement);
            tempElement.style.color = 'white'; // Default for our dark theme

            const computedStyle = getComputedStyle(tempElement);
            const parsed = parseRgbColor(computedStyle.color);
            if (parsed) resolvedCanvasColorsRef.current.strokeStyle = parsed;

            document.body.removeChild(tempElement);
        }
    }, [color]);

    const drawArrow = useCallback(() => {
        if (!canvasRef.current || !targetRef.current || !ctxRef.current || !active) return;

        const targetEl = targetRef.current;
        const ctx = ctxRef.current;
        const mouse = mousePosRef.current;

        const x0 = mouse.x;
        const y0 = mouse.y;

        if (x0 === null || y0 === null) return;

        const rect = targetEl.getBoundingClientRect();

        // Don't draw if the target is not visible or mouse is too close
        if (rect.width === 0 || rect.height === 0) return;

        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dist = Math.hypot(cx - x0, cy - y0);

        // Hide if too close or too far to prevent clutter
        if (dist < 50 || dist > 800) return;

        const a = Math.atan2(cy - y0, cx - x0);
        const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
        const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

        const midX = (x0 + x1) / 2;
        const midY = (y0 + y1) / 2;
        const offset = Math.min(200, dist * 0.5);
        const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
        const controlX = midX;
        const controlY = midY + offset * t;

        // Opacity ramps up based on distance (closer = more opaque, up to a point)
        const opacity = Math.min(0.8, (dist - 50) / 400);

        const arrowColor = resolvedCanvasColorsRef.current.strokeStyle;
        ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
        ctx.lineWidth = 2;

        // Draw curve
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(controlX, controlY, x1, y1);
        ctx.setLineDash([10, 5]);
        ctx.stroke();
        ctx.restore();

        // Draw arrowhead
        const angle = Math.atan2(y1 - controlY, x1 - controlX);
        const headLength = 12;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle - Math.PI / 6),
            y1 - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.moveTo(x1, y1);
        ctx.lineTo(
            x1 - headLength * Math.cos(angle + Math.PI / 6),
            y1 - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.strokeStyle = `rgba(${arrowColor.r}, ${arrowColor.g}, ${arrowColor.b}, ${opacity})`;
        ctx.stroke();
    }, [targetRef, active]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        ctxRef.current = canvas.getContext("2d");
        const ctx = ctxRef.current;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("resize", updateCanvasSize);
        window.addEventListener("mousemove", handleMouseMove);
        updateCanvasSize();

        const animateLoop = () => {
            if (ctx && canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawArrow();
            }
            animationFrameIdRef.current = requestAnimationFrame(animateLoop);
        };

        animateLoop();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, [drawArrow]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100]"
            style={{ display: active ? 'block' : 'none' }}
        />
    );
};
