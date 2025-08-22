import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import type { SocialItem } from "@/types";
import { Icons } from "../icons";

interface SiteSocialsProps {
  items?: SocialItem[];
}

export function SiteSocials({ items }: SiteSocialsProps) {
  return (
    <footer className="w-full bg-background">
      <div className="container items-center justify-center">
        <div className="flex items-center justify-center space-x-4 text-sm">
          {items?.map((item) => {
            const Icon = item.icon ? Icons[item.icon] : Icons.placeholder;

            return (
              <Button
                key={item.name}
                variant="ghost"
                size="icon"
                className="size-7"
                asChild
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                >
                  {item.icon ? <Icon /> : item.name}
                  <span className="sr-only">{item.name}</span>
                </Link>
              </Button>
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
