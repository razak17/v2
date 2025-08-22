import type { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { SiteNav } from "@/components/layouts/site-nav";
import { Shell } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Projects",
  description: siteConfig.description,
};

export default function ProjectsPage() {
  return (
    <Shell className="flex h-dvh flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-3xl flex-col gap-4">
        <h1 className="text-center font-medium">Projects</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <Card
              key={project.name}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex space-x-2">
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.externalLink className="mr-2 h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className={cn(project.link ? "flex-1" : "flex-grow")}
                    >
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.gitHubOutlined className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator />
        <SiteNav className="pt-4" />
      </section>
    </Shell>
  );
}
