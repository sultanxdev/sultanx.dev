"use client";

import { skillGroups, skillsHeading } from "@/config/Skills";
import { useState, useCallback, useRef, useEffect } from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Reveal } from "../reveal";

const CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function ScrambleLabel({ text }: { text: string }) {
    const [display, setDisplay] = useState(text);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const frameRef = useRef(0);

    const scramble = useCallback(() => {
        frameRef.current = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            frameRef.current += 1;
            setDisplay(
                text
                    .split("")
                    .map((char, i) =>
                        i < frameRef.current
                            ? char
                            : CHARS[Math.floor(Math.random() * CHARS.length)]
                    )
                    .join("")
            );
            if (frameRef.current >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }
        }, 25);
    }, [text]);

    const reset = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
    }, [text]);

    useEffect(
        () => () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        },
        []
    );

    return (
        <span
            onMouseEnter={scramble}
            onMouseLeave={reset}
            className="cursor-default"
            style={{ minWidth: `${text.length}ch`, display: "inline-block" }}
        >
            {display}
        </span>
    );
}

/* Render an SVG icon from the config's iconPath string */
function GroupIcon({ iconPath }: { iconPath: string }) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            dangerouslySetInnerHTML={{ __html: iconPath }}
        />
    );
}

/* Flatten all skills for the marquee strip */
const allSkills = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
    return (
        <Container className="mt-20">
            <SectionHeading
                subHeading={skillsHeading.subHeading}
                heading={skillsHeading.heading}
            />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skillGroups.map((group, i) => (
                    <Reveal key={group.label} delay={0.08 * (i + 1)}>
                        <div className="group h-full rounded-xl border border-dashed border-black/20 bg-black/[0.02] p-5 transition-all duration-300 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.04]">
                            <div className="mb-4 flex items-center gap-2">
                                <div className="text-foreground/70 flex h-7 w-7 items-center justify-center rounded-md bg-black/5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:bg-white/10">
                                    <GroupIcon iconPath={group.iconPath} />
                                </div>
                                <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                    {group.label}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="group/skill skill-inner-shadow inline-flex cursor-default select-none items-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5 font-mono text-xs font-medium transition-all duration-200 hover:border-black/20 hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
                                    >
                                        <span
                                            className="h-2 w-2 shrink-0 rounded-full transition-transform duration-200 group-hover/skill:scale-150"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                        <ScrambleLabel text={skill.name} />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Marquee strip */}
            <Reveal delay={0.4}>
                <div className="relative mt-6 overflow-hidden rounded-lg border border-dashed border-black/10 bg-black/[0.02] py-3 dark:border-white/10 dark:bg-white/[0.02]">
                    <div className="flex animate-marquee gap-6 whitespace-nowrap">
                        {[...allSkills, ...allSkills].map((s, i) => (
                            <span
                                key={`${s.name}-${i}`}
                                className="text-muted-foreground/60 inline-flex select-none items-center gap-2 font-mono text-xs"
                            >
                                <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ backgroundColor: s.color, opacity: 0.6 }}
                                />
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Container>
    );
}
