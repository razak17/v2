import type { NavItem, SocialItem } from "@/types";

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
      icon: "email",
    },
    {
      name: "GitHub",
      href: "https://github.com/razak17",
      icon: "gitHub",
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
      description: "Description for Project A",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-a",
    },
    {
      name: "Project B",
      description: "Description for Project B",
      repo: "https://github.com/razak17",
      link: "https://example.com/project-b",
    },
  ],
};
