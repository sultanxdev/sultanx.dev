import { siteConfig } from '@/config/Meta';

/**
 * Person JSON-LD structured data for Sultan Alam.
 * Placed in root layout so Google sees it on every page.
 * Enables rich results for searches like "Sultan Alam developer".
 */
export default function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/assets/logo.jpg`,
    jobTitle: 'Full Stack Engineer',
    description: siteConfig.description,
    email: siteConfig.author.email,
    sameAs: [
      `https://github.com/${siteConfig.author.github}`,
      `https://www.linkedin.com/in/${siteConfig.author.linkedin}/`,
      `https://x.com/${siteConfig.author.twitter.replace('@', '')}`,
    ],
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'Full Stack Development',
      'Web Development',
      'System Design',
    ],
    nationality: {
      '@type': 'Country',
      name: 'India',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
