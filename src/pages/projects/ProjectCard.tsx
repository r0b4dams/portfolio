import Image from "next/image";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

import { IProject } from "@/types";

export const ProjectCard: React.FC<{
  project: IProject;
}> = ({ project }) => {
  const [style, animation] = useSpring(() => ({ opacity: 0, y: 25 }));

  const startAnimation = () => {
    setTimeout(() => {
      animation.start({ opacity: 1, y: 0 });
    }, Math.floor(Math.random() * 250));
  };

  return (
    <animated.div style={style} className="w-full lg:w-1/2 relative p-3">
      <Link href={`/projects/${project.id}`} className="flex justify-center border rounded">
        <Image
          src={`/images/${project.id}-mockup.png`}
          onLoadingComplete={startAnimation}
          alt={project.name}
          width={640}
          height={360}
          priority
        />
      </Link>

      <div className="project-wrapper xl:opacity-0 p-5 xl:absolute xl:left-3 xl:right-3 xl:top-3 xl:bottom-3 xl:mx-auto xl:flex xl:flex-col xl:justify-center xl:bg-stone-800 hover:xl:opacity-90 xl:rounded xl:transition xl:ease-in-out xl:duration-200">
        <h2 className="duration-300 xl:translate-y-5 mb-3 font-bold xl:text-xl xl:text-stone-100">
          {project.name}
        </h2>

        <p className="duration-700 xl:translate-y-5 lg:min-h-[48px] mb-3 xl:text-stone-100">
          {project.desc}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className="duration-1000 xl:translate-y-5 text-base font-medium leading-6 text-blue-400 w-fit"
        >
          Learn more →
        </Link>
      </div>
    </animated.div>
  );
};
