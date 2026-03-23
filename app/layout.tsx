import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andbandu | Creative Portfolio",
  description: "Senior Full Stack Developer & Digital Artisan creating modern web experiences with a focus on performance and aesthetics.",
  keywords: ["portfolio", "full stack developer", "nextjs", "react", "web design"],
  authors: [{ name: "Andbandu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
