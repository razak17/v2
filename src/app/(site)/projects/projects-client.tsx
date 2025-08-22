"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { ProjectCard } from "./project-card";
import { SiteNav } from "@/components/layouts/site-nav";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

const PROJECTS_PER_PAGE = 3;

export function ProjectsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = siteConfig.projects.length;
  const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = siteConfig.projects.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <Shell className="flex flex-col items-center justify-center font-mono">
      <section className="prose prose-zinc dark:prose-invert flex max-w-3xl flex-col gap-4">
        <h1 className="text-center font-medium">Projects</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ),
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="text-center text-muted-foreground text-sm">
          Showing {startIndex + 1}-{Math.min(endIndex, totalProjects)} of{" "}
          {totalProjects} projects
        </div>

        <Separator />
        <SiteNav className="pt-4" />
      </section>
    </Shell>
  );
}
