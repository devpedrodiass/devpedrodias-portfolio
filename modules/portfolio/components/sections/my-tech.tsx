import React from "react";
import { SectionTemplate } from "../section-template";
import { Marquee } from "@/components/ui/marquee";
import { JavaScriptIcon } from "@/shared/icons/javascript";
import { ReactIcon } from "@/shared/icons/react";
import { TypeScriptIcon } from "@/shared/icons/typescript";
import { NextIcon } from "@/shared/icons/next";
import { GitIcon } from "@/shared/icons/git";
import { JestIcon } from "@/shared/icons/jest";
import { DockerIcon } from "@/shared/icons/docker";
import { PostgreSQLIcon } from "@/shared/icons/postgresql";
import { NodeIcon } from "@/shared/icons/node";
import { StorybookIcon } from "@/shared/icons/storybook";
import { CSSIcon } from "@/shared/icons/css";
import { TailwindIcon } from "@/shared/icons/tailwind";
import { AxiosIcon } from "@/shared/icons/axios";

export const MyTech = () => {
  const techs = [
    {
      name: "JavaScript",
      icon: <JavaScriptIcon />,
    },
    {
      name: "TypeScript",
      icon: <TypeScriptIcon />,
    },
    {
      name: "React.js",
      icon: <ReactIcon />,
    },
    {
      name: "Next.js",
      icon: <NextIcon />,
    },
    {
      name: "Node.js",
      icon: <NodeIcon />,
    },
    {
      name: "CSS",
      icon: <CSSIcon />,
    },
    {
      name: "Tailwind CSS",
      icon: <TailwindIcon />,
    },
    {
      name: "Storybook",
      icon: <StorybookIcon />,
    },
    {
      name: "Axios",
      icon: <AxiosIcon />,
    },
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "Jest",
      icon: <JestIcon />,
    },
    {
      name: "Docker",
      icon: <DockerIcon />,
    },
    {
      name: "PostgreSQL",
      icon: <PostgreSQLIcon />,
    },
  ];

  return (
    <SectionTemplate id="my-tech" title="What I use in Tech">
      <p className="text-muted-foreground">
        Technologies I work with to build products that solve real problems
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <div className="size-6 grayscale-50">{tech.icon}</div>
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </SectionTemplate>
  );
};
