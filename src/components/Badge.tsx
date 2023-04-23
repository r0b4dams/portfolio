import { icons } from "@/lib/icons";
import { Icon } from "./Icon";

const DM_SKIP = ["bash", "kubernetes"];

const dm = (skill: string) => {
  return DM_SKIP.includes(skill)
    ? "dark:grayscale"
    : "dark:grayscale dark:brightness-0 dark:invert";
};

export const Badge: React.FC<{
  skill: string;
  size?: number;
}> = ({ skill = "", size = 24 }) => {
  const { name, path } = icons[skill];

  return (
    <div className="flex items-center w-fit bg-white bg-opacity-10 rounded p-1 mr-1 mb-1 border dark:border-slate-600">
      <Icon src={path} size={size} className={dm(skill)} />
      <span className="px-2 font-light text-md">{name}</span>
    </div>
  );
};
