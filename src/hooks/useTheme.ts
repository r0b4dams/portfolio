import { useEffect, useRef, useState } from 'react';

const THEMES = ['dark', 'light'] as const;
type Theme = (typeof THEMES)[number];

export const useTheme = (def?: Theme) => {
  const ref = useRef<HTMLElement>();
  const [theme, set] = useState<Theme | null>(def ? def : null);

  useEffect(() => {
    ref.current = document.documentElement;
    const __theme = ref.current.getAttribute('data-theme') as Theme;
    set(__theme ? __theme : 'light');
  }, []);

  const setTheme = (t: Theme) => {
    if (THEMES.includes(t)) {
      set(t);
    }
  };

  const toggleTheme = () => {
    if (!ref.current) {
      return;
    }
    const update = ref.current.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    ref.current.setAttribute('data-theme', update);
    localStorage.setItem('theme', update);
    set(update);
  };

  return { theme, toggleTheme, setTheme };
};
