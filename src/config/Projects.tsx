import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Docker from '@/components/technologies/Docker';
import { Project } from '@/types/project';
import Mongoose from '@/components/technologies/Mongoose';
import Prisma from '@/components/technologies/Prisma';
import JavaScript from '@/components/technologies/JavaScript';
import Vercel from '@/components/technologies/Vercel';
import Render from '@/components/technologies/Render';
import AWS from '@/components/technologies/AWS';
import BullMQ from '@/components/technologies/BullMQ';
import Redis from '@/components/technologies/Redis';
import JWT from '@/components/technologies/JWT';
import RabbitMQ from '@/components/technologies/RabbitMQ';

export const projects: Project[] = [
  // ─── LIVE PROJECTS ───────────────────────────────────────────────────



  // ✅ 1. Sendry — Second LIVE / running project
  {
    title: 'Sendry',
    description:
      'Event-driven API observability platform featuring asynchronous telemetry ingestion, RabbitMQ-powered processing, dead-letter queues, circuit breakers, idempotent event handling, dual-database analytics architecture, and real-time monitoring dashboards.',
    image: '/project/sendry/hero.png',
    link: 'https://sendry.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="rabbitmq" /> },
      { name: 'JWT', icon: <JWT key="jwt" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/sultanxdev/sendry',
    live: 'https://sendry.in',
    details: true,
    projectDetailsPageSlug: '/projects/sendry',
    isWorking: true,
  },
  // 2. InterviewMate — AI interview simulator
  {
    title: 'Interviewmate',
    description:
      'InterviewMate is an AI-powered mock interview platform that lets users practice realistic interviews through live voice conversations...',
    image: '/project/interviewmate-hero.png',
    link: 'https://interviewmate-xi.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Mongoose', icon: <Mongoose key="mongoose" /> },
      { name: 'Socket.IO', icon: <SocketIo key="socketio" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="shadcn" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Render', icon: <Render key="render" /> },
    ],
    github: 'https://github.com/sultanxdev/interviewmate',
    live: 'https://interviewmate-xi.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/interviewmate',
    isWorking: true,
  },
  {
    title: 'Waani',
    description:
      'India-first voice AI infrastructure for developers, combining telephony, realtime audio streaming, speech-to-text, LLM orchestration, text-to-speech, conversation state, and provider abstraction for production voice agents.',
    image: '/project/waani/hero.png',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="waani-typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="waani-nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="waani-postgresql" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'Next.js', icon: <NextJs key="waani-nextjs" /> },
      { name: 'React', icon: <ReactIcon key="waani-react" /> },
      { name: 'WebSockets', icon: <ReactIcon key="waani-websocket" /> },
      { name: 'Prisma', icon: <Prisma key="waani-prisma" /> },
      { name: 'Docker', icon: <Docker key="waani-docker" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="waani-tailwind" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="waani-shadcn" /> },
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/waani',
    isWorking: false, // that means this in development phase..
  },
  {
    // Zyvan — distributed systems backbone

    title: 'Zyvan',
    description:
      'Production-grade webhook delivery infrastructure built on durable acknowledgment principles with idempotent ingestion, exponential retries, DLQ handling, and SSRF-safe outbound proxy architecture.',
    image: '/project/demo.png',
    link: 'https://www.zyvan.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'BullMQ', icon: <BullMQ key="bullmq" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="shadcn" /> },
    ],
    live: 'https://www.zyvan.dev',
    details: true,
    projectDetailsPageSlug: '/projects/zyvan',
    isWorking: false,
  },
];
// that means this in development phase..


