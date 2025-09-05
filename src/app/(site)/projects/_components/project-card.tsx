import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import SpotlightCard from "@/components/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProjectItem } from "@/types";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <SpotlightCard
      key={project.name}
      className="flex flex-col justify-between px-6 py-4 transition-shadow hover:shadow-lg"
    >
      <div>
        <h3 className="font-semibold text-xl">{project.name}</h3>
        <p className="mt-2 text-muted-foreground text-sm">
          {project.description}
        </p>
      </div>
      <div className="bottom-0 mt-4 flex flex-col gap-4">
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
            <Button variant="outline" size="sm" asChild className="flex-1">
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
      </div>
    </SpotlightCard>
  );
}
