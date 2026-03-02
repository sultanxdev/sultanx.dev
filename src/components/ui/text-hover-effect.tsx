"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export function TextHoverEffect({
    text,
    duration = 0,
}: {
    text: string;
    duration?: number;
}) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

    useEffect(() => {
        if (svgRef.current && cursor.x !== 0 && cursor.y !== 0) {
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
            className="select-none"
        >
            <defs>
                {/* Vibrant gradient for hover reveal */}
                <linearGradient id="textFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="25%" stopColor="#d946ef" />
                    <stop offset="50%" stopColor="#f43f5e" />
                    <stop offset="75%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#eab308" />
                </linearGradient>

                {/* Stroke gradient for hover reveal outline */}
                <linearGradient id="textStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="25%" stopColor="#a855f7" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="75%" stopColor="#eab308" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>

                {/* Radial gradient mask that follows cursor */}
                <radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    cx={maskPosition.cx}
                    cy={maskPosition.cy}
                >
                    {hovered ? (
                        <>
                            <stop offset="0%" stopColor="white" />
                            <stop offset="100%" stopColor="black" />
                        </>
                    ) : (
                        <>
                            <stop offset="0%" stopColor="black" />
                            <stop offset="100%" stopColor="black" />
                        </>
                    )}
                </radialGradient>
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

            {/* Layer 1: Dark/subtle base text — barely visible, like the reference */}
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-[#e8e8e8] dark:fill-[#1a1a1a]"
                style={{
                    fontSize: "72px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: 900,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: duration }}
            >
                {text}
            </motion.text>

            {/* Layer 2: Hover-revealed gradient-filled text (follows cursor) */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textStrokeGradient)"
                strokeWidth="0.5"
                fill="url(#textFillGradient)"
                mask="url(#textMask)"
                style={{
                    fontSize: "72px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: 900,
                }}
            >
                {text}
            </text>
        </svg>
    );
}
