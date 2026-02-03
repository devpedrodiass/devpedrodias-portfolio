"use client";

import React from "react";
import Link from "next/link";
import { SectionTemplate } from "../section-template";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Blog = () => {
  return (
    <SectionTemplate id="blog" title="Blog">
      <p className="text-muted-foreground mb-6">
        I write about web development, React, Next.js, and share my knowledge
        with the community
      </p>

      <div className="flex flex-col gap-4 ">
        <Link href="/blog" className="w-fit ml-auto">
          <Button className="gap-2" variant="outline">
            Read My Blog
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </SectionTemplate>
  );
};
