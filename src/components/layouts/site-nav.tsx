import Link from "next/link";

import type { NavItem } from "@/tyypes";

interface SiteNavProps {
  items?: NavItem[];
}

export function SiteNav({ items }: SiteNavProps) {
  return (
    <header className="w-full bg-background pt-2">
      <div className="container items-center justify-center">
        <nav className="flex items-center space-x-4 text-sm">
          {items?.map((item) => (
            <Link
              key={item.title}
              className="underline-offset-4 hover:underline"
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
