// ─── Skills Configuration ─────────────────────────────────────────
// Add, remove, or reorder skills here. The component will pick up
// changes automatically — no need to touch the UI code.
//
// Each group needs:
//   label  – category name shown on the card header
//   icon   – an SVG path string (rendered inside a 24×24 viewBox)
//   skills – array of { name, color } where color is any CSS color

export interface Skill {
    /** Display name shown in the tag */
    name: string;
    /** CSS color for the dot indicator (hex, rgb, hsl, etc.) */
    color: string;
}

export interface SkillGroup {
    /** Category label (e.g. "Languages", "Frontend") */
    label: string;
    /** SVG inner markup rendered in a 24×24 viewBox with stroke="currentColor" */
    iconPath: string;
    /** List of skills under this category */
    skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
    {
        label: 'Languages',
        iconPath:
            '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />',
        skills: [
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'JavaScript', color: '#f7df1e' },
            { name: 'Python', color: '#3776ab' },
            { name: 'Rust', color: '#ce422b' },
            { name: 'Kotlin', color: '#7f52ff' },
            { name: 'C', color: '#555555' },
        ],
    },
    {
        label: 'Frontend',
        iconPath:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />',
        skills: [
            { name: 'React', color: '#61dafb' },
            { name: 'Next.js', color: '#888888' },
            { name: 'Tailwind CSS', color: '#06b6d4' },
        ],
    },
    {
        label: 'Backend',
        iconPath:
            '<rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />',
        skills: [
            { name: 'Node.js', color: '#339933' },
            { name: 'Django', color: '#092e20' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'Express', color: '#888888' },
        ],
    },
    {
        label: 'Data & Infra',
        iconPath:
            '<ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />',
        skills: [
            { name: 'PostgreSQL', color: '#4169e1' },
            { name: 'MongoDB', color: '#4db33d' },
            { name: 'Redis', color: '#dc382d' },
            { name: 'AWS', color: '#ff9900' },
            { name: 'GCP', color: '#4285f4' },
            { name: 'Docker', color: '#2496ed' },
        ],
    },
];

/** Section heading config */
export const skillsHeading = {
    subHeading: 'Technical',
    heading: 'Skills',
};
