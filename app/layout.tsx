import type { Metadata } from "next";
import { Space_Grotesk, Newsreader, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — Subramanya Hegde`,
  },
  description: siteConfig.description,
  keywords: [
    "Subramanya Hegde",
    "Full-Stack Developer",
    "MERN Stack",
    "Python Developer",
    "React",
    "Node.js",
    "Portfolio",
    "VIT Vellore",
  ],
  authors: [{ name: "Subramanya Hegde", url: siteConfig.url }],
  creator: "Subramanya Hegde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  metadataBase: new URL(siteConfig.url),
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
      className={`${spaceGrotesk.variable} ${newsreader.variable} ${dmMono.variable} dark`}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
