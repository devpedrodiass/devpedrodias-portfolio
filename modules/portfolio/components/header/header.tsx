"use client";
import React from "react";
import { ModeToggle } from "../toggle-theme";
import { Button } from "@/components/ui/button";
import { LINKEDIN_LINK } from "@/shared/data/links.data";

export const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-background/50 backdrop-blur-sm"
    >
      <h1>Dias.dev</h1>

      <div className="flex items-center gap-2">
        <Button onClick={() => window.open(LINKEDIN_LINK, "_blank")}>
          Let's talk
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
};
