import type { Icons } from "@/components/icons";

export type NavItem = {
  title: string;
  href: string;
};

export type SocialItem = {
  name: string;
  href: string;
  icon?: keyof typeof Icons;
};

export type ProjectItem = {
  name: string;
  description: string;
  link: string;
  repo?: string;
  techStack: string[];
};
