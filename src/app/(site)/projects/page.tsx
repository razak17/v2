import type { Metadata } from "next";

import { ProjectsItems } from "./_components/projects-items";
import { SiteNav } from "@/components/layouts/site-nav";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and works.",
};

export default function ProjectsPage() {
  return (
    <section className="prose prose-zinc dark:prose-invert flex max-w-3xl flex-col gap-4">
      <h1 className="bg-gradient-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl md:text-7xl dark:text-transparent">
        Projects
      </h1>

      <ProjectsItems />
      <Separator />
      <SiteNav className="pt-4" />
    </section>
  );
}
