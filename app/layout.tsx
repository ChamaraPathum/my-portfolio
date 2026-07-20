import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chamara Pathum | Full Stack Developer",
  description:
    "Professional portfolio of Chamara Pathum — Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Available for freelance & full-time opportunities.",
  keywords: [
    "Chamara Pathum",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Sri Lanka Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#020817] text-[#f1f5f9] overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
