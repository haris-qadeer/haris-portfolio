import type { Metadata } from "next";
import { Outfit, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { personalInfo } from "@/data/personal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteDescription =
  "Portfolio of Haris Qadeer Khan, Senior Software Engineer specializing in scalable frontend experiences, reusable component architecture, and modern web applications.";

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} · ${personalInfo.title}`,
    template: `%s · ${personalInfo.name}`,
  },
  description: siteDescription,
  keywords: [
    "Haris Qadeer Khan",
    "Senior Software Engineer",
    "Frontend Engineer",
    "React",
    "Vue",
    "TypeScript",
    "Micro Frontends",
    "Karachi",
  ],
  authors: [{ name: personalInfo.name, url: "https://www.linkedin.com/in/haris-khan-9458a3288" }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: siteDescription,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} · ${personalInfo.title}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-[#07090d]"
        >
          Skip to content
        </a>
        <Navbar />
        <div className="flex min-h-full flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
