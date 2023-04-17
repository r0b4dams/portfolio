import { Icon } from "@/components";

interface Props {
  repoURL: string;
  appURL: string;
  flag: boolean;
}

export const ProjectLinks: React.FC<Props> = ({ repoURL, appURL, flag }) => {
  return (
    <div className="flex mt-3 mr-5 space-x-3 lg:mt-0 lg:self-end">
      <a target="_blank" href={repoURL} className="flex space-x-1 p-1 border rounded">
        <Icon icon="github" />
        <span>view repo</span>
      </a>

      {flag && (
        <a target="_blank" href={appURL} className="flex space-x-1 p-1 border rounded">
          <Icon icon="link" />
          <span>open app</span>
        </a>
      )}
    </div>
  );
};
