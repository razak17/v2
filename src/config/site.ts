import type { Icons } from "@/components/icons";
import type { NavItem, ProjectItem, SocialItem } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Razak Mo.",
  description: "Personal website of razak, built with Next.js.",
  url: "https://v2.razakmo.tech",
  ogImage: "https://v2.razakmo.tech/opengraph-image.png",
  links: {
    x: "https://twitter.com/theRazakMo",
    github: "https://github.com/razak17/v2",
    githubProfile: "https://github.com/razak17",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ] satisfies NavItem[],
  socialLinks: [
    {
      name: "Email",
      href: "mailto:razakmoapps@gmail.com",
      icon: "email" as keyof typeof Icons,
    },
    {
      name: "GitHub",
      href: "https://github.com/razak17",
      icon: "gitHub" as keyof typeof Icons,
    },
  ] satisfies SocialItem[],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "Nest.js",
    "Postgresql",
    "MongDB",
    "Docker",
    "Python",
    "FastAPI",
  ],
  projects: [
    {
      name: "G-Client",
      description:
        "A comprehensive learning management system (LMS) built as part of Azubi Africa's TMP program (Cohort 2).",
      repo: "https://github.com/razak17/next-lms-platform",
      link: "https://lms.razakmo.tech",
      techStack: ["NextJS", "Tailwind", "Postgres"],
    },
    {
      name: "Docs",
      description: "A Google Docs clone built with Next.js 15 and React 19.",
      repo: "https://github.com/razak17/fullstack-docs-clone",
      link: "https://fullstack-docs-clone.vercel.app/",
      techStack: ["NextJS", "Tailwind", "Convex"],
    },
    {
      name: "Algo Visualizer",
      description:
        "Visualize sorting algorithms like bubble sort, merge sort, quick sort, and more. See how they work step by step.",
      repo: "https://github.com/razak17/algo-visualizer",
      link: "https://algo-visualizer-razakmo.vercel.app",
      techStack: ["React", "Tailwind", "Algorithms"],
    },
  ] satisfies ProjectItem[],
};
