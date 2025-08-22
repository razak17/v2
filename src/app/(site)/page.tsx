import { SiteNav } from "@/components/layouts/site-nav";
import { Shell } from "@/components/shell";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
        <h1 className="text-center font-medium">Razak Mo.</h1>
        <Separator />
        <SiteNav />
      </section>
    </Shell>
  );
}
