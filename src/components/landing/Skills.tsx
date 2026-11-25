"use client";

import { skillGroups, skillsHeading } from "@/config/Skills";
import { useState, useCallback, useRef, useEffect } from "react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Reveal } from "../reveal";
import SkillIcon from "./SkillIcon";

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

const BENTO_SPAN_BY_LABEL: Record<string, string> = {
    "Frontend & UI": "md:col-span-6",
    "Backend & Databases": "md:col-span-6",
    Languages: "md:col-span-5",
    "DevOps & Cloud": "md:col-span-7",
    "AI & Integrations": "md:col-span-12",
};

/* Flatten all skills for the marquee strip */
const allSkills = skillGroups.flatMap((g) => g.skills);

export default function Skills() {
    return (
        <Container className="mt-20">
            <SectionHeading
                subHeading={skillsHeading.subHeading}
                heading={skillsHeading.heading}
            />

            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-12">
                {skillGroups.map((group, i) => (
                    <Reveal
                        key={group.label}
                        delay={0.08 * (i + 1)}
                        className={BENTO_SPAN_BY_LABEL[group.label] ?? "md:col-span-6"}
                    >
                        <div className="group flex h-full flex-col justify-between rounded-xl border border-dashed border-black/20 bg-black/[0.02] p-5 transition-all duration-300 hover:border-black/30 hover:bg-black/[0.04] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.04]">
                            <div className="mb-4 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="text-foreground/70 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 dark:bg-white/10">
                                        <GroupIcon iconPath={group.iconPath} />
                                    </div>
                                    <h3 className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                        {group.label}
                                    </h3>
                                </div>
                                <span className="text-muted-foreground/60 rounded-md border border-black/10 px-1.5 py-0.5 font-mono text-[10px] dark:border-white/10">
                                    {String(group.skills.length).padStart(2, "0")}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-wrap content-start gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="group/skill skill-inner-shadow inline-flex min-w-fit flex-1 cursor-default select-none items-center justify-center gap-2 rounded-lg border border-black/10 bg-black/[0.03] px-3 py-1.5 font-mono text-xs font-medium transition-all duration-200 hover:border-black/20 hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20 dark:hover:bg-white/[0.08]"
                                    >
                                        <span className="size-4 shrink-0 transition-transform duration-200 group-hover/skill:scale-110">
                                            <SkillIcon name={skill.name} color={skill.color} />
                                        </span>
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
                                className="text-muted-foreground/80 inline-flex select-none items-center gap-2 font-mono text-xs"
                            >
                                <span className="size-3.5 shrink-0 opacity-85">
                                    <SkillIcon name={s.name} color={s.color} />
                                </span>
                                {s.name}
                            </span>
                        ))}
                    </div>
                </div>
            </Reveal>
        </Container>
    );
}
