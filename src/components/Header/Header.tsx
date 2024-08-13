import {ThemeSwitcher} from '../ThemeSwitcher';

export const Header = () => (
  <header className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center">
      <div className="text-lg font-bold">Mumair</div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <ThemeSwitcher />
    </nav>
  </header>
);

