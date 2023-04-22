import type { GetStaticProps, NextPage } from "next";
import NextHead from "next/head";

import { CONFIG } from "@/config";
import { skills } from "@/lib/skills";
import { Page, Avatar, BadgeList, ResumeSpring } from "@/components";

interface Props {
  resumeURL: string;
  pillarURL: string;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      resumeURL: CONFIG.RESUME,
      pillarURL: CONFIG.PILLAR,
    },
  };
};

const About: NextPage<Props> = ({ resumeURL, pillarURL }) => {
  return (
    <Page>
      <NextHead>
        <title>Robert Adams | About</title>
      </NextHead>

      <Page.Heading>About</Page.Heading>

      <Page.Body>
        {/* left column */}
        <div className="md:w-1/3 flex flex-col items-center">
          <Avatar />
          <h2 className="text-xl font-bold lg:text-3xl">Robert Adams</h2>
          <p className="text-gray-600">Software Engineer</p>
          <ResumeSpring resumeURL={resumeURL} />
        </div>

        {/* right column */}
        <div className="md:w-2/3 space-y-5">
          <p>
            Following a successful start to an avionics career specializing in the repair and
            modification of in-flight entertainment electronics, the shifting nature of the industry
            led me to realize that I needed to make a change in order to find a more challenging,
            dynamic, and fulfilling opportunity.
          </p>
          <p>
            Immersing myself in programming has really solidified my appreciation for what I find
            rewarding: learning new things, problem solving, and building something tangible.
          </p>
          <p>
            Recently I had an exciting opportunity with
            <a target="_blank" href={pillarURL} className="text-[#2F5DFB] mx-1">
              Pillar
            </a>
            as a full-stack software engineer. I contributed across the technology stack to
            implement an event-driven microservice architecture for improved resiliency with
            TypeScript, React, GraphQL, Node, Apache Kafka, MongoDB, Postgres, and Debezium.
          </p>

          <div className="space-y-2 lg:w-[75%]">
            <BadgeList title="Languages & Frameworks" badges={skills.languages_frameworks} />
            <BadgeList title="Databases" badges={skills.databases} />
            <BadgeList title="Infrastructure" badges={skills.infrastructure} />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default About;
