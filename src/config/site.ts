import { Icons } from "@/components/icons";

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
  ],
  socialLinks: [
    {
      name: "Email",
      href: "mailto:razakmoapps@gmail.com",
      icon: Icons.email,
    },
    {
      name: "GitHub",
      href: "https://github.com/razak17",
      icon: Icons.gitHub,
    },
  ],
};
