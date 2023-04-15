import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { Page } from "@/components";
import { IProject } from "@/types";
import { getAllProjectIds, getOneProject } from "./fetchers";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) throw new Error("no id");
  const project = getOneProject(params.id as string);
  return {
    props: { project },
  };
};

interface Props {
  project: IProject;
}

const SingleProject: NextPage<Props> = ({ project }) => {
  console.log(project);

  return (
    <Page>
      <Head>
        <title>Robert Adams | {project.name}</title>
      </Head>
      <Page.Heading>{project.name}</Page.Heading>
      <Link href="/projects" className="font-medium text-gray-400">
        ← projects
      </Link>
    </Page>
  );
};

export default SingleProject;
