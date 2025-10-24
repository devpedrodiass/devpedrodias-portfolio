"use client";
import React from "react";
import { SectionTemplate } from "../section-template";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, NotebookIcon } from "lucide-react";
import { EMAIL_LINK, LINKEDIN_LINK } from "@/shared/data/links.data";
import { GITHUB_LINK } from "@/shared/data/links.data";

export const Contact = () => {
  const handleDownloadResume = () => {
    window.open("/PedroDias_Frontend_ENUS.pdf", "_blank");
  };

  return (
    <SectionTemplate id="contact" title="Let's connect">
      <p className="font-medium text-muted-foreground">
        Find me on these platforms
      </p>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-2 mt-4">
        <Button
          variant="ghost"
          onClick={() => window.open(GITHUB_LINK, "_blank")}
        >
          <GithubIcon />
          Github
        </Button>
        <Button
          variant="ghost"
          onClick={() => window.open(LINKEDIN_LINK, "_blank")}
        >
          <LinkedinIcon />
          Linkedin
        </Button>
        <Button
          variant="ghost"
          onClick={() => window.open(EMAIL_LINK, "_blank")}
        >
          <MailIcon />
          Email
        </Button>
        <Button variant="ghost" onClick={handleDownloadResume}>
          <NotebookIcon />
          Resume
        </Button>
      </div>

      <p className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pedro Dias. All rights reserved.
      </p>
    </SectionTemplate>
  );
};
