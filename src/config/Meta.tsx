import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: `${heroConfig.name} | Full Stack Engineer`,
  description: `${heroConfig.name} is a Full Stack Engineer specializing in TypeScript, React, Next.js, Node.js, and PostgreSQL. Building scalable, production-ready web applications with clean architecture and strong UI quality.`,
  url: 'https://www.sultanx.dev',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@sultanxdev',
    github: 'sultanxdev',
    linkedin: 'sultanalam436',
    email: 'sultanalamdev@gmail.com',
  },
  keywords: [
    'Sultan Alam',
    'sultanxdev',
    'Full Stack Engineer',
    'Full Stack Developer',
    'React developer',
    'Next.js developer',
    'TypeScript developer',
    'Node.js developer',
    'web development',
    'portfolio',
    'software engineer India',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `${heroConfig.name} — Full Stack Engineer | React, Next.js, Node.js`,
    description: `${about.description} Building fast, scalable web apps with TypeScript, React, Next.js, Node.js & PostgreSQL. Explore my projects and experience.`,
    keywords: [
      'Sultan Alam',
      'sultanxdev',
      'Full Stack Engineer',
      'Full Stack Developer India',
      'React developer',
      'Next.js developer',
      'TypeScript',
      'Node.js',
      'portfolio',
      'software engineer',
      'web developer India',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: `Contact Sultan Alam — Hire a Full Stack Engineer`,
    description:
      "Get in touch with Sultan Alam for freelance projects, collaborations, or full-time opportunities. Full Stack Engineer specializing in React, Next.js & Node.js.",
    keywords: [
      'Sultan Alam contact',
      'hire full stack developer',
      'hire React developer',
      'hire Next.js developer',
      'freelance developer India',
      'collaboration',
      'web development services',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: `Sultan Alam — Work Experience & Professional Journey`,
    description:
      'Explore Sultan Alam\'s professional work experience as a Full Stack Engineer. Internships, roles, and contributions across React, Node.js, and cloud platforms.',
    keywords: [
      'Sultan Alam work experience',
      'Full Stack Engineer experience',
      'React developer experience',
      'software engineer career',
      'web developer internship India',
      'Devplex AI',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: `Sultan Alam — Projects Portfolio | Full Stack Web Apps`,
    description:
      'Browse Sultan Alam\'s portfolio of full-stack projects — including Sendry (API observability), InterviewMate (AI interviews), Waani (voice AI), and Zyvan (webhook infrastructure).',
    keywords: [
      'Sultan Alam projects',
      'full stack projects portfolio',
      'React Next.js projects',
      'Node.js projects',
      'Sendry',
      'InterviewMate',
      'Waani',
      'Zyvan',
      'web app projects India',
      'software engineer portfolio',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: `Sultan Alam — Blog | Engineering & Web Development Tutorials`,
    description:
      'Technical blog by Sultan Alam covering full-stack engineering, JavaScript, TypeScript, React, Next.js, Node.js, system design, and backend architecture.',
    keywords: [
      'Sultan Alam blog',
      'full stack engineering blog',
      'JavaScript tutorials',
      'TypeScript tutorials',
      'Next.js tutorials',
      'Node.js tutorials',
      'system design',
      'web development articles',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: `Sultan Alam — Resume & CV | Full Stack Engineer`,
    description: `View and download Sultan Alam's professional resume. Full Stack Engineer with expertise in TypeScript, React, Next.js, Node.js, PostgreSQL, and cloud deployment.`,
    keywords: [
      'Sultan Alam resume',
      'Sultan Alam CV',
      'Full Stack Engineer resume',
      'React developer resume',
      'Next.js developer CV',
      'software engineer resume India',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: `Sultan Alam — Gear & Developer Setup`,
    description:
      'The tools, devices, peripherals, and software Sultan Alam uses daily for full-stack development. My complete developer workspace and gear setup.',
    keywords: [
      'Sultan Alam setup',
      'developer gear',
      'programming tools',
      'developer workspace',
      'coding setup',
      'software developer tools',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: `Sultan Alam — VS Code Setup & Development Environment`,
    description:
      'My complete VS Code configuration, extensions, fonts, and development environment setup for full-stack TypeScript and React development.',
    keywords: [
      'VS Code setup',
      'developer environment',
      'VS Code extensions',
      'coding fonts',
      'TypeScript development setup',
      'React developer config',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },

  // Journey page
  '/journey': {
    title: `Sultan Alam — My Journey in Tech`,
    description:
      'A chronological timeline of Sultan Alam\'s path in software engineering — learning milestones, projects shipped, certifications earned, and career growth.',
    keywords: [
      'Sultan Alam journey',
      'software engineer learning path',
      'developer career timeline',
      'full stack developer growth',
      'tech milestones',
      'certifications',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);
  const ogImageUrl = new URL(
    pageMeta.ogImage || siteConfig.ogImage,
    siteConfig.url
  ).toString();
  const pageUrl = new URL(pathname, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: pageUrl,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      site: siteConfig.author.twitter,
      creator: siteConfig.author.twitter,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
