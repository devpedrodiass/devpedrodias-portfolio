"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { LINKEDIN_LINK } from "@/shared/data/links.data";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 bg-background/50 backdrop-blur-sm border-b border-border/40"
    >
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
          Dias.dev
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link 
            href="/" 
            className={`text-sm transition-colors ${
              pathname === "/" 
                ? "font-medium text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Portfolio
          </Link>
          <Link 
            href="/blog" 
            className={`text-sm transition-colors ${
              pathname?.startsWith("/blog")
                ? "font-medium text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Blog
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={() => window.open(LINKEDIN_LINK, "_blank")}>
          Let's talk
        </Button>

        <ModeToggle />
      </div>
    </header>
  );
};
