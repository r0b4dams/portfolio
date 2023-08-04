import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import { IProject } from "@/types";
import { getAllProjectIds, getOneProject } from "@/lib/projects";
import {
  BadgeList as ProjectTech,
  Page,
  ProjectFeatures,
  ProjectGif,
  ProjectLinks,
} from "@/components";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) {
    throw new Error("no id");
  }
  const project = getOneProject(params.id as string);
  return {
    props: {
      project,
    },
  };
};

interface Props {
  project: IProject;
}

const SingleProject: NextPage<Props> = ({ project }) => {
  const title = `Robert Adams | ${project.name}`;

  return (
    <Page>
      <Head>
        <title>{title}</title>
      </Head>

      <Page.Heading>{project.name}</Page.Heading>

      <p className="font-thin text-xl">{project.desc}</p>

      <NextLink href="/projects" className="w-fit text-blue-400">
        ← back to projects
      </NextLink>

      <Page.Body>
        <div className="flex flex-col lg:flex-wrap lg:flex-row-reverse md:w-full">
          <div className="self-center pt-5 lg:pt-0 lg:self-auto lg:w-1/2">
            <ProjectGif id={project.id} name={project.name} />
          </div>

          <div className="flex flex-col self-center md:w-[640px] lg:w-1/2 lg:self-auto">
            <ProjectLinks
              projectName={project.name}
              repoURL={project.repoURL}
              appURL={project.appURL}
            />
            <ProjectFeatures features={project.features} />
            <div className="mt-3">
              <ProjectTech title="Technologies" skills={project.tech} />
            </div>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default SingleProject;
