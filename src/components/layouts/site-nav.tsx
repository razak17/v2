"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import type { NavItem } from "@/types";

interface SiteNavProps {
  items?: NavItem[];
}

export function SiteNav({ items }: SiteNavProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    const normalize = (str: string) =>
      str === "/" ? "/" : str.replace(/\/$/, "");
    const normalizedPathname = normalize(pathname || "/");
    const normalizedItemUrl = normalize(href);

    const isHome = href === "/" || href === "";
    const isActive =
      (isHome && (normalizedPathname === "/" || normalizedPathname === "")) ||
      normalizedPathname === normalizedItemUrl;
    return isActive;
  }

  return (
    <header className="w-full bg-background">
      <div className="container items-center justify-center">
        <nav className="flex items-center justify-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {items?.map((item) => {
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-auto",
                        isActive(item.href) &&
                          "bg-accent text-accent-foreground",
                      )}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
