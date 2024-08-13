import { Monitor, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const renderThemeIcon = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case 'light':
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case 'dark':
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Monitor className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  // Return null if not mounted (avoids SSR issues)
  if (!mounted) return null;

  return (
    <div className="relative text-sm md:text-[18px] leading-4 md:leading-[28px] py-1 md:py-3 px-2 md:px-6 font-normal md:font-semibold rounded">
      <button
        type="button"
        className="inline-flex justify-center items-center rounded-md border border-black shadow-sm px-4 py-2 bg-primary-100 dark:bg-primary-300 text-primary-300 dark:text-secondary-100 text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-100 dark:focus:ring-secondary-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {renderThemeIcon(theme)}
        {/* <span className="ml-2">Theme</span> */}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-36 bg-white dark:bg-gray-800 border border-black dark:border-black rounded-md shadow-lg z-10">
          <div
            className={`cursor-pointer flex items-center px-4 py-2 text-sm ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={() => handleThemeChange('system')}
          >
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
          </div>
          <div
            className={`cursor-pointer flex items-center px-4 py-2 text-sm ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={() => handleThemeChange('light')}
          >
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </div>
          <div
            className={`cursor-pointer flex items-center px-4 py-2 text-sm ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            onClick={() => handleThemeChange('dark')}
          >
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </div>
        </div>
      )}
    </div>
  );
};
