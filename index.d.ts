interface Project {
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
}

interface ContactLink {
  name: string;
  href: string;
}
