import type { Metadata } from "next";

import { SkillsSection } from "./_components/skills-section";
import { SiteNav } from "@/components/layouts/site-nav";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Skills",
  description: "A list of my technical skills and proficiencies.",
};

export default function SkillsPage() {
  return (
    <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
      <h1 className="bg-gradient-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl md:text-7xl dark:text-transparent">
        Skills
      </h1>
      <SkillsSection />
      <Separator />
      <SiteNav className="pt-4" />
    </section>
  );
}
