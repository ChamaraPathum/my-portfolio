import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chamara Pathum | Full Stack Developer",
  description: "Modern portfolio of Chamara Pathum, Full Stack Developer specializing in React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-background-dark text-[#ededed] overflow-x-hidden selection:bg-brand-violet/30 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
