import projects from "./projects.json";
import { IProject } from "@/types";

export const getAllProjects = (): IProject[] => {
  return projects;
};

export const getAllProjectIds = () => {
  return projects.map((project) => ({ params: { id: project.id } }));
};

export const getOneProject = (id: string) => {
  return projects.find((project) => id === project.id);
};
