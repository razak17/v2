import Link from "next/link";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectItem } from "@/types";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card
      key={project.name}
      className="flex flex-col justify-between transition-shadow hover:shadow-lg"
    >
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="bottom-0 flex flex-col gap-4">
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
      </CardContent>
    </Card>
  );
}
