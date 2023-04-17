import { useLocalStorage } from "./useLocalStorage";

export const useColorMode = () => {
  const [mode, set] = useLocalStorage("dark_mode", false);

  const toggle = () => {
    const html = document.querySelector("html");
    if (html) {
      set((prevMode) => html.classList.toggle("dark", !prevMode));
    }
  };

  return [mode, toggle];
};
