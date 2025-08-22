import { SiteNav } from "@/components/layouts/site-nav";
import { SiteSocials } from "@/components/layouts/site-socials";
import { Shell } from "@/components/shell";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-md flex-col gap-4">
        <h1 className="text-center font-medium">Razak Mo.</h1>
        <SiteNav items={siteConfig.mainNav} />
        <SiteSocials items={siteConfig.socialLinks} />
      </section>
    </Shell>
  );
}
