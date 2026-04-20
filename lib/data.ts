import { Mail, Code2, Database, LayoutTemplate, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chamara Pathum",
    role: "Full Stack Developer",
    bio: "Focused and highly motivated Software Engineer with 3+ years of industrial experience in Full stack software development. I'm capable of learning and adapting to new technologies quickly. Also a good team player.",
    email: "chamarapathum24@gmail.com",
    location: "Sri Lanka",
    socials: [
      {
        id: "github",
        label: "GitHub",
        url: "https://github.com/ChamaraPathum",
        icon: GithubIcon,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/chamarapathum/",
        icon: LinkedinIcon,
      },
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
      description:
        "A full-scale e-commerce solution with Next.js App Router, Stripe integration, and an admin dashboard.",
      image: "/project-placeholder.png",
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Prisma"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-2",
      title: "Task Management App",
      description:
        "A drag-and-drop kanban board application for team productivity.",
      image: "/project-placeholder.png",
      tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-3",
      title: "3D Product Landing Page",
      description:
        "Premium cinematic landing page featuring scroll-driven 3D animations.",
      image: "/project-placeholder.png",
      tags: ["React", "Three.js", "Framer Motion", "GSAP"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-4",
      title: "Real-time Chat App",
      description:
        "WebSocket-based chat application with direct messaging, group rooms, and presence indicators.",
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
      role: "Full Stack Software Developer",
      company: "Revolution Tech Software Solutions",
      period: "Jan 2025 - Present",
      description:
        "Developed and maintained scalable web applications using React.js, Next.js, Node.js, and MS SQL Server, including REST API development and database design.",
    },
    {
      id: "exp-2",
      role: "Software Engineer - Intern",
      company: " Enterprise Business Intelligence (PVT) Ltd ",
      period: "Aug 2023 - Oct 2024",
      description:
        "Developed and maintained web applications using the MERN stack and Next.js.",
    },
    {
      id: "exp-3",
      role: "React Native Developer - Intern",
      company: " HotCat Technologies",
      period: "Jan2023- Jul 2023",
      description:
        "Developed and maintained cross-platform mobile applications for Android and iOS using React Native, improving performance, stability, and user experience.",
    },
  ],
};
