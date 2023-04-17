import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import { CONFIG } from "@/config";
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
      ENABLE_DEPLOYED_LINK: CONFIG.FEATURE.ENABLE_DEPLOYED_LINK,
    },
  };
};

interface Props {
  project: IProject;
  ENABLE_DEPLOYED_LINK: boolean;
}

const SingleProject: NextPage<Props> = ({ project, ENABLE_DEPLOYED_LINK }) => {
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
              repoURL={project.repoURL}
              appURL={project.appURL}
              flag={ENABLE_DEPLOYED_LINK}
            />
            <ProjectFeatures features={project.features} />
            <div className="mt-3">
              <ProjectTech title="Technologies" badges={project.tech} />
            </div>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default SingleProject;
