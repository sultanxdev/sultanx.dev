"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export function TextHoverEffect({
    text,
    duration = 0,
    className = "",
}: {
    text: string;
    duration?: number;
    className?: string;
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
            viewBox="0 0 300 68"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
            className={`block w-full select-none ${className}`}
        >
            <defs>
                {/* Vibrant gradient for hover reveal */}
                <linearGradient id="textFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="##40db32ff" />
                    <stop offset="25%" stopColor="#40db32ff" />
                    <stop offset="50%" stopColor="#40db32ff" />
                    <stop offset="75%" stopColor="#40db32ff" />
                    <stop offset="100%" stopColor="#40db32ff" />
                </linearGradient>

                {/* Stroke gradient for hover reveal outline */}
                <linearGradient id="textStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#40db32ff" />
                    <stop offset="25%" stopColor="#40db32ff" />
                    <stop offset="50%" stopColor="#40db32ff" />
                    <stop offset="75%" stopColor="#40db32ff" />
                    <stop offset="100%" stopColor="#40db32ff" />
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
                dominantBaseline="central"
                className="fill-[#e8e8e8] dark:fill-[#1a1a1a]"
                style={{
                    fontSize: "72px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: 900,
                    letterSpacing: "-0.01em",
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
                dominantBaseline="central"
                stroke="url(#textStrokeGradient)"
                strokeWidth="0.5"
                fill="url(#textFillGradient)"
                mask="url(#textMask)"
                style={{
                    fontSize: "72px",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    fontWeight: 900,
                    letterSpacing: "-0.01em",
                }}
            >
                {text}
            </text>
        </svg>
    );
}
