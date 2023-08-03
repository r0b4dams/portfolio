import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Page } from "@/components";
import { IProject } from "@/types";
import { getAllProjects } from "@/lib/projects";
import { ProjectCard } from "../../components/ProjectCard";

interface Props {
  projects: IProject[];
}

export const getStaticProps: GetStaticProps = () => {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
};

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | Projects</title>
      </Head>

      <Page.Heading>Projects</Page.Heading>

      <Page.Body>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </Page.Body>
    </Page>
  );
};

export default Projects;
