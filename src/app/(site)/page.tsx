import { SiteNav } from "@/components/layouts/site-nav";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
      <h1 className="bg-gradient-to-b bg-opacity-50 from-neutral-50 to-neutral-400 bg-clip-text text-center font-bold text-4xl text-transparent md:text-7xl">
        Razak Mo.
      </h1>
      <p className="text-center font-medium">Full Stack Software Developer</p>
      <Separator />
      <SiteNav />
    </section>
  );
}
