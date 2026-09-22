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
import Redis from '@/components/technologies/Redis';
import JWT from '@/components/technologies/JWT';
import RabbitMQ from '@/components/technologies/RabbitMQ';

export const projects: Project[] = [




  {
    // Zyvan — distributed systems backbone

    title: 'Zyvan',
    description:
      'Webhook infrastructure that makes event delivery reliable from durable ingestion and idempotent processing to retries, failure recovery, replay, observability, and secure outbound delivery.',
    image: '/project/zyvan/demo.png',
    link: 'https://www.zyvan.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="rabbitmq" /> },
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
  {
    title: 'Dermo',
    description:
      'AI employee for clinics that handles WhatsApp conversations, answers clinic-approved questions, captures and qualifies leads, manages appointments, and hands complex conversations to staff.',
    image: '/project/dermo/hero.png',
    link: '#',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="dermo-typescript" /> },
      { name: 'Next.js', icon: <NextJs key="dermo-nextjs" /> },
      { name: 'React', icon: <ReactIcon key="dermo-react" /> },
      { name: 'Node.js', icon: <NodeJs key="dermo-nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="dermo-express" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="dermo-postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="dermo-prisma" /> },
      { name: 'Redis', icon: <Redis key="dermo-redis" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="rabbitmq" /> },
      { name: 'Docker', icon: <Docker key="dermo-docker" /> },
      { name: 'AWS', icon: <AWS key="dermo-aws" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="dermo-tailwind" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="dermo-shadcn" /> },
    ],
    github: 'https://github.com/sultanxdev/dermo',
    live: 'https://dermoai.in',
    details: true,
    projectDetailsPageSlug: '/projects/dermo',
    isWorking: false,
  },

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
];
// that means this in development phase..


