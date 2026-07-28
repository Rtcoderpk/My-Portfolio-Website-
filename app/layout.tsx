import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = 'https://ranatanzeel.dev';

export const viewport: Viewport = {
  themeColor: '#08070f',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Rana Tanzeel | AI Engineer — AI Agents, Automation & Generative AI',
    template: '%s | Rana Tanzeel — AI Engineer',
  },
  description:
    'Premium AI Engineer portfolio by Muhammad Tanzeel Ur Rehman. Building AI Agents, AI Assistants, Chatbots, RAG Systems, and Business Automation Solutions.',
  keywords: [
    'AI Engineer', 'AI Agents', 'Chatbots', 'RAG', 'Generative AI',
    'Business Automation', 'NCAI', 'LangChain', 'LLM', 'Muhammad Tanzeel Ur Rehman',
  ],
  authors: [{ name: 'Muhammad Tanzeel Ur Rehman', url: baseUrl }],
  creator: 'Muhammad Tanzeel Ur Rehman',
  publisher: 'Rana Tanzeel',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: baseUrl },
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  openGraph: {
    title: 'Rana Tanzeel | AI Engineer',
    description: 'Building AI Agents, AI Assistants & Intelligent Automations for Real Businesses.',
    url: baseUrl,
    siteName: 'Rana Tanzeel Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rana Tanzeel | AI Engineer',
    description: 'Building AI Agents, AI Assistants & Intelligent Automations for Real Businesses.',
    creator: '@Rtcoderpk',
  },
  category: 'technology',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Muhammad Tanzeel Ur Rehman',
      givenName: 'Muhammad Tanzeel',
      familyName: 'Ur Rehman',
      alternateName: 'Rana Tanzeel',
      url: baseUrl,
      sameAs: [
        'https://github.com/Rtcoderpk',
        'https://www.linkedin.com/in/rana-tanzeel/',
        'https://twitter.com/Rtcoderpk',
      ],
      jobTitle: 'AI Engineer',
      email: 'rtanzeel319@gmail.com',
      telephone: '+923038503740',
      knowsAbout: ['AI Agents', 'Generative AI', 'RAG Systems', 'LLMs', 'Automation', 'Machine Learning'],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Rana Tanzeel | AI Engineer',
      description: 'Premium AI Engineer portfolio. Building AI Agents, AI Assistants, Chatbots, RAG Systems, and Business Automation Solutions.',
      publisher: { '@id': `${baseUrl}/#person` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="verification_token" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-white antialiased font-sans">
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_10%,transparent_70%)] opacity-60" />
          <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] bg-primary/20 rounded-full filter blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-tertiary/15 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-[100px]" />
        </div>
        {children}
      </body>
    </html>
  );
}