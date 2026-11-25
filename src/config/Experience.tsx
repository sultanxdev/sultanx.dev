import AWS from '@/components/technologies/AWS';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import RabbitMQ from '@/components/technologies/RabbitMQ';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

function AiAgentsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 3l1.7 4.8L18.5 9.5l-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z" fill="#8B5CF6" fillOpacity="0.2" />
      <circle cx="18.5" cy="18.5" r="2.2" fill="#A78BFA" />
    </svg>
  );
}

function RagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h6v6H4zM14 5h6v6h-6z" fill="#8B5CF6" fillOpacity="0.18" />
      <path d="M7 11v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-3" />
      <circle cx="12" cy="18.5" r="1.8" fill="#A78BFA" />
    </svg>
  );
}

function ToolCallingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5c-2 0-2.5 1.5-2.5 3.5V10c0 1-.8 2-1.8 2 1 0 1.8 1 1.8 2v1.5c0 2 .5 3.5 2.5 3.5" />
      <path d="M16 5c2 0 2.5 1.5 2.5 3.5V10c0 1 .8 2 1.8 2-1 0-1.8 1-1.8 2v1.5c0 2-.5 3.5-2.5 3.5" />
      <circle cx="12" cy="12" r="2" fill="#EC4899" />
    </svg>
  );
}

function CloudflareWorkersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M17.2 17.5H6.6a3.6 3.6 0 0 1-.5-7.16A5.2 5.2 0 0 1 16.3 9.4a3.9 3.9 0 0 1 .9 8.1Z"
        fill="#F38020"
        fillOpacity="0.22"
        stroke="#F38020"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubActionsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#2088FF" fillOpacity="0.18" />
      <circle cx="12" cy="12" r="8.2" stroke="#2088FF" strokeWidth="1.6" />
      <path d="M10 8.8 15.6 12 10 15.2V8.8Z" fill="#2088FF" />
    </svg>
  );
}

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

const parsonaTechnologies: Technology[] = [
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    icon: <NextJs />,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: <TypeScript />,
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    icon: <NodeJs />,
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    icon: <PostgreSQL />,
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    icon: <Prisma />,
  },
  {
    name: 'Redis',
    href: 'https://redis.io/',
    icon: <Redis />,
  },
  {
    name: 'RabbitMQ',
    href: 'https://www.rabbitmq.com/',
    icon: <RabbitMQ />,
  },
  {
    name: 'AI Agents',
    href: 'https://parsona.live',
    icon: <AiAgentsIcon />,
  },
  {
    name: 'RAG',
    href: 'https://parsona.live',
    icon: <RagIcon />,
  },
  {
    name: 'Tool Calling',
    href: 'https://parsona.live',
    icon: <ToolCallingIcon />,
  },
  {
    name: 'Cloudflare Workers',
    href: 'https://workers.cloudflare.com/',
    icon: <CloudflareWorkersIcon />,
  },
  {
    name: 'AWS',
    href: 'https://aws.amazon.com/',
    icon: (
      <span className="inline-flex size-full rounded-sm bg-neutral-900 p-0.5 dark:bg-transparent dark:p-0">
        <AWS />
      </span>
    ),
  },
  {
    name: 'Docker',
    href: 'https://www.docker.com/',
    icon: <Docker />,
  },
  {
    name: 'GitHub Actions',
    href: 'https://github.com/features/actions',
    icon: <GithubActionsIcon />,
  },
];

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Parsona',
    position: 'Co-Founder & Full-Stack Engineer',
    location: 'Remote, India',
    image: '/company/parsona.png',
    description: [
      'Building an AI-native customer communication platform unifying messaging, voice, shared customer context, and automated workflows in one workspace.',
      'Building the *unified multi-channel team inbox* in Next.js & TypeScript with real-time conversation sync and seamless AI-to-human handoff.',
      'Architecting *AI agent orchestration & context pipelines* so agents retrieve verified customer and business state, qualify leads, and execute structured actions.',
      'Engineering *asynchronous channel & webhook ingestion* with Node.js, message queues, retries, and idempotent workers to process inbound messaging and voice events reliably.',
      'Designing the *PostgreSQL & Prisma data layer* for cross-channel threads, lead qualification pipelines, workspace permissions, and activity logs.',
      'Integrating messaging, voice, and external APIs with strict transactional state control between backend services and the live frontend workspace.',
    ],
    startDate: 'March 2026',
    endDate: 'Present',
    website: 'https://parsona.live',
    technologies: parsonaTechnologies,
  },
  {
    isCurrent: false,
    company: 'Devplex AI',
    position: 'Full Stack Engineer Intern',
    location: 'Remote, India',
    image: '/company/devplex.png',
    description: [
      'Built responsive and reusable frontend interfaces using React.js and Tailwind CSS for an AI-powered SaaS platform.',
      'Developed and integrated backend APIs using Node.js, Express.js, and JavaScript to support core application features and business workflows.',
      'Integrated Google Gemini AI to enable AI-powered content generation and intelligent application features.',
      'Collaborated with cross-functional team members in Agile sprints, participated in code reviews, and maintained version-controlled code using Git.'
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
