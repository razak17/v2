"use client";

import { cn } from "@/lib/utils";

import { MainNav } from "./main-nav";
import { SiteSocials } from "./site-socials";
import { siteConfig } from "@/config/site";

export function SiteNav({ className }: { className?: string }) {
  return (
    <header className={cn("w-full bg-background", className)}>
      <MainNav items={siteConfig.mainNav} />
      <SiteSocials />
    </header>
  );
}
