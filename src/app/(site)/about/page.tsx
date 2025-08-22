import type { Metadata } from "next";

import { SiteNav } from "@/components/layouts/site-nav";
import { Shell } from "@/components/shell";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me.",
};

export default function AboutPage() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-xl flex-col gap-4">
        <h1 className="text-center font-medium">About</h1>
        <p className="text-center text-secondary-foreground text-sm">
          Full Stack Software Developer with {new Date().getFullYear() - 2021}+
          years of experience designing, building, and optimizing scalable,
          cloud-enabled web applications. Proven success delivering secure,
          high‑performance RESTful and GraphQL services, modern frontends, and
          CI/CD automation across Agile teams. Skilled in JavaScript/TypeScript,
          React, Node.js, Python (FastAPI), SQL and NoSQL databases. Transform
          ambiguous product requirements into reliable, maintainable solutions.
        </p>
        <Separator />
        <SiteNav className="pt-4" />
      </section>
    </Shell>
  );
}
