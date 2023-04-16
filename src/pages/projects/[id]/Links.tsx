import { Icon } from "@/components";

interface Props {
  repoURL: string;
  appURL: string;
  flag: boolean;
}

export const Links: React.FC<Props> = ({ repoURL, appURL, flag }) => {
  return (
    <div className="flex mt-3 space-x-3">
      <a target="_blank" href={repoURL} className="flex space-x-1 p-1 border rounded">
        <Icon icon="github" />
        <span>repo</span>
      </a>

      {flag && (
        <a target="_blank" href={appURL} className="flex space-x-1 p-1 border rounded">
          <Icon icon="link" />
          <span>app</span>
        </a>
      )}
    </div>
  );
};
