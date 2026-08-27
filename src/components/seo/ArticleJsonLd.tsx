import { siteConfig } from '@/config/Meta';

interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  image: string;
  publishedDate: string;
  tags?: string[];
}

/**
 * Article JSON-LD structured data for blog posts.
 * Enables Google's rich result cards for articles (headline, image, date).
 */
export default function ArticleJsonLd({
  title,
  description,
  slug,
  image,
  publishedDate,
  tags = [],
}: ArticleJsonLdProps) {
  const articleUrl = `${siteConfig.url}/blog/${slug}`;
  const imageUrl = image.startsWith('http')
    ? image
    : `${siteConfig.url}${image}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    url: articleUrl,
    author: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    keywords: tags.join(', '),
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
