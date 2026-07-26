import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Rana Tanzeel | AI Engineer - AI Agents, Automation & Generative AI',
  description:
    'Premium AI Engineer portfolio by Muhammad Tanzeel Ur Rehman. Building AI Agents, AI Assistants, Chatbots, RAG Systems, and Business Automation Solutions.',
  keywords: 'AI Engineer, AI Agents, Chatbots, RAG, Generative AI, Business Automation, NCAI',
  metadataBase: new URL('https://ranatanzeel.dev'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Rana Tanzeel | AI Engineer',
    description: 'Building AI Agents, AI Assistants & Intelligent Automations',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#08070f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
