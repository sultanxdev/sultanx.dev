import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <ReactIcon key="react" />,
  <Bun key="bun" />,
  <JavaScript key="javascript" />,
  <TypeScript key="typescript" />,
  <MongoDB key="mongodb" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
];

export const aboutSkills = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextJs /> },
  { name: 'TypeScript', icon: <TypeScript /> },
  { name: 'JavaScript', icon: <JavaScript /> },
  { name: 'Node.js', icon: <NodeJs /> },
  { name: 'PostgreSQL', icon: <PostgreSQL /> },
  { name: 'MongoDB', icon: <MongoDB /> },
  { name: 'Prisma', icon: <Prisma /> },
];

export const about = {
  name: 'Sultan Alam',
  role: 'Co-Founder & Full-Stack Engineer',
  status: 'Building Parsona',
  websiteLabel: 'parsona.live',
  websiteHref: 'https://parsona.live',
  description:
    "I'm a Full-Stack & AI Engineer focused on taking 0→1 products from architecture to production. Currently co-building Parsona that unifies multi-channel customer conversations, shared context, and AI workflows with reliable backend systems and clean UI.",
};
