import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Download, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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
};

const getGoogleDriveDetails = (url: string) => {
  if (url && url.includes('drive.google.com')) {
    const match =
      url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
      url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      const fileId = match[1];
      return {
        previewUrl: `https://drive.google.com/file/d/${fileId}/preview`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${fileId}`,
        viewUrl: url,
        isGoogleDrive: true,
      };
    }
  }
  return {
    previewUrl: url,
    downloadUrl: url,
    viewUrl: url,
    isGoogleDrive: false,
  };
};

export default function ResumePage() {
  const { previewUrl, downloadUrl, viewUrl } =
    getGoogleDriveDetails(resumeConfig.url);

  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            View or download my resume.
          </p>
        </div>

        <Separator />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="default" className="gap-2">
            <a href={viewUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              Open in Google Drive
            </a>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="overflow-hidden rounded-xl border bg-card shadow-lg">
          <iframe
            src={previewUrl}
            className="h-[800px] w-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}


