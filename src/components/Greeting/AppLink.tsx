import Link from 'next/link';

interface Props {
  href: string;
}

export const AppLink: React.FC<Props> = ({ href }) => {
  return (
    <div className='mt-10 self-center visible'>
      <Link
        href={href}
        className='px-5 py-2 text-l md:text-xl rounded border dark:border-slate-600 bg-slate-50 bg-opacity-10'
      >
        View Portfolio
      </Link>
    </div>
  );
};
