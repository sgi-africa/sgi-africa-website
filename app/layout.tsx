import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sgi.africa";
const siteName = "Software Group Innovation";
const siteDescription =
  "Software Group Innovation (SGI) builds technology solutions for impact-driven organizations - financial inclusion, health innovation, cybersecurity and digital transformation that empower communities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Technology Solutions for Impact-Driven Organizations`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Software Group Innovation",
    "SGI",
    "technology for impact",
    "VICOBA",
    "financial inclusion",
    "health innovation",
    "cybersecurity",
    "Tanzania",
    "Dar es Salaam",
    "Africa",
    "community transformation",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} - Technology Solutions for Impact-Driven Organizations`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Technology Solutions for Impact-Driven Organizations`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
