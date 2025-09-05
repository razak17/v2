"use client";

import GlareHover from "@/components/glare-hover";
import { siteConfig } from "@/config/site";

export function SkillsSection() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-secondary-foreground text-sm">
      {siteConfig.skills.map((skill) => (
        <GlareHover
          key={skill}
          width="auto"
          height="auto"
          background="hsl(var(--background))"
          borderColor="hsl(var(--muted-foreground))"
          glareColor="#ffffff"
          glareOpacity={0.15}
          glareAngle={-30}
          glareSize={200}
          transitionDuration={600}
          playOnce={false}
          className="rounded-sm transition-all hover:border-muted-foreground hover:shadow-black/10 dark:hover:shadow-white/10"
        >
          <span className="block p-4 text-foreground">{skill}</span>
        </GlareHover>
      ))}
    </div>
  );
}
