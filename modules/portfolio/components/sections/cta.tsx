"use client";

import React from "react";
import { SectionTemplate } from "../section-template";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import { LINKEDIN_LINK } from "@/shared/data/links.data";

export const CTA = () => {
  return (
    <SectionTemplate
      id="cta"
      className="flex flex-col items-center justify-center gap-8"
    >
      <p className="text-center text-lg font-medium text-muted-foreground">
        If you've read this far, you might be interested in what I do.
      </p>

      <Button onClick={() => window.open(LINKEDIN_LINK, "_blank")}>
        Contact me
        <Image
          src="/me.png"
          alt="Pedro Dias"
          width={25}
          height={25}
          className="rounded-full size-5 object-cover"
        />
      </Button>
    </SectionTemplate>
  );
};
