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
      name: "Project A",
      description: "An Awesome Description for Project A",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-a",
      techStack: ["Next.js", "Node.js", "PostgreSQL"],
    },
    {
      name: "Project B",
      description: "An Awesome Description for Project B",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-b",
      techStack: ["React", "Express", "MongoDB"],
    },
    {
      name: "Project C",
      description: "An Awesome Description for Project C",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-c",
      techStack: ["React", "Express", "MongoDB"],
    },
    {
      name: "Project D",
      description: "An Awesome Description for Project D",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-d",
      techStack: ["React", "Express", "MongoDB"],
    },
  ] satisfies ProjectItem[],
};
