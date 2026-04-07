import { Mail, Code2, Database, LayoutTemplate, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chamara Pathum",
    role: "Full Stack Developer",
    bio: "I build responsive, modern, and engaging web applications with a focus on performance and seamless user experiences. With over 2 years of experience, I bridge the gap between stunning interfaces and robust backend architectures.",
    email: "chamara@example.com",
    location: "Sri Lanka",
    socials: [
      { id: "github", label: "GitHub", url: "https://github.com", icon: GithubIcon },
      { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
      { id: "twitter", label: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
    ],
  },
  stats: [
    { id: "exp", value: "2+", label: "Years Experience" },
    { id: "projects", value: "20+", label: "Projects Delivered" },
    { id: "clients", value: "10+", label: "Happy Clients" },
  ],
  skills: [
    {
      category: "Frontend",
      icon: LayoutTemplate,
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Server,
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS Basics", level: 60 },
        { name: "Vercel", level: 85 },
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Platform",
      description: "A full-scale e-commerce solution with Next.js App Router, Stripe integration, and an admin dashboard.",
      image: "/project-placeholder.png",
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-2",
      title: "Task Management App",
      description: "A drag-and-drop kanban board application for team productivity.",
      image: "/project-placeholder.png",
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-3",
      title: "3D Product Landing Page",
      description: "Premium cinematic landing page featuring scroll-driven 3D animations.",
      image: "/project-placeholder.png",
      tags: ["React", "Three.js", "Framer Motion", "GSAP"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-4",
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with direct messaging, group rooms, and presence indicators.",
      image: "/project-placeholder.png",
      tags: ["React", "Socket.io", "Node.js", "Tailwind"],
      category: "Backend",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      company: "Tech Agency",
      period: "2023 - Present",
      description: "Developed and maintained 10+ client websites, implemented robust backend APIs, and migrated legacy systems to modern React stacks.",
    },
    {
      id: "exp-2",
      role: "Frontend Web Developer",
      company: "Freelance",
      period: "2022 - 2023",
      description: "Designed and built highly interactive landing pages and dashboards for early-stage startups using React and Tailwind CSS.",
    },
  ],
};
