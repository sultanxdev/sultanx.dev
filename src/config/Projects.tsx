import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Docker from '@/components/technologies/Docker';
import { Project } from '@/types/project';


export const projects: Project[] = [
  // 🥇 1. InterviewMate — strongest signal
  {
    title: 'InterviewMate',
    description:
      'Real-time AI interview simulation platform using WebSockets, streaming speech-to-text, and adaptive questioning for human-like interview practice.',
    image: '/project/demo.png',
    link: 'YOUR_LIVE_LINK',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Socket.IO', icon: <SocketIo key="socketio" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
    details: true,
    projectDetailsPageSlug: '/projects/interviewmate',
    isWorking: true,
  },

  // 🥈 2. Eventify — backend credibility
  {
    title: 'Eventify',
    description:
      'Event-driven microservices order processing system implementing Saga orchestration, transactional outbox, retries, and DLQ for fault-tolerant workflows.',
    image: '/project/demo.png',
    link: 'YOUR_LIVE_LINK',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
      { name: 'Express', icon: <ExpressJs key="express" /> },
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
    details: true,
    projectDetailsPageSlug: '/projects/eventify',
    isWorking: true,
  },

  // 🥉 3. Zendev — ambitious AI tooling
  {
    title: 'Zendev',
    description:
      'AI-powered platform that converts natural language prompts into deployable full-stack applications with live preview and GitHub integration.',
    image: '/project/demo.png',
    link: 'YOUR_LIVE_LINK',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
    details: true,
    projectDetailsPageSlug: '/projects/zendev',
    isWorking: true,
  },

  // 4️⃣ Parsona — SaaS product signal
  {
    title: 'Parsona',
    description:
      'AI-powered personal branding SaaS that generates persona-aligned social posts, schedules content, and tracks engagement analytics.',
    image: '/project/demo.png',
    //video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'YOUR_LIVE_LINK',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Shadcn UI', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'YOUR_GITHUB_LINK',
    live: 'YOUR_LIVE_LINK',
    details: true,
    projectDetailsPageSlug: '/projects/parsona',
    isWorking: true,
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
