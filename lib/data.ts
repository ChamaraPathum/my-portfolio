import { Code2, Database, LayoutTemplate, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Chamara Pathum",
    role: "Full Stack Developer",
    bio: "Focused and highly motivated Software Engineer with 3+ years of industrial experience in Full Stack software development. Capable of learning and adapting to new technologies quickly. A passionate builder who bridges stunning visual design with robust backend architecture.",
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
    { id: "exp", value: "3+", label: "Years Experience" },
    { id: "projects", value: "10+", label: "Projects Completed" },
    { id: "clients", value: "15+", label: "Clients Served" },
    { id: "features", value: "150+", label: "Features Implemented" },
  ],
  skills: [
    {
      category: "Frontend",
      icon: LayoutTemplate,
      items: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
        { name: "React Native", level: 80 },
      ],
    },
    {
      category: "Backend",
      icon: Database,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "MS SQL Server", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: Server,
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "REST APIs", level: 90 },
        { name: "GitLab", level: 80 },
        { name: "Azure", level: 65 },
        { name: "Vercel", level: 70 },
        { name: "Mongoose & Sequelize", level: 85 },
      ],
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Hotel Management System",
      description:
        "Comprehensive Hotel Management System with a client portal for Cinnamon LakeHouse. Includes booking management, guest services, RESTful APIs, MS SQL database architecture, role-based auth, and Azure CI/CD deployment.",
      image: "/proj-hotel.png",
      tags: ["React", "Next.js", "Node.js", "Express", "MS SQL", "Azure"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-2",
      title: "Mondo Migranti Website",
      description:
        "Corporate website for Mondo Migranti showcasing immigration and travel-related services. Built with Next.js and Tailwind CSS with full responsive design, optimized performance, and production deployment.",
      image: "/proj-mondo.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Azure"],
      category: "Frontend",
      liveUrl: "https://mondomigranti.org",
      githubUrl: "#",
    },
    {
      id: "proj-3",
      title: "IGRS — Foreign Employment Platform",
      description:
        "Full-stack web platform to support foreign job seekers managing employment-related services. Features job tracking, document management, employer listings, and MongoDB database integration. Hosted via GitLab.",
      image: "/proj-igrs.png",
      tags: ["React", "Node.js", "MongoDB", "REST APIs", "GitLab"],
      category: "Full Stack",
      liveUrl: "https://www.igrs.lk",
      githubUrl: "#",
    },
    {
      id: "proj-4",
      title: "JobPool — Recruitment Platform",
      description:
        "Centralized digital recruitment platform connecting job seekers with recruitment companies. Built with Next.js and TypeScript, featuring modern frontend architecture, reusable components, and optimized performance.",
      image: "/proj-jobpool.png",
      tags: ["Next.js", "TypeScript", "React"],
      category: "Full Stack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "proj-5",
      title: "Adiya — Restaurant Ordering App",
      description:
        "Cross-platform mobile application connecting restaurants with customers via a seamless digital ordering experience. Built with React Native for Android & iOS, backed by Node.js REST APIs and MySQL database.",
      image: "/proj-adiya.png",
      tags: ["React Native", "Node.js", "MySQL", "JavaScript"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Software Developer",
      company: "Revolution Tech Software Solutions",
      period: "Jan 2025 – Present",
      description:
        "Developed and maintained scalable web applications using React.js, Next.js, Node.js, and MS SQL Server. Responsibilities include REST API development, database design, and delivering production-ready features for enterprise clients.",
    },
    {
      id: "exp-2",
      role: "Software Engineer — Intern",
      company: "Enterprise Business Intelligence (PVT) Ltd",
      period: "Aug 2023 – Oct 2024",
      description:
        "Developed and maintained web applications using the MERN stack and Next.js. Collaborated across projects including the IGRS foreign employment platform and the Mondo Migranti corporate website.",
    },
    {
      id: "exp-3",
      role: "React Native Developer — Intern",
      company: "HotCat Technologies",
      period: "Jan 2023 – Jul 2023",
      description:
        "Developed and maintained cross-platform mobile applications for Android and iOS using React Native. Improved application performance, stability, and user experience across multiple production releases.",
    },
  ],
};
