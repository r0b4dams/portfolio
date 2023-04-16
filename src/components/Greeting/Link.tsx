import NextLink from "next/link";

interface Props {
  href: string;
}

export const Link: React.FC<Props> = ({ href }) => {
  return (
    <div className="mt-10 self-center visible">
      <NextLink
        href={href}
        className="px-5 py-2 text-l md:text-xl rounded border-2 border-gray-100"
      >
        View Portfolio
      </NextLink>
    </div>
  );
};
