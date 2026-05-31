import type { Metadata, Viewport } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://vividmindgames.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VividMindGames — Immersive Game Experiences",
  description:
    "We design immersive game experiences that make virtual worlds feel fun and meaningful. An indie game studio behind Run Punch and Battle For Crown.",
  keywords: [
    "VividMindGames",
    "indie game studio",
    "Run Punch",
    "Battle For Crown",
    "game development",
  ],
  authors: [{ name: "VividMindGames" }],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "VividMindGames",
    title: "VividMindGames — Immersive Game Experiences",
    description:
      "We design immersive game experiences that make virtual worlds feel fun and meaningful.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VividMindGames",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VividMindGames — Immersive Game Experiences",
    description:
      "We design immersive game experiences that make virtual worlds feel fun and meaningful.",
    site: "@vividmindgames",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
