import { Header } from "./components/header/header";
import { About } from "./components/sections/about";
import { Apresentation } from "./components/sections/apresentation";
import { Contact } from "./components/sections/contact";
import { CTA } from "./components/sections/cta";
import { Github } from "./components/sections/github";
import { MyTech } from "./components/sections/my-tech";
import { ProfessionalExperience } from "./components/sections/professional-experience";
import { Projects } from "./components/sections/projects";
import { TechnicalContributions } from "./components/sections/technical-contributions";

export const PortfolioModulePage = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-dvh w-dvw max-w-dvw overflow-x-hidden"
    >
      <Header />

      <section
        id="content"
        className="mt-17 mx-auto max-w-xl w-full flex flex-col"
      >
        <Apresentation />
        <About />
        <ProfessionalExperience />
        <TechnicalContributions />
        <Projects />
        {/* <Github /> */}
        <MyTech />
        <CTA />
        <Contact />
      </section>
    </section>
  );
};
