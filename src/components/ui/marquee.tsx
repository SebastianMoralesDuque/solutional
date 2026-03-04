import React, { ComponentPropsWithoutRef, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface MarqueeProps extends React.ComponentPropsWithoutRef<'div'> {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    autoFill?: boolean;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
    ariaRole?: string;
    style?: React.CSSProperties;
}

export function Marquee({
    className,
    reverse = false,
    pauseOnHover = false,
    children,
    vertical = false,
    repeat = 4,
    ariaLabel,
    ariaLive = 'off',
    ariaRole = 'marquee',
    style,
    ...props
}: MarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null);

    const duration = (style as any)?.['--duration'] || '40s';
    const gap = (style as any)?.['--gap'] || '1rem';

    return (
        <div
            {...props}
            ref={marqueeRef}
            className={cn(
                'group flex overflow-hidden p-2 h-full',
                {
                    'flex-row': !vertical,
                    'flex-col': vertical,
                },
                className,
            )}
            style={{
                ...style,
                ['--duration' as string]: duration,
                ['--gap' as string]: gap,
                gap: 'var(--gap)',
            }}
            aria-label={ariaLabel}
            aria-live={ariaLive}
            role={ariaRole}
            tabIndex={0}
        >
            {React.useMemo(
                () => (
                    <div
                        className={cn(
                            'flex shrink-0 justify-around [gap:var(--gap)]',
                            {
                                'animate-marquee flex-row': !vertical,
                                'animate-marquee-vertical flex-col': vertical,
                                'group-hover:[animation-play-state:paused]': pauseOnHover,
                                '[animation-direction:reverse]': reverse,
                            }
                        )}
                        style={{
                            animationDuration: 'var(--duration)',
                        }}
                    >
                        {Array.from({ length: repeat }, (_, i) => (
                            <React.Fragment key={i}>
                                {children}
                            </React.Fragment>
                        ))}
                        {/* Clone for seamless loop */}
                        {Array.from({ length: repeat }, (_, i) => (
                            <React.Fragment key={`clone-${i}`}>
                                {children}
                            </React.Fragment>
                        ))}
                    </div>
                ),
                [repeat, children, vertical, pauseOnHover, reverse],
            )}
        </div>
    );
}
