import type { GetStaticProps, NextPage } from "next";
import NextHead from "next/head";

import { CONFIG } from "@/config";
import { Page, Avatar, BadgeList, ResumeSpring } from "@/components";
import { skills } from "@/lib/skills";

interface Props {
  resumeURL: string;
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      resumeURL: CONFIG.RESUME,
    },
  };
};

const About: NextPage<Props> = ({ resumeURL }) => {
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
            Following a successful start to a career specializing in the repair and modification of
            avionics equipment, the shifting nature of the industry led me to realize that I needed
            to make a change in order to find a more challenging, dynamic, and fulfilling
            opportunity.
          </p>

          <p>
            Immersing myself in programming has really solidified my appreciation for what I find
            rewarding: learning new things, problem solving, and helping build something tangible.
            I’m eager and excited to contribute my skills to a collaborative environment and I look
            forward to learning more!
          </p>

          <div className="space-y-2">
            <BadgeList title="Languages" badges={skills.languages} />
            <BadgeList title="Front End" badges={skills.frontend} />
            <BadgeList title="Back End" badges={skills.backend} />
            <BadgeList title="Dev Ops" badges={skills.devops} />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default About;
