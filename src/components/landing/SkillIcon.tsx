import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import Mongoose from '@/components/technologies/Mongoose';
import Motion from '@/components/technologies/Motion';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import RabbitMQ from '@/components/technologies/RabbitMQ';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Render from '@/components/technologies/Render';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import React from 'react';

function GsapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#0AE448" fillOpacity="0.16" />
      <path
        d="M16.8 9.2a4.8 4.8 0 1 0 0 5.6V12h-4.2"
        stroke="#0AE448"
        strokeWidth="2.1"
        strokeLinecap="round"
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

function CicdIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2">
      <path
        d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3 3v5h5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 16h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwsEc2Icon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.8">
      <rect x="6" y="6" width="12" height="12" rx="2" fill="#FF9900" fillOpacity="0.16" />
      <path
        d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
        strokeLinecap="round"
      />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.8" fill="#FF9900" />
    </svg>
  );
}

function AwsS3Icon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M5 6.5 6.8 18.5a2 2 0 0 0 2 1.7h6.4a2 2 0 0 0 2-1.7L19 6.5"
        fill="#FF9900"
        fillOpacity="0.2"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <ellipse
        cx="12"
        cy="6.5"
        rx="7"
        ry="2.5"
        fill="#FF9900"
        fillOpacity="0.35"
        stroke="#FF9900"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function AwsRdsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF9900" strokeWidth="1.8">
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.7" fill="#FF9900" fillOpacity="0.22" />
      <path d="M4.5 5.5v13c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7v-13" />
      <path d="M4.5 12c0 1.5 3.36 2.7 7.5 2.7s7.5-1.2 7.5-2.7" />
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#3776AB"
        d="M63.4 8.2C35.8 8.2 37.5 20.1 37.5 20.1l.1 12.4h26.3v3.7H27.1S9.5 34.2 9.5 62c0 27.8 15.4 26.8 15.4 26.8h9.2V75.9s-.5-15.4 15.1-15.4h26s14.6.2 14.6-14.1V22.7S92.1 8.2 63.4 8.2ZM48.9 16.5c2.6 0 4.7 2.1 4.7 4.7s-2.1 4.7-4.7 4.7-4.7-2.1-4.7-4.7 2.1-4.7 4.7-4.7Z"
      />
      <path
        fill="#FFD43B"
        d="M64.6 119.8c27.6 0 25.9-11.9 25.9-11.9l-.1-12.4H64.1v-3.7h36.8s17.6 2 17.6-25.8c0-27.8-15.4-26.8-15.4-26.8h-9.2v12.9s.5 15.4-15.1 15.4h-26s-14.6-.2-14.6 14.1v23.7s-2.3 14.5 26.4 14.5Zm14.5-8.3c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7-2.1 4.7-4.7 4.7Z"
      />
    </svg>
  );
}

function CIcon() {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#00599C"
        d="M115.4 30.7 67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L12.6 30.7c-1.7 1-2.9 3-2.9 5.1v56.4c0 2.1 1.2 4.1 2.9 5.1l48.3 27.8c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48.3-27.8c1.7-1 2.9-3 2.9-5.1V35.8c0-2.1-1.2-4.1-2.9-5.1Z"
      />
      <path
        fill="#fff"
        d="M64 98.7c-19.1 0-34.7-15.6-34.7-34.7S44.9 29.3 64 29.3c12.3 0 23.7 6.6 29.9 17.2l-15 8.7C75.7 50 70.1 46.7 64 46.7c-9.5 0-17.3 7.8-17.3 17.3S54.5 81.3 64 81.3c6.2 0 11.9-3.3 15-8.7l15 8.7c-6.2 10.7-17.7 17.4-30 17.4Z"
      />
    </svg>
  );
}

