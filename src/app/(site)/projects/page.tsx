import type { Metadata } from "next";

import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my projects and works.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
