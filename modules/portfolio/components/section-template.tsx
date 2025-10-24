import { cn } from "@/shared/lib/utils";
import React from "react";

type Props = {
  id: string;
  className?: string;
  title?: React.ReactNode | string;
  children: React.ReactNode;
};

export const SectionTemplate = ({ id, className, title, children }: Props) => {
  return (
    <section
      id={id}
      className={cn("w-full py-6 px-8 border-b border-dashed", className)}
    >
      {title && (
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
