'use client';

import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme) {
      setTheme(localStorage.theme);
      document.documentElement.classList.add(localStorage.theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

