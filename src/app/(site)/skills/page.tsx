import type { Metadata } from "next";

import { SiteNav } from "@/components/layouts/site-nav";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Skills",
  description: "A list of my technical skills and proficiencies.",
};

export default function SkillsPage() {
  return (
    <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
      <h1 className="bg-gradient-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl text-transparent md:text-7xl">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 text-secondary-foreground text-sm">
        {siteConfig.skills.map((skill) => (
          <span
            className="rounded-sm border border-accent p-4 hover:border-muted-foreground"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <Separator />
      <SiteNav className="pt-4" />
    </section>
  );
}
