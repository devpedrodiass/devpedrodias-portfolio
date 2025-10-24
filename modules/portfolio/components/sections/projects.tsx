"use client";

import React from "react";
import { SectionTemplate } from "../section-template";
import { PROJECTS_DATA } from "@/shared/data/projects.data";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  return (
    <SectionTemplate id="projects" title="Published Projects">
      <p className="text-muted-foreground">
        Here are some of the projects I've worked on
      </p>

      <div className="flex flex-col gap-4 mt-4">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="flex  pb-4 border-b border-border gap-4 justify-between cursor-pointer group"
            onClick={() => window.open(project.url, "_blank")}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold group-hover:underline flex items-center gap-2">
                {project.name}

                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">
                {project.description}
              </p>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => window.open(project.url, "_blank")}
            >
              <ExternalLinkIcon />
            </Button>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
