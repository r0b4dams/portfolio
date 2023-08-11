'use client';

import { useEffect, useRef } from 'react';

export const ThemeToggle: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    ref.current = document.documentElement;
    return () => {
      ref.current = null;
    };
  }, []);

  const toggleTheme = () => {
    if (!ref.current) {
      return;
    }
    const active = ref.current.getAttribute('data-theme') === 'dark';
    const update = active ? 'light' : 'dark';
    ref.current.setAttribute('data-theme', update);
    localStorage.setItem('theme', update);
  };

  return <button onClick={toggleTheme}>toggle</button>;
};
