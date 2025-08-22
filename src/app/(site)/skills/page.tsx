import { SiteNav } from "@/components/layouts/site-nav";
import { Shell } from "@/components/shell";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export default function SkillsPage() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
        <h1 className="text-center font-medium">Skills</h1>
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
    </Shell>
  );
}
