"use client";
import { PROFESSIONAL_EXPERIENCES_DATA } from "@/shared/data/professional-experiences.data";
import { BriefcaseBusinessIcon } from "lucide-react";
import { SectionTemplate } from "../section-template";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const ProfessionalExperience = () => {
  return (
    <SectionTemplate
      id="professional-experience"
      title="Professional Experience"
    >
      <div className="flex flex-col gap-4">
        {PROFESSIONAL_EXPERIENCES_DATA.map((experience) => (
          <div
            key={experience.id}
            className="flex items-center gap-4 group hover:cursor-pointer max-sm:flex-col max-sm:text-center"
            onClick={() => window.open(experience.companyUrl, "_blank")}
          >
            {experience.companyLogo && (
              <Image
                src={experience.companyLogo}
                alt={experience.company}
                width={48}
                height={48}
                className="object-cover size-12 rounded-full"
              />
            )}

            {!experience.companyLogo && (
              <div className="p-3 rounded-full bg-muted-foreground/5 w-fit ">
                <BriefcaseBusinessIcon />
              </div>
            )}

            <div className="flex items-center justify-between w-full max-sm:flex-col">
              <div>
                <h3 className="text-lg font-semibold group-hover:underline">
                  {experience.company}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {experience.position}
                </p>
              </div>

              <div className="flex flex-col gap-2  items-end max-sm:items-center">
                <div className="text-sm text-muted-foreground ">
                  {experience.startDate} - {experience.endDate}
                </div>
                <Badge>{experience.type}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
};
