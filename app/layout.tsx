import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { Dots } from "./components/dots";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nicholas March - Senior UI Engineer",
    template: "%s | Nicholas March",
  },
  description:
    "Senior UI Engineer specialized in React, Angular, and Node.js development. Building scalable web applications with focus on developer experience and AI integration.",
  openGraph: {
    title: "Nicholas March",
    description:
      "Software engineer, Vim enthusiast, and advocate for developer experience.",
    url: baseUrl,
    siteName: "Nicholas March",
    locale: "en_US",
    type: "website",
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto flex flex-col relative min-h-screen">
        <Dots />
        <Navbar className="sticky top-0 z-20 bg-black/70" />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 z-10 bg-black/70">
          <div className="flex-grow">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
