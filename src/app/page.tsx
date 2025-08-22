import Link from "next/link";

import { ModeToggle } from "@/components/layouts/mode-toggle";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-2 text-center">
        <h1 className="font-medium">Razak Mo.</h1>
        <div className="flex items-center justify-center space-x-4 text-sm">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              className="underline-offset-4 hover:underline"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-1">
          {siteConfig.socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              className="size-7"
              asChild
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <social.icon className="size-4" />
              </Link>
            </Button>
          ))}
          <ModeToggle />
        </div>
      </section>
    </Shell>
  );
}
