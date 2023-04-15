import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Page } from "@/components";
import { IProject } from "@/types";
import { getAllProjects } from "./fetchers";
import Project from "./Project";

interface Props {
  projects: IProject[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = getAllProjects();
  return { props: { projects } };
};

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Page>
      <Head>
        <title>Robert Adams | Projects</title>
      </Head>

      <Page.Heading>Projects</Page.Heading>

      <Page.Body>
        <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
          {projects.map((proj) => (
            <Project key={proj.id} project={proj} />
          ))}
        </div>
      </Page.Body>
    </Page>
  );
};

export default Projects;
