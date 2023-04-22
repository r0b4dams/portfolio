import { Icon } from "./Icon";
import { icons } from "@/lib/icons";

export const Badge: React.FC<{
  name: string;
  size?: number;
}> = ({ name = "", size = 24 }) => {
  const { name: logoName, svg } = icons[name];

  return (
    <div className="flex items-center w-fit h-[30px] border rounded  p-1 mr-1 mb-1 bg-white">
      <Icon src={svg} size={size} />
      <span className="pl-1 font-light text-sm">{logoName}</span>
    </div>
  );
};
