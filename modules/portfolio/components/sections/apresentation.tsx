"use client";
import React from "react";
import { SectionTemplate } from "../section-template";
import {
  DotIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  NotebookIcon,
  PaperclipIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from "@/shared/data/links.data";

export const Apresentation = () => {
  const renderMyAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = 2003;
    return currentYear - birthYear;
  };

  const handleDownloadResume = () => {
    window.open("/PedroDias_Frontend_ENUS.pdf", "_blank");
  };

  return (
    <SectionTemplate id="apresentation">
      <div className="flex  gap-2 justify-between items-center max-sm:flex-col">
        <div className="flex flex-col max-sm:items-center">
          <Image
            src="/me.png"
            alt="Pedro Dias"
            width={100}
            height={100}
            className="rounded-full w-24 h-24 object-cover mb-4"
          />
          <h1 className="text-3xl font-semibold">Pedro Dias</h1>
          <div className="flex items-center text-xs font-medium text-muted-foreground">
            {renderMyAge()} <DotIcon /> engineer <DotIcon /> developer{" "}
            <DotIcon /> builder
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(GITHUB_LINK, "_blank")}
          >
            <GithubIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.open(LINKEDIN_LINK, "_blank")}
          >
            <LinkedinIcon />
          </Button>
          <Button
            variant="ghost"
            onClick={() => window.open(EMAIL_LINK, "_blank")}
          >
            <MailIcon />
          </Button>
          <Button variant="ghost" onClick={handleDownloadResume}>
            <PaperclipIcon />
          </Button>
        </div>
      </div>
    </SectionTemplate>
  );
};
