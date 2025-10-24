"use client";
import React from "react";
import { SectionTemplate } from "../section-template";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export const Github = () => {
  const { theme } = useTheme();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SectionTemplate id="github" title="Github Contributions - @devpedrodiass">
      <GitHubCalendar
        username="devpedrodiass"
        colorScheme={theme as "light" | "dark"}
      />
    </SectionTemplate>
  );
};
