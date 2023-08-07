import { Badge } from '@/components/Badge';

interface Props {
  projectName: string;
  repoURL: string;
  appURL: string;
}

export const ProjectLinks: React.FC<Props> = ({ repoURL, appURL }) => {
  return (
    <div className='flex mr-2 mt-2 space-x-2 lg:space-x-0 lg:self-end lg:mt-0'>
      <a target='_blank' href={repoURL}>
        <Badge text='View repo' skill='github' size={28} />
      </a>

      {appURL && (
        <a target='_blank' href={appURL}>
          <Badge text='Open app' skill='link' size={28} />
        </a>
      )}
    </div>
  );
};
