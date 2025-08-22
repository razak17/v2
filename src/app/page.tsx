import Link from "next/link";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/layouts/mode-toggle";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center">
      <section className="prose prose-zinc dark:prose-invert flex flex-col gap-2 text-center">
        <p className="font-mono">Razak Mo.</p>
        <div className="flex items-center justify-center space-x-1">
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link
              href="mailto:razakmoapps@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons.email className="size-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="size-7" asChild>
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </section>
    </Shell>
  );
}
