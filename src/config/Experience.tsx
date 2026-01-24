import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Devplex AI',
    position: 'Full Stack Engineer Intern',
    location: 'Remote, India',
    image: '/company/devplex.png',
    description: [
      'Developed responsive frontend interfaces using React.js, Tailwind CSS, for an AI-assisted SaaS platform.',
      'Implemented backend APIs using Express.js and JavaScript to support core product workflows.',
      'Integrated Google Gemini AI for content generation and intelligent feature orchestration.',
      'Collaborated in Agile sprints, participated in code reviews, and followed production-grade Git workflows.',
    ],
    startDate: 'January 2025',
    endDate: 'March 2025',
    website: 'https://devplex.in/',
    technologies: [
      {
        name: 'React.js',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },

      {
        name: 'Express.js',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'shadcn/ui',
        href: 'https://ui.shadcn.com/',
        icon: <TailwindCss />,
      },

      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
    ],
    linkedin: 'https://www.linkedin.com/company/devplexai/posts/?feedView=all',
  },
];
