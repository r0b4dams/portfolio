import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [mode, set] = useLocalStorage("dark_mode", false);

  const toggle = () => {
    const html = document.querySelector("html");
    if (html) {
      set((mode) => html.classList.toggle("dark", !mode));
    }
  };

  return [mode, toggle];
};
