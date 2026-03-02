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
        label: 'Frontend',
        iconPath:
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />',
        skills: [
            { name: 'React', color: '#61dafb' },
            { name: 'Next.js', color: '#888888' },
            { name: 'Tailwind CSS', color: '#06b6d4' },
            { name: 'Shadcn UI', color: '#0b0b0bff' },
            { name: 'Framer Motion', color: '#62ce6bff' },
            { name: 'GSAP', color: '#888888' },
            //{ name: 'Three.js', color: '#888888' },
            //{ name: 'WebGL', color: '#888888' },
            //{ name: 'Vite', color: '#888888' },
        ],
    },
    {
        label: 'Backend & Databases',
        iconPath:
            '<rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />',
        skills: [
            // runtime & api
            { name: 'Node.js', color: '#339933' },
            { name: 'Express', color: '#888888' },
            { name: 'Socket.IO', color: '#010101' },

            // orm / odm
            { name: 'Prisma', color: '#2d3748' },
            { name: 'Mongoose', color: '#800' },

            // databases
            { name: 'PostgreSQL', color: '#4169e1' },
            { name: 'MongoDB', color: '#4db33d' },
            { name: 'Redis', color: '#dc382d' },

            // queues
    
        ],
    },
    {
        label: 'DevOps & Cloud',
        iconPath:
            '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />',
        skills: [
            { name: 'Docker', color: '#2496ed' },
            { name: 'GitHub Actions', color: '#2088ff' },
            { name: 'CI/CD', color: '#ff6b6b' },
            { name: 'AWS EC2', color: '#ff9900' },
            { name: 'AWS S3', color: '#ff9900' },
            { name: 'AWS RDS', color: '#ff9900' },
            { name: 'Vercel', color: '#888888' },
            { name: 'Render', color: '#46e3b7' },
        ],
    },
    {
        label: 'Languages',
        iconPath:
            '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />',
        skills: [
            { name: 'TypeScript', color: '#3178c6' },
            { name: 'JavaScript', color: '#f7df1e' },
            { name: 'Python', color: '#3776ab' },
            { name: 'C', color: '#ce422b' },
            { name: 'C++', color: '#5f180dff' },
        ]
    },
];

/** Section heading config */
export const skillsHeading = {
    subHeading: 'Technical',
    heading: 'Skills',
};
