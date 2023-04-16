import { Title } from "./Title";
import { Subtitle } from "./Subtitle";
import { ButtonLink } from "./ButtonLink";

export const Salutation: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Title />
      <Subtitle />
      <ButtonLink href="/about" />
    </div>
  );
};
