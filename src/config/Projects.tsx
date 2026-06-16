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
import Kafka from '@/components/technologies/Kafka';
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
    image: '/project/sendry.png',
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

  // 🚀 1. ClinicFlow AI — First flagship LIVE project
  {
    title: 'Clinicflow AI',
    description:
      'Vertical AI SaaS for dental clinics — AI voice receptionist answers every call, books appointments via LangGraph agent, sends WhatsApp reminders, and recovers missed leads. 24/7 automation replacing the front desk.',
    image: '/project/demo.png',
    link: 'https://clinicflow.ai',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Redis', icon: <Redis key="redis" /> },
      { name: 'BullMQ', icon: <BullMQ key="bullmq" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="shadcn" /> },
    ],
    github: '',
    live: 'https://clinicflow.ai',
    details: true,
    projectDetailsPageSlug: '/projects/clinicflow-ai',
    isWorking: false,
  },

  // Zyvan — distributed systems backbone
  {
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
