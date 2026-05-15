import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { JsonLd } from "@/components/site/json-ld";
import { SITE_URL } from "@/components/site/nav-config";

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

const siteName = "Software Group Innovation";
const siteDescription =
  "Software Group Innovation (SGI) is an African technology startup building digital systems that drive financial inclusion, community transformation and digital empowerment - for organisations, businesses and communities across Africa and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} — Technology Solutions for Impact-Driven Organizations`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Software Group Innovation",
    "SGI Africa",
    "SGI",
    "African technology startup",
    "digital innovation Africa",
    "fintech Africa",
    "financial inclusion",
    "health innovation",
    "cybersecurity Africa",
    "Tanzania tech startup",
    "Dar es Salaam",
    "digital transformation Africa",
    "community transformation",
    "startup ecosystem Africa",
    "software solutions Africa",
  ],
  authors: [{ name: siteName, url: SITE_URL }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en",
    url: SITE_URL,
    siteName,
    title: `${siteName} — Technology Solutions for Impact-Driven Organizations`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Technology Solutions for Impact-Driven Organizations`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <head>
        <meta name="theme-color" content="#0a2540" />
      </head>
      <body className="bg-background text-foreground min-h-full flex flex-col font-sans">
        <JsonLd />
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