function CppIcon() {
  return (
    <svg viewBox="0 0 128 128">
      <path
        fill="#00599C"
        d="M115.4 30.7 67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7L12.6 30.7c-1.7 1-2.9 3-2.9 5.1v56.4c0 2.1 1.2 4.1 2.9 5.1l48.3 27.8c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48.3-27.8c1.7-1 2.9-3 2.9-5.1V35.8c0-2.1-1.2-4.1-2.9-5.1Z"
      />
      <path
        fill="#fff"
        d="M61 95.5c-17.4 0-31.5-14.1-31.5-31.5S43.6 32.5 61 32.5c11.2 0 21.6 6 27.2 15.6L74.5 56c-2.8-4.8-7.9-7.8-13.5-7.8-8.7 0-15.7 7-15.7 15.8s7 15.8 15.7 15.8c5.6 0 10.8-3 13.6-7.9l13.7 7.9c-5.7 9.7-16.1 15.7-27.3 15.7Z"
      />
      <path
        fill="#fff"
        d="M95 61h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4Zm17 0h-4v-4h-4v4h-4v4h4v4h4v-4h4v-4Z"
      />
    </svg>
  );
}

function TanStackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.5" fill="#FF4154" fillOpacity="0.16" stroke="#FF4154" strokeWidth="1.7" />
      <path d="M8.5 15.5c0-3.2 2.2-5.5 5-5.5 1.6 0 2.6.8 3 1.8" stroke="#FF4154" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1.6" fill="#FFD43B" />
    </svg>
  );
}

function ZustandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="8" cy="7.5" r="2.5" fill="#A78BFA" fillOpacity="0.35" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="16" cy="7.5" r="2.5" fill="#A78BFA" fillOpacity="0.35" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="12" cy="13.5" r="6" fill="#7C3AED" fillOpacity="0.22" stroke="#A78BFA" strokeWidth="1.7" />
      <circle cx="10.2" cy="12.6" r="0.9" fill="#A78BFA" />
      <circle cx="13.8" cy="12.6" r="0.9" fill="#A78BFA" />
      <path d="M10.5 15.6c.8.6 2.2.6 3 0" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function SqlIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="1.7">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.6" fill="#38BDF8" fillOpacity="0.2" />
      <path d="M5 5.5v13c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-13" />
      <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="3.5" transform="rotate(45 12 12)" fill="#F05032" fillOpacity="0.18" stroke="#F05032" strokeWidth="1.6" />
      <circle cx="10.5" cy="9" r="1.4" fill="#F05032" />
      <circle cx="10.5" cy="15" r="1.4" fill="#F05032" />
      <circle cx="14.5" cy="12" r="1.4" fill="#F05032" />
      <path d="M10.5 9v6M10.5 9l4 3" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="16" rx="3" fill="#FCC624" fillOpacity="0.14" stroke="#FCC624" strokeWidth="1.6" />
      <path d="M7.5 10l3 2-3 2M12 15h4.5" stroke="#FCC624" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloudflareIcon() {
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

function GeminiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.5c.6 5.1 4.4 8.9 9.5 9.5-5.1.6-8.9 4.4-9.5 9.5-.6-5.1-4.4-8.9-9.5-9.5 5.1-.6 8.9-4.4 9.5-9.5Z"
        fill="#60A5FA"
        fillOpacity="0.28"
        stroke="#60A5FA"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OpenAiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="1.6" strokeLinejoin="round">
      <polygon points="12,3 20,7.5 20,16.5 12,21 4,16.5 4,7.5" fill="#10A37F" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function LangChainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round">
      <path d="M9.5 14.5l-2.1 2.1a3 3 0 0 1-4.2-4.2l2.6-2.6a3 3 0 0 1 4.2 0" />
      <path d="M14.5 9.5l2.1-2.1a3 3 0 0 1 4.2 4.2l-2.6 2.6a3 3 0 0 1-4.2 0" />
      <path d="M9 12h6" />
    </svg>
  );
}

function RagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5h6v6H5zM13 5h6v6h-6z" fill="#8B5CF6" fillOpacity="0.18" />
      <path d="M8 11v3a3 3 0 0 0 3 3h2m3-6v3a3 3 0 0 1-3 3" />
      <circle cx="12" cy="18.5" r="2" fill="#A78BFA" />
    </svg>
  );
}

function EmbeddingsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="6.5" cy="7.5" r="2" fill="#C084FC" />
      <circle cx="17.5" cy="6.5" r="2" fill="#8B5CF6" />
      <circle cx="12" cy="12.5" r="2.2" fill="#A78BFA" />
      <circle cx="7" cy="17.5" r="1.8" fill="#8B5CF6" />
      <circle cx="17.5" cy="17" r="2" fill="#C084FC" />
      <path d="M8.2 8.7 10.4 11M15.8 7.8 13.5 11M10.5 14l-2.3 2.3M13.7 14l2.4 2" stroke="#A78BFA" strokeWidth="1.3" />
    </svg>
  );
}

function PgvectorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.7">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" fill="#3B82F6" fillOpacity="0.16" strokeLinejoin="round" />
      <path d="M12 12l7.5-4.2M12 12v8.5M12 12L4.5 7.8" />
    </svg>
  );
}

function FunctionCallingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 5c-2 0-2.5 1.5-2.5 3.5v1.5c0 1-.8 2-1.8 2 1 0 1.8 1 1.8 2v1.5c0 2 .5 3.5 2.5 3.5" />
      <path d="M16 5c2 0 2.5 1.5 2.5 3.5v1.5c0 1 .8 2 1.8 2-1 0-1.8 1-1.8 2v1.5c0 2-.5 3.5-2.5 3.5" />
      <circle cx="12" cy="12" r="2" fill="#F472B6" />
    </svg>
  );
}

const SKILL_ICON_MAP: Record<string, () => React.ReactNode> = {
  React: () => <ReactIcon />,
  'Next.js': () => (
    <span className="inline-flex size-full rounded-full dark:ring-1 dark:ring-white/20">
      <NextJs />
    </span>
  ),
  'Tailwind CSS': () => <TailwindCss />,
  'Shadcn UI': () => <Shadcn />,
  'Framer Motion': () => <Motion />,
  GSAP: () => <GsapIcon />,
  'TanStack Query': () => <TanStackIcon />,
  Zustand: () => <ZustandIcon />,
  'Node.js': () => <NodeJs />,
  Express: () => <ExpressJs />,
  'Socket.IO': () => <SocketIo />,
  Prisma: () => (
    <span className="inline-flex size-full dark:brightness-200 dark:invert">
      <Prisma />
    </span>
  ),
  Mongoose: () => <Mongoose />,
  PostgreSQL: () => <PostgreSQL />,
  MongoDB: () => <MongoDB />,
  Redis: () => <Redis />,
  RabbitMQ: () => <RabbitMQ />,
  Docker: () => <Docker />,
  Git: () => <GitIcon />,
  'GitHub Actions': () => <GithubActionsIcon />,
  'CI/CD': () => <CicdIcon />,
  Linux: () => <LinuxIcon />,
  'AWS EC2': () => <AwsEc2Icon />,
  'AWS S3': () => <AwsS3Icon />,
  'AWS RDS': () => <AwsRdsIcon />,
  Cloudflare: () => <CloudflareIcon />,
  Vercel: () => <Vercel />,
  Render: () => <Render />,
  TypeScript: () => <TypeScript />,
  JavaScript: () => <JavaScript />,
  Python: () => <PythonIcon />,
  SQL: () => <SqlIcon />,
  C: () => <CIcon />,
  'C++': () => <CppIcon />,
  'Google Gemini API': () => <GeminiIcon />,
  'OpenAI API': () => <OpenAiIcon />,
  LangChain: () => <LangChainIcon />,
  RAG: () => <RagIcon />,
  Embeddings: () => <EmbeddingsIcon />,
  pgvector: () => <PgvectorIcon />,
  'Function Calling': () => <FunctionCallingIcon />,
};

/** Renders the technology icon for a skill pill, falling back to its color dot. */
export default function SkillIcon({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  const renderIcon = SKILL_ICON_MAP[name];
  if (!renderIcon) {
    return (
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
    );
  }
  return (
    <span className="inline-flex size-full items-center justify-center [&>svg]:size-full">
      {renderIcon()}
    </span>
  );
}
