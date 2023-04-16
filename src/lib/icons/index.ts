import data from "./icons.json";

interface Icon {
  name: string;
  url?: string;
  paths: string[];
  fills: string[];
}

type Icons = {
  [key: string]: Icon;
} & typeof data;

export const icons = data as Icons;
