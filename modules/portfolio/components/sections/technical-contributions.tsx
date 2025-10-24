import React from "react";
import { SectionTemplate } from "../section-template";

export const TechnicalContributions = () => {
  return (
    <SectionTemplate
      id="technical-contributions"
      title="Technical Contributions"
    >
      <p className="text-muted-foreground">
        Technical contributions to my current work at RD Saúde
      </p>

      <div className="mt-4">
        <p className="leading-relaxed text-sm">
          <strong>At RD Saúde</strong>, I collaborated closely with product and
          business teams to provide technical insights that drive strategic
          decisions. As a frontend architect, I lead technical refinements while
          managing GitLab workflows with structured Merge Requests and thorough
          code reviews. I develop rich, responsive interfaces following Clean
          Code principles, maintaining 90%+ test coverage and prioritizing
          performance. I investigate and resolve production issues swiftly,
          always focusing on user experience and system stability. Additionally,
          I create comprehensive technical documentation covering features,
          architecture, and standards to foster team alignment and ensure
          scalability.
        </p>
      </div>
    </SectionTemplate>
  );
};
