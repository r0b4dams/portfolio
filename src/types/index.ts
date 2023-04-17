export type IProject = {
  id: string;
  name: string;
  desc: string;
  appURL: string;
  repoURL: string;
  imgsrc: string;
  features: string[];
  tech: string[];
  role?: string[];
  discussion: string[];
};

export interface ContactLink {
  icon: string;
  href: string;
}
