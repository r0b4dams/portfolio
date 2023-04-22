import { Icon } from "@/components";
import { icons } from "@/lib/icons";

interface Props {
  repoURL: string;
  appURL: string;
  flag: boolean;
}

export const ProjectLinks: React.FC<Props> = ({ repoURL, appURL }) => {
  return (
    <div className="flex items-center lg:flex-col mt-3 mr-5 space-x-2 lg:space-x-0 lg:space-y-2  lg:mt-0 lg:self-end">
      <a target="_blank" href={repoURL} className="flex items-center space-x-2 p-1 border rounded">
        <Icon src={icons.github.svg} size={24} />
        <span>View repo</span>
      </a>

      {appURL && (
        <a target="_blank" href={appURL} className="flex items-center space-x-2 p-1 border rounded">
          <Icon src={icons.link.svg} size={24} />
          <span>Open app</span>
        </a>
      )}
    </div>
  );
};
