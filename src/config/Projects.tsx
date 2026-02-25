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

export const projects: Project[] = [
  // 🥇 1. InterviewMate — strongest signal
  {
    title: 'Interviewmate',
    description:
      'Real-time AI interview simulation platform using WebSockets, streaming speech-to-text, and adaptive questioning for human-like interview practice.',
    image: '/project/demo.png',
    link: 'https://github.com/sultanxdev/interviewmate',
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
    live: 'https://interviewmate.sultanx.dev',
    details: true,
    projectDetailsPageSlug: '/projects/interviewmate',
    isWorking: false,
  },
   {
    title: 'Parsona',
    description:
      'AI-powered personal branding SaaS that generates persona-aligned social posts, schedules content, and tracks engagement analytics.',
    image: '/project/demo.png',
    //video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://parsona.sultanx.dev',  
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="express" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Mongoose', icon: <Mongoose key="mongoose" /> },  
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="shadcn" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Render', icon: <Render key="render" /> },

    ],
    github: 'https://github.com/sultanxdev/parsona',
    live: 'https://parsona.sultanx.dev',
    details: true,
    projectDetailsPageSlug: '/projects/parsona',
    isWorking: false,
  },

  // 🥈 2. Eventify — backend credibility
  {
    title: 'Eventify',
    description:
      'Event-driven microservices order processing system implementing Saga orchestration, transactional outbox, retries, and DLQ for fault-tolerant workflows.',
    image: '/project/demo.png',
    link: 'https://github.com/sultanxdev/Eventify',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },

      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
      { name: 'Kafka', icon: <Kafka key="kafka" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },

      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },

    ],
    github: 'https://github.com/sultanxdev/Eventify',
    live: 'https://github.com/sultanxdev/Eventify',
    details: true,
    projectDetailsPageSlug: '/projects/eventify',
    isWorking: false,
  },

  // 🥇 1. Zyven — distributed systems backbone
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
    live: 'https://www.zyvan.in',
    details: true,
    projectDetailsPageSlug: '/projects/zyvan',
    isWorking: false,
  },


 

  /* 
{
    title: 'NotesBuddy',
    description:
      'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    image: '/project/notesbuddy.png',
    //video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://notesbuddy.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  }*/
];
