import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vikaskumardev.netlify.app'),
  title: {
    default: 'Vikaskumar Dane | AWS Certified Cloud & DevOps Engineer',
    template: '%s | Vikaskumar Dane'
  },
  description: 'Portfolio of Vikaskumar Dane, AWS-certified Cloud & DevOps Engineer specializing in Serverless architectures, Terraform, CI/CD, Kubernetes, and Full-Stack Development.',
  keywords: ['Vikaskumar Dane', 'DevOps Engineer', 'Cloud Engineer', 'AWS', 'Terraform', 'CI/CD', 'Software Engineer', 'Pune'],
  authors: [{ name: 'Vikaskumar Dane' }],
  creator: 'Vikaskumar Dane',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vikaskumardev.netlify.app',
    title: 'Vikaskumar Dane | AWS Certified Cloud & DevOps Engineer',
    description: 'AWS-certified Cloud & DevOps Engineer specializing in Serverless architectures, Terraform, CI/CD, and Full-Stack Development.',
    siteName: 'Vikaskumar Dane Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikaskumar Dane | AWS Certified Cloud & DevOps Engineer',
    description: 'AWS-certified Cloud & DevOps Engineer specializing in Serverless architectures, Terraform, CI/CD, and Full-Stack Development.',
    creator: '@vikasdane06',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans antialiased selection:bg-emerald-500/30">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
