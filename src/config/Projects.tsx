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
    title: 'Zyvan',
    description:
      'High-availability infrastructure for reliable webhook and event delivery featuring durable ingestion, idempotent execution, decorrelated jitter retries, dead-letter recovery, and HMAC signing.',
    image: '/project/zyvan/demo.png',
    link: 'https://www.zyvan.dev',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="zyvan-typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="zyvan-nodejs" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="zyvan-rabbitmq" /> },
      { name: 'Redis', icon: <Redis key="zyvan-redis" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="zyvan-postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="zyvan-prisma" /> },
      { name: 'Docker', icon: <Docker key="zyvan-docker" /> },
      { name: 'AWS', icon: <AWS key="zyvan-aws" /> },
      { name: 'Next.js', icon: <NextJs key="zyvan-nextjs" /> },
      { name: 'React', icon: <ReactIcon key="zyvan-react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="zyvan-tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="zyvan-shadcn" /> },
    ],
    live: 'https://www.zyvan.dev',
    details: true,
    projectDetailsPageSlug: '/projects/zyvan',
    isWorking: false,
  },
  {
    title: 'Dermo',
    description:
      'Autonomous AI employee for clinics that handles WhatsApp patient inquiries, retrieves clinic-approved knowledge with RAG, manages transactional appointments, and coordinates human handoff.',
    image: '/project/dermo/hero.png',
    link: 'https://dermoai.in',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="dermo-typescript" /> },
      { name: 'Next.js', icon: <NextJs key="dermo-nextjs" /> },
      { name: 'React', icon: <ReactIcon key="dermo-react" /> },
      { name: 'Node.js', icon: <NodeJs key="dermo-nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="dermo-express" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="dermo-postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="dermo-prisma" /> },
      { name: 'Redis', icon: <Redis key="dermo-redis" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="dermo-rabbitmq" /> },
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
  {
    title: 'Sendry',
    description:
      'Event-driven API observability platform featuring sub-2ms asynchronous telemetry ingestion, RabbitMQ buffering, dual-database analytics architecture, circuit breakers, and real-time monitoring dashboards.',
    image: '/project/sendry/hero.png',
    link: 'https://sendry.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="sendry-react" /> },
      { name: 'Node.js', icon: <NodeJs key="sendry-nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="sendry-express" /> },
      { name: 'MongoDB', icon: <MongoDB key="sendry-mongodb" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="sendry-postgresql" /> },
      { name: 'RabbitMQ', icon: <RabbitMQ key="sendry-rabbitmq" /> },
      { name: 'Redis', icon: <Redis key="sendry-redis" /> },
      { name: 'JWT', icon: <JWT key="sendry-jwt" /> },
      { name: 'Docker', icon: <Docker key="sendry-docker" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="sendry-tailwindcss" /> },
    ],
    github: 'https://github.com/sultanxdev/sendry',
    live: 'https://sendry.in',
    details: true,
    projectDetailsPageSlug: '/projects/sendry',
    isWorking: true,
  },
  {
    title: 'InterviewMate',
    description:
      'Voice-first AI mock interview simulator featuring low-latency conversational audio, decoupled asynchronous evaluation pipelines, multi-model fallback cascades, and structured performance analytics.',
    image: '/project/interviewmate-hero.png',
    link: 'https://interviewmate-xi.vercel.app/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="im-react" /> },
      { name: 'Node.js', icon: <NodeJs key="im-nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="im-mongodb" /> },
      { name: 'Mongoose', icon: <Mongoose key="im-mongoose" /> },
      { name: 'Socket.IO', icon: <SocketIo key="im-socketio" /> },
      { name: 'Express.js', icon: <ExpressJs key="im-express" /> },
      { name: 'JavaScript', icon: <JavaScript key="im-javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="im-tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="im-shadcn" /> },
      { name: 'Docker', icon: <Docker key="im-docker" /> },
      { name: 'Vercel', icon: <Vercel key="im-vercel" /> },
      { name: 'Render', icon: <Render key="im-render" /> },
    ],
    github: 'https://github.com/sultanxdev/interviewmate',
    live: 'https://interviewmate-xi.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/interviewmate',
    isWorking: true,
  },
];
