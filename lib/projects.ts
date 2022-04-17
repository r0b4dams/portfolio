import { Project, ProjectData } from '../@types/projects';
import projectData from './projectData';

export const getAllProjectData = (): ProjectData => projectData;

// return an array of projectIds for dynamic route params
export const getProjectIds = () =>
  projectData.map((project) => {
    return {
      params: {
        id: project.id,
      },
    };
  });

// return data from an individual project
export const getProjectData = (id: string): Project =>
  projectData.find((project) => id === project.id)!;
