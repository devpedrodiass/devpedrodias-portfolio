type ProfessionalExperience = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Internship";
  companyUrl: string;
  companyLogo?: string;
};

export const PROFESSIONAL_EXPERIENCES_DATA: ProfessionalExperience[] = [
  {
    id: "1",
    company: "RD Saúde",
    position: "Frontend Developer",
    startDate: "Jan 2025",
    endDate: "Present",
    type: "Full-time",
    companyUrl: "https://www.rdsaude.com.br",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEDHD-82rSbgA/company-logo_200_200/company-logo_200_200/0/1720039549617/rdsaudeoficial_logo?e=1762992000&v=beta&t=mUlYbuUO7e9fNaPi1tusceEX9v1hxbQ8aNe0jifhQ2k",
  },
  {
    id: "1.5",
    company: "Quanthra AI",
    position: "Frontend Developer",
    startDate: "May 2025",
    endDate: "Present",
    type: "Part-time",
    companyUrl: "https://www.ai.quanthra.com",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQG1LXACCfiiDg/company-logo_100_100/B4DZnqDf6wGsAQ-/0/1760568410110/quanthra_ai_logo?e=1762992000&v=beta&t=UU1CmR9SSoYogmiFdc67cq_urMZ_UdMjEqSwv8u5_5s",
  },
  {
    id: "2",
    company: "Magik Tech",
    position: "Full Stack Developer",
    startDate: "Mar 2024",
    endDate: "May 2025",
    type: "Part-time",
    companyUrl: "https://www.linkedin.com/company/magik-tech/",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQHkg4bgH0DBdA/company-logo_100_100/company-logo_100_100/0/1733237416730/magik_tech_logo?e=1762992000&v=beta&t=VYF_SSMHkX99vX_zkytYJSDL4q0AhucAzpdgimAUvs4",
  },
  {
    id: "3",
    company: "Descomplicando Linguagens",
    position: "Full Stack Developer",
    startDate: "Jan 2023",
    endDate: "Jan 2025",
    type: "Part-time",
    companyUrl: "https://www.lmsacademy.com.br",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQF87LS8X34s3Q/company-logo_100_100/company-logo_100_100/0/1730130274439/descomplicando_linguagens_logo?e=1762992000&v=beta&t=L--lNOoPoG2LO6pLLotdS1EkgtXDUTOUOcCMfWgLp80",
  },
  {
    id: "4",
    company: "FARFETCH",
    position: "Frontend Developer",
    startDate: "Dec 2021",
    endDate: "Mar 2024",
    type: "Full-time",
    companyUrl: "https://www.farfetch.com",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEPp5t-vGvzXQ/company-logo_100_100/company-logo_100_100/0/1688468364477/farfetchcom_logo?e=1762992000&v=beta&t=dUQahvI22y6_fgX08tXXoiYxYhqEio-087kT12KvYz4",
  },
  {
    id: "5",
    company: "Pyxis Consult",
    position: "Frontend Developer JR.",
    startDate: "Aug 2021",
    endDate: "Dec 2021",
    type: "Full-time",
    companyUrl: "https://www.linkedin.com/company/pyxisconsult/",
  },
  {
    id: "6",
    company: "Pyxis Consult",
    position: "Full-stack Developer",
    startDate: "Jul 2020",
    endDate: "Aug 2021",
    type: "Internship",
    companyUrl: "https://www.linkedin.com/company/pyxisconsult/",
  },
];
