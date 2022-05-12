export type Project = {
  id: string;
  name: string;
  desc: string;
  appURL: string;
  repoURL: string;
  imgsrc: string;
  features: string[];
  tech: string[];
  role?: string[];
  challenges: string[];
  successes: string[];
};

export type ProjectData = Project[];
