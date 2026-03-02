'use client';

import { useEffect, useState, useRef } from 'react';

function AnimatedNumber({ value }: { value: number }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef({ start: 0, end: value, startTime: 0 });

    useEffect(() => {
        if (value === 0) return;

        ref.current = { start: 0, end: value, startTime: performance.now() };
        const duration = 2000; // 2 seconds

        function animate(now: number) {
            const elapsed = now - ref.current.startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(ref.current.start + (ref.current.end - ref.current.start) * eased);
            setDisplay(current);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }, [value]);

    return <>{display.toLocaleString()}</>;
}

function getOrdinalSuffix(n: number): string {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

export function VisitorCounter() {
    const [views, setViews] = useState<number>(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function fetchViews() {
            try {
                const res = await fetch('/api/views');
                const data = await res.json();
                if (data.views > 0) {
                    setViews(data.views);
                }
                setLoaded(true);
            } catch {
                setLoaded(true);
            }
        }
        fetchViews();
    }, []);

    if (!loaded || views === 0) return null;

    return (
        <div className="flex items-center justify-center">
            <div className="border-border/50 bg-muted/50 inline-flex items-center gap-2.5 rounded-full border px-4 py-2 backdrop-blur-sm">
                {/* Eye icon */}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground shrink-0"
                >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="text-muted-foreground text-sm">
                    You are the{' '}
                    <strong className="text-foreground font-bold tabular-nums">
                        <AnimatedNumber value={views} />
                    </strong>
                    <sup className="text-muted-foreground text-[10px]">
                        {getOrdinalSuffix(views)}
                    </sup>{' '}
                    visitor
                </span>
            </div>
        </div>
    );
}
