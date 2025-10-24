type Project = {
  id: string;
  name: string;
  description: string;
  url: string;
  year: number;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "2",
    name: "Quanthra AI",
    description: "Quanthra AI is a platform for AI training and development",
    year: 2025,
    url: "https://ai.quanthra.com",
  },
  {
    id: "1",
    name: "DL Academy",
    description: "DL Academy is a platform for learning and teaching",
    year: 2024,
    url: "https://www.lmsacademy.com.br",
  },
  {
    id: "5",
    name: "Liberty Task",
    description: "Liberty Task is a task management app for Freelancers",
    year: 2023,
    url: "https://www.linkedin.com/in/devpedrodias/",
  },
  {
    id: "3",
    name: "Instituto Sentinela",
    description:
      "Instituto Sentinela is a Institutional App for the Instituto Sentinela",
    year: 2025,
    url: "https://institutosentinela.com.br",
  },
  {
    id: "4",
    name: "Editora Sonhar",
    description: "Editora Sonhar is a Institutional App for the Editora Sonhar",
    year: 2025,
    url: "https://editorasonhar.com.br",
  },
];
