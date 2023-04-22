import { Icon } from "@/components";
import { logos } from "@/lib/logos";

interface Props {
  repoURL: string;
  appURL: string;
  flag: boolean;
}

export const ProjectLinks: React.FC<Props> = ({ repoURL, appURL, flag }) => {
  return (
    <div className="flex mt-3 mr-5 space-x-3 lg:mt-0 lg:self-end">
      <a target="_blank" href={repoURL} className="flex space-x-1 p-1 border rounded">
        <Icon src={logos.github.svg} size={24} />
        <span>View repo</span>
      </a>

      {appURL && (
        <a target="_blank" href={appURL} className="flex space-x-1 p-1 border rounded">
          <Icon src={logos.link.svg} size={24} />
          <span>Open app</span>
        </a>
      )}
    </div>
  );
};
