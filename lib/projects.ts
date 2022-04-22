import { Project, ProjectData } from '../@types/projects';
import projectData from './projectData';

export const getAllProjectData = (): ProjectData => projectData;

export const getProjectIds = () =>
  projectData.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });

export const getProjectData = (id: string): Project =>
  projectData.find((project) => id === project.id)!;
